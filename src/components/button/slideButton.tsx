import React, { useRef, useState } from 'react';
//import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import './slideButton.scss';

interface ButtonProps {
  disabled: boolean;
}

/* type btnColorType = {
  [anyKeyword: string]: FlattenSimpleInterpolation;
  dark: FlattenSimpleInterpolation;
  light: FlattenSimpleInterpolation;
};

const BTNCOLOR: btnColorType = {
  dark: css`
    background-color: #d3d3d3;
  `,
  light: css`
    background-color: #fad739;
  `
};

const BTNBACKCOLOR: btnColorType = {
  dark: css`
    background-color: #4c5762;
  `,
  light: css`
    background-color: #5b93dd;
  `
};

const StyleButton = styled.button<{ btnColor: any }>`
  ${(p) => p.btnColor}
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  width: 60px;
  padding: 0 3px;
  box-shadow: inset 2px 2px 4px 0 rgba(0, 0, 0, 0.7);
  border: inset 1px;
  border-radius: 15px;
  transition: all 1s;
`; // 첫번째는 설정 css

const StyleDiv = styled.div<{ backColor: any }>`
  ${(p) => p.backColor}
  display: inline-block;
  height: 20px;
  width: 20px;
  margin-left: 0px;
  border-radius: 50%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  transition: all 0.3s;
`;
 */
export default function SlideButton() {
  const [right, setRight] = useState<boolean>(false); //  boolean 상태
  //const [changeClass,setChangeClass]=useState<boolean>(false);
  const refs = useRef<HTMLDivElement>(null); // 원 ref
  //const btnColor = BTNBACKCOLOR[right ? 'dark' : 'light']; // 뒷배경 변경
  //const backColor = BTNCOLOR[right ? 'dark' : 'light']; //  원배경 변경

  const move = () => {
    //  버튼 이동 기능 함수
    const { current } = refs;
    setRight((right) => !right);
    if (current !== null) {
      if (right) {
        current.style.marginLeft = '0';
        return;
      }
      if (!right) {
        current.style.marginLeft = '21px';
      }
    }
  };

  return (
    <button
      onClick={move}
      className={right ? 'button-light slideButton' : 'button-dark slideButton'}
    >
      <div
        className={right ? 'core-light button' : 'core-dark button'}
        ref={refs}
      />
    </button>
  );
}
