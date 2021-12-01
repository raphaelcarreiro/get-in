import React, { HTMLAttributes } from "react";
import { StyledTypography } from "./styles";

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: number;
  fontWeight?: number;
}

const Typography: React.FC<TypographyProps> = ({
  size = 1,
  fontWeight = 300,
  ...rest
}) => {
  return (
    <>
      <StyledTypography size={size} fontWeight={fontWeight} {...rest} />
    </>
  );
};

export default Typography;
