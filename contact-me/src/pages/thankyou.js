import React, {Component} from 'react';
//import error from '../svg/error.svg';
import thankyou from '../svg/thankyou.svg';
import './thankyou.css';
import {Preload} from './preload'
//import { Link } from 'react-router-dom';

export class ThankYou extends Component {
    
    state = {
        loader : true
    }

    componentDidMount () {
        setTimeout(()=>{
            this.setState({
                loader:false
            })
        }, 1000)

        clearTimeout();
    }

    
    render () {
        if (this.state.loader) {
            return (
                <Preload/>
            )
        }
        else {
            return (
                <div className="thankyou">
                    <div className="thank-box">
                        <div className="thank-svg">
                            <img src={thankyou} className="thank-svg-im" alt="Brand"/>
                        </div>
                        <div className="thank-text">
                            <h3> <span role="img" >&#128151;</span>  Thank You, We’ll <br/>Contact You Soon. </h3>
                        </div>
                    </div>
    
                </div>
            )
        }
        
    }
}