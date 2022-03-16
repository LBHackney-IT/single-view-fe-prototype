import { formatDateString } from "../utils";
import { Note as NoteInterface } from "../interfaces/viewInterfaces";

type Props = {
    note: NoteInterface;
};

export const Note = (props: Props) => {
    return (
        <>
            <div style={{ alignItems: "center", display: "flex", marginBottom: "1em" }}>
                <div style={{ marginRight: "1em" }}>
                    <h5 className="lbh-heading-h5">
                        {formatDateString(props.note.createdAt, true)}
                    </h5>
                </div>
                {props.note.targetType && (
                    <p className="lbh-body-s">
                        <span className="govuk-tag lbh-tag lbh-tag--green">
                            {props.note.targetType.charAt(0).toUpperCase() +
                                props.note.targetType.slice(1)}
                        </span>
                    </p>
                )}
            </div>
            <div className="sv-timeline__card">
                <div className="sv-timeline__card_title">
                    <div style={{ marginRight: "1em", flexBasis: "15%" }}>
                        <h5 className="lbh-heading-h5">
                            {props.note.author.fullname}
                        </h5>
                    </div>
                    <p className="lbh-body-s">{props.note.description}</p>
                </div>
            </div>
        </>
    );
}
