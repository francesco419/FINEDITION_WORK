import '../info.scss';
import { ReactComponent as Calender } from '../assets/calender.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef, useEffect, useState } from 'react';

type CalendarType = {
  selectedDate: Date | null;
  change: (o: Date | null) => void;
};

export default function CalenderComp({ selectedDate, change }: CalendarType) {
  //const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <button className='past-weather_calender' onClick={onClick} ref={ref}>
      {value}
      <Calender />
    </button>
  ));

  const getDate = () => {
    const date = new Date();
    const mmddyyyy = `${
      date.getMonth() + 1
    }-${date.getDate()}-${date.getFullYear()}`;
    return mmddyyyy;
  };

  const getPastDate = () => {
    const date = new Date();
    const mmddyyyy = `${date.getMonth() + 1}-${date.getDate()}-${
      date.getFullYear() - 1
    }`;
    return mmddyyyy;
  };

  return (
    <DatePicker
      dateFormat='MM/dd/yyyy' // 날짜 형태
      shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
      minDate={new Date(getPastDate())} // minDate 이전 날짜 선택 불가
      maxDate={new Date(getDate())} // maxDate 이후 날짜 선택 불가
      selected={selectedDate}
      onChange={(date) => change(date)}
      customInput={<ExampleCustomInput />}
    />
  );
}
