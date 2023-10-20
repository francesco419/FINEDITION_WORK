import { ReactComponent as Totop } from '../../../../assets/svg/toTop.svg';
import './toTopButton.scss';

type ToTopButton_Type = {
  type: boolean;
};

export default function ToTopButton({ type }: ToTopButton_Type) {
  const onClickHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={onClickHandler}
      className={type ? 'toTopNeutralTrue' : 'toTopNeutralFalse'}
    >
      <Totop />
    </button>
  );
}
