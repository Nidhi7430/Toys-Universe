import React, { useState, useEffect } from "react";
import InnerBanner from "../../components/inner_banner/InnerBanner";
import about from "../../images/about.webp";
import {
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import TagsInput from "../../components/tags_input/TagsInput";

import { api } from "../../services/axios";

const AddProductPage = () => {
  const [file, setFile] = useState([]);

  const [apitest, setApitest] = useState("");

  const loadApi = async () => {
    const api_res = await api.get("/");
    setApitest(api_res.data);
  };

  useEffect(() => {
    loadApi();
  }, []);

  function uploadSingleFile(e) {
    let ImagesArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    );
    console.log(ImagesArray);
    setFile([...file, ...ImagesArray]);
    console.log("file", file);
  }

  function upload(e) {
    e.preventDefault();
    console.log(file);
  }

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    console.log(s);
  }
  const selectedTags = (tags) => {
    console.log(tags);
  };
  return (
    <>
      <InnerBanner image={about} title="Add Product" />
      <MDBContainer className="py-5 my-3">
        <MDBTypography
          tag="div"
          className="display-5 pb-5 text-info text-uppercase fw-bold text-center"
        >
          Add Product ({apitest})
        </MDBTypography>
        <div className="p-3">
          <MDBRow className="border-2 rounded-3 border-info border square p-4">
            <MDBCol lg="6" md="6" className="py-3">
              <MDBInput label="Name" id="typeText" type="text" />
            </MDBCol>
            <MDBCol lg="6" md="6" className="py-3">
              <MDBInput label="Amazon Link" id="typeURL" type="url" />
            </MDBCol>
            <MDBCol lg="6" md="6" className="py-3">
              <MDBInput label="Price" id="typeNumber" type="number" />
            </MDBCol>
            <MDBCol lg="6" md="6" className="py-3">
              <MDBInput
                label="Description"
                id="textAreaExample"
                textarea
                rows={4}
              />
            </MDBCol>
            <MDBCol lg="6" md="6" className="py-3">
              <div className="form-group preview">
                {file.length > 0 &&
                  file.map((item, index) => {
                    return (
                      <div key={item} className="d-inline">
                        <img src={item} alt="" />
                        <MDBBtn
                          type="button"
                          className="btn-info mx-2"
                          onClick={() => deleteFile(index)}
                          size="sm"
                        >
                          delete
                        </MDBBtn>
                      </div>
                    );
                  })}
              </div>
              <div className="form-group">
                <MDBInput
                  type="file"
                  disabled={file.length === 5}
                  className="form-control"
                  onChange={uploadSingleFile}
                />
              </div>
              <MDBBtn
                type="button"
                className="btn btn-info mt-3"
                size="sm"
                onClick={upload}
              >
                Upload
              </MDBBtn>
            </MDBCol>
            <MDBCol lg="6" md="6">
              <TagsInput selectedTags={selectedTags} tags={[]} />
            </MDBCol>
            <MDBCol className="py-3">
              <MDBBtn
                outline
                color="info"
                rounded
                tag="input"
                type="submit"
                value="Submit"
              />
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
    </>
  );
};

export default AddProductPage;
