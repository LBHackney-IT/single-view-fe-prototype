import React, { useState } from "react";
import { Note } from "../interfaces/viewInterfaces";
import { NewNote } from "../components/NewNote";
import { formatDateString } from "../utils";

type Props = {
  Notes: Note[];
  PhoneNumber: string;
};

export const Notes = (props: Props): JSX.Element => {
  const [showNoteComponent, setShowNoteComponent] = useState(false);

  return (
    <div className="lbh-container">
      <h2 className="govuk-heading-m">Notes</h2>
      <table className="govuk-table lbh-table">
        <thead className="govuk-table_head">
          <th
            scope="col"
            className="govuk-table__header govuk-table__header--numeric"
            style={{ textAlign: "center" }}
          >
            Date Created
          </th>
          <th
            scope="col"
            className="govuk-table__header govuk-table__header--numeric"
            style={{ textAlign: "left" }}
          >
            Note Detail
          </th>
          <th
            scope="col"
            className="govuk-table__header govuk-table__header--numeric"
            style={{ textAlign: "left" }}
          >
            Created By
          </th>
          <th
            scope="col"
            className="govuk-table__header govuk-table__header--numeric"
          >
            Category
          </th>
        </thead>
        <tbody className="govuk-table__body">
          {props.Notes?.map((note: Note, index: number) => {
            return (
              <tr className="govuk-table__row" key={index}>
                <td className="govuk-table__cell">
                  {formatDateString(note.createdAt)}
                </td>
                <td className="govuk-table__cell">
                  <div className="govuk-body">
                    <h4>{note.title}</h4>
                    {note.description}
                  </div>
                </td>
                <td className="govuk-table__cell govuk-table__cell--numeric">
                  {note.author.fullname}
                </td>
                <td className="govuk-table__cell govuk-table__cell--numeric">
                  {note.targetType.charAt(0).toUpperCase() +
                    note.targetType.slice(1)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {!showNoteComponent && (
        <button
          className="govuk-button lbh-button"
          data-module="govuk-button"
          onClick={(e) => {
            e.preventDefault();
            setShowNoteComponent(true);
          }}
        >
          New Note
        </button>
      )}
      {showNoteComponent && (
        <NewNote onSubmit={onNoteSubmit} onCancel={onNoteCancel} />
      )}
    </div>
  );

  function onNoteSubmit(newNote: Note) {
    setShowNoteComponent(!showNoteComponent);
    props.Notes.unshift(newNote);

    let data = JSON.parse(localStorage.getItem(props.PhoneNumber) || "{}");
    data.notes = Notes;
    localStorage.setItem(props.PhoneNumber, JSON.stringify(data));
  }

  function onNoteCancel() {
    setShowNoteComponent(!showNoteComponent);
  }
};
