import React from "react";
import { Row, Col } from "reactstrap";
import BreadCrumbs from "../../src/layouts/breadcrumbs/BreadCrumbs";

import RecentChat from "../../src/components/dashboards/dashboard2/RecentChat";
import Feeds from "../../src/components/dashboards/dashboard1/Feeds";
import ProfileCard from "../../src/components/dashboards/dashboard2/ProfileCard";
import RecentComments from "../../src/components/dashboards/dashboard2/RecentComments";
import TaskList from "../../src/components/dashboards/dashboard1/TaskList";
import Notifications from "../../src/components/dashboards/dashboard6/Notifications";

const Widgets = () => {
  return (
    <>
      <BreadCrumbs />
      <Row>
        <Col xs="12" lg="4">
          <ProfileCard />
          <TaskList />
        </Col>
        <Col xs="12" lg="4">
          <RecentChat />
          <RecentComments />
        </Col>
        <Col xs="12" lg="4">
          <Notifications />
          <Feeds />
        </Col>
      </Row>
    </>
  );
};

export default Widgets;
