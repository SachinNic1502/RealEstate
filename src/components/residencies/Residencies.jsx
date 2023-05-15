import React from 'react'
import './Residencies.css'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import 'swiper/css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/commen'
 const Residencies = () => {
  return (
    <section className="r-wraper">
        <div className="paddings innerWidth r-container">
            <div className="flexColStart r-head ">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>

        
        <Swiper {...sliderSettings}>
            <SliderButton/>
            {
                data.map((card,i)=>(
                    <SwiperSlide key={i}>
                        <div className="flexColStart r-card">
                             <img src={card.image} alt="" srcSet="" /> 
                             <span className="secondaryText r-price">
                                <span style={{color:"orange"}}>₹</span>
                                <span>{card.price}</span>
                             </span>
                             <span className='primaryText'>
                                {card.name}
                             </span>
                             <span className='secondaryText'>
                                {card.detail}
                             </span>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        </div>
    </section>
  )
}

export default Residencies;
const SliderButton=()=>{
    const swipper=useSwiper();
    return(
        <div className="flexCenter r-button">
            <button onClick={()=>swipper.slidePrev()}>&lt; </button>
            <button onClick={()=>swipper.slideNext()}>&gt;</button>
        </div>
    )
}