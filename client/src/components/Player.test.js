import React from 'react';
import Player from './Player';
import * as rtl from 'react-testing-library';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
    render(<Player />)
});

it ('renders useless info', () => {
    const players = {
        name: "Taylor Roebuck",
        country: "Parts Unknown",
        searches: 0
    }
    const wrapper = rtl.render(<Player players={players} />);
});