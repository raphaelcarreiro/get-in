import styled, { css } from "styled-components";

interface StyledTypographyProps {
  size: number;
  fontWeight: number;
}

export const StyledTypography = styled.p<StyledTypographyProps>`
  font-family: var(--primary-font);
  font-style: normal;
  color: var(--total-contrast);

  ${(props) =>
    props.size &&
    css`
      font-size: ${props.size}rem;
    `}

  ${(props) =>
    props.fontWeight &&
    css`
      font-weight: ${props.fontWeight};
    `}
`;
