import './App.css'
import PostItem from './components/PostItem';
import { useGetPosts } from './hooks/useGetPosts'

function App() {
  const { posts } = useGetPosts()

  return (
    <div>
      {posts.map(item => (
        <PostItem key={item.id} item={item} />
        )
      )}
    </div>
  )
}

export default App
