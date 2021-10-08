import React, { useContext, useState } from "react";
import {} from "mdbreact";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCard,
  MDBCardBody,
  MDBTypography,
  MDBBtn,
  MDBAccordion,
  MDBAccordionItem,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import Login from "./Login";
import Signup from "./Signup";
import { AuthContext } from "../../services/auth";

const ProfileModal = () => {
  const { auth, handleLogout } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("login");

  const toggleTab = (value) => {
    if (value === activeTab) return;
    setActiveTab(value);
  };
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol sm="12" md="6" offsetMd="3">
            <MDBCard className="m-3">
              <MDBCardBody>
                {auth.isAuthenticated ? (
                  <>
                    <MDBTypography variant="h2" className="pb-2 border-bottom">
                      Welcome, {auth.userName}
                    </MDBTypography>
                    <MDBAccordion className="m-2">
                      <MDBAccordionItem
                        collapseId="order"
                        headerTitle="My Order"
                      >
                        Coming soon!
                      </MDBAccordionItem>
                      <MDBAccordionItem
                        collapseId="wishlist"
                        headerTitle="My Wishlist"
                      >
                        Coming soon!
                      </MDBAccordionItem>
                      <MDBAccordionItem collapseId="cart" headerTitle="My Cart">
                        Coming soon!
                      </MDBAccordionItem>
                    </MDBAccordion>

                    <MDBBtn block onClick={handleLogout}>
                      Logout
                    </MDBBtn>
                  </>
                ) : (
                  <>
                    <MDBTabs justify>
                      <MDBTabsItem>
                        <MDBTabsLink
                          onClick={() => toggleTab("login")}
                          active={activeTab === "login"}
                        >
                          Login
                        </MDBTabsLink>
                      </MDBTabsItem>

                      <MDBTabsItem>
                        <MDBTabsLink
                          onClick={() => toggleTab("signup")}
                          active={activeTab === "signup"}
                        >
                          Sign Up
                        </MDBTabsLink>
                      </MDBTabsItem>
                    </MDBTabs>
                    <MDBTabsContent>
                      <MDBTabsPane show={activeTab === "login"}>
                        <Login />
                      </MDBTabsPane>
                      <MDBTabsPane show={activeTab === "signup"}>
                        <Signup />
                      </MDBTabsPane>
                    </MDBTabsContent>
                  </>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default ProfileModal;
