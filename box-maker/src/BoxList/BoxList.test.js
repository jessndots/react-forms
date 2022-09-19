import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import BoxList from './BoxList';


// Smoke Test
it("renders without crashing", function () {
  render(<BoxList />)
})

// Snapshot test
it("matches screenshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
})

it("adds new box", async function () {
  const { queryByText, getByText } = render(<BoxList />);

  // expect no boxes
  expect(queryByText("X")).not.toBeInTheDocument();

  // click Create Box
  fireEvent.click(getByText("Create Box"))

  // expect box
  await waitFor(() => {
    const removeBtn = getByText("X");
    expect(removeBtn).toBeInTheDocument();
    expect(removeBtn.nextElementSibling).toHaveStyle(`
      width: 50px;
      height: 50px;
  `)
  })
})

it("removes box", async function () {
  const {queryByText, getByText} = render(<BoxList/>);

  // create box
  fireEvent.click(getByText("Create Box"));

  // expect box
  await waitFor(() => {
    const removeBtn = getByText("X");
    expect(removeBtn).toBeInTheDocument();
    expect(removeBtn.nextElementSibling).toHaveStyle(`
      width: 50px;
      height: 50px;
  `)
  })

  // delete box
  fireEvent.click(getByText("X"));

  // expect no boxes
  expect(queryByText("X")).not.toBeInTheDocument();

})