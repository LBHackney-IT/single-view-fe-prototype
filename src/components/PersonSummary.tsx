import { formatDateString } from "../utils";
import { PersonalDetails } from "../interfaces/viewInterfaces";

type Props = {
  PersonalDetails: PersonalDetails;
};

export const PersonSummary = (props: Props): JSX.Element => {
  return (
    <>
      <dl className="govuk-summary-list lbh-summary-list">
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key govuk-!-width-one-half">
            <h5 className="lbh-heading-h5">Name</h5>
          </dt>
          <dd className="govuk-summary-list__value">
            <p className="lbh-body-s">
              {props.PersonalDetails.full_name}
            </p>
          </dd>
        </div>
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
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key govuk-!-width-one-half">
              <h5 className="lbh-heading-h5">Email</h5>
          </dt>
          <dd className="govuk-summary-list__value">
              <p className="lbh-body-s">
                {props.PersonalDetails.Emails[0].MainEmail.email_address}
              </p>
          </dd>
        </div>
        <div className="govuk-summary-list__row govuk-summary-list__row--no-border">
          <dt className="govuk-summary-list__key govuk-!-width-one-half">
              <h5 className="lbh-heading-h5">
                Known addresses
              </h5>
          </dt>
          <dd className="govuk-summary-list__value">
            {props.PersonalDetails.Addresses.map((address, index) => {
              return (
                <div key={index}>
                  <div className="lbh-body-s">
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
                    ]
                      .filter((filter) => filter)
                      .join(", ")}
                  </div>
                </div>
              );
            })}
          </dd>
        </div>
      </dl>
    </>
  );
};
