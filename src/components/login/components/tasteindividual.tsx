import { useState } from 'react';
import { String_Type } from '../../../func/interface';
import '../login.scss';

interface TASTE_TYPE extends String_Type {
  del: (taste: string) => void;
  add: (taste: string) => void;
}

export default function TasteComp({ str, del, add }: TASTE_TYPE) {
  const [isClick, setIsClick] = useState<boolean>(false);

  const onClickHandler = () => {
    if (isClick) {
      del(str);
    } else {
      add(str);
    }
    setIsClick((isClick) => !isClick);
  };

  return (
    <li className='login-taste_select'>
      <button
        style={{ backgroundColor: isClick ? '#c0c0c0' : '#e3e3e3' }}
        onClick={onClickHandler}
      >
        {str}
      </button>
    </li>
  );
}
