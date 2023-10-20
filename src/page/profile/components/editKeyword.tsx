import { TASTE } from '../../../temp/countries';
import TasteComp from '../../../components/login/components/tasteindividual';
import { useState } from 'react';
import ConfirmButton from '../../../components/common/buttons/confirmButton';
import _ from 'lodash';
import '../profile.scss';
import ExitButton from '../../../components/common/buttons/exit/exitButton';
import { putInterceptor, sendAxiosState } from '../../../func/interceptor';
import { AxiosResponse } from 'axios';
import { useAppDispatch } from '../../../redux/hooks';
import { setUpdateInfo } from '../../../redux/slices/userInfoSlice';

type EditKeyword_Type = {
  cb2: () => void;
  userid: number;
};

export default function EditKeyword({ cb2, userid }: EditKeyword_Type) {
  const [tasteArr, setTasteArr] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const onClicAddkHandler = (taste: string) => {
    setTasteArr((tasteArr) => [...tasteArr, taste]);
  };

  const onClickDeleteHandler = (taste: string) => {
    setTasteArr((tasteArr) => [..._.pull(tasteArr, taste)]);
  };

  const postKeyword = () => {
    let data: sendAxiosState = {
      url: `${process.env.REACT_APP_PROXY}/update/keyword`,
      data: { userkeyword: tasteArr, userid: userid },
      callback: (e: AxiosResponse) => {
        if (e.data.flag) {
          dispatch(setUpdateInfo({ userkeyword: tasteArr }));
          exitHandler();
        }
      }
    };
    putInterceptor(data);
  };

  const exitHandler = () => {
    cb2();
  };

  return (
    <div className='editkeyword-taste'>
      <div className='editkeyword-paragraph'>
        <p>Click & get finest options</p>
        <p style={{ float: 'left' }}>that fits your taste</p>
      </div>
      <ul className='editkeyword-taste_form'>
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
      <ExitButton style={{ top: '30px', right: '30px' }} cb={exitHandler} />
      <ConfirmButton
        children='Confirm'
        cb={postKeyword}
        style={{ margin: '66px 0 0' }}
      />
    </div>
  );
}
