import { Card, CardHeader, CardBody } from "reactstrap";
import * as ReactInputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const InputRange: typeof ReactInputRange.default = ReactInputRange as any;

const SliderCard = ({
  header,
  inputValues,
  onSliderChange,
  maxValue,
  minValue,
}: {
  header: string;
  inputValues: { max: number; min: number };
  onSliderChange: (years: any) => void;
  maxValue: number;
  minValue: number;
}) => {
  return (
    <Card>
      <CardHeader>{header}</CardHeader>
      <CardBody>
        <InputRange
          maxValue={maxValue}
          minValue={minValue}
          value={inputValues}
          onChange={onSliderChange}
        />
      </CardBody>
    </Card>
  );
};

export default SliderCard;
