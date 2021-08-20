import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';

test("Renders an empty list of colors without errors", () => {
    render(<ColorList />)
    const colors = []
    expect(screen.queryByDisplayValue('colors'))
    .toBeInTheDocument()
});

test("Renders a list of colors without errors", () => {
    render(<ColorList />)

    const colors = [
        {
            color: 'black'
        },
        {
            color: 'blue'
        },
        {
            color:'red'
        }
    ]
   
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    render(<ColorList />)
});
