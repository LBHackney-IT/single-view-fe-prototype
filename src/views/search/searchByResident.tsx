import { create } from "domain";
import { useEffect, useState } from "react";
import { SearchByResidentFunction } from "./searchlogic";

export const SearchByResident = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");

  const [dobDay, setDobDay] = useState("");
  const [dobMonth, setDobMonth] = useState("");
  const [dobYear, setDobYear] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  useEffect(() => {
    setDateOfBirth(
      dobYear +
        "-" +
        (dobMonth.length == 1 ? "0" + dobMonth : dobMonth) +
        "-" +
        (dobDay.length == 1 ? "0" + dobDay : dobDay)
    );
  }, [dobDay, dobMonth, dobYear]);

  const createSearch = (): string => {
    let searchTerms = [firstName, lastName, addressLine1, dateOfBirth];

    let formattedSearch = searchTerms
      .filter((term) => term !== "")
      .join("+")
      .replace(/--/g, "")
      .replace(/\+$/, "")
      .replace(/' '/g, "");

    return formattedSearch;
  };

  const search = () => {
    let results = [];
    let data = JSON.parse(localStorage.getItem("searchData") || "{}");

    let searchData: any = {
      addressLine1: addressLine1,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
    };

    for (let key in data) {
      let result = {
        score: 0,
        data: {},
      };
      let item = data[key];
      let score = 0;

      for (let searchKey in searchData) {
        if (
          searchData[searchKey] &&
          item[searchKey].indexOf(searchData[searchKey]) > -1
        ) {
          score++;
        }
      }

      if (score > 0) {
        result.score = score;
        result.data = item;

        results.push(result);
      }
    }

    console.log(
      results.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        }

        if (a.score > b.score) {
          return -1;
        }

        return 0;
      })
    );
  };

  return (
    <>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              SearchByResidentFunction(createSearch());
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
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="govuk-form-group lbh-form-group">
              <label className="govuk-label lbh-label" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="govuk-input lbh-input"
                id="lastName"
                name="lastName"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="govuk-form-group lbh-form-group">
              <label className="govuk-label lbh-label" htmlFor="addressLine1">
                First Line of Address
              </label>
              <input
                className="govuk-input lbh-input"
                id="addressLine1"
                name="addressLine1"
                type="text"
                onChange={(e) => setAddressLine1(e.target.value)}
              />
            </div>
            <div className="govuk-form-group lbh-form-group">
              <fieldset
                className="govuk-fieldset"
                role="group"
                aria-describedby="dob-hint"
              >
                <legend className="govuk-label lbh-label">Date of Birth</legend>
                <div className="govuk-date-input lbh-date-input" id="dob">
                  <div className="govuk-date-input__item">
                    <div className="govuk-form-group">
                      <label
                        className="govuk-label lbh-label"
                        htmlFor="dob-day"
                      >
                        Day
                      </label>
                      <input
                        className="govuk-input govuk-date-input__input govuk-input--width-2"
                        id="dob-day"
                        name="dob-day"
                        type="text"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        onChange={(e) => setDobDay(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="govuk-date-input__item">
                    <div className="govuk-form-group">
                      <label
                        className="govuk-label lbh-label"
                        htmlFor="dob-month"
                      >
                        Month
                      </label>
                      <input
                        className="govuk-input govuk-date-input__input govuk-input--width-2"
                        id="dob-month"
                        name="dob-month"
                        type="text"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        onChange={(e) => setDobMonth(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="govuk-date-input__item">
                    <div className="govuk-form-group">
                      <label
                        className="govuk-label lbh-label"
                        htmlFor="dob-year"
                      >
                        Year
                      </label>
                      <input
                        className="govuk-input govuk-date-input__input govuk-input--width-4"
                        id="dob-year"
                        name="dob-year"
                        type="text"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        onChange={(e) => setDobYear(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <button className="govuk-button lbh-button govuk-button--start">
              Search
              <svg
                className="govuk-button__start-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="17.5"
                height="19"
                viewBox="0 0 33 40"
                aria-hidden="true"
                focusable="false"
              >
                <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
