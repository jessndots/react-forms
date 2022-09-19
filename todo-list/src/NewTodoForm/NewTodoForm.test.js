import React from 'react';
import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';


// Smoke test
it("renders without crashing", function() {
  render(<NewTodoForm/>)
})

// Snapshot test
it("matches screenshot", function() {
  const {asFragment} = render(<NewTodoForm/>);
  expect(asFragment()).toMatchSnapshot();
})