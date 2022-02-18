import { PersonalDetails } from "../interfaces/viewInterfaces";

type Props = {
  PersonalDetails: PersonalDetails;
};

export const ContactInfo = (props: Props): JSX.Element => {
  return (
    <div className="lbh-container">
      <h3 className="lbh-heading-h3">Contact Information</h3>
      <dl className="govuk-summary-list lbh-summary-list">
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key govuk-!-width-one-half">
              <h5 className="lbh-heading-h5">Phone numbers</h5>
          </dt>
          <dd className="govuk-summary-list__value">
            {props.PersonalDetails.contacts.map((contact, index) => {
              return (
                <div key={index} className="lbh-body-s">
                  <p>{contact.value}</p>
                </div>
              );
            })}
          </dd>
        </div>
        <div className="govuk-summary-list__row govuk-summary-list__row--no-border">
          <dt className="govuk-summary-list__key govuk-!-width-one-half">
              <h5 className="lbh-heading-h5">Email</h5>
          </dt>
          <dd className="govuk-summary-list__value">
              <p className="lbh-body-s">
                {props.PersonalDetails.Emails[0].MainEmail.email_address}
              </p>
          </dd>
        </div>
      </dl>
    </div>
  );
};
