import React from 'react';
import './styles.css';
import { MDBContainer } from 'mdb-react-ui-kit';

export const PageLayout = (props) => {
  return (
    <>
      <MDBContainer id="page">{props.children}</MDBContainer>
    </>
  );
};
