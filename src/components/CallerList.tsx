import { Caller } from '../interfaces/componentInterfaces';


export const CallerList = (): JSX.Element => {

    let callers = [];
    for (let i = 0; i <= 10; i++) {
      callers.push({
            phoneNumber: "+44 7712 234567"
        });
    }

    return (
        <table className="govuk-table lbh-table">
            <tbody className="govuk-table__body">
                {callers.map((caller: Caller, index) => {
                    return (
                        <tr className="govuk-table__row" key={index}>
                            <td className="govuk-table__cell">{caller.phoneNumber}</td>
                            <td className="govuk-table__cell govuk-table__cell--numeric">
                                <a href="/">Take</a>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
