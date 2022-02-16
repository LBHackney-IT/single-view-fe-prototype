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
    const [noteContent, setNoteContent] = useState("");
    let newNote: Notes = { 
        title: "Call to customer",
        description: noteContent,
        createdAt: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
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
      onChange={(e) => {setNoteContent(e.target.value)} } 
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


