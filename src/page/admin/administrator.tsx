import Header from '../../components/header/header';
import './administrator.scss';
import { useState } from 'react';

export default function Administrator() {
  const [contentId, setContentId] = useState<number>();
  const [contentTypeId, setContentTypeId] = useState<number>();
  const [intro, setIntro] = useState<string>('');
  const [spendTime, setSpendTime] = useState<string>('');
  const [transport, setTransport] = useState<string>('');
  const [keyword, setKeyword] = useState<string[]>([]);
  const [mayLike, setMayLike] = useState<string[]>([]);
  const [story, setStory] = useState<string[]>([]);
  const [cover, setCover] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  return (
    <div className='admin'>
      <Header type='black' />
      <div className='admin_container'>
        <div className='admin_box'>
          <h2>내부 내용</h2>
          <p>Content ID</p>
          <input
            type='number'
            onChange={(e) => {
              setContentId((contentId) => parseInt(e.target.value));
            }}
          />
          <p>Content Type ID</p>
          <input
            type='number'
            onChange={(e) => {
              setContentTypeId((contentTypeId) => parseInt(e.target.value));
            }}
          />
          <p>Intro</p>
          <textarea
            onChange={(e) => {
              setIntro((intro) => e.target.value);
            }}
          ></textarea>
          <p>Spend Time</p>
          <input
            onChange={(e) => {
              setSpendTime((spendTime) => e.target.value);
            }}
          />
          <p>Transport</p>
          <input
            onChange={(e) => {
              setTransport((transport) => e.target.value);
            }}
          />
          <p>Keyword</p>
          <input
            onChange={(e) => {
              const t: string[] = e.target.value.split(',');
              setKeyword((keyword) => t);
            }}
          />
          <p>MayLike ID</p>
          <input
            onChange={(e) => {
              const t: string[] = e.target.value.split(',');
              setMayLike((mayLike) => t);
            }}
          />
          <p>Story ID</p>
          <input
            onChange={(e) => {
              const t: string[] = e.target.value.split(',');
              setStory((story) => t);
            }}
          />
        </div>
        <div>
          <h2>외부 커버 내용</h2>
          <p>Cover Img</p>
          <input
            onChange={(e) => {
              setCover((cover) => e.target.value);
            }}
          />
          <p>Summary</p>
          <textarea
            onChange={(e) => {
              setSummary((summary) => e.target.value);
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
}