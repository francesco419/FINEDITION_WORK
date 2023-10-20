import './popUpImg.scss';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { selectPopUp, popUpFalse } from '../../redux/slices/popupSlice';
import { ReactComponent as Exit } from '../../assets/svg/exit.svg';

export default function PopUpImg() {
  const dispatch = useAppDispatch();
  const popup = useAppSelector(selectPopUp);

  const onClickHandler = () => {
    dispatch(popUpFalse());
  };

  return (
    <>
      {popup.show && (
        <div className='popupImg'>
          <div className='popupImg_container'>
            <img src={popup.img} />
            <button onClick={onClickHandler}>
              <Exit />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
