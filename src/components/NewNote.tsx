import React, { useState } from "react";
import { Note } from "../interfaces/viewInterfaces";
import { MentionsInput, Mention } from "react-mentions";
import { authUser } from "../auth";

type Props = {
  onSubmit: (note: Note) => void;
  onCancel: () => void;
};

const mockTaggableUsers = [
  {
    id: 1,
    display: "Alan Smith",
  },
  {
    id: 2,
    display: "Jane Doe",
  },
  {
    id: 3,
    display: "Alec Baldwin",
  },
  {
    id: 4,
    display: "Benedict Cumberbatch",
  },
];

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
        <MentionsInput
          className="govuk-textarea lbh-textarea"
          id="more-detail"
          name="more-detail"
          style={{ height: "150px" }}
          onChange={(event) => setNoteContent(event.target.value)}
          allowSpaceInQuery={true}
          aria-describedby="more-detail-hint"
          placeholder="Compose a new note here. You can tag other users by using '@'"
          value={noteContent}
        >
          <Mention
            trigger="@"
            data={mockTaggableUsers}
            displayTransform={displayTransform}
            className="selected-mention"
            markup="@__display__"
            regex={/(?:^|\s)@(\w+)(?:$|\s)/}
          />
        </MentionsInput>
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
      <button
        className="govuk-button lbh-button"
        data-module="govuk-button"
        onClick={onNoteSubmit}
      >
        Add note
      </button>
    </>
  );

  function onCategoryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCategory(e.target.value);
  }

  function onNoteSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (noteContent.length > 0 && category.length > 0) {
      props.onSubmit(newNote);
      setNoteContent("");
      setCategory("");
    } else {
      setHasError(true);
    }
  }

  function displayTransform(id: string, display: string): string {
    return "@" + display;
  }
};
