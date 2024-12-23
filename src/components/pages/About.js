import React from 'react';
import '../../App.css';
import '../styles/About.css';
import { Link } from 'react-router-dom';
import resume from '../../assets/resume.pdf';
import headshot2 from '../../assets/about_pics/headshot2.jpg'
import habitat from '../../assets/about_pics/habitat.jpg'

export default function About() {
    return (
        <>
            <div className='bio'>
                <div className='bio-intro'>
                    <h1>Hi, I'm David Krupar!</h1>
                </div>
                <div className='bio-pic'>
                    <img src={headshot2} alt="david krupar himself" width="100%" height="100%" />
                </div>
            </div>

            <div className='bio-container'>
                <p>
                Welcome! I’m David Krupar, a passionate full stack software engineer with three years of experience in developing software solutions. 
                    My journey in software engineering has equipped me with a strong foundation in various programming languages and frameworks, allowing me to adapt and excel in diverse projects.
                    I am skilled in languages such as JavaScript, Java, SQL, and Python, and I have experience with frameworks like Vue and React. My expertise extends to areas like RESTful APIs, Docker, and Agile methodologies, enabling me to build efficient and scalable solutions.
                </p>
            </div>

            <div className='bio'>
                <div className='bio-text'>
                    <h2>What matters the most...</h2><br />
                    <p>I believe in being a productive and decent human being.  I entered the computer science field after a long stretch of time in the business of logistics.  
                        While I did consider it serving a greater good, ensuring reliable transport of life saving materials, I felt something was missing in my life.  
                        Training in the field of IT and software development is my path to accomplishing the things that matter most, being a productive and decent person.  
                        Software allows us to become incredibly productive by saving time and preventing errors in judgement.  It allows us the freedom to surround ourselves with friends and family when we are called upon.  
                        Since leaving the logistics field, I have spent over 500 documented hours at various charitable and non-profit organizations.  This is my solution to being a decent person.
                        Give to those in need, gain some humility, and do it all with a smile on your face.
                    
                    </p>
                    <br/>
                </div>
                <div className='bio-pic'>
                    <img src={habitat} alt="SC awards" width="100%" height="100%" />
                </div>

            </div>

            <div className='button-bar'>
                <a className='about-btn' href={resume}>resume</a>

                <Link to='/portfolio' className='about-btn'>
                    portfolio <i class="fas fa-chevron-right"></i>
                </Link>

                <Link to='/contact' className='about-btn'>
                    contact <i class="fas fa-chevron-right"></i>
                </Link>
            </div>
        </>
    );
}