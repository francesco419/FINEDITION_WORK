import { ReactComponent as Download } from '../../../assets/profile/image/svg/download.svg';

type DownloadComponent_Type = {
  name: string;
  download: any;
};

export default function DownloadComponent({
  name,
  download
}: DownloadComponent_Type) {
  return (
    <div className='downloadComponent'>
      <button type='button' onClick={() => download()}>
        <Download />
        <p>{name}</p>
      </button>
    </div>
  );
}
