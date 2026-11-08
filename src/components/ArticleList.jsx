import Article from "./Article";

export default function ArticleList ({ posts }) {
  return (
    <main className="article-list">
      {posts.map((posts) => (
        <Article
        key={posts.id}
        title={posts.title}
        date={posts.date}
        preview={posts.preview} 
         
        />
      ))}
    </main>
  )
}