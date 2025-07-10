import { news } from "./types"

export const removeDuplicateData = (articles: any): news[] => {
  const randomArticle: news[] = Array.isArray(articles?.articles) ? articles.articles : []

  const filterArticles = randomArticle.filter(
    (article) => article?.source?.id !== null
  )

  return filterArticles
}
