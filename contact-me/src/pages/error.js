import React, {Component} from 'react';
//import error from '../svg/error.svg';
import error from '../svg/notfound.svg';
import './error.css';
import { Link } from 'react-router-dom';

export class Error extends Component {
    render () {
        return (
            <div className="error">
                <div className="error-box">
                    <div className="error-svg">
                        <img src={error} className="error-svg-im" alt="Brand"/>
                    </div>
                    <div className="error-text">
                        <h3> <span role="img">&#128532;</span>  Sorry, We Can't Find The <br/> Page You're Looking For.</h3>
                        <Link className="error-link" to="/">                            
                            back to home page
                        </Link>

                    </div>
                </div>

            </div>
        )
    }
}