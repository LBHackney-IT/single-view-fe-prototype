import { VonageEvent } from "../interfaces/viewInterfaces";

type Props = {
  VonageEvents: VonageEvent[];
};

export const CallHistory = (props: Props): JSX.Element => {
  return (
    <div className="lbh-container">
      <h2 className="govuk-heading-m">Call History</h2>
      <table className="govuk-table lbh-table">
        <thead className="govuk-table_head">
          <th
            scope="col"
            className="govuk-table__header govuk-table__header--numeric"
            style={{ textAlign: "center" }}
          >
            Time of call
          </th>
          <th
            scope="col"
            className="govuk-table__header govuk-table__header--numeric"
            style={{ textAlign: "center" }}
          >
            Department
          </th>
          <th
            scope="col"
            className="govuk-table__header govuk-table__header--numeric"
            style={{ textAlign: "center" }}
          >
            Direction
          </th>
          <th
            scope="col"
            className="govuk-table__header govuk-table__header--numeric"
            style={{ textAlign: "center" }}
          >
            Number
          </th>
          <th
            scope="col"
            className="govuk-table__header govuk-table__header--numeric"
          >
            Call Length
          </th>
        </thead>
        <tbody className="govuk-table__body">
          {props.VonageEvents.map((vonageEvent: VonageEvent, index: number) => {
            return (
              <tr className="govuk-table__row" key={index}>
                <td className="govuk-table__cell">{vonageEvent.start_time}</td>
                <td className="govuk-table__cell">
                  {vonageEvent.service_name}
                </td>
                <td className="govuk-table__cell">
                  {vonageEvent.call_direction}
                </td>
                <td className="govuk-table__cell">
                  {vonageEvent.phone_number}
                </td>
                <td className="govuk-table__cell">{vonageEvent.duration}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
