import React from "react";
import error from "../../images/error.png";
import { MDBInput } from "mdb-react-ui-kit";
const TagsInput = (props) => {
  const removeTags = (indexToRemove) => {
    props.setProductData({
      ...props.productData,
      tags: [
        ...props.productData.tags.filter((_, index) => index !== indexToRemove),
      ],
    });
  };

  const addTag = (event) => {
    if (event.target.value !== "") {
      props.setProductData({
        ...props.productData,
        tags: [...props.productData.tags, event.target.value],
      });
      event.target.value = "";
    }
  };
  return (
    <>
      <div className="tags-input">
        <MDBInput
          type="text"
          onKeyUp={(event) =>
            [" ", "Enter"].includes(event.key) ? addTag(event) : null
          }
          label="Press enter to add tags"
          id="typeTextTag"
        />
        <ul id="tags" className="p-0 my-3">
          {props.productData.tags.map((tag, index) => (
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
      </div>
    </>
  );
};
export default TagsInput;
