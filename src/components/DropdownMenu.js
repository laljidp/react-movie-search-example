import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ChevronDownIcon } from '../Icons';
import useOutsideClick from '../Hooks/useOutsideClick';

const Section = styled.div((props) => ({
  width: '100%',
  height: '45px',
  position: 'relative'
}));

const MenuTitle = styled.button((props) => ({
  height: 'inherit',
  background: '#ffF',
  padding: '0 15px',
  width: 'inherit',
  outline: 'none',
  color: '#171717',
  border: '1px solid #979797',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

const MenuBody = styled.div(({ show }) => ({
  minHeight: '45px',
  border: '1px solid #979797',
  textAlign: 'left',
  padding: '10px',
  fontSize: '14px',
  position: 'absolute',
  minWidth: '120px',
  top: '50px',
  visibility: show ? 'visible' : 'hidden'
}));

const ToggleIcon = styled.i(({ open }) => ({
  fontSize: '15px',
  svg: {
    transform: open ? 'rotate(180deg)' : 'none'
  }
}));

const Option = styled.div((props) => ({
  height: '35px',
  display: 'flex',
  alignItems: 'center',
  input: {
    marginRight: '10px',
    height: '15px',
    width: '15px'
  },
  'span.title': {
    padding: '5px',
    cursor: 'pointer'
  }
}));

const DropdownMenu = ({
  title,
  options = [],
  className = '',
  onSelectMenu,
  selected = []
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const [selectedOptions, setSelectedOptions] = useState(selected);
  const ref = useOutsideClick(() => setShowMenu(false));

  const isSelected = (value) => {
    return selectedOptions.includes(value);
  };

  const handleSelectMenu = (value) => {
    let _selected = selectedOptions.slice();
    const ind = selectedOptions.findIndex((val) => val === value);
    if (ind > -1) {
      _selected.splice(ind, 1);
    } else {
      _selected.push(value);
    }
    onSelectMenu(_selected);
    setSelectedOptions(_selected);
  };

  return (
    <Section ref={ref} className={className}>
      <MenuTitle onClick={toggleMenu}>
        <span>{title}</span>
        <ToggleIcon open={showMenu}>
          <ChevronDownIcon />
        </ToggleIcon>
      </MenuTitle>
      <MenuBody show={showMenu}>
        {options.map(({ title, value }) => (
          <Option
            key={value}
            role="button"
            onClick={() => {
              handleSelectMenu(value);
            }}
          >
            <input
              checked={isSelected(value)}
              type={'checkbox'}
              onChange={() => {}}
            />
            <span className="title" role="button">
              {title}
            </span>
          </Option>
        ))}
      </MenuBody>
    </Section>
  );
};

export default DropdownMenu;
