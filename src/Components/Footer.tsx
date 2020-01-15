import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Constants } from './Common/Constants';

const LogoStyles = {
    width: '75px'
};

class Footer extends React.Component<{}, {}> {
    render() {
        return (
            <div className="footer">
                <Container>
                    <Row>
                        <Col className="text-center">
                            Created by{' '}
                            <a
                                href="https://tomosewe.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="tomosewe.com"
                            >
                                <span>Tomos Ewe</span>
                            </a>{' '}
                            <img
                                src="images/popcorn16.png"
                                alt="popcorn-icon"
                            />{' '}
                            <span>{Constants.TMDB_DISCLAIMER}</span>
                            <a
                                href="https://www.themoviedb.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="The Movie DB"
                            >
                                {' '}
                                <img
                                    src="images/tmdblogo.png"
                                    alt="The Movie DB"
                                    style={LogoStyles}
                                />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;
