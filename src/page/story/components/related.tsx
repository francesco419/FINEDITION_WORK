interface StrArr_Type {
  strArr: string[];
}

export default function RelatedMagazine({ strArr }: StrArr_Type) {
  return (
    <div className='relateMagazine'>
      <h4>Related Magazine Stories</h4>
      <div className='relateMagazine-cardBox'>
        {/*  {_.map(strArr, (o) => {
            return <Card img={'1'} color={'#00000000'} type='medium' />;
          })} */}
      </div>
    </div>
  );
}
