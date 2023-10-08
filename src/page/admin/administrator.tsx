import { AxiosResponse } from 'axios';
import Header from '../../components/header/header';
import {
  postInterceptor,
  getInterceptor,
  sendAxiosState
} from '../../func/interceptor';
import './administrator.scss';
import { useState } from 'react';
import { abort } from 'process';
import image23 from '../../assets/image/hanoak.png';
import { putInterceptor } from '../../func/interceptor';
import axios from 'axios';

export default function Administrator() {
  const [password, setPassword] = useState<string>();
  const [passwordOK, setPasswordOK] = useState<boolean>(true);
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
  const [anything, setAnything] = useState<any>();

  const posttest4 = () => {
    postInterceptor({
      url: `http://localhost:8080/test`,
      data: { id: 419 },
      callback: (e: AxiosResponse) => {
        console.log(e);
      }
    });
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let file = e.target.files[0];
      let fileReader = new FileReader();
      console.log(file);
      fileReader.onload = () => {
        setAnything((anything: any) => fileReader.result);
      };
      fileReader.readAsText(file);
    }
  };

  const createFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const formData = new FormData();
      let files: FileList = e.target.files;
      formData.append('file', files[0]);
      formData.append('name', 'files[0]');

      let data: sendAxiosState = {
        url: 'http://localhost:8080/testimage',
        data: formData,
        callback: (e: AxiosResponse) => {
          console.log(e);
        }
      };
      postInterceptor(data);
    }
  };

  const onChangeHandlerPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      if (e.target.value === 'fine') {
        setPasswordOK((passwordOK) => false);
        return;
      }
      setPassword((password) => e.target.value);
    }
  };

  return (
    <div className='admin'>
      {passwordOK ? (
        <div className='adminpass'>
          <p>password </p>
          <input type='text' onChange={(e) => onChangeHandlerPassword(e)} />
        </div>
      ) : (
        <>
          <Header type='black' />
          <div className='admin_test'>
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
                    setContentTypeId((contentTypeId) =>
                      parseInt(e.target.value)
                    );
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
        </>
      )}
    </div>
  );
}

{
  /* <div className='admin_container'>
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
      </div> */
}
