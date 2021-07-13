import './index.css';
import React from 'react';
import { Button, Row } from 'antd';

function Counter({ handleIncrease, handleDecrease, handleReset, handleModal, count }) {

  const counterHandleIncrease = () => {
    console.log('increase fun got called.');
    handleIncrease();
  }
  const counterHandleDecrease = () => {
    handleDecrease();
  }
  const counterHandleReset = () => {
    handleReset();
  }

  return (
    <div className="counter">
      <header className="counter-header">
          Count
      </header>
      <body className="counter-body">
          <Row className="count-value">{`Value: ${count}`}</Row>
          <Row className="count-lebel">Please increase/decrease the count</Row>
          <Row className="btn-group">
            <Button data-testid="increase-id" className="increase-btn" onClick={counterHandleIncrease}>Increase</Button>
            <Button data-testid="decrease" className="decrease-btn" onClick={counterHandleDecrease}>Decrease</Button>
            <Button data-testid="reset" className="reset-btn" onClick={counterHandleReset}>Reset</Button>
          </Row>
          {/* <Button className="modal-btn" onClick={handleModal}>
            Open in Modal
          </Button> */}
      </body>
    </div>
  );
}

export default Counter;
