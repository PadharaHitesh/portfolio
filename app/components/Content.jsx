"use client"
import React, { use } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation,Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Content = (props) => {
  return (
    
    <main id="main">
        <header id="header">
            <div className="container">
                <div className="setting">
                    <input type="checkbox" id="theme" />
                    <label htmlFor="theme">
                        <svg width="24" height="24" id="light" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M12 21.9966C6.47715 21.9966 2 17.5194 2 11.9966C2 6.47373 6.47715 1.99658 12 1.99658C17.5228 1.99658 22 6.47373 22 11.9966C22 17.5194 17.5228 21.9966 12 21.9966ZM12 19.9966C16.4183 19.9966 20 16.4149 20 11.9966C20 7.5783 16.4183 3.99658 12 3.99658C7.58172 3.99658 4 7.5783 4 11.9966C4 16.4149 7.58172 19.9966 12 19.9966ZM7.00035 15.3158C9.07995 15.1645 11.117 14.2938 12.7071 12.7037C14.2972 11.1136 15.1679 9.07654 15.3193 6.99694C15.6454 7.21396 15.955 7.46629 16.2426 7.75394C18.5858 10.0971 18.5858 13.8961 16.2426 16.2392C13.8995 18.5824 10.1005 18.5824 7.75736 16.2392C7.46971 15.9516 7.21738 15.642 7.00035 15.3158Z"/>
                        </svg>
                        <svg width="24" height="24" id="dark" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M12 21.9966C6.47715 21.9966 2 17.5194 2 11.9966C2 6.47373 6.47715 1.99658 12 1.99658C17.5228 1.99658 22 6.47373 22 11.9966C22 17.5194 17.5228 21.9966 12 21.9966ZM5.32889 16.4219C6.76378 18.5674 9.20868 19.9801 11.9836 19.9801C16.4018 19.9801 19.9836 16.3984 19.9836 11.9801C19.9836 9.20518 18.5707 6.76021 16.4251 5.32535C17.2705 8.35312 16.5025 11.7367 14.1213 14.118C11.7401 16.4992 8.3566 17.2671 5.32889 16.4219Z"/>
                        </svg>
                        <span className="hidden">Change theme</span>
                    </label>
                </div>
                <a href="#" role="button" id="hamburger" aria-label="Hamburger"></a>

            </div>
        </header>
        <section id="intro">
            <div className="container relative">
                <div className="row">
                    <div className="hero-2">
                        <div className="hero-cover relative" data-animate="fade-right">
                            <img src="images/hero/hero.png" className="hero-cover__image" alt="" />
                            {/* <img src="images/shapes/warm.svg" className="shape shape--13" alt="" /> */}
                            <div className="hero-border"></div>
                            <div className="hero-shape"></div>
                        </div>
                    </div>
                    <div className="hero-2-content relative">
                        <h1 data-animate="fade">
                            <span>Hello, I’m</span>
                            <span className="hero-2-content__title">Hitesh Padhara</span>
                        </h1>
                        <div className="hero-2-content__text" data-animate="fade-left">Full-Stack Developer Based in India</div>
                        <div className="link-group" data-animate="fade-up" data-animate-delay="250ms">
                            <a href="homepage-2.html#contact" className="btn btn--primary">
                                <span>Let's Talk</span>
                                <span className="btn__icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"/>
                                    </svg>
                                </span>
                            </a>
                            <a href="portfolio.html" className="arrow-link underline-animation">
                                <span>My Works</span>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M12.8137 1.00819C12.8137 0.732049 12.5899 0.508192 12.3137 0.508191L7.81371 0.508191C7.53757 0.508191 7.31371 0.732049 7.31371 1.00819C7.31371 1.28433 7.53757 1.50819 7.81371 1.50819L11.8137 1.50819L11.8137 5.50819C11.8137 5.78433 12.0376 6.00819 12.3137 6.00819C12.5899 6.00819 12.8137 5.78433 12.8137 5.50819L12.8137 1.00819ZM1.35355 12.6755L12.6673 1.36174L11.9602 0.654638L0.646447 11.9683L1.35355 12.6755Z"/>
                                </svg>
                            </a>
                        </div>
                        {/* <a href="homepage-2.html#about" className="circle scroll-down" aria-label="Scroll down" data-animate="fade-up" data-animate-delay="400ms">
                            <img src="images/icons/scroll-down.svg" alt="" />
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
        <section id="about" className="section">
            <div className="container">
                <div className="row">
                    
                    <div className="about-info" data-animate="fade-right">
                        <div className="about-info__block">
                            <div className="about-info__item">
                                <span>Name</span>
                                <div className="about-info__text fw-medium">Hitesh Padhara</div>
                            </div>
                            <div className="about-info__item">
                                <span>Date of birth</span>
                                <div className="about-info__text fw-medium">November, 07 1993</div>
                            </div>
                            <div className="about-info__item">
                                <span>Email id</span>
                                <a href="mailto:padharahitesh007@example.com" className="about-info__text fw-medium">padharahitesh007@gmail.com</a>
                            </div>
                            <div className="about-info__item">
                                <span>Phone no.</span>
                                <a href="tel:(91)84694-43355" className="about-info__text fw-medium">(91)84694-43355</a>
                            </div>
                            <div className="about-info__item">
                                <span>Address</span>
                                <div className="about-info__text fw-medium">Surat, Gujarat, India</div>
                            </div>
                        </div>
                        <a href="homepage-2.html#" className="btn btn--primary">
                            <span>Download Resume</span>
                            <span className="btn__icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M12.9999 16.1716L18.3638 10.8076L19.778 12.2218L11.9999 20L4.22168 12.2218L5.63589 10.8076L10.9999 16.1716V4H12.9999V16.1716Z"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                    
                    <div className="about-content" data-animate="fade-left">
                        <h2>About <span className="fw-semibold">me</span></h2>
                        <p className="fw-medium">Hello, I’m Hitesh Padhara, Full-Stack Developer Based in India.</p>
                        <p>Crafting seamless user experiences through code and creativity, I specialize in front-end development and design. Let's bring your website to life with intuitive interfaces and visually stunning layouts, tailored to engage and inspire your audience.</p>
                        <div className="stats">
                            <div className="stats__item">
                                <span className="stats__number">10</span>
                                <p>Years of Experience</p>
                            </div>
                            <div className="stats__item">
                                <span className="stats__number">68</span>
                                <p>Happy client’s Worldwide</p>
                            </div>
                            <div className="stats__item">
                                <span className="stats__number">90</span>
                                <p>Projects Completed</p>
                            </div>
                            <div className="stats__item">
                                <span className="stats__number">15</span>
                                <p>Award & Achievements</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-block">
                    <div className="row">
                        
                        <div className="experience" data-animate="fade-right">
                            <div className="mb-48">
                                <h3>My <span className="fw-semibold">experience</span></h3>
                                <p>Experienced front-end developer & designer creating compelling digital experiences. Elevating online presence through expertly crafted interfaces and captivating designs.</p>
                            </div>
                            <div className="experience-list">
                                <div className="experience-list__item">
                                    <div className="experience-list__block">
                                        <span className="experience-list__subtitle">2023 - Present</span>
                                        <span className="experience-list__title">UI/UX Team leader</span>
                                        <p>Envato Market</p>
                                    </div>
                                </div>
                                <div className="experience-list__item">
                                    <div className="experience-list__block">
                                        <span className="experience-list__subtitle">2021 - 23</span>
                                        <span className="experience-list__title">Front-end Developer</span>
                                        <p>Envato Market</p>
                                    </div>
                                </div>
                                <div className="experience-list__item">
                                    <div className="experience-list__block">
                                        <span className="experience-list__subtitle">2018 - 21</span>
                                        <span className="experience-list__title">Front-end Developer</span>
                                        <p>Envato Market</p>
                                    </div>
                                </div>
                                <div className="experience-list__item">
                                    <div className="experience-list__block">
                                        <span className="experience-list__subtitle">2016 - 18</span>
                                        <span className="experience-list__title">UI/UX Designer</span>
                                        <p>Envato Market</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="skill" data-animate="fade-left">
                            <h3 className="mb-48">My <span className="fw-semibold">skills</span></h3>
                            <div className="skill-list">
                                <div className="skill-list__item">
                                    <span className="skill-list__title fw-semibold">UI/UX Design</span>
                                    <div className="progress">
                                        <div className="progress__bar" style={{ '--progress-width': '90%' }}>
                                            <span className="progress__badge">90%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-list__item">
                                    <span className="skill-list__title fw-semibold">Graphic Design</span>
                                    <div className="progress">
                                        <div className="progress__bar" style={{ '--progress-width': '80%' }}>
                                            <span className="progress__badge">80%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-list__item">
                                    <span className="skill-list__title fw-semibold">UI Development</span>
                                    <div className="progress">
                                        <div className="progress__bar" style={{ '--progress-width': '97%' }}>
                                            <span className="progress__badge">97%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-list__item">
                                    <span className="skill-list__title fw-semibold">Angular</span>
                                    <div className="progress">
                                        <div className="progress__bar" style={{ '--progress-width': '88%' }}>
                                            <span className="progress__badge">88%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-list__item">
                                    <span className="skill-list__title fw-semibold">React</span>
                                    <div className="progress">
                                        <div className="progress__bar" style={{ '--progress-width': '82%' }}>
                                            <span className="progress__badge">82%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="services" className="section">
            <div className="container relative">
                <span className="shape shape--4" data-animate="fade">
                <svg
                    width={186}
                    height="100%"
                    viewBox="0 0 186 198"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <path
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M75.7729 17.2222L70.6186 22.3765L115.371 22.3766L110.217 17.2219L75.7729 17.2222ZM97.7723 4.77753L88.2177 4.77745L92.9949 0.000169516L97.7723 4.77753ZM127.816 34.8209L58.1738 34.8213L53.0195 39.9756L132.97 39.9757L127.816 34.8209ZM145.415 52.42L40.5747 52.4204L35.4204 57.5748L150.57 57.5748L145.415 52.42ZM163.014 70.0191L22.9756 70.0195L17.8211 75.174L168.169 75.1739L163.014 70.0191ZM180.613 87.6182L5.37668 87.6184L0.221987 92.7731L185.768 92.773L180.613 87.6182ZM185.767 105.218L0.222294 105.217L5.37703 110.372L180.613 110.372L185.767 105.218ZM168.168 122.817L17.8214 122.817L22.976 127.971L163.014 127.971L168.168 122.817ZM150.569 140.416L35.4204 140.415L40.5751 145.57L145.415 145.57L150.569 140.416ZM132.97 158.015L53.0195 158.015L58.1742 163.169L127.816 163.169L132.97 158.015ZM115.371 175.614L70.6186 175.614L75.7733 180.768L110.216 180.769L115.371 175.614ZM97.772 193.213L88.2177 193.213L92.9949 197.99L97.772 193.213Z"
                    />
                </svg>
                </span>
                <div className="section__head relative" data-animate="fade-up">
                    <span className="section__subtitle">Services</span>
                    <h2>What I <span className="fw-semibold">serviced</span></h2>
                    <p>Specializing in responsive web design and interactive user experiences, we offer tailored front-end development solutions to boost user engagement and brand appeal.</p>
                </div>
                
                <div className="service">
                    <div className="service__item" data-animate="fade-up">
                        <div className="service__number">01</div>
                        <div className="service__info">
                            <span>8 Projects</span>
                            <span className="service__title">Web Design</span>
                        </div>
                        <div className="service__text">
                            Crafting captivating web designs that merge aesthetics with functionality for an unparalleled user experience. Our designs harmonize innovation and usability, ensuring a seamless digital presence for your brand.
                        </div>
                    </div>
                    <div className="service__item" data-animate="fade-up" data-animate-delay="100ms">
                        <div className="service__number">02</div>
                        <div className="service__info">
                            <span>10 Projects</span>
                            <span className="service__title">UI Development</span>
                        </div>
                        <div className="service__text">
                            Crafting intuitive, visually appealing user interfaces for optimal interactions. Our UI development focuses on seamless design, enhancing user engagement.
                        </div>
                    </div>
                    <div className="service__item" data-animate="fade-up" data-animate-delay="200ms">
                        <div className="service__number">03</div>
                        <div className="service__info">
                            <span>2 Projects</span>
                            <span className="service__title">Graphic Design</span>
                        </div>
                        <div className="service__text">
                            Creating impactful visuals by transforming ideas through innovative graphic design solutions, tailored to captivate and inspire audiences.
                        </div>
                    </div>
                    <div className="service__item" data-animate="fade-up" data-animate-delay="300ms">
                        <div className="service__number">04</div>
                        <div className="service__info">
                            <span>12 Projects</span>
                            <span className="service__title">UI/UX Design</span>
                        </div>
                        <div className="service__text">
                            Crafting captivating UI/UX designs that merge aesthetics with functionality, delivering seamless and engaging user experiences.
                        </div>
                    </div>
                    <div className="service__item" data-animate="fade-up" data-animate-delay="400ms">
                        <div className="service__number">05</div>
                        <div className="service__info">
                            <span>14 Projects</span>
                            <span className="service__title">Business Analysis</span>
                        </div>
                        <div className="service__text">
                            Strategic business analysis to identify opportunities and optimize strategies for sustained growth. We offer tailored insights to enhance efficiency and drive success.
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="portfolio" className="section">
            <div className="container">
                
                <div className="portfolio-head relative">
                    <div className="shape shape--5" data-animate="fade-right">
                        <img src="images/shapes/direction.svg" alt="" />
                    </div>
                    <div className="portfolio-content" data-animate="fade" data-animate-delay="200ms">
                        <h2>Recent <span className="fw-semibold">works</span></h2>
                        <p>Discover my curated portfolio showcasing seamless user experiences and the fusion of code and creativity in engaging websites.</p>
                    </div>
                    <a href="portfolio.html" className="arrow-link underline-animation" data-animate="fade" data-animate-delay="200ms">
                        <span>View All</span>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M12.8137 1.00819C12.8137 0.732049 12.5899 0.508192 12.3137 0.508191L7.81371 0.508191C7.53757 0.508191 7.31371 0.732049 7.31371 1.00819C7.31371 1.28433 7.53757 1.50819 7.81371 1.50819L11.8137 1.50819L11.8137 5.50819C11.8137 5.78433 12.0376 6.00819 12.3137 6.00819C12.5899 6.00819 12.8137 5.78433 12.8137 5.50819L12.8137 1.00819ZM1.35355 12.6755L12.6673 1.36174L11.9602 0.654638L0.646447 11.9683L1.35355 12.6755Z"/>
                        </svg>
                    </a>
                </div>
                
                <div className="portfolio-body relative">
                    <div id="portfolio_cards" data-animate="fade-up">
                        {/* <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="card">
                                    <a href="portfolio-details.html" className="card__cover" aria-labelledby="portfolio_card_1">
                                        <img src="images/hero/portfolio-1.jpg" alt="" />
                                    </a>
                                    <span className="card__subtitle">Development</span>
                                    <div id="portfolio_card_1" className="h5 mb-0">
                                        <a href="portfolio-details.html" className="underline-animation">Widdizy smart home app development</a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card">
                                    <a href="portfolio-details.html" className="card__cover" aria-labelledby="portfolio_card_2">
                                        <img src="images/hero/portfolio-2.jpg" alt="" />
                                    </a>
                                    <span className="card__subtitle">UI/UX Design</span>
                                    <div id="portfolio_card_2" className="h5 mb-0">
                                        <a href="portfolio-details.html" className="underline-animation">Jombee web app Figma design</a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card">
                                    <a href="portfolio-details.html" className="card__cover" aria-labelledby="portfolio_card_3">
                                        <img src="images/hero/portfolio-3.jpg" alt="" />
                                    </a>
                                    <span className="card__subtitle">Business Analysis</span>
                                    <div id="portfolio_card_3" className="h5 mb-0">
                                        <a href="portfolio-details.html" className="underline-animation">Kneew-Show business & data analysis</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div> */}
                        <Swiper
                                slidesPerView={1}
                                spaceBetween={16}
                                pagination={{
                                clickable: true,
                                }}
                                breakpoints={{
                                    580: { slidesPerView: 2 },
                                    992: { slidesPerView: 3 }
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                            <SwiperSlide>
                                <div className="card">
                                    <a href="portfolio-details.html" className="card__cover" aria-labelledby="portfolio_card_1">
                                        <img src="images/hero/portfolio-1.jpg" alt="" />
                                    </a>
                                    <span className="card__subtitle">Development</span>
                                    <div id="portfolio_card_1" className="h5 mb-0">
                                        <a href="portfolio-details.html" className="underline-animation">Widdizy smart home app development</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <a href="portfolio-details.html" className="card__cover" aria-labelledby="portfolio_card_2">
                                        <img src="images/hero/portfolio-2.jpg" alt="" />
                                    </a>
                                    <span className="card__subtitle">UI/UX Design</span>
                                    <div id="portfolio_card_2" className="h5 mb-0">
                                        <a href="portfolio-details.html" className="underline-animation">Jombee web app Figma design</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <a href="portfolio-details.html" className="card__cover" aria-labelledby="portfolio_card_3">
                                        <img src="images/hero/portfolio-3.jpg" alt="" />
                                    </a>
                                    <span className="card__subtitle">Business Analysis</span>
                                    <div id="portfolio_card_3" className="h5 mb-0">
                                        <a href="portfolio-details.html" className="underline-animation">Kneew-Show business & data analysis</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
        <section id="testimonials" className="section">
            <div className="container">
                <div className="section__head" data-animate="fade-up">
                    <span className="section__subtitle">Testimonials</span>
                    <h2>What client's <span className="fw-semibold">say?</span></h2>
                </div>
                
                <div className="testimonial" data-animate="fade-up" data-animate-delay="400ms">
                    <div id="testimonial_slider" className="swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="images/icons/quote.svg" className="quote" alt="" />
                                <p>Outstanding design, user-friendly experience, exceeded expectations. Professional, creative, and a pleasure to work with. Highly recommended for projects.</p>
                                <div className="author">
                                    <div className="author__image">
                                        <img src="images/avatar.png" alt="" />
                                    </div>
                                    <span className="author__name">Jennie Nichols</span>
                                    <p>Poore Simon's</p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <img src="images/icons/quote.svg" className="quote" alt="" />
                                <p>Outstanding design, user-friendly experience, exceeded expectations. Professional, creative, and a pleasure to work with. Highly recommended for projects.</p>
                                <div className="author">
                                    <div className="author__image">
                                        <img src="images/avatar.png" alt="" />
                                    </div>
                                    <span className="author__name">Jennie Nichols</span>
                                    <p>Poore Simon's</p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <img src="images/icons/quote.svg" className="quote" alt="" />
                                <p>Outstanding design, user-friendly experience, exceeded expectations. Professional, creative, and a pleasure to work with. Highly recommended for projects.</p>
                                <div className="author">
                                    <div className="author__image">
                                        <img src="images/avatar.png" alt="" />
                                    </div>
                                    <span className="author__name">Jennie Nichols</span>
                                    <p>Poore Simon's</p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container relative">
                <img src="images/shapes/dawn.svg" className="shape shape--6" data-animate="fade" data-animate-delay="400ms" alt="" />
                <div className="cta relative">
                    <h2 className="cta__title" data-animate="fade-right">Have a Project? <span className="fw-semibold">Let's Discuss!</span></h2>
                    <div className="cta__content" data-animate="fade-left">
                        <p>Discuss your project needs with me; together, we'll create remarkable solutions and experiences.</p>
                        <div className="link-group">
                            <a href="homepage-2.html#" className="btn btn--secondary">
                                <span>Download Resume</span>
                                <span className="btn__icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M12.9999 16.1716L18.3638 10.8076L19.778 12.2218L11.9999 20L4.22168 12.2218L5.63589 10.8076L10.9999 16.1716V4H12.9999V16.1716Z"/>
                                    </svg>
                                </span>
                            </a>
                            <a href="portfolio.html" className="arrow-link underline-animation">
                                <span>My Portfolio</span>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M12.8137 1.00819C12.8137 0.732049 12.5899 0.508192 12.3137 0.508191L7.81371 0.508191C7.53757 0.508191 7.31371 0.732049 7.31371 1.00819C7.31371 1.28433 7.53757 1.50819 7.81371 1.50819L11.8137 1.50819L11.8137 5.50819C11.8137 5.78433 12.0376 6.00819 12.3137 6.00819C12.5899 6.00819 12.8137 5.78433 12.8137 5.50819L12.8137 1.00819ZM1.35355 12.6755L12.6673 1.36174L11.9602 0.654638L0.646447 11.9683L1.35355 12.6755Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <section id="blog" className="section">
            <div className="container">
                
                <div className="blog-head relative">
                    <span className="shape shape--7">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="170"
                        fill="none"
                        viewBox="0 0 170 180"
                        >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="10"
                            d="M89.987 94.684c.162 1.826-3.231 2.826-4.99 0-1.9-2.495-.503-8.291 4.99-9.964 5.173-1.981 13.359 1.821 14.968 9.964 2.05 7.83-4.14 18.393-14.968 19.931-10.492 2.116-23.493-6.455-24.947-19.93-2.205-13.148 8.8-28.51 24.947-29.895 15.833-2.269 33.608 11.097 34.926 29.894 2.344 18.469-13.438 38.627-34.926 39.86-21.17 2.42-43.736-15.744-44.905-39.86-2.49-23.802 18.08-48.73 44.905-49.824 26.487-2.556 53.87 20.375 54.883 49.824 2.642 29.12-22.732 58.847-54.883 59.79-31.828 2.708-63.988-25.02-64.862-59.79-2.779-34.44 27.37-68.96 64.862-69.754 37.156-2.86 74.119 29.667 74.841 69.754 2.933 39.775-32.024 79.065-74.841 79.72-42.481 2.999-84.25-34.299-84.82-79.72C2.094 49.592 41.835 5.503 89.987 5"
                        ></path>
                        </svg>
                    </span>
                    <div className="blog-content relative">
                        <span className="section__subtitle">Blogs</span>
                        <h2 className="mb-0">Recent <span className="fw-semibold">Blog</span></h2>
                    </div>
                    <a href="blog.html" className="arrow-link underline-animation">
                        <span>View All</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            fill="none"
                            viewBox="0 0 13 13"
                            >
                            <path
                                fill="currentColor"
                                d="M12.814 1.008a.5.5 0 00-.5-.5h-4.5a.5.5 0 000 1h4v4a.5.5 0 001 0v-4.5zM1.354 12.676L12.667 1.361 11.96.655.646 11.968l.708.707z"
                            ></path>
                            </svg>
                    </a>
                </div>
                
                <div id="blog_cards" className="swiper" data-animate="fade-up">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="card">
                                <a href="blog-details.html" className="card__cover" aria-labelledby="blog_card_1">
                                    <img src="images/hero/blog-1.jpg" alt="" />
                                </a>
                                <span className="card__subtitle">24 Mar. 2023 | 8 min read</span>
                                <div id="blog_card_1" className="h5 mb-0">
                                    <a href="blog-details.html" className="underline-animation">Innovation Junction: Exploring Cutting-Edge Solutions and Ideas</a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card">
                                <a href="blog-details.html" className="card__cover" aria-labelledby="blog_card_2">
                                    <img src="images/hero/blog-2.jpg" alt="" />
                                </a>
                                <span className="card__subtitle">14 Apr. 2023 | 4 min read</span>
                                <div id="blog_card_2" className="h5 mb-0">
                                    <a href="blog-details.html" className="underline-animation">Navigating Tech Trends: Insights into the Ever-Evolving Digital Landscape</a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card">
                                <a href="blog-details.html" className="card__cover" aria-labelledby="blog_card_3">
                                    <img src="images/hero/blog-3.jpg" alt="" />
                                </a>
                                <span className="card__subtitle">26 May. 2023 | 5 min read</span>
                                <div id="blog_card_3" className="h5 mb-0">
                                    <a href="blog-details.html" className="underline-animation">Beyond Pixels: Unveiling the Artistry in Digital Design</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section> */}
        <section id="contact" className="section">
            <div className="container">
                <div className="mb-64 relative">
                    <img src="images/shapes/stars.svg" className="shape shape--9" alt="" />
                    <span className="section__subtitle">Let’s talk</span>
                    <h2 className="mb-0">Get in <span className="fw-semibold">touch</span></h2>
                </div>
                <div className="row">
                    
                    <div className="contact-form relative">
                        <img src="images/shapes/flower.svg" className="shape shape--8" alt="" />
                        <form className="relative">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" id="name" className="form-control" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" id="email" className="form-control" placeholder="Enter your email id" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="msg" className="form-label">Message</label>
                                <textarea name="msg" id="msg" cols="30" rows="5" className="form-control" placeholder="Write your words"></textarea>
                            </div>
                            <button type="submit" id="contact_btn" className="btn btn--primary">
                                <span>Send Now</span>
                                <span className="btn__icon">
                                <svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        {...props}
                                    >
                                        <path
                                        fill="currentColor"
                                        d="M21.7264 2.95706L16.2732 22.0433C16.1222 22.5718 15.7976 22.5958 15.5561 22.1127L10.9998 13.0002L1.92266 9.36931C1.41298 9.16544 1.41929 8.86034 1.9567 8.6812L21.0429 2.31913C21.5714 2.14297 21.8745 2.43878 21.7264 2.95706ZM19.0351 5.0966L6.81197 9.17097L12.4486 11.4256L15.4893 17.507L19.0351 5.0966Z"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <div id="form_message"></div>
                        </form>
                    </div>
                    
                    <div className="contact-cover relative">
                        <span className="shape shape--10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="186" viewBox="0 0 186 198">
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M75.773 17.222l-5.154 5.154h44.752l-5.154-5.154H75.773zm22-12.444h-9.555L92.995 0l4.777 4.778zm30.043 30.043H58.174l-5.154 5.155h79.95l-5.154-5.155zm17.599 17.599H40.575l-5.155 5.155h115.15l-5.155-5.155zm17.599 17.6H22.976l-5.155 5.154H168.17l-5.155-5.155zm17.599 17.598H5.377L.222 92.773h185.546l-5.155-5.155zm5.154 17.6L.222 105.217l5.155 5.155h175.236l5.154-5.154zm-17.599 17.599H17.821l5.155 5.154h140.038l5.154-5.154zm-17.599 17.599l-115.149-.001 5.155 5.155h104.84l5.154-5.154zm-17.599 17.599H53.02l5.154 5.154h69.642l5.154-5.154zm-17.599 17.599H70.619l5.154 5.154 34.443.001 5.155-5.155zm-17.599 17.599h-9.554l4.777 4.777 4.777-4.777z"
                                clipRule="evenodd"
                            ></path>
                            </svg>
                        </span>
                        <img src="images/hero/hero-1.png" className="contact-cover__image" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <footer className="container">
            <div className="footer relative">
                
                <div className="footer-head">
                    <div className="footer-content">
                        <h2 className="h1">Keep in Touch!</h2>
                        <p>Let's maintain our connection for updates, insights, and engaging discussions on industry trends.</p>
                    </div>
                </div>
                
                <div className="footer-body fw-medium">
                    <div className="footer-body__item">
                        <span className="footer-body__title">Call:</span>
                        <a href="tel:(+91)84694-43355" className="underline-animation">(+91)84694-43355</a>
                    </div>
                    <div className="footer-body__item">
                        <span className="footer-body__title">Email:</span>
                        <a href="mailto:padharahitesh@gmail.com" className="underline-animation">padharahitesh007@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    </main>
    
  )
}

export default Content