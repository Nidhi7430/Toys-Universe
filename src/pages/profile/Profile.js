import React from "react";
import LoginModal from "../../components/login_modal/LoginModal";
import { PageLayout } from "../../components/page_layout/PageLayout";

const Profile = () => {
  return (
    <>
      <PageLayout>
        <LoginModal />
      </PageLayout>
    </>
  );
};

export default Profile;
