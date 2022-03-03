import React, { useEffect, useState } from "react";
import { Caller } from "../interfaces/componentInterfaces";
import { PersonalDetails } from "../interfaces/viewInterfaces";

type Props = {
    loadRecord: (phoneNumber: string) => void
}

export const CallerList = (props: Props): JSX.Element => {
    let intervalId:NodeJS.Timer;
    const interval = 10000;

    const getCallers = () => {
        let callers = [];
        let numCalls = Math.floor(Math.random() * 3) + 3;
        let maxLookupKey = localStorage.length - 1;

        for (let i = 0; i < numCalls; i++) {
            let phoneNumber = localStorage.key(
                Math.round(Math.random() * maxLookupKey)
            ) || "";
            let data = JSON.parse(localStorage.getItem(phoneNumber) || "{}");

            if (phoneNumber) {
                callers.push({
                  phoneNumber: phoneNumber,
                  fullName: data.PersonalDetails.full_name,
                  address1: data.PersonalDetails.Addresses[0].address_line_1,
                  postcode: data.PersonalDetails.Addresses[0].postal_code,
                });
            }
          }

        return callers;
    }

    const [callerList, setCallerList] = useState<Caller[]>(getCallers);

    useEffect(() => {
        intervalId = setInterval(
            () => setCallerList(getCallers),
            interval
        );

        return () => {
            clearInterval(intervalId);
        }
    });

  return (

    <table className="govuk-table lbh-table">
      <tbody className="govuk-table__body">
        {callerList.map((caller: Caller, index) => {
          return (

            <tr className="govuk-table__row" key={index}>
              <td className="govuk-table__cell">
              <p className="lbh-body-s">
                {caller.phoneNumber}
                </p>
            </td>
            <td className="govuk-table__cell">
              <p className="lbh-body-s">
                {caller.fullName}
                </p>
            </td>
            <td className="govuk-table__cell">
              <p className="lbh-body-s">
                {caller.address1}, {caller.postcode}
                </p>
            </td>
              <td className="govuk-table__cell govuk-table__cell--numeric">
                <a
                    href="/"
                    onClick={(e) => {
                        e.preventDefault();
                        props.loadRecord(caller.phoneNumber);
                    }}
                    className="lbh-body-s"
                >
                    Take
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
