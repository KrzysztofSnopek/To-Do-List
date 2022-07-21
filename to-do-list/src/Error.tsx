import React from "react";
import {Link} from "react-router-dom";

export default function Error(): JSX.Element {
    return (
    <div>
        <h2>404</h2>
        <p>Page not found</p>
        <Link to='/'>Go back home</Link>
    </div>
    )
}

