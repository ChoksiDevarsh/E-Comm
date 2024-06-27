import React from 'react';
import Slider from 'react-slick';
import NavBar from '../layout/NavBar/navBar';
import Footer from '../layout/Footer/footer';
import homeStripImg from '../images/homeStrip.webp';
import SecondImage from '../images/image.png';
import ThirdImage from '../images/thirdImg.jpg';
import FourthImage from '../images/fourthImg.png';
import fifthImage from '../images/fifthImg.png';
import sliderFirstImg from '../images/sliderFirst.webp';
import sliderSecondImg from '../images/sliderSecond.webp';
import sliderThirdImg from '../images/sliderThird.webp';
import sliderFourthImg from '../images/sliderFourth.webp';
import sliderFifthImg from '../images/sliderFifth.webp';
import sliderSixthImg from '../images/sliderSixth.webp';
import sliderSeventhImg from '../images/sliderSeventh.webp';
import sixthImg from '../images/sixthImage.webp';
import sbcfirst from '../images/shopByCategory1.webp';
import sbcSecond from '../images/shopByCategory2.webp';
import sbcThird from '../images/shopByCategory3.webp';
import sbcFourth from '../images/shopByCategory4.webp';
import sbcFifth from '../images/shopByCategory5.webp';
import sbcSixth from '../images/shopByCategory6.webp';
import sbcSeventh from '../images/shopByCategory7.webp';
import sbcEigth from '../images/shopByCategory8.webp';
import sbcwfirst from '../images/shopByCategory1w.webp';
import sbcwSecond from '../images/shopByCategory2w.webp';
import sbcwThird from '../images/shopByCategory3w.webp';
import sbcwFourth from '../images/shopByCategory4w.webp';
import sbcwFifth from '../images/shopByCategory5w.webp';
import sbcwSixth from '../images/shopByCategory6w.webp';
import sbcwSeventh from '../images/shopByCategory7w.webp';
import sbcwEigth from '../images/shopByCategory8w.webp';
import seventhImage from '../images/seventhImg.png';

const Home = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay:true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='flex flex-col'>
            <NavBar />
            <img src={homeStripImg} alt='homeStrip' className='w-full h-auto' />
            <img src={SecondImage} alt='secondImg' className='w-auto h-1/6 object-fill' />
            <img src={ThirdImage} alt='thirdImg' className='w-full h-auto' />
            <img src={FourthImage} alt='fourthImg' className='w-full h-auto' />
            <img src={fifthImage} alt='fifthImg' className='w-full h-auto' />
            <Slider {...settings}>
                <div>
                    <img src={sliderFirstImg} alt='firstImageForSlider'/>
                </div>
                <div>
                    <img src={sliderSecondImg} alt='secondImageForSlider'/>
                </div>
                <div>
                    <img src={sliderThirdImg} alt='thirdImageForSlider'/>
                </div>
                <div>
                    <img src = {sliderFourthImg} alt='fourthImageForSlider'/>
                </div>
                <div>
                    <img src = {sliderFifthImg} alt = 'fifthImageForSlider' />
                </div>
                <div>
                    <img src = {sliderSixthImg} alt = 'sixthImageForSlider' />
                </div>
                <div>
                    <img src = {sliderSeventhImg} alt = 'seventhImageForSlider' />
                </div>
            </Slider>
            <img src={sixthImg} alt='sixthImage'/>
            <div className='flex flex-row'>
                <img src = {sbcfirst} alt='shopbycategory1' />
                <img src = {sbcSecond} alt='shopbycategory2' />
                <img src = {sbcThird} alt='shopbycategory3' />
                <img src = {sbcFourth} alt='shopbycategory4' />
                <img src = {sbcFifth} alt='shopbycategory5' />
                <img src = {sbcSixth} alt='shopbycategory6' />
                <img src = {sbcSeventh} alt='shopbycategory7' />
                <img src = {sbcEigth} alt='shopbycategory8' />
                
            </div>
            <div className='flex flex-row'>
                <img src = {sbcwfirst} alt='shopbycategory1w' />
                <img src = {sbcwSecond} alt='shopbycategory2w' />
                <img src = {sbcwThird} alt='shopbycategory3w' />
                <img src = {sbcwFourth} alt='shopbycategory4w' />
                <img src = {sbcwFifth} alt='shopbycategory5w' />
                <img src = {sbcwSixth} alt='shopbycategory6w' />
                <img src = {sbcwSeventh} alt='shopbycategory7w' />
                <img src = {sbcwEigth} alt='shopbycategory8w' />
                
            </div>
            <img src={seventhImage} alt ='seventhImg'/>
            <Footer />
        </div>
    );
};

export default Home;
