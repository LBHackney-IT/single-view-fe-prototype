import React from "react";
import { v4 as uuid } from "uuid";

export interface AuthUser {
    id: string;
    name: string;
}

const getAuthUser = (): AuthUser => {
    let user = sessionStorage.getItem("auth");
    if (user === null) {
        return { id: "", name: "" };
    }

    return JSON.parse(user);
}

export const login = (fullName: string): boolean => {
    if (! fullName) {
        logout();
        return false;
    }

    let user: AuthUser = {
        id: uuid(),
        name: fullName
    };

    sessionStorage.setItem("auth", JSON.stringify(user));

    return true;
};

export const logout = (): void => {
    sessionStorage.removeItem("auth");
    window.location.reload();
};

export const isLoggedIn = (): boolean => {
    return !! authUser.id;
}

export const authUser = getAuthUser();
