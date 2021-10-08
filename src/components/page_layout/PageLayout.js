import React, { useEffect } from 'react';
import './styles.css';
import ReactGA from 'react-ga';
import { MDBContainer } from 'mdb-react-ui-kit';
import AppConfig from '../../App.config';

ReactGA.initialize(AppConfig.GOOGLE_ANALYTICS.TRACKING_ID);

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
