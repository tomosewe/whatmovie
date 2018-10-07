import * as React from 'react';
import { render } from 'react-testing-library';
import { Constants } from '../Common/Constants';
import Footer from '../Footer';

describe('<Footer /> component', async () => {
    it('shows the TMDB disclaimer text', async () => {
        const { getByText } = render(<Footer />);
        (expect(
            getByText(Constants.TMDB_DISCLAIMER)
        ) as ExtendedMatchers).toBeInTheDocument();
    });

    it('shows the TMDB logo', async () => {
        const { getByAltText } = render(<Footer />);
        (expect(
            getByAltText('The Movie DB')
        ) as ExtendedMatchers).toBeInTheDocument();
    });

    it('contains a link to https://www.themoviedb.org', async () => {
        const { getByTitle } = render(<Footer />);
        (expect(
            getByTitle('The Movie DB').getAttribute('href')
        ) as ExtendedMatchers).toBe('https://www.themoviedb.org');
    });

    it('link to https://www.themoviedb.org opens in new tab', async () => {
        const { getByTitle } = render(<Footer />);
        (expect(
            getByTitle('The Movie DB').getAttribute('target')
        ) as ExtendedMatchers).toBe('_blank');
    });

    it('contains a link to https://tomosewe.com', async () => {
        const { getByTitle } = render(<Footer />);
        (expect(
            getByTitle('tomosewe.com').getAttribute('href')
        ) as ExtendedMatchers).toBe('https://tomosewe.com');
    });

    it('link to https://tomosewe.com opens in new tab', async () => {
        const { getByTitle } = render(<Footer />);
        (expect(
            getByTitle('tomosewe.com').getAttribute('target')
        ) as ExtendedMatchers).toBe('_blank');
    });
});
