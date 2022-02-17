import React, { useEffect, useState } from "react";
import { Caller } from "../interfaces/componentInterfaces";

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
            );

            if (phoneNumber) {
                callers.push({
                  phoneNumber: phoneNumber
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
              <td className="govuk-table__cell">{caller.phoneNumber}</td>
              <td className="govuk-table__cell govuk-table__cell--numeric">
                <a
                    href="/"
                    onClick={(e) => {
                        e.preventDefault();
                        props.loadRecord(caller.phoneNumber);
                    }}
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
