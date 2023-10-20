import { useEffect } from 'react';
import './megComponents.scss';

type CheckBoxType = {
  id: string;
  name: string;
  change: (theme: string, bool: boolean) => void;
};

export default function ListCheckBox({ id, name, change }: CheckBoxType) {
  useEffect(() => {
    const doc = document.getElementById(id) as SVGPathElement | null;
  }, []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (id === '') {
      if (e.target) {
        const tar = e.target;
        const label = document.getElementById(
          `${id}_label`
        ) as HTMLLabelElement | null;
        if (label) {
          if (tar.checked) {
            label.style.backgroundColor = '#f87b36';
            change('', true);
          } else {
            label.style.backgroundColor = '#fff';
            change('', false);
          }
        }
      }
    }

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
          change(name, true);
        } else {
          svg.style.fill = '#dbdbe0';
          label.style.backgroundColor = '#fff';
          change(name, false);
        }
      }
    }
  };

  return (
    <div className='citie-checkbox' id={`${id}_id`}>
      <input
        id={`${id}_check`}
        type='checkbox'
        hidden
        onChange={(e) => changeHandler(e)}
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
