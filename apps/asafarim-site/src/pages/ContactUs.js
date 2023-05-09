import React from 'react';
import emailjs from 'emailjs-com';
import './styles.module.css';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('asafarimID', 'template_jm8g597', e.target, 'user_lEHCRP2fqcxf8XhRIYCwO')
            .then((result) => {
                console.log(result.text);
                alert("Message Sent, We will get back to you shortly!", result.text);
            }, (error) => {
                console.log(error.text);
                alert("An error occurred, Please try again", error.text);
            });
    }

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2 className="title">Contact Us</h2>
                            <p>Let us know what you think! In order to provide better service,
                                please do not hesitate to give us your feedback. Thank you.</p><hr />

                            <form className="contact-form" onSubmit={sendEmail}>
                                <input type="hidden" name="contact_number" />
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input placeholder="Name" className="form-control" type="text" name="user_name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input placeholder="Email" className="form-control" type="email" name="user_email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input placeholder="Subject" type="text"
                                        className="form-control" name="email_subject" />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Message" name="message" className="form-control" rows="10" />
                                </div>
                                <input className="primary-btn submit" type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}