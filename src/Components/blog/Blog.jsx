import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleBookMarksBtn , handleReadingTime}) => {
    const [istrue, setIstrue]=useState(false);

const {cover_img, title, author_img, author,reading_time, post_date,hashtags}=blog
    
    return (
        <div className='border-2 border-gray-300 rounded-lg p-4 mb-5'>
            <img className=" w-full rounded-lg " src={cover_img} alt="" />
            <div className='flex my-4 justify-between'>
                <div className='flex items-center gap-2'>
                    <img className='w-10' src={author_img} alt="" />
                    <div><h5 className='font-bold'>{author}</h5>
                    <span><small>{post_date}</small></span>
                    </div>

                </div>
                <div className='flex items-center gap-2'>
                    <p >{reading_time} min read</p>
                    <button onClick={()=>{handleBookMarksBtn(blog);setIstrue(!istrue)}}>{istrue? <FaBookmark />:<FaRegBookmark />}</button>
                </div>
            </div>
            <h2 className='text-4xl w-3/4 font-bold'>{title}</h2>
            <p className=' text-sm text-gray-500 space-x-2 mt-3'>
                {
                    hashtags.map((hash ,idx)=><span key={idx}><a href="">{hash}</a></span>)

                }
            </p>

            <button onClick={()=>handleReadingTime(reading_time)} className=' underline mt-5 text-purple-600'>Mark as read</button>

        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object,
    handleBookMarksBtn:PropTypes.func,
    handleReadingTime:PropTypes.func
}
export default Blog;