import styled, { keyframes } from 'styled-components';
import vars from '../variables';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(.98);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Button = styled.li`
  background: ${props => props.completed ? vars.colors.primary : vars.colors.gray};
  color:  ${vars.colors.black};
  padding: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  border: 0;
  font-size: ${vars.fontSize.default};
  animation: ${fadeIn} 300ms linear;
`;

export default Button;
