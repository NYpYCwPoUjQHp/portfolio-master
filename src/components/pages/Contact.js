import React from 'react';
import '../../App.css';
import '../styles/Contact.css';
import '../styles/Button.css';
import Clipboard from 'clipboard';

const clip = new Clipboard('.copy');
clip.on("success", function () {
    alert("David's email was copied to your clipboard!");
});
clip.on("error", function () {
    alert("Could not copy email address");
});

class Contact  {


    

    render() {
        return (
            <>
            <div className='contact-title'>
            Please copy my email address by clicking the mail icon, or message me on LinkedIn
                </div>
                <div className='grid-container'>
                    <div className='grid-item'>
                        <div className='tooltip'>
                            <div className="copy" data-clipboard-text='davidkrupar@gmail.com'>
                                <i class="fas fa-envelope"></i>
                            </div>
                            <span className='tooltiptext'>Copy my email</span>
                        </div>
                    </div>

                    <div className='grid-item'>
                        <div className='tooltip'>
                            <a className='LI-logo' href="https://www.linkedin.com/in/davidkrupar">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <span className='tooltiptext'>Message me on LinkedIn</span>
                        </div>
                    </div>
                </div>

                
            </>
        )
    }
}

export default Contact;