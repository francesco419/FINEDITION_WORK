import { ReactComponent as Info } from '../assets/info.svg';
import './infocomponent.scss';

type StringType = {
  text: string | string[];
};

export default function InfoHover({ text }: StringType) {
  return (
    <span className='info-hover'>
      <Info />
      <div className='info-hover_content'>
        <pre>
          {
            typeof text === 'string' &&
              text.replaceAll(new RegExp(/<[bB][rR]>/g), '\n') //.replaceAll('*', '')
          }
        </pre>
      </div>
    </span>
  );
}
