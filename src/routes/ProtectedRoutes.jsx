/* eslint-disable react/prop-types */
import { useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    // Dummy User
    const [user, setUser] = useState({});

    // Conditional Rendering Based on User
    return user ? children : <Navigate to={"/"}/>;
};

export default ProtectedRoute;