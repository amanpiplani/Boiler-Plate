import { Col, Row } from 'reactstrap';
import BreadCrumbs from "../../src/layouts/breadcrumbs/BreadCrumbs";

import SalesCard from '../../src/components/dashboards/dashboard6/SalesCard';
import CardBandwidth from '../../src/components/dashboards/dashboard6/CardBandwidth';
import CardDownload from '../../src/components/dashboards/dashboard6/CardDownload';
import Notifications from '../../src/components/dashboards/dashboard6/Notifications';
import TopSales from '../../src/components/dashboards/dashboard6/TopSales';
import TopEarning from '../../src/components/dashboards/dashboard6/TopEarning';
import Timeline from '../../src/components/dashboards/dashboard4/Timeline';
import RecentChat from '../../src/components/dashboards/dashboard4/RecentChat';

const Dashboard6 = () => {
  return (
    <>
      <BreadCrumbs />
      
      <SalesCard />
      <Row>
        <Col lg="6">
          <CardBandwidth />
          <CardDownload />
        </Col>
        <Col lg="6">
          <Notifications />
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <TopSales />
        </Col>
        <Col lg="6">
          <TopEarning />
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

export default Dashboard6;
