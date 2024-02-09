import { Col, Row } from "reactstrap";
import BreadCrumbs from "../../src/layouts/breadcrumbs/BreadCrumbs";

import SparklineCards from "../../src/components/dashboards/dashboard4/SparklineCards";
import ProductMonthlySales from "../../src/components/dashboards/dashboard4/ProductMonthlySales";
import MonthlyEarnings from "../../src/components/dashboards/dashboard4/MonthlyEarnings";
import RecentComments from "../../src/components/dashboards/dashboard2/RecentComments";
import RecentSales from "../../src/components/dashboards/dashboard2/RecentSales";
import TaskList from "../../src/components/dashboards/dashboard1/TaskList";
import ManageUsers from "../../src/components/dashboards/dashboard1/manage-users/ManageUsers";
import Timeline from "../../src/components/dashboards/dashboard4/Timeline";
import RecentChat from "../../src/components/dashboards/dashboard4/RecentChat";

const Dashboard4 = () => {
  return (
    <>
      <BreadCrumbs />

      <Row>
        <Col lg="12">
          <SparklineCards />
        </Col>
      </Row>
      <Row>
        <Col lg="8">
          <ProductMonthlySales />
        </Col>
        <Col lg="4">
          <MonthlyEarnings />
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <RecentSales />
        </Col>
        <Col lg="6">
          <RecentComments />
        </Col>
      </Row>
      <Row>
        <Col lg="4">
          <TaskList />
        </Col>
        <Col lg="8">
          <ManageUsers />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <Timeline />
        </Col>
        <Col lg="6">
          <RecentChat />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard4;
