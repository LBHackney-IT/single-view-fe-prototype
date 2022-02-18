import { VonageEvent } from "../interfaces/viewInterfaces";

type Props = {
  VonageEvents: VonageEvent[];
};

export const CallHistory = (props: Props): JSX.Element => {
  return (
    <div className="lbh-container sv-space-t">
      <h2 className="lbh-heading-h2">Call History</h2>
      <ol className="lbh-timeline">
        {props.VonageEvents.map((vonageEvent: VonageEvent, index: number) => {
            return (
                <li className="lbh-timeline__event lbh-timeline__event--minor" key={index}>
                    <h5 className="lbh-heading-h5">
                        {vonageEvent.start_time}
                    </h5>
                    <h4 className="lbh-heading-h4">
                        {vonageEvent.phone_number}
                    </h4>
                    <p className="lbh-body-s">
                        {vonageEvent.call_direction}, {vonageEvent.service_name}
                        <br />
                        Duration: {vonageEvent.duration}
                    </p>
                </li>
            );
          })}
        </ol>
    </div>
  );
};
