
import PropTypes from 'prop-types';

const BookMark =({bookMark})=> {
    const {title}=bookMark;
    return (
        <div className=' bg-white mb-2 rounded-lg p-2'>
            <h4>{title}</h4>
        </div>
    );
};

BookMark.propTypes = {
  bookMark:PropTypes.object  
};

export default BookMark;