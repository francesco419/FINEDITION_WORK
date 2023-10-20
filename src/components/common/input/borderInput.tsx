import './borderInput.scss';

type BorderInput_Type = {
  type: string;
  cb: any;
  label: string;
  width: number;
  placeholder: string;
};

export default function BorderInput({
  type,
  cb,
  label,
  width,
  placeholder
}: BorderInput_Type) {
  return (
    <div className='borderInput' style={{ width: `${width}px` }}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} onChange={(e) => cb(e)} />
    </div>
  );
}
