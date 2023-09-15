import '../info.scss';
import { ReactComponent as Pick } from '../assets/Storytelling.svg';

//title,addr1,firstimage -
//overview

type AAType = {
  title: string;
  addr1: string;
  firstimage: string;
  overview: string;
};
export default function InfoDetail({
  title,
  addr1,
  firstimage,
  overview
}: AAType) {
  return (
    <>
      <div className='info_about-title'>
        <h1>{title}</h1>
        <p>{addr1}</p>
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
          <p>{`Situated in the heart of Seoul, this Hanok village is very near from metro and unique surroundings of Jung-gu.
As it is surrounded by Namsan park, you can enjoy hanok village and the nature at the same time.
There are some unique performances and classes held, so make sure to reserve it before you visit!`}</p>
          <p>{`${overview}`}</p>
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
