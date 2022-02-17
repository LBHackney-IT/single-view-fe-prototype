import { PersonalDetails } from "../interfaces/viewInterfaces";

type Props = {
  PersonalDetails: PersonalDetails;
};

export const Addresses = (props: Props): JSX.Element => {
  return (
    <div className="lbh-container">
      <h3 className="govuk-heading-m">Addresses</h3>
      <dl className="govuk-summary-list lbh-summary-list">
        <div className="govuk-summary-list__row govuk-summary-list__row--no-border">
          <dt className="govuk-summary-list__key govuk-!-width-one-half">
            Known addresses
          </dt>
          <dd className="govuk-summary-list__value">
            {props.PersonalDetails.Addresses.map((address, index) => {
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
                    ]
                      .filter((filter) => filter)
                      .join(", ")}
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
  );
};
