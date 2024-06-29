import { Row, Col } from 'antd';
import React from 'react';

export function Home() {
  return (
    <>
      <Row gutter={[32, 32]} style={{ marginTop: '32px' }}>
        <Col xs={24} sm={24} xl={8} style={{ height: '460px' }}>
          CaliendarUpcomingEvents
        </Col>
        <Col xs={24} sm={24} xl={8} style={{ height: '460px' }}>
          DashboardDealChart
        </Col>
        <Col xs={24} sm={24} xl={8} style={{ height: '460px' }}>
          CaliendarUpcomingEvents
        </Col>
      </Row>
    </>
  );
}
