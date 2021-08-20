import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

test("Renders without errors with blank color passed into component", () => {
    render(<Color />)
    expect(screen.queryByText('white')).toBeInTheDocument();
});
  
test("Renders the color passed into component", () => {
    render(<Color />)
    expect(screen.queryByText('colors')).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    render(<Color getData={fakeGetData}/>)
    const button =  screen.queryByRole('button')
    userEvent.click(button)
    expect(fakeGetData.mock.results).toBe(true)
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    render(<Color getData={fakeGetData}/>)
    const button =  screen.queryByRole('button')
    userEvent.click(button)
    expect(fakeGetData.mock.results).toBe(true)
});