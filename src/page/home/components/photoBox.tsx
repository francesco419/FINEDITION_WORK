import { cardType } from '../../admin/administrator';
import { useAppDispatch } from '../../../redux/hooks';
import { popUpTrue } from '../../../redux/slices/popupSlice';

type PopType = {
  obj: any;
};

export default function PhotoBox({ obj }: PopType) {
  const dispatch = useAppDispatch();

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://picsum.photos/200/300';
  };

  const reducerHandler = () => {
    dispatch(popUpTrue(obj.galWebImageUrl));
  };

  return (
    <div>
      <button onClick={reducerHandler}>
        <img
          src={obj.galWebImageUrl}
          onError={(e) => handleImgError(e)}
          title={obj.galTitle}
        />
      </button>
    </div>
  );
}
