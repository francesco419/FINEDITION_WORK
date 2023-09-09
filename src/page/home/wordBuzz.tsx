import './wordBuzz.scss';
import { ReactComponent as Renew } from '../../assets/svg/Autorenew.svg';

export default function WordBuzz() {
  return (
    <div className='wordbuzz'>
      <div className='wordbuzz_title'>
        <h3>Word Buzz</h3>
        <Renew />
      </div>
    </div>
  );
}
