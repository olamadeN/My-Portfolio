import "./portfolio.css"
import img1 from '../../assets/default.jpg'
import img2 from '../../assets/default.jpg'
import img3 from '../../assets/default.jpg'
import img4 from '../../assets/default.jpg'
import img5 from '../../assets/default.jpg'


const Portfolio = () => {
    const portData = [
        {
            id:1,
            image: img1,
            title: 'Lexkel Portfolio (HTML,CSS, JS)',
            github: 'https://github.com/olamadeN/Lexkel-portfolio',
            demo: 'https://lexkel.herokuapp.com/'
        },
        {
            id: 2,
            image: img2,
            title: 'sinnot technologies',
            github: 'https://github.com',
            demo: 'https://dribbble.com/Alien_pixels'
        },
        {
            id:3,
            image: img3,
            title: 'Hallels Media (Django)',
            github: 'https://github.com/olamadeN/hallelsMedia',
            demo: 'https://hallelsmedia.herokuapp.com/'
        },
        {
            id:4,
            image: img4,
            title: 'Lexkel Portfolio(Django)',
            github: 'https://github.com/olamadeN/Lexkel_portfolio_django',
            demo: 'https://lexkel-portfolio.herokuapp.com/'
        },
        {
            id:5,
            image: img5,
            title: 'Hallels Media (React)',
            github: 'https://github.com',
            demo: 'https://dribbble.com/Alien_pixels'
        },
    ]

  

    return (    
        <section>
           <h5>My Recent work</h5>
           <h2>Portfolio</h2>

            <div className="container portfolioContainer">
                {
                    portData.map((data) => {
                        return(
                            <article key={data.id} className="portfolioItem">
                                <div className="portfolioItem-image">
                                    <img src={data.image} alt={data.title} />                       
                                </div>
                                <h3>{data.title}</h3>
                                <div className="portfolioItem-cta">
                                    <a href={data.github} target="_blank" rel="noreferrer" className="btn">Github</a>
                                    <a href={data.demo} target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
                                </div>      
                            </article>
                        )
                    })
                }
              
            </div>
        </section>
    );
}
 
export default Portfolio;