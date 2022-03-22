import axios from "axios";

type searchParams = {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  postCode?: string;
};

export const SearchByResident = (searchParams: searchParams): Promise<any> => {
  let result;

  try {
    if (searchParams.postCode.length === 6) {
      result = axios.get(
        `${process.env.SEARCH_API_STAGING_URL}/search/persons?postcode=${searchParams.postCode}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.HOUSING_SEARCH_API_TOKEN}`,
            "Content-Type": "application/json",
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
