import { Col, Row } from 'reactstrap';
import BreadCrumbs from "../../src/layouts/breadcrumbs/BreadCrumbs";
import TopCards from '../../src/components/dashboards/dashboard1/TopCards';
import ProductYearlySales from '../../src/components/dashboards/dashboard1/ProductYearlySales';
import SalesWeek from '../../src/components/dashboards/dashboard1/SalesWeek';
import SelectUser from '../../src/components/dashboards/dashboard1/select-user/SelectUser';
import BalanceCard from '../../src/components/dashboards/dashboard1/BalanceCard';
import ManageUsers from '../../src/components/dashboards/dashboard1/manage-users/ManageUsers';
import CalendarApp from '../apps/calendar/calendarApp';
import TaskList from '../../src/components/dashboards/dashboard1/TaskList';
import Feeds from '../../src/components/dashboards/dashboard1/Feeds';
import PostCard from '../../src/components/dashboards/dashboard1/PostCard';

const Dashboard1 = () => {
  return (
    <>
      <BreadCrumbs />
      <Row>
        <Col lg="12">
          <TopCards />
        </Col>
      </Row>

      <Row>
        <Col lg="8">
          <ProductYearlySales />
        </Col>
        <Col lg="4">
          <SalesWeek />
        </Col>
      </Row>

      <Row>
        <Col lg="8">
          <SelectUser />
        </Col>
        <Col lg="4">
          <BalanceCard />
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <ManageUsers />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <TaskList />
        </Col>
        <Col lg="6">
          <Feeds />
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <CalendarApp />
        </Col>
      </Row>

      <Row>
        <Col lg="12">
          <PostCard />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard1;
