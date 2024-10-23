import PropTypes from "prop-types";
import BookMark from "../../bookMark/BookMark";
const BookMarks = ({bookMarks,readingTime}) => {
    
    return (
        <div className="md:w-1/3 border-2 rounded-lg p-4 bg-gray-200">
            <div className=" bg-white text-sky-600 text-center font-bold rounded-md p-2 ">
                <p> Spent time on read: {readingTime} min</p>
            </div>
            <h3 className="text-center text-xl mt-4 font-bold">Bookmarked Blogs:{bookMarks.length}</h3>
            <div>
                {
                    bookMarks.map(b=><BookMark key={b.id} bookMark={b}></BookMark>)
                }
            </div>
        </div>
    );
};
BookMarks.propTypes={
    bookMarks:PropTypes.object,
    readingTime:PropTypes.number
}
export default BookMarks