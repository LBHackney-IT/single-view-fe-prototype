import React, { useState } from "react";

export const ScratchPad = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  return (
    <section className="lbh-collapsible">
      <div className="lbh-collapsible__content" hidden={!open}>
        <textarea
          className="govuk-textarea lbh-textarea"
          id="more-detail"
          name="more-detail"
          rows={5}
          value={content}
          aria-describedby="more-detail-hint"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button
        aria-expanded={open}
        className="lbh-collapsible__button"
        onClick={() => setOpen(!open)}
      >
        <h2 className="lbh-heading-h2 lbh-collapsible__heading">Scratchpad</h2>
        <svg width="17" height="10" viewBox="0 0 17 10">
          <path d="M2 1.5L8.5 7.5L15 1.5" strokeWidth="3" />
        </svg>
      </button>
    </section>
  );
};
