import React, {Component} from "react";
import {Link} from "react-router-dom";

class Error extends Component {
    render(){
        return <div>
            <h2>404</h2>
            <p>Page not found</p>
             <Link to='/'>Go back home</Link>
        </div>
    };
}

export default Error;
