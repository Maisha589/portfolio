import React from 'react';
import emailjs from '@emailjs/browser';


const ContactMe = () => {


    const sendEmail = e => {
        const templateParams = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        };
        e.preventDefault();

        emailjs.send('gmail', 'template_77j60ul', templateParams, 'a4h2_PfgjySNtDq6U')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
        e.target.reset();
    }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1">
                <div>
                    <img alt='' src="https://i.ibb.co/98jD03g/Pink-Illustration-Creative-Portfolio-Presentation.png" /></div>
                <div>
                    <h1 className="text-5xl font-bold text-primary">Send Email</h1>
                    <form onSubmit={sendEmail}>
                        <input type="text" placeholder="Your name" className="input input-bordered input-primary m-3 w-full max-w-xs" name='name' /><br />
                        <input type="email" placeholder="your email" className="input input-bordered input-primary mb-3 w-full max-w-xs" name='email' /><br />
                        <input type="text" placeholder="subject" className="input input-bordered input-primary mb-3 w-full max-w-xs" name='subject' /><br />
                        <input type="text" placeholder="message" className="input input-bordered input-primary mb-3 w-full max-w-xs" name='message' /><br />
                        <input type="submit" value="Send email" className="btn btn-primary w-full max-w-xs" />
                    </form>


                </div>
            </div>
        </div>
    );
};

export default ContactMe;