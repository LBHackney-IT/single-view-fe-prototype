import { formatDateString } from "../utils";
import { PersonalDetails } from "../interfaces/viewInterfaces";

type Props = {
  PersonalDetails: PersonalDetails;
};

export const PersonSummary = (props: Props): JSX.Element => {
  return (
    <>
      <h2 className="lbh-heading-h2">{props.PersonalDetails.full_name}</h2>
      <dl className="govuk-summary-list lbh-summary-list">
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key govuk-!-width-one-half">
            <h5 className="lbh-heading-h5">Date of birth</h5>
          </dt>
          <dd className="govuk-summary-list__value">
            <p className="lbh-body-s">
              {formatDateString(props.PersonalDetails.date_of_birth, false)}
            </p>
          </dd>
        </div>
      </dl>
    </>
  );
};
