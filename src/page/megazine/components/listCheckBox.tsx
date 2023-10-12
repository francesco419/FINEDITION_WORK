import { useEffect, useState } from 'react';
import './megComponents.scss';

type CheckBoxType = {
  id: string;
  name: string;
};

export default function ListCheckBox({ id, name }: CheckBoxType) {
  useEffect(() => {
    const doc = document.getElementById(id) as SVGPathElement | null;
  }, []);

  return (
    <div className='citie-checkbox' id={`${id}_id`}>
      <input
        id={`${id}_check`}
        type='checkbox'
        hidden
        onChange={(e) => {
          if (e.target) {
            const tar = e.target;
            const svg = document.getElementById(id) as SVGPathElement | null;
            const label = document.getElementById(
              `${id}_label`
            ) as HTMLLabelElement | null;
            if (svg && label) {
              if (tar.checked) {
                svg.style.fill = '#f87b36';
                label.style.backgroundColor = '#f87b36';
              } else {
                svg.style.fill = '#dbdbe0';
                label.style.backgroundColor = '#fff';
              }
            }
          }
        }}
      />
      <label
        id={`${id}_label`}
        htmlFor={`${id}_check`}
        className='citie-checkbox_check'
      ></label>
      <label className='citie-checkbox_label'>{name}</label>
    </div>
  );
}
