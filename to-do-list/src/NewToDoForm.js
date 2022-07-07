import React, {Component} from "react";

class NewToDoForm extends Component {
    render () {
        return (<form>
            <label>
                What do you have to do?
                <input 
                type="text"
                placeholder="Add a new to do"
                />
            </label>
            <input
            type="submit"
            value="Send"
            />
        </form>
        );
    }
}

export default NewToDoForm;