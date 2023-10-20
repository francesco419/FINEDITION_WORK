import './megComponents.scss';

type CheckBoxType = {
  id: string;
  name: string;
  change: (theme: string, bool: boolean) => void;
};

export default function ThemeCheckBox({ id, name, change }: CheckBoxType) {
  const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      const tar = e.target;
      const label = document.getElementById(
        `${id}_label`
      ) as HTMLLabelElement | null;
      if (label) {
        if (tar.checked) {
          change(name, true);
          label.style.backgroundColor = '#e67d40';
        } else {
          change(name, false);
          label.style.backgroundColor = '#fff';
        }
      }
    }
  };

  return (
    <div className='citie-checkbox' id={`${id}_id`}>
      <input
        id={`${id}_check`}
        type='checkbox'
        hidden
        onChange={(e) => changeTheme(e)}
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
