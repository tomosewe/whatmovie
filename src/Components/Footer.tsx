import * as React from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";

const LogoStyles = {
    width: "75px"
}

class Footer extends React.Component<{}, {}>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <Container>
                    <Row>
                        <Col className="text-center">
                            Created by <a href="https://tomosewe.com"
                                target="_blank"
                                rel="noopener noreferrer">Tomos Ewe</a>{" "}<img src="images/popcorn16.png" alt="popcorn-icon" />
                            {" "}This product uses the TMDb API but is not endorsed or certified by TMDb.
                            <a
                                href="https://www.themoviedb.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >{" "}
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
        )
    }
}

export default Footer;