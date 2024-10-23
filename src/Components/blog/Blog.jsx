import PropTypes from 'prop-types';
const Blog = ({blog}) => {
const {cover_img, title}=blog
    
    return (
        <div>
            <img className=" " src={cover_img} alt="" />
            <h4>{title}</h4>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object
}
export default Blog;