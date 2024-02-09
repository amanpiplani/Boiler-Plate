import React from "react";

import { Row, Col } from "reactstrap";
import BreadCrumbs from "../../src/layouts/breadcrumbs/BreadCrumbs";
import ProfileCard from "../../src/components/dashboards/dashboard2/ProfileCard";
import Timeline from "../../src/components/dashboards/dashboard4/Timeline";

const Profile = () => {
  return (
    <>
      <BreadCrumbs />
      <Row>
        <Col xs="12" md="12" lg="4">
          <ProfileCard />
        </Col>
        <Col xs="12" md="12" lg="8">
          <Timeline />
        </Col>
      </Row>
    </>
  );
};

export default Profile;
