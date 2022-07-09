import {Link} from 'react-router-dom';
import React, {Component} from 'react';

class Navbar extends Component {
    render(){
        return (<nav>
            <Link to='/'>Home</Link>
            <Link to='completed'>Completed</Link>
        </nav>
        );
    }
}

export default Navbar;