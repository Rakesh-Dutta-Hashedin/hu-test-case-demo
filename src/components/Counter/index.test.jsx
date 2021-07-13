import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, fireEvent } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
import Counter from '.';

// afterEach(cleanup);

// describe('<Counter />', () => {

  // const props = {
  //   handleIncrease: jest.fn(),
  //   handleDecrease: jest.fn(),
  //   handleReset: jest.fn(),
  //   handleModal: jest.fn(),
  //   count: Number,
  //   openModal: Boolean,
  // };

  // it('Counter is rendered without crashing', () => {
  //   const div = document.createElement('div');

  //   ReactDom.render(<Counter />, div);
  //   ReactDom.unmountComponentAtNode(div);
  // });

  // it('Text should be present in documents', () => {
  //   const { getByText } = render(<Counter />);
  //   const countText = getByText('Count');
  //   expect(countText).toBeInTheDocument();
  //   expect(getByText('Please increase/decrease the count')).toBeInTheDocument();
  // });

  // it('should call handleIncrease function', () => {
  //   const { getByText } = render(<Counter {...props} />);
  //   const increaseBtn = getByText('Increase');
  //   expect(increaseBtn).toBeInTheDocument();
  //   fireEvent.click(increaseBtn);
  //   expect(props.handleIncrease).toBeCalled();
  // });

  // it('should call handleIncrease function by data-testid', () => {
  //   const { getByTestId } = render(<Counter {...props} />);
  //   const increaseBtnId = getByTestId('increase');
  //   fireEvent.click(increaseBtnId);
  //   expect(props.handleIncrease).toBeCalled();
  // });

  // it('should call handleDecrease function', () => {
  //   const { getByText } = render(<Counter {...props} />);
  //   const decreaseBtn = getByText('Decrease');
  //   expect(decreaseBtn).toBeInTheDocument();
  //   fireEvent.click(decreaseBtn);
  //   expect(props.handleDecrease).toBeCalled();
  // });

  // it('should call handleDecrease function by data-testid', () => {
  //   const { getByTestId } = render(<Counter {...props} />);
  //   const decreaseBtnId = getByTestId('decrease');
  //   fireEvent.click(decreaseBtnId);
  //   expect(props.handleDecrease).toBeCalled();
  // });

  // it('should call handleReset function', () => {
  //   const { getByText } = render(<Counter {...props} />);
  //   const resetBtn = getByText('Reset');
  //   expect(resetBtn).toBeInTheDocument();
  //   fireEvent.click(resetBtn);
  //   expect(props.handleReset).toBeCalled();
  // });

  // it('should call handleReset function by data-testid', () => {
  //   const { getByTestId } = render(<Counter {...props} />);
  //   const resetId = getByTestId('reset');
  //   fireEvent.click(resetId);
  //   expect(props.handleReset).toBeCalled();
  // });
// });

describe('Counter', () => {
  const props = {
    handleIncrease: jest.fn(),
    handleDecrease: jest.fn(),
    handleReset: jest.fn(),
  };

  it('is gettting render without crashing', () => {
    const customDiv = document.createElement('div');
    ReactDom.render(<Counter />, customDiv);
    ReactDom.unmountComponentAtNode(customDiv);
  })

  it('should validate increase btn click', () => {
    const { getByText } = render(<Counter {...props} />);
    const increaseBtn = getByText('Increase');
    fireEvent.click(increaseBtn);
    expect(props.handleIncrease).toBeCalled();
  })

  it('should validate increase btn click by data-testid', () => {
    const { getByTestId } = render(<Counter {...props} />);
    const increaseBtn = getByTestId('increase-id');
    fireEvent.click(increaseBtn);
    expect(props.handleIncrease).toBeCalled();
  })

  it('should validate decrease btn click', () => {
    const { getByText } = render(<Counter {...props} />);
    const decreaseBtn = getByText('Decrease');
    fireEvent.click(decreaseBtn);
    expect(props.handleDecrease).toBeCalled();
  })

  it('should validate reset btn click', () => {
    const { getByText } = render(<Counter {...props} />);
    const resetBtn = getByText('Reset');
    fireEvent.click(resetBtn);
    expect(props.handleReset).toBeCalled();
  })
});
