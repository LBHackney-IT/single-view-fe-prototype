import React from "react";
import { v4 as uuid } from "uuid";

export const login = (fullName: string): boolean => {
    if (! fullName) {
        logout();
        return false;
    }

    sessionStorage.setItem("auth", JSON.stringify({
        id: uuid(),
        name: fullName
    }));

    return true;
};

export const logout = (): void => {
    sessionStorage.removeItem("auth");
    window.location.href = "/login";
};

export const isLoggedIn = (): boolean => {
    return sessionStorage.getItem("auth") !== null;
}
