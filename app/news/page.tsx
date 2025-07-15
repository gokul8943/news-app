import Link from "next/link";

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

export default function NewsIndexPage() {
    return (
        <div>
            {/* <h1>All News Categories</h1> */}
            <ul>
                {slugs.map((slug) => (
                    <li key={slug}>
                        <Link href={`/news/${slug}`}>
                            {slug.charAt(0).toUpperCase() + slug.slice(1)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
} 