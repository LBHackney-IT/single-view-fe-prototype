import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { isLoggedIn } from "../Auth";

export const PrivateRoute = ({ children, ...props }: RouteProps) => {
    return (
        <Route
            {...props}
            render={() => {
                return isLoggedIn()
                    ? children
                    : <Redirect to="/login" />
            }}
        />
    );
}
