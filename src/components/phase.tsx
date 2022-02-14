import React from "react";

export default function Phase(): JSX.Element {
  return (
    <div className="lbh-container">
      <div className="govuk-phase-banner lbh-phase-banner lbh-container">
        <p className="govuk-phase-banner__content">
          <strong className="govuk-tag govuk-phase-banner__content__tag lbh-tag">
            Alpha
          </strong>
          <span className="govuk-phase-banner__text">
            This is a new service - your feedback will help us improve it.
          </span>
        </p>
      </div>
    </div>
  );
}
