import '../info.scss';
import { ReactComponent as KeyWord } from '../assets/keyword.svg';
import _ from 'lodash';
import { useNavigate } from 'react-router';

type KeyWord_Type = {
  keyword: string[] | undefined;
};

export default function KeyWordComp({ keyword }: KeyWord_Type) {
  const nav = useNavigate();

  const onClickHandler = (str: string) => {
    nav(`/search/${str}`);
  };

  return (
    <li className='usetime'>
      <div style={{ alignSelf: 'baseline', margin: '2px 0 0' }}>
        <KeyWord />
      </div>
      <p>
        {_.map(keyword, (o, index) => {
          return (
            <button onClick={() => onClickHandler(o)} key={`${o}_${index}`}>
              #{o}{' '}
            </button>
          );
        })}
      </p>
    </li>
  );
}
