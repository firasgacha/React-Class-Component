import { Component } from "react";
import SelectApp from "./component/Select";

export default class App extends Component {
  state: { selectedValue: string } = {
    selectedValue: "",
  };
  handleSelectChange = (value: string) => {
    this.setState({ selectedValue: value });
  };
  render() {
    const options = [
      { key: "1", label: "Option 1" },
      { key: "2", label: "Option 2" },
      { key: "3", label: "Option 3" },
    ];
    return (
      <>
        <SelectApp
          onChange={this.handleSelectChange} // Pass the handler function to the component
          value={this.state.selectedValue} // Pass the selected value from the state
          options={options} // Pass the options array
          placeholder="Select an option" // Optionally, provide a placeholder
          id="example-select" // Optionally, provide an id
          className="custom-select" // Optionally, provide a custom class name
        />
      </>
    );
  }
}
