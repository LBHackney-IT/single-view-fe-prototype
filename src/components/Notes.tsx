import { useState } from "react";
import { Note as NoteInterface } from "../interfaces/viewInterfaces";
import { Note } from "./Note";
import { NewNote } from "../components/NewNote";

type Props = {
  Notes: NoteInterface[];
  RecordId: string;
};

export const Notes = (props: Props): JSX.Element => {
  const [showNoteComponent, setShowNoteComponent] = useState(false);
  const [notes, setNotes] = useState(props.Notes || []);

  return (
    <div className="lbh-container">
        <details className="govuk-details lbh-details" data-module="govuk-details">
            <summary className="lbh-body-s govuk-details__summary">
                <span className="govuk-details__summary-text">Create a new note</span>
            </summary>
            <div className="govuk-details__text">
                <NewNote onSubmit={onNoteSubmit} onCancel={onNoteCancel} />
            </div>
        </details>
        <ol className="lbh-timeline">
            {notes.map((note: NoteInterface, index: number) => {
                return (
                    <li className="lbh-timeline__event lbh-timeline__event--minor" key={index}>
                        <Note note={note} />
                        <div>
                            <details className="govuk-details lbh-details" data-module="govuk-details">
                                <summary className="lbh-body-s govuk-details__summary">
                                    <span className="govuk-details__summary-text">Reply</span>
                                </summary>
                                <div className="govuk-details__text">
                                    <NewNote
                                        onSubmit={onReplySubmit}
                                        onCancel={onNoteCancel}
                                        notePlaceholder="Add relevant notes to this case"
                                        id={index}
                                    />
                                </div>
                                <ol className="lbh-timeline">
                                    {note.notes?.map((reply: NoteInterface, index: number) => {
                                        return (
                                            <li className="lbh-timeline__event lbh-timeline__event--minor" key={index}>
                                                <Note note={reply} />
                                            </li>
                                        );
                                    })}
                                </ol>
                            </details>
                        </div>
                    </li>
                );
            })}
        </ol>
    </div>
  );

  function onReplySubmit(newNote: NoteInterface, id?: number) {
    if (id == undefined) {
        return;
    }

    let tmpNotes = [ ...notes ];
    let replies = tmpNotes[id].notes || [];
    replies.unshift(newNote);

    tmpNotes[id] = {
        ...tmpNotes[id],
        notes: replies
    };

    setNotes(tmpNotes);

    let personData = JSON.parse(localStorage.getItem("personData") || "{}");
    personData[props.RecordId].notes = tmpNotes;
    localStorage.setItem("personData", JSON.stringify(personData));
  }

  function onNoteSubmit(newNote: NoteInterface, id?: number) {
    let tmpNotes = [ ...notes ];
    tmpNotes.unshift(newNote);

    setNotes(tmpNotes);

    let personData = JSON.parse(localStorage.getItem("personData") || "{}");
    personData[props.RecordId].notes = tmpNotes;
    localStorage.setItem("personData", JSON.stringify(personData));
  }

  function onNoteCancel() {
    setShowNoteComponent(!showNoteComponent);
  }
};
