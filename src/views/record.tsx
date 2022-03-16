import { Redirect, useParams } from "react-router-dom";
import {
    PersonalDetails,
    Note,
    VonageEvent,
} from "../interfaces/viewInterfaces";
import { Notes } from "../components/Notes";
import { PersonSummary } from "../components/PersonSummary";

type UrlParams = {
    recordId: string
}

export const RecordView = () => {
    const { recordId } = useParams<UrlParams>();
    const record = JSON.parse(
        localStorage.getItem("personData") || "{}"
    )[recordId];

    if (! record) {
        return (
            <Redirect to="/404" />
        );
    }

    const personalDetails: PersonalDetails = record.PersonalDetails;
    const notes: Note[] = record.notes;
    // const VonageEvents: VonageEvent[] = record.vonage_events;

    return (
        <>
            <a href="/search" className="govuk-back-link lbh-back-link">
                Search Again
            </a>
            <div className="govuk-tabs lbh-tabs sv-space-t" data-module="govuk-tabs">
                <h2 className="govuk-tabs__title">Contents</h2>
                <ul className="govuk-tabs__list">
                    <li className="govuk-tabs__list-item govuk-tabs__list-item--selected">
                        <a className="govuk-tabs__tab" href="#profile">
                            Profile
                        </a>
                    </li>
                    <li className="govuk-tabs__list-item">
                        <a className="govuk-tabs__tab" href="#notes">
                            Notes
                        </a>
                    </li>
                    <li className="govuk-tabs__list-item">
                        <a className="govuk-tabs__tab" href="#paymentHistory">
                            Payment History
                        </a>
                    </li>
                    <li className="govuk-tabs__list-item">
                        <a className="govuk-tabs__tab" href="#documents">
                            Documents
                        </a>
                    </li>
                    {/* <li className="govuk-tabs__list-item">
                        <a className="govuk-tabs__tab" href="#callHistory">
                            Call History
                        </a>
                    </li> */}
                </ul>
                <section className="govuk-tabs__panel" id="profile">
                    <PersonSummary PersonalDetails={personalDetails} />
                </section>
                <section className="govuk-tabs__panel govuk-tabs__panel--hidden" id="notes">
                    <Notes Notes={notes} RecordId={recordId} />
                </section>
                <section className="govuk-tabs__panel govuk-tabs__panel--hidden" id="paymentHistory">
                    <h3 className="lbh-heading-h3">Payment History</h3>
                </section>
                <section className="govuk-tabs__panel govuk-tabs__panel--hidden" id="documents">
                    <h3 className="lbh-heading-h3">Documents</h3>
                </section>
                {/* <section className="govuk-tabs__panel govuk-tabs__panel--hidden" id="callHistory">
                    <CallHistory VonageEvents={VonageEvents} />
                </section> */}
            </div>
        </>
    );
}
