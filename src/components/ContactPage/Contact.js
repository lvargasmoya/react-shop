import React from 'react'
import Title from '../Title';
export default function Contact() {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact us"></Title>
                    <form action="https://formspree.io/xlegqogw" method="POST" className="mt-5">
                        {/*FirstName*/}
                        <div className="form-group">
                            <input type="text" name="firstName" id="" className="form-control" placeholder="John Smith" />
                        </div>
                        {/*email*/}
                        <div className="form-group">
                            <input type="email" name="email" id="" className="form-control" placeholder="email@email.com" />
                        </div>
                        {/*subject*/}
                        <div className="form-group">
                            <input type="text" name="subject" id="" className="form-control" placeholder="important!" />
                        </div>
                        {/*message*/}
                        <div className="form-group">
                            <textarea name="message" className="form-control" rows="10" placeholder="Leave your message"></textarea>
                        </div>
                        {/*message*/}
                        <div className="form-group mt-3">
                            <input type="submit" className="form-control bg-primary text-white" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
