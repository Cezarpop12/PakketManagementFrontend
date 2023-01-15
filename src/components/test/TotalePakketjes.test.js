import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import TotalePakketjes from '../TotalePakketjes';

global.fetch = jest.fn();

it('should show total number of pakketjes from api', () => {
    render(<TotalePakketjes />);
    expect(screen.getByText('Alle pakketjes (10)')).toBeInTheDocument();
});

it.todo('should show initial number of pakketjes if api fails');
