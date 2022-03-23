import axios from "axios";
import { useState } from "react";

type searchParams = {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  postCode?: string;
};

export const searchComponent = (props: any) => {
  const [searchParams, setSearchParams] = useState<searchParams>();
  return (
    <>
      <div>SearchComponent</div>
      <div className="govuk-form-group lbh-form-group">
        <label className="govuk-label lbh-label">First name</label>
        <input
          className="govuk-input lbh-input"
          id="search"
          name="search"
          type="search"
          value={searchParams.firstName}
          onChange={(e) => {
            setSearchParams({ ...searchParams, firstName: e.target.value });
          }}
        />
      </div>
      <div className="govuk-form-group lbh-form-group">
        <label className="govuk-label lbh-label">Last name</label>
        <input
          className="govuk-input lbh-input"
          id="search"
          name="search"
          type="search"
          value={searchParams.lastName}
          onChange={(e) => {
            setSearchParams({ ...searchParams, lastName: e.target.value });
          }}
        />
      </div>
      <div className="govuk-form-group lbh-form-group">
        <label className="govuk-label lbh-label">Date of Birth</label>
        <input
          className="govuk-input lbh-input"
          id="search"
          name="search"
          type="search"
          placeholder="dd/mm/yyyy"
          value={searchParams.dateOfBirth}
          onChange={(e) => {
            setSearchParams({ ...searchParams, dateOfBirth: e.target.value });
          }}
        />
      </div>

      <button
        onClick={() => SearchByResident(searchParams)}
        className="govuk-button lbh-button"
        data-module="govuk-button"
      >
        Save and continue
      </button>
    </>
  );
};

const SearchByResident = (searchParams: searchParams): Promise<any> => {
  let result;

  try {
    if (searchParams.postCode.length === 6) {
      result = axios.get(
        `${process.env.SEARCH_API_STAGING_URL}/search/persons?postcode=${searchParams.postCode}`,
        {
          headers: {
            Authorization: `${process.env.HOUSING_SEARCH_API_TOKEN}`,
          },
        }
      );
    } else {
      result = axios.get(
        `${process.env.HOUSING_SEARCH_API_STAGING_URL}/search/persons?firstName=${searchParams.firstName}&lastName=${searchParams.lastName}&dateOfBirth=${searchParams.dateOfBirth}`,
        {
          headers: {
            Authorization: `${process.env.HOUSING_SEARCH_API_TOKEN}`,
          },
        }
      );
    }

    return result;
  } catch (err) {
    console.log(err);
  }

  //need to sign api call with hackney token - as we don't have this in the front end yet, will need to spoof UI access. Can this be done through the UI? Or will there be CORS issues
  //https://app.swaggerhub.com/apis/Hackney/searchApi/1.0.0
  //process.ENV.HOUSING_SEARCH_API
};
