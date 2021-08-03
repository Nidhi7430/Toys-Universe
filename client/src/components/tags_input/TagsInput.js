import React from "react";
import error from "../../images/error.png";
import { MDBInput } from "mdb-react-ui-kit";
const TagsInput = (props) => {
  const [tags, setTags] = React.useState(props.tags);
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <>
      <div className="tags-input">
        <ul id="tags" className="p-0 my-3">
          {tags.map((tag, index) => (
            <li key={index} className="tag d-inline me-2 bg-info p-2 rounded">
              <span className="tag-title pe-2">{tag}</span>
              <span
                className="tag-close-icon"
                onClick={() => removeTags(index)}
              >
                <img src={error} alt="cancel" />
              </span>
            </li>
          ))}
        </ul>
        <MDBInput
          type="text"
          onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
          label="Press enter to add tags"
          id="typeTextTag"
        />
      </div>
    </>
  );
};
export default TagsInput;
