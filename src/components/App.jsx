import About from './About'
import ArticleList from './ArticleList'
import Header from './Header'
import blog from "./blog";
import './App.css'

function App() {
  

  return (
    <div>
      <Header name={blog.name}/>

      <About 
          image={blog.image} 
          about={blog.about}/>
      <ArticleList posts={blog.posts}/>
    
    </div>
  )
}

export default App;
