import React, { useState } from "react";
import { CallerList } from "../components/CallerList";

interface PersonalDetails {
    PersonalDetails: {
        full_name: string,
        date_of_birth: string,
        title_refcode: string,
        Addresses: [
            {
                address_contact_type_refcode: string,
                address_line_1: string,
                address_line_2: string,
                address_line_3: string,
                address_line_4: string,
                address_line_5: string,
                postal_code: string,
                post_box: string,
                district: string,
                city: string,
                area: string,
                region: string,
                locality: string,
                country_2l: string,
                latitude: string,
                longitude: string,
                last_updated_date: string,
            }
        ],
        contacts: [
            {
                description: string,
                value: string,
            }
        ],
        Emails: [
            {
                MainEmail: {
                    email_address: string
                }
            }
        ]
        notes: [
            {
                title: string,
                description: string,
                createdAt: string,
                author: {
                    fullname: string,
                }
            }
        ]
    }
}

interface VonageEvent {
    phone_number: string,
    service_name: string,
    call_direction: string,
    start_time: string,
    duration: string,
}

export const SearchView = (): JSX.Element => {
  const [submitted, setSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>()

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
                {personalDetails.PersonalDetails.title_refcode}
                {" "}
                {personalDetails.PersonalDetails.full_name}
            </h2>
            <dl className="govuk-summary-list lbh-summary-list">
              <div className="govuk-summary-list__row">
                <dt className="govuk-summary-list__key govuk-!-width-one-half">
                  Date of birth
                </dt>
                <dd className="govuk-summary-list__value">
                    {personalDetails.PersonalDetails.date_of_birth}
                </dd>
              </div>
            </dl>

            <div className="lbh-container">
              <h3 className="govuk-heading-m">Contact Information</h3>
              <dl className="govuk-summary-list lbh-summary-list">
                <div className="govuk-summary-list__row">
                  <dt className="govuk-summary-list__key govuk-!-width-one-half">
                    Phone numbers
                  </dt>
                  <dd className="govuk-summary-list__value">
                      {personalDetails.PersonalDetails.contacts.map((contact, index) => {
                          return (
                              <div key={index} className="govuk-body">
                                  <p>{contact.value}</p>
                              </div>
                          );
                      })}
                  </dd>
                </div>
                <div className="govuk-summary-list__row govuk-summary-list__row--no-border">
                  <dt className="govuk-summary-list__key govuk-!-width-one-half">
                    Email
                  </dt>
                  <dd className="govuk-summary-list__value">
                      {personalDetails.PersonalDetails.Emails[0].MainEmail.email_address}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lbh-container">
              <h3 className="govuk-heading-m">Addresses</h3>
              <dl className="govuk-summary-list lbh-summary-list">
                <div className="govuk-summary-list__row govuk-summary-list__row--no-border">
                  <dt className="govuk-summary-list__key govuk-!-width-one-half">
                    Known addresses
                  </dt>
                  <dd className="govuk-summary-list__value">
                    {personalDetails.PersonalDetails.Addresses.map((address, index) => {
                        return (
                            <div key={index}>
                                <div className="govuk-body">
                                    {[
                                        address.post_box,
                                        address.address_line_1,
                                        address.address_line_2,
                                        address.address_line_3,
                                        address.address_line_4,
                                        address.address_line_5,
                                        address.district,
                                        address.city,
                                        address.area,
                                        address.region,
                                        address.locality,
                                        address.postal_code,
                                        address.country_2l,
                                    ].filter(filter => filter).join(", ")}
                                <details
                                className="govuk-details lbh-details"
                                data-module="govuk-details"
                                >
                                <summary className="govuk-details__summary">
                                    <span className="govuk-details__summary-text">
                                    Where is this from?
                                    </span>
                                </summary>
                                <div className="govuk-details__text">...</div>
                                </details>
                            <br />
                            </div>
                            </div>
                        );
                    })}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="govuk-grid-column-two-thirds">
            <div className="lbh-container">
                <h2 className="govuk-heading-m">History</h2>
                <table className="govuk-table lbh-table">
                    <tbody className="govuk-table__body">
                        {personalDetails.PersonalDetails.notes.map((note, index) => {
                            return (
                                <tr className="govuk-table__row" key={index}>
                                    <td className="govuk-table__cell">{note.createdAt}</td>
                                    <td className="govuk-table__cell">
                                        <div className="govuk-body">
                                            <h4>{note.title}</h4>
                                            {note.description}
                                        </div>
                                    </td>
                                    <td className="govuk-table__cell govuk-table__cell--numeric">
                                        {note.author.fullname}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
              </table>
              <button
                    className="govuk-button lbh-button"
                    data-module="govuk-button"
                >
                    New Note
                </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Welcome to Single View</h1>
        <h2>Search by phone number</h2>
        <form
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            setSubmitted(true);
            setPersonalDetails(JSON.parse(
                localStorage.getItem(phoneNumber) || ""
            ));
          }}
        >
          <div className="govuk-form-group lbh-form-group">
            <input
              className="govuk-input lbh-input"
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
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
};
