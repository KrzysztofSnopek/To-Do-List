import {Link} from 'react-router-dom';
import {Component} from 'react';
import { StyledNavbar } from './styles/Navbar.styled';
import { NavbuttonStyled } from './styles/NavButton.styled';

class Navbar extends Component {
    render(){
        return (<StyledNavbar>
            <Link to='/'><NavbuttonStyled>Home</NavbuttonStyled></Link>
            <Link to='completed'><NavbuttonStyled>Completed</NavbuttonStyled></Link>
        </StyledNavbar>
        );
    }
}

export default Navbar;