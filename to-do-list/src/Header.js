import React, {Component} from "react";
import NavButton from "./NavButton";

class Header extends Component {
    render(){
        return <div>
            <NavButton />
            <NavButton />
            <NavButton />
        </div>
    }
}

export default Header;