type TravelDate_Type = {
  from: string;
  change: (num: number) => void;
};

export default function TravelDate({ from, change }: TravelDate_Type) {
  return (
    <div className='traveldate'>
      <h5>Departing from {from}</h5>
      <div className='traveldate_inputbox'>
        <div>
          <input
            type='number'
            placeholder='DD/MM/YYYY'
            onChange={(e) => {
              change(parseInt(e.currentTarget.value));
            }}
          />
          <label>Departure Date</label>
        </div>
        <div>
          <input type='text' />
          <label>Departure City</label>
        </div>
      </div>
    </div>
  );
}
