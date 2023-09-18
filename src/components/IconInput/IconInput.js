import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon id={icon} />
      <input />
    </Wrapper>
  );
};

const Wrapper = styled.label`
   {
    display: block;
  }
`;

export default IconInput;
