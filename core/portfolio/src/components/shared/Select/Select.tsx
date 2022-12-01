import React from "react";
import * as Styled from "./Select.styled";

interface SelectProps {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const Select: React.FC<SelectProps> = ({ children, onChange }) => {
  return (
    <Styled.SelectContainer onChange={onChange}>
      {children}
    </Styled.SelectContainer>
  );
};
export default Select;
