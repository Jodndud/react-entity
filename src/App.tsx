import './App.css'
import { useJPHolder } from './hooks/useJPHolder'

function App() {
  const { posts } = useJPHolder()
  return (
    <div>
      {posts.map((item, index) => {
        return(
          <div key={index}>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default App
