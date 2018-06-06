import * as React from "react";
import {
  Row,
  Col,
  Button,
  InputGroup,
  InputGroupAddon,
  Input
} from "reactstrap";

interface Props {
  handleChange: any;
  handleKeyPress: any;
  submitSearch: any;
}

class Searchbar extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col>
          <InputGroup>
            <Input
              placeholder="Search for a movie here..."
              onChange={this.props.handleChange}
              onKeyPress={this.props.handleKeyPress}
            />
            <InputGroupAddon addonType="append">
              <Button color="secondary" onClick={this.props.submitSearch}>
                Search
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
    );
  }
}

export default Searchbar;
