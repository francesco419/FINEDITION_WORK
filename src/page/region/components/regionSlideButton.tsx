import SlideButton from '../../../components/button/slideButton';
import { useState } from 'react';
import _ from 'lodash';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  selectRegion,
  setRegionState
} from '../../../redux/slices/regionSlice';

export default function RegionSlideButton() {
  const dispatch = useAppDispatch();
  const region = useAppSelector(selectRegion);

  const domRegex = (regex: RegExp) => {
    let output: (HTMLElement | SVGElement)[] = [];
    const arr = document.querySelectorAll(`[id^="KR"]`);
    _.forEach(arr, (o) => {
      if (o.id.match(regex)) {
        if (o instanceof HTMLElement || o instanceof SVGElement) {
          output.push(o);
        }
      }
    });
    return output;
  };

  const setOpacity = (obj: (HTMLElement | SVGElement)[], opc: string) => {
    _.forEach(obj, (o) => {
      //o.style.opacity = opc;
      if (o.id.match(new RegExp(/KR0[0-9]*_name/g))) {
        if (opc === '1') {
          o.classList.add('opc0');
        } else if (opc === '0') o.classList.remove('opc0');
        return;
      }
      if (opc === '1') o.classList.add('opc1');
      if (opc === '0') o.classList.remove('opc1');
    });
  };

  const slideButtonHandler = (bool: boolean) => {
    const result = domRegex(new RegExp(/KR0[0-9]*_[card|rect|name]/g));
    if (!bool) {
      setOpacity(result, '1');
      dispatch(setRegionState(true));
    } else {
      setOpacity(result, '0');
      dispatch(setRegionState(false));
    }
  };

  return (
    <li>
      <SlideButton click={slideButtonHandler} />
    </li>
  );
}
