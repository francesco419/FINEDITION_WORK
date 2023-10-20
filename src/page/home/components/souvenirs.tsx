import { useAppDispatch } from '../../../redux/hooks';
import { popUpTrue } from '../../../redux/slices/popupSlice';
import temp from '../../../assets/image/home/souvenir-temp.jpg';

export default function Souvenirs() {
  const dispatch = useAppDispatch();

  const reducerHandler = () => {
    dispatch(popUpTrue(temp));
  };

  return (
    <div className='home_souvenirs' onClick={reducerHandler}>
      <p>{`Look around\nFinedition Souvenirs`}</p>
    </div>
  );
}
