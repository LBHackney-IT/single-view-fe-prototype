import { useEffect, useState } from "react";
import { Caller } from "../interfaces/componentInterfaces";
import { PersonalDetails } from "../interfaces/viewInterfaces";

export const CallerList = () => {
    let intervalId:NodeJS.Timer;
    const interval = 10000;
    const personData = JSON.parse(localStorage.getItem("personData") || "{}");
    const keys = Object.keys(personData);

    const getCallers = (): Caller[] => {
        let callers: Caller[] = [];
        if (keys.length < 1) {
            return callers;
        }

        let numCalls = Math.floor(Math.random() * 3) + 3;
        let maxLookupKey = keys.length - 1;

        for (let i = 0; i < numCalls; i++) {
            let key = keys[Math.round(Math.random() * maxLookupKey)];
            let data: PersonalDetails = personData[key].PersonalDetails;

            callers.push({
                id: data.personID,
                phoneNumber: data.contacts[0].value,
                fullName: data.full_name,
                address1: data.Addresses[0].address_line_1,
                postcode: data.Addresses[0].postal_code,
            });
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
                    href={"/records/" + caller.id}
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
