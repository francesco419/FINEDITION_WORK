import '../info.scss';
import { ReactComponent as Calender } from '../assets/calender.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef, useEffect, useState } from 'react';

export default function CalenderComp() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
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
      onChange={(date) => setSelectedDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
}

{
  /* <div className='past-weather_calender'>
<p>MM/DD/2022</p>
<Calender />
</div> */
}

/* export function AAP() {
  return (
    <div className='picker'>
      <div className='picker-window'></div>
      <div className='triangle'></div>
      <ul className='picker-day'>
        <li>Jan</li>
        <li>Feb</li>
        <li>Mar</li>
        <li>Apr</li>
        <li>May</li>
        <li>June</li>
        <li>July</li>
        <li>Aug</li>
        <li>Sept</li>
        <li>Oct</li>
        <li>Nov</li>
        <li>Dec</li>
      </ul>
      <ul className='picker-hour'>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
      </ul>
      <ul className='picker-minute'>
        <li>00</li>
        <li>05</li>
        <li>10</li>
        <li>15</li>
        <li>20</li>
        <li>25</li>
        <li>30</li>
        <li>35</li>
        <li>40</li>
        <li>45</li>
        <li>50</li>
        <li>55</li>
      </ul>
      <ul className='picker-am'>
        <li>AM</li>
        <li>PM</li>
      </ul>
    </div>
  );
} */
