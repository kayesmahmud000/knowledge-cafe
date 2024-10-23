import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between max-w-5xl mx-auto border-b-2 items-center p-2 mb-5'>
            <h1 className=' text-2xl font-bold'>Knowledge Cafe</h1>
            <img className='w-10' src={Profile} alt="" />
        </div>
    );
};

export default Header;