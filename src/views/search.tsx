import React, { useState } from "react";

export const SearchView = (): JSX.Element => {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  if (submitted) {
    let records = [];
    for (let i = 0; i <= 10; i++) {
      records.push({ name: firstName + " " + lastName });
    }

    return (
      <>
        <a
          href="/"
          role="button"
          draggable="false"
          className="govuk-button lbh-button"
          data-module="govuk-button"
          onClick={(e) => {
            setSubmitted(false);
          }}
        >
          Search again
        </a>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-third">
            <h2 className="govuk-heading-m">
              Mr {firstName} {lastName}
            </h2>
            <dl className="govuk-summary-list lbh-summary-list">
              <div className="govuk-summary-list__row">
                <dt className="govuk-summary-list__key govuk-!-width-one-half">
                  Date of birth
                </dt>
                <dd className="govuk-summary-list__value">13/08/1980</dd>
              </div>
              <div className="govuk-summary-list__row govuk-summary-list__row--no-border">
                <dt className="govuk-summary-list__key govuk-!-width-one-half">
                  NI number
                </dt>
                <dd className="govuk-summary-list__value">JS374545C</dd>
              </div>
            </dl>

            <div className="lbh-container">
              <h3 className="govuk-heading-m">Contact Information</h3>
              <dl className="govuk-summary-list lbh-summary-list">
                <div className="govuk-summary-list__row">
                  <dt className="govuk-summary-list__key govuk-!-width-one-half">
                    Phone number
                  </dt>
                  <dd className="govuk-summary-list__value">07123 456789</dd>
                </div>
                <div className="govuk-summary-list__row govuk-summary-list__row--no-border">
                  <dt className="govuk-summary-list__key govuk-!-width-one-half">
                    Email
                  </dt>
                  <dd className="govuk-summary-list__value">
                    email@hackney.gov.uk
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
                    <p className="govuk-body">
                      Address line 1<br />
                      Address line 2<br />
                      Address line 3<br />
                      Address line 4<br />
                      Address line 5
                      <details
                        className="govuk-details lbh-details"
                        data-module="govuk-details"
                      >
                        <summary className="govuk-details__summary">
                          <span className="govuk-details__summary-text">
                            Where is this from?
                          </span>
                        </summary>
                        <div className="govuk-details__text">Academy</div>
                      </details>
                    </p>
                    <br />
                    <p className="govuk-body">
                      Address line 1<br />
                      Address line 2<br />
                      Address line 3<br />
                      Address line 4<br />
                      Address line 5
                      <details
                        className="govuk-details lbh-details"
                        data-module="govuk-details"
                      >
                        <summary className="govuk-details__summary">
                          <span className="govuk-details__summary-text">
                            Where is this from?
                          </span>
                        </summary>
                        <div className="govuk-details__text">Academy</div>
                      </details>
                    </p>
                    <br />
                    <p className="govuk-body">
                      Address line 1<br />
                      Address line 2<br />
                      Address line 3<br />
                      Address line 4<br />
                      Address line 5
                      <details
                        className="govuk-details lbh-details"
                        data-module="govuk-details"
                      >
                        <summary className="govuk-details__summary">
                          <span className="govuk-details__summary-text">
                            Where is this from?
                          </span>
                        </summary>
                        <div className="govuk-details__text">Academy</div>
                      </details>
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="govuk-grid-column-two-thirds">
            <h2 className="govuk-heading-l">Quick Access</h2>
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-one-third">
                <div className="lbh-stat">
                  <strong
                    className="lbh-stat__value"
                    aria-labelledby="stat-1-caption"
                  >
                    Case Information
                  </strong>
                  <span className="lbh-stat__caption" id="stat-1-caption">
                    <a href="/">View more</a>
                  </span>
                </div>
              </div>
              <div className="govuk-grid-column-one-third">
                <div className="lbh-stat">
                  <strong
                    className="lbh-stat__value"
                    aria-labelledby="stat-1-caption"
                  >
                    Case Information
                  </strong>
                  <span className="lbh-stat__caption" id="stat-1-caption">
                    <a href="/">View more</a>
                  </span>
                </div>
              </div>
              <div className="govuk-grid-column-one-third">
                <div className="lbh-stat">
                  <strong
                    className="lbh-stat__value"
                    aria-labelledby="stat-1-caption"
                  >
                    Case Information
                  </strong>
                  <span className="lbh-stat__caption" id="stat-1-caption">
                    <a href="/">View more</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-one-third">
                <div className="lbh-stat">
                  <strong
                    className="lbh-stat__value"
                    aria-labelledby="stat-1-caption"
                  >
                    Case Information
                  </strong>
                  <span className="lbh-stat__caption" id="stat-1-caption">
                    <a href="/">View more</a>
                  </span>
                </div>
              </div>
              <div className="govuk-grid-column-one-third">
                <div className="lbh-stat">
                  <strong
                    className="lbh-stat__value"
                    aria-labelledby="stat-1-caption"
                  >
                    Case Information
                  </strong>
                  <span className="lbh-stat__caption" id="stat-1-caption">
                    <a href="/">View more</a>
                  </span>
                </div>
              </div>
              <div className="govuk-grid-column-one-third">
                <div className="lbh-stat">
                  <strong
                    className="lbh-stat__value"
                    aria-labelledby="stat-1-caption"
                  >
                    Case Information
                  </strong>
                  <span className="lbh-stat__caption" id="stat-1-caption">
                    <a href="/">View more</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="lbh-container">
              <h2 className="govuk-heading-l">Activity</h2>
              <table className="govuk-table lbh-table">
                <tbody className="govuk-table__body">
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell">01/02/22</td>
                    <td className="govuk-table__cell">
                      <p className="govuk-body">
                        Excepteur deserunt aute laborum aliquip nisi laborum do
                        anim ex officia commodo aute.
                      </p>
                    </td>
                    <td className="govuk-table__cell govuk-table__cell--numeric">
                      Owner
                    </td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell">15/12/21</td>
                    <td className="govuk-table__cell">
                      <p className="govuk-body">
                        Excepteur deserunt aute laborum aliquip nisi laborum do
                        anim ex officia commodo aute.
                      </p>
                      <p className="govuk-body">
                        Irure voluptate adipisicing sint reprehenderit
                        adipisicing fugiat quis cupidatat voluptate pariatur
                        anim. Mollit nisi nulla reprehenderit reprehenderit
                        deserunt laboris in.
                      </p>
                    </td>
                    <td className="govuk-table__cell govuk-table__cell--numeric">
                      Owner
                    </td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell">01/12/21</td>
                    <td className="govuk-table__cell">
                      <p className="govuk-body">
                        Excepteur deserunt aute laborum aliquip nisi laborum do
                        anim ex officia commodo aute.
                      </p>
                    </td>
                    <td className="govuk-table__cell govuk-table__cell--numeric">
                      Owner
                    </td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell">20/11/21</td>
                    <td className="govuk-table__cell">
                      <p className="govuk-body">
                        Excepteur deserunt aute laborum aliquip nisi laborum do
                        anim ex officia commodo aute.
                      </p>
                      <p className="govuk-body">
                        Irure voluptate adipisicing sint reprehenderit
                        adipisicing fugiat quis cupidatat voluptate pariatur
                        anim. Mollit nisi nulla reprehenderit reprehenderit
                        deserunt laboris in.
                      </p>
                    </td>
                    <td className="govuk-table__cell govuk-table__cell--numeric">
                      Owner
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Welcome to Single View</h1>
        <h2>Search by name</h2>
        <form
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="govuk-form-group lbh-form-group">
            <label className="govuk-label lbh-label" htmlFor="firstName">
              First Name
            </label>
            <input
              className="govuk-input lbh-input"
              id="firstName"
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label className="govuk-label lbh-label" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="govuk-input lbh-input"
              id="lastName"
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <button
            className="govuk-button lbh-button"
            data-module="govuk-button"
          >
            Search
          </button>
        </form>
      </>
    );
  }
};
