import {
  Row,
  Col,
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
} from "reactstrap";

const Searchbar = ({
  handleChange,
  handleKeyPress,
  submitSearch,
}: {
  handleChange: any;
  handleKeyPress: any;
  submitSearch: any;
}) => {
  return (
    <Row>
      <Col>
        <InputGroup>
          <Input
            placeholder="Search for a movie here..."
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <InputGroupAddon addonType="append">
            <Button color="secondary" onClick={submitSearch}>
              Search
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default Searchbar;
