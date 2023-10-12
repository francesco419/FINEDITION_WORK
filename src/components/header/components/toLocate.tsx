import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';

interface TOLOCATE_TYPE {
  clickHandler: (str: string) => void;
  color: string;
  obj: {
    name: string;
    to: string;
  };
}

export default function LocateButton({
  clickHandler,
  color,
  obj
}: TOLOCATE_TYPE) {
  const loca = useLocation();
  const [colors, setColors] = useState<string>();

  useEffect(() => {
    if (loca.pathname.includes(obj.name.toLowerCase())) {
      setColors((colors) => '#b6b2f8');
    } else {
      setColors((colors) => color);
    }
  }, [color]);

  return (
    <button onClick={() => clickHandler(obj.to)} style={{ color: colors }}>
      {obj.name}
    </button>
  );
}
