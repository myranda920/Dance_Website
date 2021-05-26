
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class App extends Component {
  render() {
    return (
    <div className="App">
      <body data-spy="scroll" data-target=".scrollspy" data-offset="85">
    
    <div id="preloader">
        <div className="text-center w-100">
            <div className="loader"></div>
        </div>
    </div>
    
    
    <header className="navigation horizontal_header transparentOnScroll navbar navbar-expand-lg fixed-top">
        <div className="header-ins">
        <div className="container">
                
                <div className="site-logo">
                    <a href="#" className="hoveroff" title="">
                        
                        MP<span>choreography</span>
                    </a>
                </div>
                <button className="button-toggler navbar-toggler collapsed" type="button" data-target="#navigation" data-toggle="collapse" aria-controls="navigation" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <ul className="justify-content-end scrollspy collapse navbar-collapse" id="navigation">
                    <li>
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="nav-link">About</a>
                    </li>
                    <li>
                        <a href="#service" className="nav-link">Services</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="nav-link">Choreography</a>
                    </li>
                    <li>
                        <a href="#resume" className="nav-link">Experience</a>
                    </li>
                    <li>
                        <a href="#blog" className="nav-link">Photography</a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-link">Book</a>
                    </li>
                </ul>
                
            
        </div>
        </div>

    </header>
    

    <main className="content center-main" >
        
        <section className="home d-flex" id="home">
            
            <div className="mono-background">
                <div className="mono-background-inner" data-aos-duration="1200" data-aos-delay="450" data-aos="fade-left">
                    <img src="https://placehold.it/1405x937" width="1405" height="937" className="img-align-center" alt=""/>
                </div>
            </div>
            

            <div className="container introduction text-left" >
                <p className="welcome_text mb-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">I'm <span className="welcome-text-type" data-options="Dancer, Choreographer" ></span></p>
                <div id="parallax-scene" className="mb-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                    <div className="heading-zone">
                        <h1>Myranda Palomino</h1>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450">
                    <a href="#about" className="btn  btn-primary btn-small">Learn More</a>
                </div>
            </div>
            <div className="scroll-down">
                <a href="#about" className="scroll-down-link text-center hoveroff">
                    <div className="scroll-title">Scroll Down</div>
                    <div className="scroll-mouse">
                        <div className="whell"></div>
                    </div>
                </a>
            </div>
        </section>
        


        
        <section className="about" id="about">
            <div className="container d-flex justify-content-between flex-column h-100">
                <div className="section-title flex-grow-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2 data-aos="heading-show" className="text_background">
                                    Who Am I
                                    <span className="heading_background">About Me</span>
                                </h2>
                                <p className="m-0">Get to know me</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-content flex-grow-1">
                    <div className="row align-items-center">
                        <div className="col-md-8 mt-5 mt-md-0">
                                <h3 className="m-0">I'm Myranda Palomino</h3>
                                <p className="my-4">Hi! I am a creative, passionate choreographer devoted to helping dancers express themselves through movement and technique. I spent 19 years training in Southern California. Training in ballet, jazz, lyrical, contemporary, and acro; I went on to win three national titles in Daytona, Florida with my junior college dance team. After being successful in my first years of college, I went on to compete with the top 3 in the nation Arizona State University dance team. Placing 3rd at UDA Nationals in Orlando, Florida, I also performed in Super Bowl XLIX with Katy Perry and danced on the Jimmy Fallon show. After graduating with a degree in communications in 2016, I began teaching at a new studio in Gilbert, AZ. Starting small, I helped this studio grow into over 300 students with teaching classNamees in stretch, turns, leaps, progressions, convention prep and choreographed competition routines. I hope to bring my skills to the Dallas Area along with traveling to Southern California for choreography opportunies.  </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="about-info mb-2">
                                            <span className="desc">Full Name:</span>
                                            <span>Myranda Palomino</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="about-info mb-2">
                                            <span className="desc">Age:</span>
                                            <span>28 Years Old</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="about-info mb-2">
                                            <span className="desc">Experience:</span>
                                            <span>26 Years Dancing, 10 Years Teaching</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="about-info mb-2">
                                            <span className="desc">Email:</span>
                                            <span>myranda.palomino@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="button_and_social my-4">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-xl-6">
                                            <a href="#" className="btn btn-outline-primary btn-lg">Download CV</a>
                                        </div>
                                        <div className="col-xl-6">
                                            <ul className="social-icons list-inline mt-4 mt-xl-0">
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="fab fa-pinterest-p"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="fab fa-git"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="fab fa-tumblr"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        

        
        <div className="section facts backgound-section" style="background-image: url(https://placehold.it/1920x1080)" data-aos-id="facts">

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 mt-3 mt-lg-0">
                        <div className="fact-single text-center">
                            <div className="fact-icon">
                                <span className="mbri-timer"></span>
                            </div>
                            <div className="fact-info">
                                <span className="tmcounter" data-from="0" data-to="26" data-speed="1500">26</span>+
                            </div>
                            <div className="fact-meta">
                                <span>Years Experiance</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-3 mt-lg-0">
                        <div className="fact-single text-center">
                            <div className="fact-icon">
                                <span className="mbri-smile-face"></span>
                            </div>
                            <div className="fact-info">
                                <span className="tmcounter" data-from="0" data-to="400" data-speed="1500">400</span>+
                            </div>
                            <div className="fact-meta">
                                <span>Happy Students</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-3 mt-lg-0">
                        <div className="fact-single text-center">
                            <div className="fact-icon">
                                <span className="mbri-apple"></span>
                            </div>
                            <div className="fact-info">
                                <span className="tmcounter" data-from="0" data-to="1000" data-speed="1500">1000</span>
                            </div>
                            <div className="fact-meta">
                                <span>classNamees taught</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-3 mt-lg-0">
                        <div className="fact-single text-center">
                            <div className="fact-icon">
                                <span className="mbri-music"></span>
                            </div>
                            <div className="fact-info">
                                <span className="tmcounter" data-from="0" data-to="20" data-speed="1500">20</span>
                            </div>
                            <div className="fact-meta">
                                <span>Choreographed Pieces</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        

        
        <section className="services" id="service">
            <div className="container d-flex flex-column justify-content-between h-100 ">

                <div className="section-title flex-grow-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2 data-aos="heading-show" className="text_background">
                                    What I Do
                                    <span className="heading_background">Services</span>
                                </h2>
                                <p className="m-0">Providing services for high school dance teams, dance studios, college dance teams</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-content flex-grow-1">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mt-4 mb-2">
                            <div className="service-single text-left p-5">
                                <div className="service-icon">
                                    <span className="mbri-success"></span>
                                </div>
                                <h3 className="my-3">Technique Privates</h3>
                                <p>Privates specializing in technique specific to student need. Zoom privates also available.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4 mb-2">
                            <div className="service-single text-left p-5">
                                <div className="service-icon">
                                    <span className="mbri-like"></span>
                                </div>
                                <h3 className="my-3">Team Choreography</h3>
                                <p>Choreography for high school, college, or studios in Pom, Lyrical, Contemporary, Jazz and Open</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4 mb-2">
                            <div className="service-single text-left p-5">
                                <div className="service-icon">
                                    <span className="mbri-sun"></span>
                                </div>
                                <h3 className="my-3">Master classNamees</h3>
                                <p>Offering master classNamees for teams and studios in pom, turns, or combo</p>
                            </div>
                        </div>
                      
                        </div>
                    </div>
                </div>

            
        </section>

        

        

        <div className="section about_movie text-center d-flex flex-column align-items-center backgound-section" style="background-image: url(https://placehold.it/1920x1080)">
            <div className="video-area">
                <a href="https://www.youtube.com/watch?v=YjhrligRTbE" className="btn-video-play iframe_popup">
                    <i className="fas fa-play"></i>
                </a>
                <p className="mt-3">Play Video</p>
            </div>
        </div>

        

        
        <section className="portfolio" id="portfolio">
            <div className="container d-flex flex-column justify-content-between h-100 ">

                <div className="section-title flex-grow-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2 data-aos="heading-show" className="text_background">
                                    My Choreography
                                    <span className="heading_background">Portfolio</span>
                                </h2>
                                <p className="m-0">Studio choreography and className choreography</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-content flex-grow-1">
                    <div className="row portfolio-items">

                        <div className="col-xl-4 col-lg-4 col-md-6 mb-2 mt-4 frontenddevelopment">
                            <div className="portfolio-item">
                                <a href="https://www.youtube.com/watch?v=ONgpwvJmZNQ" className="portfolio-single iframe_popup">
                                    <div className="item-box">
                                        <div className="item-image">
                                            <img src="file:///Users/myrandapalomino/Desktop/Dance_Website/LOSTIMG.jpg" width="510" height="600" className="d-block img-fluid mx-auto" alt="" />
                                        </div>
                                        <div className="item-details d-flex align-items-center">
                                            <div className="item-details-ins text-center w-100">
                                                <div className="mb-2">
                                                    <span className="mbri-video-play"></span>
                                                </div>
                                                <h3>Shine</h3>
                                                <p>Senior Small Group</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 mb-2 mt-4 backenddevelopment">
                            <div className="portfolio-item">
                                <a href="https://www.youtube.com/watch?v=bWEVVh3nRoQ" className="portfolio-single iframe_popup">
                                    <div className="item-box">
                                        <div className="item-image">
                                            <img src="file:///Users/myrandapalomino/Desktop/Dance_Website/NLGIMAGE.jpg" width="510" height="600" className="d-block img-fluid mx-auto" alt="" />
                                        </div>
                                        <div className="item-details d-flex align-items-center">
                                            <div className="item-details-ins text-center w-100">
                                                <div className="mb-2">
                                                    <span className="mbri-video-play"></span>
                                                </div>
                                                <h3>Never Letting Go</h3>
                                                <p>Senior Large Group</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 mb-2 mt-4 seo">
                            <div className="portfolio-item">
                                <a href="https://www.youtube.com/watch?v=AR8WtHwlEpo" className="portfolio-single iframe_popup">
                                    <div className="item-box">
                                        <div className="item-image">
                                            <img src="file:///Users/myrandapalomino/Desktop/Dance_Website/WWIMG.jpg" width="510" height="600" className="d-block img-fluid mx-auto" alt="" />
                                        </div>
                                        <div className="item-details d-flex align-items-center">
                                            <div className="item-details-ins text-center w-100">
                                                <div className="mb-2">
                                                    <span className="mbri-video-play"></span>
                                                </div>
                                                <h3>Woman's Work</h3>
                                                <p>Senior Solo</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-2 mt-4 backenddevelopment">
                            <div className="portfolio-item ">
                                <a href="https://themeforest.net/" target="_blank" className="portfolio-single">
                                    <div className="item-box">
                                        <div className="item-image">
                                            <img src="https://placehold.it/510x600" width="510" height="600" className="d-block img-fluid mx-auto" alt="" />
                                        </div>
                                        <div className="item-details d-flex align-items-center">
                                            <div className="item-details-ins text-center w-100">
                                                <div className="mb-2">
                                                    <span className="mbri-link"></span>
                                                </div>
                                                <h3>Project Title</h3>
                                                <p>Category</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-2 mt-4 frontenddevelopment">
                            <div className="portfolio-item">
                                <a href="https://placehold.it/510x600" className="portfolio-single portfolio-image">
                                    <div className="item-box">
                                        <div className="item-image">
                                            <img src="https://placehold.it/510x600" width="510" height="600" className="d-block img-fluid mx-auto" alt="" />
                                        </div>
                                        <div className="item-details d-flex align-items-center">
                                            <div className="item-details-ins text-center w-100">
                                                <div className="mb-2">
                                                    <span className="mbri-photos"></span>
                                                </div>
                                                <h3>Project Title</h3>
                                                <p>Category</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-2 mt-4 frontenddevelopment">
                            <div className="portfolio-item">
                                <a href="https://placehold.it/510x600" className="portfolio-single portfolio-image">
                                    <div className="item-box">
                                        <div className="item-image">
                                            <img src="https://placehold.it/510x600" width="510" height="600" className="d-block img-fluid mx-auto" alt="" />
                                        </div>
                                        <div className="item-details d-flex align-items-center">
                                            <div className="item-details-ins"></div>
                                            <div className="item-details-ins text-center w-100">
                                                <div className="mb-2">
                                                    <span className="mbri-photos"></span>
                                                </div>
                                                <h3>Project Title</h3>
                                                <p>Category</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center mt-5">
                            <a href="#" className="btn btn-outline-primary"><span><i className="fab fa-dribbble"></i></span> See More</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        


        
       


        
        <section className="resume" id="resume">

            <div className="container d-flex flex-column justify-content-between h-100 ">

                <div className="section-title flex-grow-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2  data-aos="heading-show" className="text_background">
                                    My Experience
                                    <span className="heading_background">Resume</span>
                                </h2>
                                <p className="m-0">Dancer and Choreographer</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-content flex-grow-1">
                    <div className="row mt-4">
                        <div className="col-lg-6">
                            <h3 className="mb-4">Dancer</h3>
                            <ul className="list-inline resume-list">
                                <li>
                                    <h4 className="mb-2">Studio dancer - Southern CA</h4>
                                    <span className="time">1994 - 2010</span>
                                    <p className="my-2">Trained in ballet, jazz, lyrical, contemporary, and hip hop. Won numerous 1st overall titles for solos and group dances at competitiong such as: KAR, Showstoppers, Rainbow, Spotlight, and Move</p>
                                </li>
                                <li>
                                    <h4 className="mb-2">Competition team member - Arizona State University</h4>
                                    <span className="time">2014 - 2016</span>
                                    <p className="my-2">Trained 5 days a week for jazz competition routine which we placed third in the nation. Cheered on the sidelines for football and basketball games. Trained at Master Balley Academy once a week. </p>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                            <h3 className="mb-4">Teacher/Choreographer</h3>
                            <ul className="list-inline resume-list">
                                <li>
                                    <h4 className="mb-2">USA/ Varsity Camps</h4>
                                    <span className="time">2011-2016</span>
                                    <p className="my-2">Taught multiple teams and students across multiple locatins on the West Coast. </p>
                                </li>
                                <li>
                                    <h4 className="mb-2">Dance Deluxe Studio</h4>
                                    <span className="time">2016-2021</span>
                                    <p className="my-2">Taught technique to all ages and levels. Choreographed for company members that compete at competitions around Phoenix Area</p>
                                </li>
                            </ul>
                        </div>


                
                                </div>
                            </div>
                           
                        </div>
                    
                

            

        </section>
        



        
        <section className="blog" id="blog">
            <div className="container d-flex flex-column justify-content-between h-100 ">
                <div className="section-title flex-grow-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2 data-aos="heading-show" className="text_background">
                                    Photography
                                    <span className="heading_background">Blog</span>
                                </h2>
                                <p className="m-0">The standard chunk of Lorem Ipsum used since the 1500s</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-content flex-grow-1">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="news-item mb-5 mb-lg-0">
                                <div className="news-cover">
                                    <img src="https://placehold.it/800x530" width="800" height="530" alt="" className="img-fluid" />
                                </div>
                                <div className="news-content p-4">
                                    <div className="news-title mb-3">
                                        <a href="#" className="blog-permalink">
                                            <h3>How to write website content.</h3>
                                        </a>
                                    </div>
                                    <div className="news-meta d-flex flex-row mb-4">
                                        <div className="news-meta-single mr-3">
                                            <span className="mbri-calendar"></span>
                                            <span className="meta-value">11 March, 2020</span>
                                        </div>
                                        <div className="news-meta-single">
                                            <span className="mbri-user"></span>
                                            <span className="meta-value">by <a href="#">Kevin Miller</a></span>
                                        </div>
                                    </div>
                                    <div className="readMore">
                                        <a href="#" className="btn btn-outline-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="news-item mb-5 mb-lg-0">
                                <div className="news-cover">
                                    <img src="https://placehold.it/800x530" width="800" height="530" alt="" className="img-fluid" />
                                </div>
                                <div className="news-content p-4">
                                    <div className="news-title mb-3">
                                        <a href="#"  className="blog-permalink">
                                            <h3>9 Simple Tips for Graphic Designers</h3>
                                        </a>
                                    </div>
                                    <div className="news-meta d-flex flex-row mb-4">
                                        <div className="news-meta-single mr-3">
                                            <span className="mbri-calendar"></span>
                                            <span className="meta-value">29 March, 2020</span>
                                        </div>
                                        <div className="news-meta-single">
                                            <span className="mbri-user"></span>
                                            <span className="meta-value">by <a href="">Kevin Miller</a></span>
                                        </div>
                                    </div>
                                    <div className="readMore">
                                        <a href="#" className="btn btn-outline-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="news-item mb-5 mb-lg-0">
                                <div className="news-cover">
                                    <img src="https://placehold.it/800x530" width="800" height="530" alt="" className="img-fluid" />
                                </div>
                                <div className="news-content p-4">
                                    <div className="news-title mb-3">
                                        <a href="#" className="blog-permalink">
                                            <h3>How Does Technology Change Lives</h3>
                                        </a>
                                    </div>
                                    <div className="news-meta d-flex flex-row mb-4">
                                        <div className="news-meta-single mr-3">
                                            <span className="mbri-calendar"></span>
                                            <span className="meta-value">15 April, 2020</span>
                                        </div>
                                        <div className="news-meta-single">
                                            <span className="mbri-user"></span>
                                            <span className="meta-value">by <a href="#">Kevin Miller</a></span>
                                        </div>
                                    </div>
                                    <div className="readMore">
                                        <a href="#" className="btn btn-outline-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        
        <section className="contact" id="contact">
            <div className="container d-flex flex-column justify-content-between h-100 ">
                <div className="section-title flex-grow-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2  data-aos="heading-show" className="text_background">
                                    Get in Touch
                                    <span className="heading_background">Contact Me</span>
                                </h2>
                                <p className="m-0">For quickest response, contact via email.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-content flex-grow-1">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="d-flex flex-row flex-sm-column flex-md-row justify-content-md-center mb-3 text-left text-sm-center text-md-left">
                                <div className="contact-icon mr-md-3 mr-3 mr-sm-0">
                                    <span className="mbri-letter"></span>
                                </div>
                                <div className="contact-details mt-2">
                                    <h5>Email Us</h5>
                                    <p><a href="mailto:myranda.palomino@gmail.com">myranda.palomino@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="d-flex flex-row flex-sm-column flex-md-row justify-content-md-center mb-3 text-left text-sm-center text-md-left">
                                <div className="contact-icon mr-md-3 mr-3 mr-sm-0">
                                    <span className="mbri-mobile"></span>
                                </div>
                                <div className="contact-details mt-2">
                                    <h5>Call</h5>
                                    <p><a href="tel:+1000123456789">+1 623 272 9356</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="d-flex flex-row flex-sm-column flex-md-row justify-content-md-center mb-3 text-left text-sm-center text-md-left">
                                <div className="contact-icon mr-md-3 mr-3 mr-sm-0">
                                    <span className="mbri-map-pin"></span>
                                </div>
                                <div className="contact-details mt-2">
                                    <h5>Visit</h5>
                                    <p>Dallas, TX USA</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <form action="php/form.php" method="post" id="contact-form">
                                <div className="row">
                                    <div className="col-lg-6 mt-3">
                                        <div className="form-group">
                                            <input type="text" name="name" id="name" className="form-control" autocomplete="off" required />
                                            <label>Full Name</label>
                                        </div>
                                     
                                    <div className="col-lg-6 mt-3">
                                        <div className="form-group">
                                            <input type="email" name="email" id="email" className="form-control" autocomplete="off" required /> 
                                            <label>Email</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <div className="form-group">
                                            <input type="text" name="subject" id="subject" className="form-control" autocomplete="off" required />
                                            <label>Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <div className="form-group">
                                            <textarea name="text" id="text"  rows="6" className="form-control" required></textarea>
                                            <label>Message</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" id="contact-btn" className="btn btn-outline-primary btn-bg">
                                                Send Message
                                            </button>
                                        </div>
                                   </div>
                              </div>
                              </div>
                            </form>
                        </div>
                    </div>

                </div>


            </div>
        </section>
        
        <footer className="horizontal-footer shadow-footer">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-md-12">
                        <div className="text-center">
                            <ul className="social-icons list-inline mt-5">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-pinterest-p"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-git"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-tumblr"></i>
                                    </a>
                                </li>
                            </ul>
                            <p className="copyright-text mt-3 mb-5">2021 ©. </p>
                        </div>
                    </div>
                </div> 
            </div>
               
               
           
        </footer>
    </main>
    
    
    <a href="#" className="toTop" id="return-to-top">
        <i className="fas fa-chevron-up"></i>
    </a>
    

    
    <script src="./assets/js/jquery.js"></script>
    <script src="./assets/js/popper.min.js"></script>
    <script src="./assets/js/bootstrap.min.js"></script>
    <script src="./assets/js/jquery.easing.min.js"></script>
    <script src="./assets/js/jquery.appear.min.js"></script> 
    <script src="./assets/js/jquery.countTo.js"></script> 
    <script src="./assets/js/scrollspy.js"></script>
    <script src="./assets/js/jquery.magnific-popup.min.js"></script>
    <script src="./assets/js/owl.carousel.min.js"></script>
    <script src="./assets/js/aos.js"></script>
    <script src="./assets/js/typed.min.js"></script>
    <script src="./assets/js/particles.min.js"></script>
    <script src="./assets/js/alert.js"></script>
    <script src="./assets/js/contact.js"></script>
    <script src="./assets/js/custom.js"></script>
</body>
      
    </div>
  );
}
}

export default App;
