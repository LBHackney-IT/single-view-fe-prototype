import React, { useState } from "react";
import { CallerList } from "../components/CallerList";
import { Notes } from "../components/Notes";
import { CallHistory } from "../components/CallHistory";
import { Addresses } from "../components/Addresses";
import { ContactInfo } from "../components/ContactInfo";
import {
  PersonalDetails,
  Note,
  VonageEvent,
} from "../interfaces/viewInterfaces";

export const SearchView = (): JSX.Element => {
  const [submitted, setSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>();
  const [notes, setNotes] = useState<Note[]>([]);
  const [VonageEvents, setVonageEvents] = useState<VonageEvent[]>([]);
  const [showSearchError, setShowSearchError] = useState(false);

  if (submitted && personalDetails) {
    return (
      <>
        <button
          className="govuk-button lbh-button"
          data-module="govuk-button"
          onClick={(e) => {
            setSubmitted(false);
          }}
        >
          Search again
        </button>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-third">
            <h2 className="govuk-heading-l">
              {personalDetails.title_refcode} {personalDetails.full_name}
            </h2>
            <dl className="govuk-summary-list lbh-summary-list">
              <div className="govuk-summary-list__row">
                <dt className="govuk-summary-list__key govuk-!-width-one-half">
                  Date of birth
                </dt>
                <dd className="govuk-summary-list__value">
                  {personalDetails.date_of_birth}
                </dd>
              </div>
            </dl>

            <ContactInfo PersonalDetails={personalDetails} />

            <Addresses PersonalDetails={personalDetails} />
          </div>

          <div className="govuk-grid-column-two-thirds">
            <Notes Notes={notes} PhoneNumber={phoneNumber} />
            <CallHistory VonageEvents={VonageEvents} />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Welcome to Single View</h1>
        <h2>Search by phone number</h2>
        <form onSubmit={onSearchSubmit}>
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
        <div className="lbh-container">
          <h2>Live Calls</h2>
          <CallerList />
        </div>
      </>
    );
  }

  function onSearchSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    let data = JSON.parse(localStorage.getItem(phoneNumber) || "{}");

    if (!data.PersonalDetails) {
      setShowSearchError(true);
      return;
    }

    setSubmitted(true);
    setPersonalDetails(data.PersonalDetails);
    setNotes(data.notes || []);
    setVonageEvents(data.vonage_events || []);
  }

  function onSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhoneNumber(e.target.value);
    setShowSearchError(false);
  }
};
