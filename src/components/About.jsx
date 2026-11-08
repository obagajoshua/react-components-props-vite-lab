export default function About ({image, about}) {
  return (
    <aside className="about">
      <img src={image} alt="blog logo"></img>
      <p>{about}</p>
    </aside>
  )
}