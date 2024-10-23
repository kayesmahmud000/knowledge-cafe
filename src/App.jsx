
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BooksMarks/bookmarks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  

  return (
    <>
    <Header></Header>
    <div className=' w-11/12 mx-auto gap-4 flex justify-between'>
    <Blogs></Blogs>
    <BookMarks></BookMarks>
    </div>
    </>
  )
}

export default App
