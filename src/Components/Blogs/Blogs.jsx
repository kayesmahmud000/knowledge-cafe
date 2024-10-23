import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleBookMarksBtn, handleReadingTime}) => {
    const [blogs, setBlogs]=useState([]);

    useEffect(()=>{
        fetch('fake.json')
        .then(res=>res.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3 ">
            
            <div>
                {
                    blogs.map(b=><Blog key={b.id} handleBookMarksBtn={handleBookMarksBtn} handleReadingTime={handleReadingTime} blog={b}></Blog>)
                }
            </div>
        </div>
    );
};
Blogs.propTypes={
    handleBookMarksBtn:PropTypes.func,
    handleReadingTime:PropTypes.func
}

export default Blogs;