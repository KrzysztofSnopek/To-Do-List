import React, {Component} from "react";
import { NewToDoForm } from "./NewToDoForm.tsx";

class Home extends Component {
    render(){
        return (
        <div>
            <NewToDoForm />
        </div>
        );
    }
}

export default Home;