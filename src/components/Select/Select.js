import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Presentation>Hello world</Presentation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
   {
    position: relative;
    width: max-content;
  }
`;

const Presentation = styled.div`
   {
    color: ${COLORS.gray700};
    background-color: ${COLORS.transparentGray15};
    padding: 12px 16px;
    font-size: ${16 / 16}rem;
  }
`;

const NativeSelect = styled.select`
   {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
`;

export default Select;
