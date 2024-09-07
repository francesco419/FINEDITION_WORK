import '../info.scss';
import { ReactComponent as Pick } from '../assets/Storytelling.svg';
import { useEffect, useState } from 'react';
import _, { over } from 'lodash';
import errorImg from '../../../assets/image/imageError.jpg';

type AAType = {
  title: string;
  addr1: string;
  firstimage: string | undefined;
  overview: string;
  typedDetailText: string | undefined;
};

const DELETEFROMSTRING = [
  {
    del: '<br />',
    replace: '\n'
  },
  {
    del: '<br>',
    replace: ''
  },
  {
    del: '&nbsp;',
    replace: ' '
  },
  {
    del: '&rsquo;',
    replace: "'"
  },
  {
    del: '<em>',
    replace: ''
  },
  {
    del: '</em>',
    replace: ''
  }
];

export default function InfoDetail({
  title,
  addr1,
  firstimage,
  overview,
  typedDetailText
}: AAType) {
  const [result, setResult] = useState<string>();

  let add = title.match(new RegExp(/[가-힣]+\s?/));
  let titl = title.split('(');
  let addr = addr1.split(',').reverse();
  useEffect(() => {
    //console.log(overview);
    let editedOverview: string = overview;
    _.map(DELETEFROMSTRING, (o) => {
      editedOverview = editedOverview.replaceAll(o.del, o.replace);
    });

    setResult((result) => editedOverview);
  }, []);

  const errorImageHandler = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = errorImg;
  };

  return (
    <>
      <div className='info_about-title'>
        <h1 className='info_about-title-h1'>{titl[0]}</h1>
        <p className='info_about-title-p'>
          {addr[1]},{addr[0]}
        </p>
      </div>
      <div className='info_about-detail'>
        <div className='info_about-frontimg'>
          <img src={firstimage} onError={errorImageHandler} />
        </div>
        <div className='info_about-text'>
          <div>
            <Pick />
            <h3>Finedition Pick</h3>
          </div>
          <p>{typedDetailText}</p>
          <p>{`${result}`}</p>
        </div>
      </div>
    </>
  );
}
