import React, { useState, useEffect } from 'react';
import '../info.scss';
import { ReactComponent as Language } from '../assets/language.svg';
import _ from 'lodash';
import { LiType } from './usetime';

const COUNTRY = [
  { code: 'EN', country: 'English' },
  { code: 'AE', country: 'Arabic' },
  { code: 'CN', country: 'Chinese' },
  { code: 'CZ', country: 'Czech' },
  { code: 'DK', country: 'Danish' },
  { code: 'ID', country: 'Indonesian' },
  { code: 'MY', country: 'Malaysian' },
  { code: 'NL', country: 'Dutch' },
  { code: 'FR', country: 'French' },
  { code: 'FI', country: 'Finnish' },
  { code: 'DE', country: 'German' },
  { code: 'IT', country: 'Italian' },
  { code: 'JP', country: 'Japanese' },
  { code: 'NO', country: 'Norwegian' },
  { code: 'PL', country: 'Polish' },
  { code: 'BR', country: 'Portuguese' },
  { code: 'RO', country: 'Romanian' },
  { code: 'RU', country: 'Russian' },
  { code: 'ES', country: 'Spanish' },
  { code: 'SE', country: 'Swedish' },
  { code: 'TH', country: 'Thai' },
  { code: 'PH', country: 'Filipino' },
  { code: 'TR', country: 'Turkish' }
];

export default function LanguageComp({ text }: LiType) {
  const [code, setCode] = useState<string[]>([]);

  useEffect(() => {
    console.log(text);
    division();
  }, []);

  const division = () => {
    setCode((code) => []);
    //code 초기화

    COUNTRY.forEach((o) => {
      // forEach
      if (_.includes(text, o.country)) {
        //text에 country가 포함되있다면
        setCode((code) => [...code, o.code]);
        // code에 추가
      }
    });
  };

  return (
    <li className='usetime'>
      <Language />
      {text !== '' ? <p>{code.join(', ')}</p> : <p>No Language Service</p>}
    </li>
  );
}
