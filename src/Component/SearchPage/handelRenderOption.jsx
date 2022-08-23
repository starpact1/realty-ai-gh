import React from "react";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

const handleRenderOption = ( { option, inputValue }) => {
    console.log(inputValue, option)
  const matches = match(option.title, inputValue);
  const parts = parse(option.title, matches);

  const highlightStyle = {
    fontWeight: "700",
    backgroundColor: "lightyellow",
    padding: "5px 2px"
  };

  return (
    <div>
      {parts.map((part, index) => (
        <span key={index} style={part.highlight ? highlightStyle : {}}>
          {part.text}
        </span>
      ))}
    </div>
  );
};

export default handleRenderOption;