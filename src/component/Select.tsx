import React from "react";

interface SelectProps {
  onChange: (value: string) => void;
  value: string;
  options: { key: string; label: string }[];
  placeholder?: string;
  id?: string;
  className?: string;
}

class SelectApp extends React.Component<SelectProps> {
  render() {
    const { onChange, value, options, placeholder, id, className } = this.props;

    return (
      <select
        id={id}
        required
        onChange={(event) => {
          onChange(event.target.value);
        }}
        value={value}
        className={`rounded-md ring-1 ring-gray-300 focus:border-purple-500 border-gray-300 text-base font-medium text-slate-700 text-left shadow-sm focus:outline-none focus:ring-purple-500 sm:text-sm ${
          className ? className : ""
        }`}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={"option" + option.key} value={option.key}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
}

export default SelectApp;
