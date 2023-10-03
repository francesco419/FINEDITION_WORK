import './megComponents.scss';

type CheckBoxType = {
  id: string;
  name: string;
};

export default function ThemeCheckBox({ id, name }: CheckBoxType) {
  return (
    <div className='citie-checkbox' id={`${id}_id`}>
      <input
        id={`${id}_check`}
        type='checkbox'
        hidden
        onChange={(e) => {
          if (e.target) {
            const tar = e.target;
            const label = document.getElementById(
              `${id}_label`
            ) as HTMLLabelElement | null;
            if (label) {
              if (tar.checked) {
                label.style.backgroundColor = '#e67d40';
              } else {
                label.style.backgroundColor = '#fff';
              }
            }
          }
        }}
      />
      <label
        id={`${id}_label`}
        htmlFor={`${id}_check`}
        className='citie-checkbox_check'
      ></label>
      <label className='citie-checkbox_label'>{name}</label>
    </div>
  );
}
