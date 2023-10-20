import '../info.scss';
import { ReactComponent as UseTime } from '../assets/time.svg';
import InfoHover from './infohover';

export type LiType = {
  text: string;
};

export default function UseTimeComp({ text }: LiType) {
  const REG_USETIME: RegExp = new RegExp(/[0-9]{2}:[0-9]{2}-[0-9]{2}:[0-9]{2}/);

  return (
    <li className='usetime'>
      <UseTime />
      <p>{text.match(REG_USETIME) ? text.match(REG_USETIME) : 'Not defined'}</p>
      <InfoHover text={text} />
    </li>
  );
}
