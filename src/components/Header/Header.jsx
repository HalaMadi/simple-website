import avatar from '../../assets/img/avataaars.svg'
import star from '../../assets/star.svg'
const Header = () => {
  return (
    <div className='header text-center'>
      <div className="content text-center p-10">
        <img src={avatar} className='avatar' />
        <h1>Start Bootstrap</h1>
        <div className="lines">
        <img className='custom-star  my-1' src={star} alt="" />
        </div>
        <p className='text-white fs-5 my-5 '>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  )
}

export default Header