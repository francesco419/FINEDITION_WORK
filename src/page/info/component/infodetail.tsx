import '../info.scss';
import { ReactComponent as Pick } from '../assets/Storytelling.svg';
import { useEffect } from 'react';
import _ from 'lodash';

//title,addr1,firstimage -
//overview

type AAType = {
  title: string;
  addr1: string;
  firstimage: string;
  overview: string;
  typedDetailText: string | undefined;
};
export default function InfoDetail({
  title,
  addr1,
  firstimage,
  overview,
  typedDetailText
}: AAType) {
  let add = title.match(new RegExp(/[가-힣]+\s?/));
  let titl = title.split('(');
  let addr = addr1.split(',').reverse();
  useEffect(() => {}, []);

  ///([가-힣]+|\w+)(\s{0,}):(\s{0,})(\w+)$/
  ///[가-힣]+\s?/
  return (
    <>
      <div className='info_about-title'>
        <h1>{titl[0]}</h1>
        <p>
          {addr[1]},{addr[0]}
        </p>
      </div>
      <div className='info_about-detail'>
        <div className='info_about-frontimg'>
          <img src={firstimage} />
        </div>
        <div className='info_about-text'>
          <div>
            <Pick />
            <h3>Finedition Pick</h3>
          </div>
          <p>{typedDetailText}</p>
          <p>{`${overview.replaceAll('<br />', '\n')}`}</p>
        </div>
        {/* <div className='info_about-highlights d-flex'>
              <div className='d-flex'>
                <p>Surrounding Highlights</p>
                <Down />
              </div>
            </div> */}
      </div>
    </>
  );
}
