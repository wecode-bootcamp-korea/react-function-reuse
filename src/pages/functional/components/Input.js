import React from "react";
import styled from "styled-components";

export default function Input({ value, type, name, placeholder, onChange }) {
  return (
    <InputWrapper
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
    />
  );
}

const InputWrapper = styled.input`
  width: 200px;
  height: 25px;
  margin: 10px 0;
  border: 1px solid #888888;
  outline: none;

  &:focus {
    border: 1px solid #007aff;
  }

  ::placeholder {
    font-size: 12px;
  }
`;
