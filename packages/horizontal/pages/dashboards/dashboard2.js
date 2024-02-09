import { Col, Row } from 'reactstrap';
import BreadCrumbs from "../../src/layouts/breadcrumbs/BreadCrumbs";

import Expance from '../../src/components/dashboards/dashboard2/Expance';
import TotalSales from '../../src/components/dashboards/dashboard2/TotalSales';
import Finanace from '../../src/components/dashboards/dashboard2/Finance';
import DateCalendar from '../../src/components/dashboards/dashboard2/DateCalendar';
import TotalIncome from '../../src/components/dashboards/dashboard2/TotalIncome';
import YearlySales from '../../src/components/dashboards/dashboard2/YearlySales';
import MonthlySales from '../../src/components/dashboards/dashboard2/MonthlySales';
import MonthlyUsage from '../../src/components/dashboards/dashboard2/MonthlyUsage';
import WeeklyUsage from '../../src/components/dashboards/dashboard2/WeeklyUsage';
import RecentComments from '../../src/components/dashboards/dashboard2/RecentComments';
import RecentSales from '../../src/components/dashboards/dashboard2/RecentSales';
import TotalEarnings from '../../src/components/dashboards/dashboard2/TotalEarnings';
import Feeds from '../../src/components/dashboards/dashboard1/Feeds';
import ProfileCard from '../../src/components/dashboards/dashboard2/ProfileCard';
import RecentChat from '../../src/components/dashboards/dashboard2/RecentChat';

const Dashboard2 = () => {
  return (
    <>
      <BreadCrumbs />
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
        <Col lg="6">
          <WeeklyUsage />
        </Col>
        <Col lg="6">
          <MonthlyUsage />
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <RecentComments />
        </Col>
        <Col lg="6">
          <RecentSales />
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

      <Row>
        <Col lg="6">
          <TotalEarnings />
        </Col>
        <Col lg="6">
          <Feeds />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard2;
