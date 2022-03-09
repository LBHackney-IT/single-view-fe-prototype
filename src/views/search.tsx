import React, { useState } from "react";
import { CallerList } from "../components/CallerList";

export const SearchView = (): JSX.Element => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showSearchError, setShowSearchError] = useState(false);

    const search = (value: string): string | void => {
        let personId = JSON.parse(localStorage.getItem("keyByPhone") || "{}")[value];

        console.log(personId)
        if (! personId) {
            return;
        }
        return personId;
    }

    return (
      <>
        <h1 className="lbh-heading-h1">Welcome to Single View</h1>
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
          <div className="govuk-form-group lbh-form-group">
            <input
              className="govuk-input lbh-input"
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={onSearchChange}
            />
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
          <button
            className="govuk-button lbh-button"
            data-module="govuk-button"
          >
            Search
          </button>
        </form>
        <div className="lbh-container sv-space-t">
          <h3 className="lbh-heading-h3">Live Calls</h3>
          <CallerList />
        </div>
      </>
    );

  function onSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhoneNumber(e.target.value);
    setShowSearchError(false);
  }
};
