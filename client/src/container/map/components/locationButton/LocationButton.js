import React from "react";
import { MdMyLocation } from "react-icons/md";

import * as S from "./style";

function CurrentLocationButton({ buttonProps }) {
  const { onClick } = buttonProps;
  return (
    <S.ButtonBlock onClick={onClick}>
      <MdMyLocation />
    </S.ButtonBlock>
  );
}

export default CurrentLocationButton;
