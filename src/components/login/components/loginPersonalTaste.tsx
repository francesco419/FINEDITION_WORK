import { LoginForm_type } from '../login';
import { TASTE } from '../../../temp/countries';
import _ from 'lodash';
import TasteComp from './tasteindividual';
import { useState } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectUserInfo } from '../../../redux/slices/userInfoSlice';
import { postInterceptor, sendAxiosState } from '../../../func/interceptor';
import { AxiosResponse } from 'axios';
import LoadingSpinner from '../../common/loadingspinner';

export default function LoginFormPersonalTaste({ toNext }: LoginForm_type) {
  const [tasteArr, setTasteArr] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const user = useAppSelector(selectUserInfo);

  const postRegister = () => {
    setLoading((loading) => true);
    let inputInfo = _.clone(user);
    inputInfo.keyword = tasteArr;

    const data: sendAxiosState = {
      url: 'http://localhost:8080/register',
      data: inputInfo,
      config: undefined,
      callback: (e: AxiosResponse) => {
        setLoading((loading) => false);
        if (e.data.flag) {
          toNext(3);
        } else {
          toNext(1);
        }
      }
    };
    postInterceptor(data);
  };

  const onClicAddkHandler = (taste: string) => {
    setTasteArr((tasteArr) => [...tasteArr, taste]);
  };

  const onClickDeleteHandler = (taste: string) => {
    setTasteArr((tasteArr) => [..._.pull(tasteArr, taste)]);
  };

  return (
    <div className='login-taste'>
      <div className='login-paragraph'>
        <p>Click & get finest options</p>
        <p style={{ float: 'left' }}>that fits your taste</p>
      </div>
      <ul className='login-taste_form'>
        {_.map(TASTE, (o, index) => {
          return (
            <TasteComp
              str={o}
              del={onClickDeleteHandler}
              add={onClicAddkHandler}
              key={`${o}_${index}`}
            />
          );
        })}
      </ul>
      <div className='optional'>
        <p>pick around 3 to 5</p>
      </div>
      <button
        className='login-taste_confirm'
        type='button'
        onClick={() => toNext(3)}
      >
        Continue
      </button>
      {loading && (
        <div className='login_loader'>
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
}
