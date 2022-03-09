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
        <ol className="lbh-timeline">
            <li className="lbh-timeline__event">
                <NewNote onSubmit={onNoteSubmit} onCancel={onNoteCancel} />
            </li>

            {props.Notes?.map((note: Note, index: number) => {
                return (
                    <li className="lbh-timeline__event lbh-timeline__event--minor" key={index}>
                        <div className="sv-timeline__card">
                            <div className="sv-timeline__card_title">
                                <h5 className="lbh-heading-h5">
                                    {formatDateString(note.createdAt, true)}
                                </h5>
                                <h5 className="lbh-heading-h5">
                                    {note.author.fullname}
                                </h5>
                            </div>
                            <p className="lbh-body-s">
                                <span className="govuk-tag lbh-tag lbh-tag--green">
                                    {note.targetType.charAt(0).toUpperCase() +
                                        note.targetType.slice(1)}
                                </span>
                            </p>
                            <h5 className="lbh-heading-h5">
                                {note.title}
                            </h5>
                            <p className="lbh-body-s">{note.description}</p>
                        </div>
                    </li>
                );
            })}
        </ol>
    </div>
  );

  function onNoteSubmit(newNote: Note) {
    setShowNoteComponent(!showNoteComponent);
    props.Notes.unshift(newNote);

    let personData = JSON.parse(localStorage.getItem("personData") || "{}");
    personData[props.PhoneNumber].notes = props.Notes;
    localStorage.setItem("personData", JSON.stringify(personData));
  }

  function onNoteCancel() {
    setShowNoteComponent(!showNoteComponent);
  }
};
