export default function Article ({title, date, preview}) {
  return (
    <article className="blog-article">
      <h3>
        {title}
      </h3>
      <small>
        {date}
      </small>
      <p>
        {preview}
      </p>
    </article>
  )
}