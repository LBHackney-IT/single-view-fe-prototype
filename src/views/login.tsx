import React, { useState } from "react";
import { login } from "../auth";

export const LoginView = (): JSX.Element => {
    const [fullName, setFullName] = useState("");

    const handleLogin = (event: React.SyntheticEvent) => {
        event.preventDefault();
        login(fullName) && (window.location.href = "/");
    }

    return (
        <>
            <h1 className="lbh-heading-h1">Sign in</h1>
            <form onSubmit={handleLogin} method="POST">
                <div className="govuk-form-group lbh-form-group">
                <label className="govuk-label lbh-label">Full Name</label>
                    <input
                    className="govuk-input lbh-input"
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    />
                </div>
                <button
                    className="govuk-button lbh-button"
                    type="submit"
                >
                    Sign in
                </button>
            </form>
        </>
    );
}
