interface Answer_Type {
  point: string;
  pointAns: string;
}

export function StoryAnswer({ point, pointAns }: Answer_Type) {
  return (
    <div className='storyAnswer'>
      <h4>{point}</h4>
      <p>{pointAns}</p>
    </div>
  );
}
