import { useState } from "react";

interface Notes {          
    title: string,
    description: string,
    createdAt: string,
    author: {
        fullname: string,
    }    
}

type Props = {      
    onSubmit: (note: Notes) => void;
  };



export const NewNote = (props: Props): JSX.Element => {   
    let newNote: Notes = { 
        title: "Call to customer",
        description: "",
        createdAt: new Date().getTime().toString(),
        author: {
            fullname: "Test User",
        }
    };

    return ( <><div className="govuk-form-group lbh-form-group">
    <label className="govuk-label lbh-label" htmlFor="more-detail">
      Please enter your note below.
    </label>    
    <textarea
      className="govuk-textarea lbh-textarea"
      id="more-detail"
      name="more-detail"
      rows={5}      
      aria-describedby="more-detail-hint"
    ></textarea>
  </div>
  <></>
  <button
  className="govuk-button lbh-button" 
  data-module="govuk-button"
  onClick={(e) => {
    e.preventDefault();
    props.onSubmit(newNote);  
  }}   
> Add note
</button>
  </>
  )
}


function submitNote() {
    console.log("submitNote");
}