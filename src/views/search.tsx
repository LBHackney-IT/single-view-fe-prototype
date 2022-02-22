import React, { useState } from "react";
import { CallerList } from "../components/CallerList";
import { Notes } from "../components/Notes";
import { CallHistory } from "../components/CallHistory";
import { PersonSummary } from "../components/PersonSummary";
import { Addresses } from "../components/Addresses";
import { ContactInfo } from "../components/ContactInfo";
import { ScratchPad } from "../components/ScratchPad";
import {
  PersonalDetails,
  Note,
  VonageEvent,
} from "../interfaces/viewInterfaces";

export const SearchView = (): JSX.Element => {
  const [submitted, setSubmitted] = useState(false);
  const [showPersonalDetails, setShowPersonalDetails] = useState(true);
  const [showNotes, setShowNotes] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>();
  const [notes, setNotes] = useState<Note[]>([]);
  const [VonageEvents, setVonageEvents] = useState<VonageEvent[]>([]);
  const [showSearchError, setShowSearchError] = useState(false);

  if (submitted && personalDetails) {
    return (
      <>
        <div className="navBar">
          <button
            className="govuk-button lbh-button"
            data-module="govuk-button"
            onClick={(e) => {
              setSubmitted(false);
              setShowSearchError(false);
            }}
          >
            Search again
          </button>
          <div></div>
          <a
            className="govuk-tabs__tab"
            href="#personaldetails"
            onClick={(e) => {
              setShowPersonalDetails(true);
              setShowNotes(false);
            }}
          >
            Personal Details
          </a>

          <a
            className="govuk-tabs__tab"
            href="#notes"
            onClick={(e) => {
              setShowPersonalDetails(false);
              setShowNotes(true);
            }}
          >
            Notes
          </a>
        </div>

        <div hidden={!showPersonalDetails}>
          <div>
            <PersonSummary PersonalDetails={personalDetails} />

            <ContactInfo PersonalDetails={personalDetails} />

            <Addresses PersonalDetails={personalDetails} />
          </div>
        </div>

        <div hidden={!showNotes}>
          <div className="govuk-grid-column-one-half">
            <CallHistory VonageEvents={VonageEvents} />
          </div>
          <div className="govuk-grid-column-one-half">
            <Notes Notes={notes} PhoneNumber={phoneNumber} />
          </div>
        </div>

        <div className="scratchpad">
          <ScratchPad />
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1 className="lbh-heading-h1">Welcome to Single View</h1>
        <h3 className="lbh-heading-h3">Search by phone number</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loadRecord(phoneNumber);
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
          <CallerList loadRecord={loadRecord} />
        </div>
      </>
    );
  }

  function loadRecord(phoneNumber: string) {
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
