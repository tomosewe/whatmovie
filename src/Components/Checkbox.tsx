import * as React from "react";

interface State {
  isChecked: boolean;
}

interface Props {
  handleCheckboxChange: any;
  genreName: string;
  genreId: number;
}

class Checkbox extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, genreId } = this.props;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }));

    handleCheckboxChange(genreId);
  };

  render() {
    const { genreName, genreId } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="pretty p-default p-round p-thick">
        <input
          type="checkbox"
          value={genreId}
          checked={isChecked}
          onChange={this.toggleCheckboxChange}
        />
        <div className="state p-primary-o">
          <label>{genreName}</label>
        </div>
      </div>
    );
  }
}

export default Checkbox;
