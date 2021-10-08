import React, { useEffect } from 'react';
import './styles.css';
import ReactGA from 'react-ga';
import { MDBContainer } from 'mdb-react-ui-kit';
import config_var from '../../App.config';

ReactGA.initialize(config_var.GOOGLE_ANALYTICS.TRACKING_ID);

export const PageLayout = (props) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <MDBContainer id="page" breakpoint="lg">
        {props.children}
      </MDBContainer>
    </>
  );
};
