import React from 'react';
import { useParams, useLocation, useHistory } from "react-router-dom";

const User = () => {
    const { fname, lname } = useParams();
    const history = useHistory();
    const location = useLocation();
    return (
        <>
            <h1>user  {fname} {lname} page</h1>
            <p>My currunt location is {location.pathname} </p>
            {location.pathname === `/user/munesh/kumar` ? (
                <button onClick={() => history.push("/")}> About Home </button>
            ) : null}
        </>
    );
}
export default User;
