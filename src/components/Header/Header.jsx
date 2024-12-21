import avatar from '../../assets/img/avataaars.svg'
import star from '../../assets/star.svg'
const Header = () => {
  return (
    <div className='header text-center'>
      <div className="content text-center p-10">
        <img src={avatar} className='avatar' />
        <h1>Start Bootstrap</h1>
            <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <img className='custom-star  mx-3' src={star} alt="" />
                        <div className="divider-custom-line"></div>
                    </div>
        <p className='text-white fs-5 my-5 '>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  )
}

export default Header