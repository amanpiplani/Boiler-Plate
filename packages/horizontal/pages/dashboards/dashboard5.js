import { Col, Row } from 'reactstrap';
import BreadCrumbs from "../../src/layouts/breadcrumbs/BreadCrumbs";

import TotalIncome from '../../src/components/dashboards/dashboard2/TotalIncome';
import YearlySales from '../../src/components/dashboards/dashboard2/YearlySales';
import MonthlySales from '../../src/components/dashboards/dashboard2/MonthlySales';
import Expance from '../../src/components/dashboards/dashboard5/Expance';
import TotalSales from '../../src/components/dashboards/dashboard2/TotalSales';
import DateCalendar from '../../src/components/dashboards/dashboard2/DateCalendar';
import ProfileCard from '../../src/components/dashboards/dashboard2/ProfileCard';
import MonthlyUsage from '../../src/components/dashboards/dashboard2/MonthlyUsage';
import WeeklyUsage from '../../src/components/dashboards/dashboard2/WeeklyUsage';
import RecentSales from '../../src/components/dashboards/dashboard2/RecentSales';
import RecentComments from '../../src/components/dashboards/dashboard2/RecentComments';
import Finanace from '../../src/components/dashboards/dashboard2/Finance';
import RecentChat from '../../src/components/dashboards/dashboard2/RecentChat';

const Dashboard5 = () => {
  return (
    <>
      <BreadCrumbs />
      
      <Row>
        <Col lg="4">
          <TotalIncome />
        </Col>
        <Col lg="4">
          <YearlySales />
        </Col>
        <Col lg="4">
          <MonthlySales />
        </Col>
      </Row>

      <Row>
        <Col lg="8">
          <Expance />
        </Col>
        <Col lg="4">
          <TotalSales />
        </Col>
      </Row>

      <Row>
        <Col lg="4">
          <Finanace />
        </Col>
        <Col lg="8">
          <DateCalendar />
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <WeeklyUsage />
        </Col>
        <Col lg="6">
          <MonthlyUsage />
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
          <ProfileCard />
        </Col>
        <Col lg="8">
          <RecentChat />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard5;
