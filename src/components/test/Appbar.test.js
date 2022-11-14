import React from 'react';
import { render, screen } from '@testing-library/react';
import Appbar from '../Appbar';
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom';

test('should render Appbar component', () => {

    render(<BrowserRouter><Appbar/></BrowserRouter>);

    const AppbarElement = screen.getByTestId('the_man');

    expect(AppbarElement).toBeInTheDocument();

})