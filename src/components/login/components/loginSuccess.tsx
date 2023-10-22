import { useAppDispatch } from '../../../redux/hooks';
import { setLoginFormFalse } from '../../../redux/slices/loginSlice';
import congrates_img from '../assets/congrates.png';

export default function LoginFormSuccess() {
  const dispatch = useAppDispatch();
  const changeLoginForm = () => {
    dispatch(setLoginFormFalse());
  };
  return (
    <div className='login-congrates'>
      <div className='login-paragraph'>
        <p style={{ color: '#161616' }}>Congratulation!</p>
      </div>
      <img src={congrates_img} />
      <div className='login-congrates_discoverer'>
        <h4>You are</h4>
        <h3>Discoverer</h3>
        <p>
          Has a strong sense of curiosity that drives you to explore the unknown
          and seek out new experiences.
        </p>
      </div>
      <button type='button' onClick={changeLoginForm}>
        Discover
      </button>
    </div>
  );
}
