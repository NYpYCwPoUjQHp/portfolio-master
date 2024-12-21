import React from 'react';
import '../../App.css';
import '../styles/Immuta.css';
import { Link } from 'react-router-dom';


function PreviousCareer() {

    return (
        <>
            <body>
            <div className='experience-top'>
                <div>
                    <Link to='/portfolio' className="pointer">
                        <i class="fas fa-chevron-left"></i>
                    </Link>
                </div>
            </div>
                <div id='career-1'>
                    <div className='grid-title'>
                        Westglades Middle School
                    </div>
                    <div className='center'>
                        <div>
                            <br />
                            <h3>
                                Band Director &nbsp; August 2017 - June 2018 &nbsp; Parkland, FL
                            </h3>
                        </div>
                    </div>
                </div>

                <div id='career-2'>
                    <div className='grid-title'>
                        DuBose Middle School
                    </div>
                    <div className='center'>
                        <div>
                            <br />
                            <h3>
                                Band Director &nbsp; August 2018 - June 2019 &nbsp; Summerville, SC
                            </h3>
                        </div>
                    </div>

                    <div className='exp-box'>
                        <br />
                        * Both band programs consisted of 220+ students from grades 6-8.
                        <br /><br />
                        * Led the band booster parent organization, where we organized fundraisers, field trips, social events, and concerts.
                        <br /><br />
                        * Fostered a culture of excellence by planning additional before/after school rehearsals and running an after-school private lesson program.
                        <br /><br />
                        * During summer break, I would continue to teach at the <a className='link' href='https://camp.musicforall.org/drum-major-institute-a-never-ending-opportunity-to-learn/'>Drum Major Institute at the Music For All Summer Symposium</a>, as well as 
                        other summer music camps.
                        <br /><br />
                    </div>
                </div>

                
            </body>

        </>
    );
}
export default PreviousCareer;



