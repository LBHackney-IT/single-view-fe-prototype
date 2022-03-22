import { CallerList } from "../../components/CallerList";
import React, { useState } from "react";

export const SearchByPhone = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showSearchError, setShowSearchError] = useState(false);

    const search = (value: string): string | void => {
        let personId = JSON.parse(
            localStorage.getItem("keyByPhone") || "{}"
        )[value];
        if (! personId) {
            return;
        }
        return personId;
    }

    function onSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPhoneNumber(e.target.value);
        setShowSearchError(false);
      }
    
    return (
        <>
            <p className="lbh-body-s">
                <a href="/search?context=person">Search by a resident instead</a>
            </p>
            <h3 className="lbh-heading-h3">Search by phone number</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    let personId = search(phoneNumber);
                    if (! personId) {
                        setShowSearchError(true);
                        return;
                    }
                    window.location.href = "/records/" + personId;
                }}
            >
                <div className="govuk-form-group lbh-form-group lbh-search-box">
                    <label className="govuk-visually-hidden" htmlFor="search"> Search </label>
                    <input
                        className="govuk-input lbh-input govuk-input--width-10"
                        id="search"
                        name="search"
                        type="search"
                        placeholder="Search..."
                        value={phoneNumber}
                        onChange={onSearchChange}
                        />
                    <button className="lbh-search-box__action">
                        <span className="govuk-visually-hidden">Search</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.6999 10.6C12.0747 10.6 13.9999 8.67482 13.9999 6.3C13.9999 3.92518 12.0747 2 9.6999 2C7.32508 2 5.3999 3.92518 5.3999 6.3C5.3999 8.67482 7.32508 10.6 9.6999 10.6ZM9.6999 12.6C13.1793 12.6 15.9999 9.77939 15.9999 6.3C15.9999 2.82061 13.1793 0 9.6999 0C6.22051 0 3.3999 2.82061 3.3999 6.3C3.3999 9.77939 6.22051 12.6 9.6999 12.6Z"
                            fill="#0B0C0C"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.70706 10.7071L1.70706 15.7071L0.292847 14.2929L5.29285 9.29289L6.70706 10.7071Z"
                            fill="#0B0C0C"
                        />
                        </svg>
                    </button>
                </div>
            {showSearchError && (
                <span
                className="govuk-error-message lbh-error-message"
                style={{ marginTop: "1rem" }}
                >
                <span className="govuk-visually-hidden">Error:</span> No contact
                found with this number
                </span>
            )}
            </form>
            <div className="lbh-container sv-space-t">
            <h3 className="lbh-heading-h3">Live Calls</h3>
            <CallerList />
            </div>
        </>
    );
}