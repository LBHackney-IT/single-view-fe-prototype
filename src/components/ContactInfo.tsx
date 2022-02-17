import { PersonalDetails } from "../interfaces/viewInterfaces";

type Props = {
  PersonalDetails: PersonalDetails;
};

export const ContactInfo = (props: Props): JSX.Element => {
  return (
    <div className="lbh-container">
      <h3 className="govuk-heading-m">Contact Information</h3>
      <dl className="govuk-summary-list lbh-summary-list">
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key govuk-!-width-one-half">
            Phone numbers
          </dt>
          <dd className="govuk-summary-list__value">
            {props.PersonalDetails.contacts.map((contact, index) => {
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
            {props.PersonalDetails.Emails[0].MainEmail.email_address}
          </dd>
        </div>
      </dl>
    </div>
  );
};
