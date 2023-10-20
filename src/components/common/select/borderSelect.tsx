import './borderSelect.scss';
import _ from 'lodash';

type BorderSelect_Type = {
  label: string;
  cb: any;
  option: string[];
  firstOption: string | null;
  width: number;
};

export default function BorderSelect({
  label,
  cb,
  option,
  firstOption,
  width
}: BorderSelect_Type) {
  return (
    <div className='borderSelect' style={{ width: `${width}px` }}>
      <label htmlFor='Nationality'>{label}</label>
      <select name={label} id={label} onChange={(e) => cb(e)}>
        {firstOption !== null && (
          <option value={firstOption} disabled selected>
            {firstOption}
          </option>
        )}
        {_.map(option, (item, index) => (
          <option value={item} key={`data_${index}`}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
