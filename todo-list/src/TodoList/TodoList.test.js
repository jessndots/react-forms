import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import TodoList from './TodoList';


// Smoke Test
it("renders without crashing", function () {
  render(<TodoList />)
})

// Snapshot test
it("matches screenshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
})

it("adds new todo", async function () {
  const { queryByText, getByLabelText, getByText } = render(<TodoList />);

  // expect no tasks
  expect(queryByText("x")).not.toBeInTheDocument();

  // add task
  await act(() => {
    fireEvent.change(getByLabelText("Task"), { target: { value: "test" } });
    fireEvent.click(getByText("Add Task"));
  })

  // expect task
  const removeBtn = getByText("x");
  expect(removeBtn).toBeInTheDocument();
  const todo = getByText("test");
  expect(todo).toBeInTheDocument();

})

it("removes todo", async function () {
  const {queryByText, getByText, getByLabelText} = render(<TodoList/>);

  // add task
  await act(() => {
    fireEvent.change(getByLabelText("Task"), { target: { value: "test" } });
    fireEvent.click(getByText("Add Task"));
  })

  // expect task
  const removeBtn = getByText("x");
  expect(removeBtn).toBeInTheDocument();
  const todo = getByText("test");
  expect(todo).toBeInTheDocument();

  // delete todo
  fireEvent.click(getByText("x"));

  // expect no todos
  expect(removeBtn).not.toBeInTheDocument();
  expect(todo).not.toBeInTheDocument();

})