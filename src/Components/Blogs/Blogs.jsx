import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";


const Blogs = () => {
    const [blogs, setBlogs]=useState([]);

    useEffect(()=>{
        fetch('fake.json')
        .then(res=>res.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3 ">
            <h4>Blogs: {blogs.length}</h4>
            <div>
                {
                    blogs.map(b=><Blog key={b.id} blog={b}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;