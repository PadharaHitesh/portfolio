"use client"
import React, { use } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation,Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Content = (props) => {
  return (
    
    <main id="main">
        {/* <header id="header">
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
        </header> */}
        <section id="intro">
            <div className="container relative">
                <div className="row">
                    <div className="hero-2">
                        <div className="hero-cover relative" data-animate="fade-right">
                            <img src="/images/hero/hero.png" className="hero-cover__image" alt="" />
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
                            <a href="#contact" className="btn btn--primary">
                                <span>Let's Talk</span>
                                <span className="btn__icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"/>
                                    </svg>
                                </span>
                            </a>
                            <a href="#portfolio" className="arrow-link underline-animation">
                                <span>My Works</span>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M12.8137 1.00819C12.8137 0.732049 12.5899 0.508192 12.3137 0.508191L7.81371 0.508191C7.53757 0.508191 7.31371 0.732049 7.31371 1.00819C7.31371 1.28433 7.53757 1.50819 7.81371 1.50819L11.8137 1.50819L11.8137 5.50819C11.8137 5.78433 12.0376 6.00819 12.3137 6.00819C12.5899 6.00819 12.8137 5.78433 12.8137 5.50819L12.8137 1.00819ZM1.35355 12.6755L12.6673 1.36174L11.9602 0.654638L0.646447 11.9683L1.35355 12.6755Z"/>
                                </svg>
                            </a>
                        </div>
                        {/* <a href="homepage-2.html#about" className="circle scroll-down" aria-label="Scroll down" data-animate="fade-up" data-animate-delay="400ms">
                            <img src="/images/icons/scroll-down.svg" alt="" />
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
                                <a href="tel:(+91)84694-43355" className="about-info__text fw-medium">(+91)84694-43355</a>
                            </div>
                            <div className="about-info__item">
                                <span>Address</span>
                                <div className="about-info__text fw-medium">Surat, Gujarat, India</div>
                            </div>
                        </div>
                        <a href="#" className="btn btn--primary">
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
                        <p className="fw-medium">Crafting seamless user experiences through code and creativity, I specialize in full-stack development encompassing front-end technologies such as React.js and Next.js, along with backend frameworks like Laravel and CodeIgniter. Let's bring your website to life with intuitive interfaces and visually stunning layouts, tailored to engage and inspire your audience.</p>
                        <div className="stats">
                            <div className="stats__item">
                                <span className="stats__number">7</span>
                                <p>Years of Experience</p>
                            </div>
                            <div className="stats__item">
                                <span className="stats__number">4</span>
                                <p>Happy client’s Worldwide</p>
                            </div>
                            <div className="stats__item">
                                <span className="stats__number">10</span>
                                <p>Projects Completed</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-block">
                    <div className="row">
                        
                        <div className="experience" data-animate="fade-right">
                            <div className="mb-48">
                                <h3>My <span className="fw-semibold">experience</span></h3>
                                <p>Experienced full-stack developer and designer proficient in crafting compelling digital experiences. Elevating online presence through expertly crafted interfaces and captivating designs, utilizing a comprehensive skill set spanning front-end technologies like React.js and Next.js, as well as backend frameworks such as Laravel and CodeIgniter.</p>
                            </div>
                            <div className="experience-list">
                                <div className="experience-list__item">
                                    <div className="experience-list__block">
                                        <span className="experience-list__subtitle">2022 - Present</span>
                                        <span className="experience-list__title">Sr. Full Stack Developer</span>
                                        <p>Vidillion</p>
                                    </div>
                                </div>
                                <div className="experience-list__item">
                                    <div className="experience-list__block">
                                        <span className="experience-list__subtitle">2020 - 22</span>
                                        <span className="experience-list__title">Project Team Leader</span>
                                        <p>Alita Infotech</p>
                                    </div>
                                </div>
                                <div className="experience-list__item">
                                    <div className="experience-list__block">
                                        <span className="experience-list__subtitle">2019 - 20</span>
                                        <span className="experience-list__title">Laravel Developer</span>
                                        <p>Dynamic Dreamz</p>
                                    </div>
                                </div>
                                <div className="experience-list__item">
                                    <div className="experience-list__block">
                                        <span className="experience-list__subtitle">2016 - 19</span>
                                        <span className="experience-list__title">Sr.PHP Developer</span>
                                        <p>Nestcode Infotech</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container relative">
                <img src="/images/shapes/dawn.svg" className="shape shape--6" data-animate="fade" data-animate-delay="400ms" alt="" />
                <div className="cta relative">
                    <div className="grid lg:grid-cols-5 gap-4 max-md:grid-cols-3 max-sm:grid-cols-2">
                        <div className="text-center pb-3">
                            <div className="progressCircle pt-2">
                            <div
                                className="relative w-32 h-32 mx-auto circle md:w-40 md:h-40"
                                data-percent={95}
                            >
                                <canvas width={320} height={320} style={{ height: 160, width: 160 }} />
                                <div className="absolute inset-0 text-2xl font-semibold text-white label flex-center counter-percentage">
                                95%
                                </div>
                                <div className="absolute flex-center skill-logo">
                                <div className="text-center icon">
                                    <img src="/images/skills/laravel.png" alt="Laravel" />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="text-white name pt-2">Laravel</div>
                        </div>
                        <div className="text-center pb-3">
                            <div className="progressCircle pt-2">
                            <div
                                className="relative w-32 h-32 mx-auto circle md:w-40 md:h-40"
                                data-percent={95}
                            >
                                <canvas width={320} height={320} style={{ height: 160, width: 160 }} />
                                <div className="absolute inset-0 text-2xl font-semibold text-white label flex-center counter-percentage">
                                95%
                                </div>
                                <div className="absolute flex-center skill-logo">
                                <div className="text-center icon">
                                    <img src="/images/skills/php.png" alt="PHP" />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="text-white name pt-2">PHP</div>
                        </div>
                        <div className="text-center pb-3">
                            <div className="progressCircle pt-2">
                            <div
                                className="relative w-32 h-32 mx-auto circle md:w-40 md:h-40"
                                data-percent={95}
                            >
                                <canvas width={320} height={320} style={{ height: 160, width: 160 }} />
                                <div className="absolute inset-0 text-2xl font-semibold text-white label flex-center counter-percentage">
                                95%
                                </div>
                                <div className="absolute flex-center skill-logo">
                                <div className="text-center icon">
                                    <img src="/images/skills/vuejs.png" alt="VueJS" />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="text-white name pt-2">VueJS</div>
                        </div>
                        <div className="text-center pb-3">
                            <div className="progressCircle pt-2">
                            <div
                                className="relative w-32 h-32 mx-auto circle md:w-40 md:h-40"
                                data-percent={95}
                            >
                                <canvas width={320} height={320} style={{ height: 160, width: 160 }} />
                                <div className="absolute inset-0 text-2xl font-semibold text-white label flex-center counter-percentage">
                                95%
                                </div>
                                <div className="absolute flex-center skill-logo">
                                <div className="text-center icon">
                                    <img src="/images/skills/javascript.png" alt="JavaScript" />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="text-white name pt-2">JavaScript</div>
                        </div>
                        <div className="text-center pb-3">
                            <div className="progressCircle pt-2">
                            <div
                                className="relative w-32 h-32 mx-auto circle md:w-40 md:h-40"
                                data-percent={95}
                            >
                                <canvas width={320} height={320} style={{ height: 160, width: 160 }} />
                                <div className="absolute inset-0 text-2xl font-semibold text-white label flex-center counter-percentage">
                                95%
                                </div>
                                <div className="absolute flex-center skill-logo">
                                <div className="text-center icon">
                                    <img
                                    src="/images/skills/tailwindcss.png"
                                    alt="TailwindCSS"
                                    />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="text-white name pt-2">TailwindCSS</div>
                        </div>
                        <div className="text-center pb-3">
                            <div className="progressCircle pt-2">
                            <div
                                className="relative w-32 h-32 mx-auto circle md:w-40 md:h-40"
                                data-percent={95}
                            >
                                <canvas width={320} height={320} style={{ height: 160, width: 160 }} />
                                <div className="absolute inset-0 text-2xl font-semibold text-white label flex-center counter-percentage">
                                95%
                                </div>
                                <div className="absolute flex-center skill-logo">
                                <div className="text-center icon">
                                    <img
                                    src="/images/skills/git.png"
                                    alt="Git / Bitbucket / Github"
                                    />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="text-white name pt-2">Git / Bitbucket / Github</div>
                        </div>
                        <div className="text-center pb-3">
                            <div className="progressCircle pt-2">
                            <div
                                className="relative w-32 h-32 mx-auto circle md:w-40 md:h-40"
                                data-percent={95}
                            >
                                <canvas width={320} height={320} style={{ height: 160, width: 160 }} />
                                <div className="absolute inset-0 text-2xl font-semibold text-white label flex-center counter-percentage">
                                95%
                                </div>
                                <div className="absolute flex-center skill-logo">
                                <div className="text-center icon">
                                    <img src="/images/skills/gcp.png" alt="AWS / GCP" />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="text-white name pt-2">AWS / GCP</div>
                        </div>
                        <div className="text-center pb-3">
                            <div className="progressCircle pt-2">
                            <div
                                className="relative w-32 h-32 mx-auto circle md:w-40 md:h-40"
                                data-percent={90}
                            >
                                <canvas width={320} height={320} style={{ height: 160, width: 160 }} />
                                <div className="absolute inset-0 text-2xl font-semibold text-white label flex-center counter-percentage">
                                90%
                                </div>
                                <div className="absolute flex-center skill-logo">
                                <div className="text-center icon">
                                    <img src="/images/skills/redis.png" alt="Redis" />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="text-white name pt-2">Redis</div>
                        </div>
                        <div className="text-center pb-3">
                            <div className="progressCircle pt-2">
                            <div
                                className="relative w-32 h-32 mx-auto circle md:w-40 md:h-40"
                                data-percent={90}
                            >
                                <canvas width={320} height={320} style={{ height: 160, width: 160 }} />
                                <div className="absolute inset-0 text-2xl font-semibold text-white label flex-center counter-percentage">
                                90%
                                </div>
                                <div className="absolute inset-0 text-2xl font-semibold text-white label flex-center counter-percentage" />
                                <div className="absolute flex-center skill-logo">
                                <div className="text-center icon">
                                    <img src="/images/skills/mysql.png" alt="MySQL" />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="text-white name pt-2">MySQL</div>
                        </div>
                        
                        <div className="text-center pb-3">
                            <div className="progressCircle pt-2">
                            <div
                                className="relative w-32 h-32 mx-auto circle md:w-40 md:h-40"
                                data-percent={85}
                            >
                                <canvas width={320} height={320} style={{ height: 160, width: 160 }} />
                                <div className="absolute inset-0 text-2xl font-semibold text-white label flex-center counter-percentage">
                                85%
                                </div>
                                <div className="absolute inset-0 text-2xl font-semibold text-white label flex-center counter-percentage" />
                                <div className="absolute flex-center skill-logo">
                                <div className="text-center icon">
                                    <img src="/images/skills/reactjs.png" alt="ReactJS" />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="text-white name pt-2">ReactJS</div>
                        </div>
                        
                        <div className="text-center pb-3">
                            <div className="progressCircle pt-2">
                            <div
                                className="relative w-32 h-32 mx-auto circle md:w-40 md:h-40"
                                data-percent={75}
                            >
                                <canvas width={320} height={320} style={{ height: 160, width: 160 }} />
                                <div className="absolute inset-0 text-2xl font-semibold text-white label flex-center counter-percentage">
                                75%
                                </div>
                                <div className="absolute inset-0 text-2xl font-semibold text-white label flex-center counter-percentage" />
                                <div className="absolute flex-center skill-logo">
                                <div className="text-center icon">
                                    <img src="/images/skills/cicd.png" alt="CI/CD" />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="text-white name pt-2">CI/CD</div>
                        </div>
                        <div className="text-center pb-3">
                            <div className="progressCircle pt-2">
                            <div
                                className="relative w-32 h-32 mx-auto circle md:w-40 md:h-40"
                                data-percent={75}
                            >
                                <canvas width={320} height={320} style={{ height: 160, width: 160 }} />
                                <div className="absolute inset-0 text-2xl font-semibold text-white label flex-center counter-percentage">
                                75%
                                </div>
                                <div className="absolute inset-0 text-2xl font-semibold text-white label flex-center counter-percentage" />
                                <div className="absolute flex-center skill-logo">
                                <div className="text-center icon">
                                    <img
                                    src="/images/skills/docker.png"
                                    alt="Docker / Kubernetes"
                                    />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="text-white name pt-2">Docker / Kubernetes</div>
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
                    <p>Specializing in full-stack web development, we offer comprehensive solutions encompassing both front-end and back-end development. With expertise in responsive web design and interactive user experiences, we deliver tailored solutions to boost user engagement and brand appeal across all aspects of your web presence.</p>
                </div>
                
                <div className="service">
                    <div className="service__item" data-animate="fade-up">
                        <div className="service__number">01</div>
                        <div className="service__info">
                            <span className="service__title">Full-Stack Web Development </span>
                        </div>
                        <div className="service__text">
                        Extensive expertise in full-stack web development across various frameworks and programming languages, ensuring robust and scalable solutions tailored to your unique needs.
                        </div>
                    </div>
                    <div className="service__item" data-animate="fade-up" data-animate-delay="100ms">
                        <div className="service__number">02</div>
                        <div className="service__info">
                            <span className="service__title">Creative Web Design</span>
                        </div>
                        <div className="service__text">
                        Proficient in designing visually stunning and highly functional websites using cutting-edge technologies such as SASS, Gulp, Tailwind and JSX, delivering captivating user experiences that resonate with your audience.
                        </div>
                    </div>
                    <div className="service__item" data-animate="fade-up" data-animate-delay="200ms">
                        <div className="service__number">03</div>
                        <div className="service__info">
                            <span className="service__title">Efficient Server Management</span>
                        </div>
                        <div className="service__text">
                        Demonstrated proficiency in managing servers on Google Cloud Platform and AWS, ensuring seamless deployment and maintenance of web applications for optimal performance and reliability.
                        </div>
                    </div>
                    <div className="service__item" data-animate="fade-up" data-animate-delay="300ms">
                        <div className="service__number">04</div>
                        <div className="service__info">
                            <span className="service__title">Comprehensive Web Testing</span>
                        </div>
                        <div className="service__text">
                        Skilled in conducting thorough testing of your web projects, employing a variety of test cases and unit testing methodologies to ensure the quality and reliability of your applications.
                        </div>
                    </div>
                    <div className="service__item" data-animate="fade-up" data-animate-delay="400ms">
                        <div className="service__number">05</div>
                        <div className="service__info">
                            <span className="service__title">Experienced Technical Adviser</span>
                        </div>
                        <div className="service__text">
                        With a wealth of experience in web development, I offer valuable insights and guidance to navigate the complexities of the digital landscape, helping you overcome challenges and achieve your goals effectively.
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="portfolio" className="section">
            <div className="container">
                
                <div className="portfolio-head relative">
                    <div className="shape shape--5" data-animate="fade-right">
                        <img src="/images/shapes/direction.svg" alt="" />
                    </div>
                    <div className="portfolio-content" data-animate="fade" data-animate-delay="200ms">
                        <h2>Recent <span className="fw-semibold">works</span></h2>
                        <p>Discover my curated portfolio showcasing seamless user experiences and the fusion of code and creativity in engaging websites.</p>
                    </div>
                    <a href="#portfolio" className="arrow-link underline-animation" data-animate="fade" data-animate-delay="200ms">
                        <span>View All</span>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M12.8137 1.00819C12.8137 0.732049 12.5899 0.508192 12.3137 0.508191L7.81371 0.508191C7.53757 0.508191 7.31371 0.732049 7.31371 1.00819C7.31371 1.28433 7.53757 1.50819 7.81371 1.50819L11.8137 1.50819L11.8137 5.50819C11.8137 5.78433 12.0376 6.00819 12.3137 6.00819C12.5899 6.00819 12.8137 5.78433 12.8137 5.50819L12.8137 1.00819ZM1.35355 12.6755L12.6673 1.36174L11.9602 0.654638L0.646447 11.9683L1.35355 12.6755Z"/>
                        </svg>
                    </a>
                </div>
                
                <div className="portfolio-body relative">
                    <div id="portfolio_cards" data-animate="fade-up">
                        
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
                                        <img src="/images/hero/portfolio-1.jpg" alt="" />
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
                                        <img src="/images/hero/portfolio-2.jpg" alt="" />
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
                                        <img src="/images/hero/portfolio-3.jpg" alt="" />
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
        <section className="section">
            <div className="container relative">
                <img src="/images/shapes/dawn.svg" className="shape shape--6" data-animate="fade" data-animate-delay="400ms" alt="" />
                <div className="cta relative">
                    <h2 className="cta__title" data-animate="fade-right">Have a Project? <span className="fw-semibold">Let's Discuss!</span></h2>
                    <div className="cta__content" data-animate="fade-left">
                        <p>Discuss your project needs with me; together, we'll create remarkable solutions and experiences.</p>
                        <div className="link-group">
                            <a href="#" className="btn btn--secondary">
                                <span>Download Resume</span>
                                <span className="btn__icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M12.9999 16.1716L18.3638 10.8076L19.778 12.2218L11.9999 20L4.22168 12.2218L5.63589 10.8076L10.9999 16.1716V4H12.9999V16.1716Z"/>
                                    </svg>
                                </span>
                            </a>
                            <a href="#portfolio" className="arrow-link underline-animation">
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
        <section id="contact" className="section">
            <div className="container">
                <div className="mb-64 relative">
                    <img src="/images/shapes/stars.svg" className="shape shape--9" alt="" />
                    <span className="section__subtitle">Let’s talk</span>
                    <h2 className="mb-0">Get in <span className="fw-semibold">touch</span></h2>
                </div>
                <div className="row">
                    
                    <div className="contact-form relative">
                        <img src="/images/shapes/flower.svg" className="shape shape--8" alt="" />
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
                        {/* <img src="/images/hero/hero-1.png" className="contact-cover__image" alt="" /> */}
                        <img src="/images/contact-1.png" className="contact-cover__image" alt="" />
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