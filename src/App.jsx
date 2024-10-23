
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BooksMarks/bookmarks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  const [bookMarks, setBookMark]=useState([])
  const [readingTime, setReadingTime]=useState(0)
  const handleReadingTime=time=>{
    setReadingTime(readingTime+time)
  }

 const handleBookMarksBtn= blog =>{
  const findBlog = bookMarks.find(b=>b ===blog)
  if(findBlog){
  //  return alert('Already Bookmarked')
  const remainingBlog =bookMarks.filter(b=>b !==blog);
  setBookMark(remainingBlog) 
    
  }else{
    const newBookMark =[...bookMarks, blog]
    setBookMark(newBookMark)
  }
 

 }

  return (
    <>
    <Header></Header>
    <div className=' max-w-5xl mx-auto gap-4 md:flex justify-between'>
    <Blogs handleBookMarksBtn={handleBookMarksBtn} handleReadingTime={handleReadingTime}></Blogs>
    <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
    </div>
    </>
  )
}

export default App
