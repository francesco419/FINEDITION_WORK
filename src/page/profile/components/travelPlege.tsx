import ExitButton from '../../../components/common/buttons/exit/exitButton';
import './travelPlege.scss';
import errorImg from '../../../assets/image/imageError.jpg';
import { useState, useRef, useEffect } from 'react';
import ConfirmButton from '../../../components/common/buttons/confirmButton';
import download from 'downloadjs';
import html2canvas from 'html2canvas';
import palaceUpper from '../../../data/temp/story/7.palace-upper.jpg';

type TravelPlege_Type = {
  img: string;
  name: string;
  cbx: () => void;
};

export default function TravelPlege({ img, cbx, name }: TravelPlege_Type) {
  const [colorType, setColorType] = useState<boolean>(false);
  const imgBoxRef = useRef<HTMLDivElement>(null);

  const onErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = palaceUpper;
  };

  const colorTypeHandlerTrue = () => {
    setColorType((colorType) => true);
  };

  const colorTypeHandlerFalse = () => {
    setColorType((colorType) => false);
  };

  const exitHandler = () => {
    downloadImage();
    //downloadImage2();
    //downloadHandler();
    cbx();
  };

  const downloadImage = () => {
    const table = document.getElementById('imgBoxRef') as HTMLDivElement;

    html2canvas(table, {
      logging: true,
      allowTaint: true,
      useCORS: true
    }).then((canvas) => {
      const link = document.createElement('a');
      link.download = `finedition_${name}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  /* const downloadHandler = () => {
    htmlToImage
      .toPng(document.getElementById('imgBoxRef') as HTMLDivElement)
      .then(function (dataUrl) {
        download(dataUrl, 'my-node.png');
      });
  };

  const downloadImage2 = () => {
    const table = document.getElementById('imgBoxRef') as HTMLDivElement;

    htmlToImage.toPng(table).then(function (dataUrl) {
      download(dataUrl, 'my-node.png');
    });
  }; */

  return (
    <div className='travelPlege'>
      <div className='travelPlege_container'>
        <h2>Traveler’s Pledge</h2>
        <div className='travelPlege_imgbox' id='imgBoxRef' ref={imgBoxRef}>
          <img
            src={img}
            onError={(e) => onErrorHandler(e)}
            crossOrigin='anonymous'
          />
          <p>FINEDITION</p>
          <p style={{ color: colorType ? '#000' : '#fff' }}>
            I Pledge as a Fine-Traveler to Respect Local Culture & Tradition and
            Embrace Diversity. Minimize Environmental Impact, Make Ethical
            Choices, & Leave a Positive Footprint Wherever I Wander.
          </p>
          <p style={{ color: colorType ? '#000' : '#fff' }}>{name}</p>
        </div>
        <div className='travelPlege_colorSelect'>
          <button onClick={colorTypeHandlerTrue}></button>
          <button onClick={colorTypeHandlerFalse}></button>
        </div>
        <ConfirmButton
          children={'Download'}
          cb={exitHandler}
          style={{ backgroundColor: '#fff', color: '#000', margin: '0 75px' }}
        />
      </div>
      <ExitButton style={{ top: '20px', right: '20px' }} cb={cbx} />
    </div>
  );
}

/* const downloadHandler = () => {
  htmlToImage
    .toPng(document.getElementById('dragSection') as HTMLDivElement)
    .then(function (dataUrl) {
      download(dataUrl, 'my-node.png');
    });
}; */
