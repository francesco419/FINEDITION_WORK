import { ReactComponentElement } from 'react';
import './confirmButton.scss';

type ConfirmButton_Type = {
  children: any;
  cb: any;
  style?: any;
};

export default function ConfirmButton({
  children,
  cb,
  style
}: ConfirmButton_Type) {
  return (
    <button style={style} className='confirmButton' onClick={cb}>
      {children}
    </button>
  );
}
