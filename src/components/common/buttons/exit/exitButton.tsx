import { ReactComponent as Exit } from '../../../../assets/svg/exit.svg';
import './exitButton.scss';

type ExitButton_Type = {
  style: any;
  cb: () => void;
};

export default function ExitButton({ style, cb }: ExitButton_Type) {
  return (
    <button style={style} className='exitButton' onClick={cb}>
      <Exit />
    </button>
  );
}
