import React, {Component} from 'react';
import build from '../svg/drawkit.svg';
import './contact.css'
import history from '../history'
import {Footer} from '../component/footer'

export class Contact extends Component {

    state = {
        firstname: '',
        lastname : '',
        email: '',
        number : '',
        need : '',
        error:''
    }
    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.firstname ==="" ||this.state.lastname===""||this.state.email===""||this.state.number==="") {
            this.setState({
                error: "some fields are empty"
            })
            return;
        }

        //const data = new FormData(event.target);       
        fetch('http://localhost:4000/api/contact', {
          method: 'POST',
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json'            
          },
          body: JSON.stringify(this.state),
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })     
        

        history.push('thankyou')
    }

    handleChange1 = (event) => {
        this.setState({ firstname: event.target.value })
    }
    handleChange2 = (event) => {
        this.setState({ lastname: event.target.value })
    }
    handleChange3 = (event) => {
        this.setState({ email: event.target.value })
    }
    handleChange4 = (event) => {
        this.setState({ number: event.target.value })
    }
    handleChange5 = (event) => {
        this.setState({ need: event.target.value })
    }



    
    render () {
        
        return (
            <div  id="contact">
                <div className="contact-form-div">
                    
                    <div className="contact-svg">
                        <img src={build} className="contact-svg-im" alt="Brand"/>
                    </div>  

                    <div className= "contact-form">
                        <form >
                            <h3>
                                Welcome, Softquest <br/> Systems LTD
                            </h3>
                            <div className="names">
                                <div className="first-name">
                                    <label htmlFor="firstname">FIRST NAME</label>
                                    <input type="text" value={this.state.firstname} onChange={this.handleChange1} className="firstname" id="firstname" name="firstname" placeholder="First Name"></input>
                                </div>
                                <div className="last-name">
                                    <label htmlFor="lastname">LAST NAME</label>
                                    <input type="text" value={this.state.lastname} onChange={this.handleChange2} className="lastname" name="lastname" id="lastname" placeholder="Last Name"></input>
                                </div>
                                
                            </div>
                            <div className="contact">
                                <div className="mail">
                                    <label htmlFor="email">E-MAIL</label>
                                    <input type="text" value={this.state.email} onChange={this.handleChange3} className="email" name="email" id="Email" placeholder="Email"></input>
                                </div>
                                <div className="phone-number">
                                    <label htmlFor="number">PHONE NUMBER</label>
                                    <input type="text" value={this.state.number} onChange={this.handleChange4} className="number" name="number" id="number" placeholder="+234"></input>
                                </div>         
                            </div>
                            <div className="textarea-input">
                                <div className="big-text">
                                    <label htmlFor="need">SERVICE</label>
                                    <textarea type="text" value={this.state.need} onChange={this.handleChange5} className="need" name="need" placeholder="Type Something" cols="30" rows="3"></textarea>
                                </div>                                    
                                    
                            </div> 
                            {this.state.error && <p className="error">{this.state.error}</p>}   
                            <button type="submit" className="button-submit" onClick={this.handleSubmit}>SUBMIT</button>                        
                        </form>
                        
                    </div>             
                </div>
                <Footer/>
            </div>
           
        )
    }
}