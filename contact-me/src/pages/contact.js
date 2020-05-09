import React, {Component} from 'react';
import build from '../svg/drawkit.svg';
import './contact.css'
import history from '../history'

export class Contact extends Component {

    formSub = ()=> {
        
        history.push('thankyou')
    }
    render () {
        return (
            <div  id="contact">
                <div className="contact-form-div">
                    
                    <div className="contact-svg">
                        <img src={build} className="contact-svg-im" alt="Brand"/>
                    </div>  

                    <div className= "contact-form">
                        <form>
                            <h3>
                                Welcome, Softquest
                            </h3>
                            <div className="names">
                                <div className="first-name">
                                    <label for="inputFirstName">FIRST NAME</label>
                                    <input type="text" className="fname" id="fname" name="fname" placeholder="First Name"></input>
                                </div>
                                <div className="last-name">
                                    <label for="inputLastName">LAST NAME</label>
                                    <input type="text" className="lname" name="lname" id="lname" placeholder="Last Name"></input>
                                </div>
                                
                            </div>
                            <div className="contact">
                                <div className="mail">
                                    <label for="Email">E-MAIL</label>
                                    <input type="text" className="email" name="email" id="Email" placeholder="Email"></input>
                                </div>
                                <div className="phone-number">
                                    <label for="inputNumber">PHONE NUMBER</label>
                                    <input type="text" className="number" id="pnumber" placeholder="+234"></input>
                                </div>         
                            </div>
                            <div className="textarea-input">
                                <div className="big-text">
                                    <label for="service-text">SERVICE</label>
                                    <textarea type="text" className="service-text" name="service-text" placeholder="Type Something" cols="30" rows="3"></textarea>
                                </div>                                    
                                    
                            </div>                           
                        </form>
                        <button type="submit" className="button-submit" onClick={() => history.push('/thankyou')}>SUBMIT</button> 
                    </div>             
                </div>
            </div>
        )
    }
}