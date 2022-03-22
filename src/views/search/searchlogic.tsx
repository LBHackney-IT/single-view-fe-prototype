import axios from "axios";

export const SearchByResident = (): Promise<any> => {
  let authToken = getAuthToken();

  let body; //add search params here

  try {
    let result = axios.post(process.env.HOUSING_SEARCH_API_STAGING_URL, body, {
      headers: {
        Authorization: `${authToken}`,
      },
    });
    return result;
  } catch (err) {
    console.log(err);
  }

  //need to sign api call with hackney token - as we don't have this in the front end yet, will need to spoof UI access. Can this be done through the UI? Or will there be CORS issues
  //https://app.swaggerhub.com/apis/Hackney/searchApi/1.0.0
  //process.ENV.HOUSING_SEARCH_API
};

//the below call is just to get an auth token, which will be provided by the login screen earlier in the journey
const getAuthToken = async (): Promise<any> => {
  let tokenRequestBody = {
    requestedBy: "charli.wild@hackney.gov.uk",
    authorizedBy: "charli.wild@hackney.gov.uk,",
    consumerType: "user",
    apiName: "housing-search-api",
    apiEndpoint: "/search/persons",
    environment: "staging",
    dateRequested: "2022-03-22",
  };

  const response: any = axios.post(
    process.env.AUTH_TOKEN_GENERATOR_STAGING_URL,
    tokenRequestBody
  );

  return response.body.token;

  //https://app.swaggerhub.com/apis/Hackney/authorisation-token-generator-api/1.0#/tokenRequest
};
