import React, { useState } from "react";
import { Note } from "../interfaces/viewInterfaces";

type Props = {
  onSubmit: (note: Note) => void;
  onCancel: () => void;
};

export const NewNote = (props: Props): JSX.Element => {
  const [noteContent, setNoteContent] = useState("");
  const [hasError, setHasError] = useState(false);

  let newNote: Note = {
    title: "Call to customer",
    description: noteContent,
    createdAt: `${new Date().getFullYear()}-${
      0 + new Date().getMonth() + 1
    }-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
    targetType: "Phone Contact",
    author: {
      fullname: "Test User",
    },
  };

  return (
    <>
      <div className="govuk-form-group lbh-form-group">
        <label className="govuk-label lbh-label" htmlFor="more-detail">
          Enter your note below.
        </label>
        <textarea
          className="govuk-textarea lbh-textarea"
          id="more-detail"
          name="more-detail"
          rows={5}
          onChange={onTextChange}
          aria-describedby="more-detail-hint"
        ></textarea>
        <div
          className="govuk-form-group lbh-form-group"
          style={{ width: "50%" }}
        >
          <label className="govuk-label lbh-label" htmlFor="input-example">
            Category
          </label>
          <input
            className="govuk-input lbh-input"
            id="input-example"
            name="test-name"
            type="text"
          />
        </div>
      </div>
      <></>
      {hasError && (
        <span
          className="govuk-error-message lbh-error-message"
          style={{ marginTop: "1rem" }}
        >
          <span className="govuk-visually-hidden">Error:</span>You must add some
          text to your note
        </span>
      )}
      <button
        className="govuk-button lbh-button"
        data-module="govuk-button"
        onClick={onNoteSubmit}
      >
        Add note
      </button>
      <button
        className="govuk-button govuk-secondary lbh-button lbh-button--secondary"
        data-module="govuk-button"
        onClick={props.onCancel}
        style={{ marginLeft: "1rem" }}
      >
        Cancel
      </button>
    </>
  );

  function onTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setNoteContent(e.target.value);
    setHasError(false);
  }

  function onNoteSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (noteContent.length > 0) {
      props.onSubmit(newNote);
      setNoteContent("");
    } else {
      setHasError(true);
    }
  }
};
