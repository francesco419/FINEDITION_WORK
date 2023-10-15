import { ReactComponent as SearchIcon } from '../../../assets/svg/search_grey.svg';
import _ from 'lodash';
import './searchComponent.scss';

type SearchComponent_type = {
  value: {
    placeholder: string;
  };
  change: (str: string) => void;
};

export default function SearchComponent({
  value,
  change
}: SearchComponent_type) {
  const debounceChangeHandler = _.debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) change(e.target.value);
    }
  );
  return (
    <div className='searchInputComponent'>
      <SearchIcon />
      <input
        type='text'
        placeholder={value.placeholder}
        onChange={(e) => debounceChangeHandler(e)}
      />
    </div>
  );
}
