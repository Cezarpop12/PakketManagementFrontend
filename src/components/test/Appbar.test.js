import React from 'react';
import { render, screen } from '@testing-library/react';
import Appbar from '../Appbar';
import '@testing-library/jest-dom/extend-expect'

test('should render Appbar component', () => {

    render(<Appbar/>);

    const AppbarElement = screen.getByTestId('the_man');

    expect(AppbarElement).toBeInTheDocument();

})