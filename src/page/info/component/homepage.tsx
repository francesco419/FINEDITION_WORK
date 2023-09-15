import React, { useState, useEffect } from 'react';
import '../info.scss';
import { ReactComponent as Fee } from '../assets/fee.svg';
import { LiType } from './usetime';

const REGEXP = new RegExp(
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&=]*)/g
);

export default function HomepageComp({ text }: LiType) {
  const [link, setLink] = useState<string>('');

  useEffect(() => {
    const temp = text.match(REGEXP);
    if (temp && temp.length !== 0) {
      setLink((link) => temp[0]);
    }
  }, []);

  return (
    <li className='usetime'>
      <Fee />
      <a href={'https://' + link}>{link}</a>
    </li>
  );
}
