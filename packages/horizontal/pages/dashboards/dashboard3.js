import { Col, Row } from "reactstrap";
import BreadCrumbs from "../../src/layouts/breadcrumbs/BreadCrumbs";

import ProgressCard from "../../src/components/dashboards/dashboard3/ProgressCards";
import CountryVisit from "../../src/components/dashboards/dashboard3/CountryVisit";
import TrafficCard from "../../src/components/dashboards/dashboard3/TrafficCard";
import VisitCountries from "../../src/components/dashboards/dashboard3/VisitCountries";
import WeatherCard from "../../src/components/dashboards/dashboard3/WeatherCard";
import SalesCard from "../../src/components/dashboards/dashboard3/SalesCard";
import CarouselWidget from "../../src/components/dashboards/dashboard3/CarouselWidget";
import ManageUsers from "../../src/components/dashboards/dashboard1/manage-users/ManageUsers";

const Dashboard3 = () => {
  return (
    <>
      <BreadCrumbs />

      <ProgressCard />
      <Row>
        <Col lg="6">
          <CountryVisit />
        </Col>
        <Col lg="6">
          <TrafficCard />
        </Col>
      </Row>

      <Row>
        <Col lg="4">
          <VisitCountries />
        </Col>
        <Col lg="8">
          <WeatherCard />
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <SalesCard />
        </Col>
        <Col lg="6">
          <CarouselWidget />
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <ManageUsers />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard3;
