import React, { useState } from "react";
import { Note } from "../interfaces/viewInterfaces";
import { authUser } from "../auth";

type Props = {
  onSubmit: (note: Note, id?: number) => void;
  onCancel: () => void;
  notePlaceholder?: string;
  id?: number;
};

export const NewNote = (props: Props): JSX.Element => {
  const [noteContent, setNoteContent] = useState("");
  const [category, setCategory] = useState("");
  const [hasError, setHasError] = useState(false);

  let newNote: Note = {
    title: "Call to customer",
    description: noteContent,
    createdAt: `${new Date().getFullYear()}-${
      0 + new Date().getMonth() + 1
    }-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
    targetType: category,
    author: {
      fullname: authUser.name,
    },
  };

  return (
    <>
      <div className="govuk-form-group lbh-form-group">
        <textarea
          className="govuk-textarea lbh-textarea"
          id="more-detail"
          name="more-detail"
          rows={5}
          onChange={onTextChange}
          aria-describedby="more-detail-hint"
          placeholder={props.notePlaceholder || "New note..."}
          value={noteContent}
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
            value={category}
            onChange={onCategoryChange}
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
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button
            id="saveNote"
            className="govuk-button lbh-button lbh-button--secondary"
            data-module="govuk-button"
            onClick={onNoteSubmit}
            style={{ marginTop: 0 }}
            aria-disabled={! noteContent}
            disabled={! noteContent}
        >
            Save
        </button>
      </div>
    </>
  );

  function onTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setNoteContent(e.target.value);
    setHasError(false);
  }

  function onCategoryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCategory(e.target.value);
  }

  function onNoteSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (noteContent.length > 0 && category.length > 0) {
      props.onSubmit(newNote, props.id);
      setNoteContent("");
      setCategory("");
    } else {
      setHasError(true);
    }
  }
};
