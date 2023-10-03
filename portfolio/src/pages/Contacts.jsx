import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "./Contacts.scss";

function Contacts() {
    const { register, handleSubmit } = useForm();

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const userId = import.meta.env.VITE_USER_ID;

    const sendEmail = (data, e) => {
        e.preventDefault();

        emailjs.send(serviceId, templateId, data, userId)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div className="forms-div">
            <div className="container">
                <div className="text">Contact me!</div>
                <form onSubmit={handleSubmit(sendEmail)}>
                    <div className="form-row">
                        <div className="input-data">
                            <input 
                                {...register('firstName')} 
                                type="text" 
                                required 
                            />
                            <div className="underline"></div>
                            <label>First Name</label>
                        </div>
                        <div className="input-data">
                            <input 
                                {...register('lastName')} 
                                type="text" 
                                required 
                            />
                            <div className="underline"></div>
                            <label>Last Name</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input 
                                {...register('email')} 
                                type="text" 
                                required 
                            />
                            <div className="underline"></div>
                            <label>Email Address</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data textarea">
                            <textarea 
                                {...register('message')} 
                                rows="8" 
                                cols="80" 
                                required
                            ></textarea>
                            <div className="underline"></div>
                            <label>Write your message</label>
                        </div>
                    </div>
                    <div className="form-row submit-btn">
                        <div className="input-data">
                            <div className="inner"></div>
                            <input type="submit" value="submit" />

                            {/* react snackbar procurar */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
