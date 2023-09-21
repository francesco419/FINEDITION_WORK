import { LoginForm_type } from '../login';
import { TASTE } from '../../../temp/countries';
import _ from 'lodash';

export default function LoginFormPersonalTaste({ toNext }: LoginForm_type) {
  return (
    <div className='login-taste'>
      <div className='login-paragraph'>
        <p>Click & get finest options</p>
        <p style={{ float: 'left' }}>that fits your taste</p>
      </div>
      <div className='login-taste_form'>
        {_.map(TASTE, (o, index) => {
          return (
            <div className='login-taste_select' key={`${o}_taste`}>
              <div>{o}</div>
            </div>
          );
        })}
      </div>
      <div className='optional'>
        <p>(optional)</p>
      </div>
      <button type='button' onClick={() => toNext(3)}>
        Continue
      </button>
    </div>
  );
}
