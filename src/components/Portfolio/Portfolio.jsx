import React from 'react'
import cabin from '../../assets/img/cabin.png'
import cake from '../../assets/img/cake.png'
import circus from '../../assets/img/circus.png'
import game from '../../assets/img/game.png'
import safe from '../../assets/img/safe.png'
import submarine from '../../assets/img/submarine.png'
const portfolioImg = [cabin, cake, circus, game, safe, submarine]
const Portfolio = () => {
    return (
        <div className='portfolio container text-center my-5'>
            <h1 className='fw-bold text-uppercase my-5'>Portfolio</h1>
            <div className="row">
                {portfolioImg.map((image, index) =>
                    <div className="col-md-4 my-4" key={index}>
                        <img src={image} className="img-fluid" />
                    </div>
                )}
            </div>

        </div>
    )
}

export default Portfolio