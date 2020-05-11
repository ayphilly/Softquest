import React , {Component} from 'react';
import './preload.css';
import brand from '../svg/SQ.svg';

export class Preload extends Component {
    
    render () {
        return (
            <div className="preload-container">
                <div className="preload-brand">
                        <img src={brand} className="App-preload" alt="Brand"/>
                </div>
            </div>
        )
    }
}

