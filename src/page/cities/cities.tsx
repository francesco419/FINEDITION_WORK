import './cities.scss';
import { ReactComponent as Map } from '../../assets/svg/map.svg';
import _ from 'lodash';
import { useEffect } from 'react';

const cities = [
  { id: 'KR-11', name: 'Seoul' },
  { id: 'KR-26', name: 'Busan' },
  { id: 'KR-27', name: 'Daegu' },
  { id: 'KR-28', name: 'Incheon' },
  { id: 'KR-29', name: 'Gwangju' },
  { id: 'KR-30', name: 'Deajeon' },
  { id: 'KR-31', name: 'Ulsan' },
  { id: 'KR-41', name: 'Gyeonggi' },
  { id: 'KR-42', name: 'Gangwon' },
  { id: 'KR-43', name: 'Chungcheonbuk' },
  { id: 'KR-44', name: 'Chungcheonnam' },
  { id: 'KR-45', name: 'Gyeongsangnam' },
  { id: 'KR-46', name: 'Jeju Island' },
  { id: 'KR-47', name: 'A' },
  { id: 'KR-48', name: 'B' },
  { id: 'KR-49', name: 'C' },
  { id: 'KR-50', name: 'D' }
];

export default function Cities() {
  return (
    <div className='background-full'>
      <div className='citie'>
        <div className='citie_container'>
          {_.map(cities, (o) => {
            return <CitiesCheckBox id={o.id} name={o.name} />;
          })}
        </div>
        <Map />
      </div>
    </div>
  );
}

type CheckBoxType = {
  id: string;
  name: string;
};

function CitiesCheckBox({ id, name }: CheckBoxType) {
  useEffect(() => {
    const doc = document.getElementById(id) as SVGPathElement | null;
  }, []);

  return (
    <div className='citie-checkbox'>
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
                svg.style.fill = '#e67d40';
                label.style.backgroundColor = '#e67d40';
              } else {
                svg.style.fill = '#cccccc';
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
