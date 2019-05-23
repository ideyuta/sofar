import styled from 'styled-components';

const SIZE = {
  large: 48,
  medium: 32,
  minimum: 4,
  regular: 24,
  small: 16,
  tiny: 8,
};

/**
 * Spacer
 */
export default styled.div`
  height: ${props => SIZE[props.size]}px;
  min-height: ${props => SIZE[props.size]}px;
  min-width: ${props => SIZE[props.size]}px;
  width: ${props => SIZE[props.size]}px;
`;
