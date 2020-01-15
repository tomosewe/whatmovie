import * as React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import * as ReactInputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const InputRange: typeof ReactInputRange.default = ReactInputRange as any;

interface Props {
  header: string;
  inputValues: any;
  onSliderChange: any;
  maxValue: number;
  minValue: number;
}

class SliderCard extends React.Component<Props, {}> {
  render() {
    return (
      <Card>
        <CardHeader>{this.props.header}</CardHeader>
        <CardBody>
          <InputRange
            maxValue={this.props.maxValue}
            minValue={this.props.minValue}
            value={this.props.inputValues}
            onChange={this.props.onSliderChange}
          />
        </CardBody>
      </Card>
    );
  }
}

export default SliderCard;
