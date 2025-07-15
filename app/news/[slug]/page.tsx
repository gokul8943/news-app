import { notFound } from "next/navigation";
import { fetchByCategory } from '@/api';
import { removeDuplicateData } from '@/utils';
import Article from '@/components/Article';

const slugs = [
    "books",
    "bitcoin",
    "food",
    "health",
    "lifestyle",
    "sports",
    "science",
    "travel",
    "world",
    "business",
];

export async function generateStaticParams() {
    return slugs.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
    if (!slugs.includes(params.slug)) {
        notFound();
    }

  
    const response = await fetchByCategory(params.slug);    
    const articles = removeDuplicateData(response.data);
    

    return (
        <div className="w-full max-w-3xl mx-auto pt-4 px-4">
            <h1 className="text-2xl font-bold mb-4 text-blue-600 pt-2">{params.slug.charAt(0).toUpperCase() + params.slug.slice(1)}</h1>
            {articles.length === 0 ? (
                <p className="text-center text-gray-500">No articles found.</p>
            ) : (
                articles.map((article, idx) => (
                    <div key={`${article?.title}-${idx}`}>
                        <Article data={article} />
                    </div>
                ))
            )}
        </div>
    );
} 