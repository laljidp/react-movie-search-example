import React from 'react';
import styled from '@emotion/styled';

const Input = styled.input((props) => ({
  height: '45px',
  padding: '5px 10px',
  width: '100%',
  fontWeight: 500,
  fontSize: '15px',
  boxSizing: 'border-box',
  border: '1px solid #979797',
  '&:focus': {
    outline: 'none',
  },
}));

const SearchInput = ({ placeholder, name, value, onChange, ...props }) => {
  return (
    <Input
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      {...props}          
    />
  );
};

export default SearchInput;
