import { AxiosResponse } from 'axios';
import Header from '../../components/header/header';
import {
  postInterceptor,
  getInterceptor,
  sendAxiosState,
  APIInterceptor
} from '../../func/interceptor';
import './administrator.scss';
import { useEffect, useState } from 'react';
import { abort } from 'process';
import image23 from '../../assets/image/hanoak.png';
import { putInterceptor } from '../../func/interceptor';
import axios from 'axios';
import _ from 'lodash';
import { API_TYPE } from '../../func/interface';
import { API_ENG } from '../../temp/apicode';
import readXlsxFile from 'read-excel-file';
import { common } from '../../temp/commondata';

export interface cardType {
  id: number;
  typeId: number;
  coverName: string;
  coverImg: string;
  coverLocate: string;
  coverTitle: string;
  coverAddr: string;
}

type poType = {
  contentid: string;
  contenttypeid: string;
  title: string;
  createdtime: string;
  modifiedtime: string;
  tel: string;
  telname: string;
  homepage: string;
  firstimage: string;
  firstimage2: string;
  cpyrhtDivCd: string;
  areacode: string;
  sigungucode: string;
  cat1: string;
  cat2: string;
  cat3: string;
  addr1: string;
  addr2: string;
  zipcode: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  overview: string;
};

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
  const [anything2, setAnything2] = useState<any[]>([]);

  let arr123: cardType[] = [];
  let arr000: cardType[] = [];

  useEffect(() => {
    /*     _.map(API_ENG, (o) => {
      getAPIDataCommon(o.contentid);
    }); */
  }, []);

  const getAPIDataCommon = async (temp: number) => {
    const interceptor: API_TYPE = {
      url: `https://apis.data.go.kr/B551011/EngService1/detailCommon1?serviceKey=${process.env.REACT_APP_TOUR_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${temp}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&contentTypeId=76`,
      callback: (o: any) => {
        const data = o.data.response.body.items.item[0];
        setAnything2((anything2) => [...anything2, data]);
      }
    };
    APIInterceptor(interceptor);
  };

  const getExcel = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files)
      readXlsxFile(e.target.files[0]).then((rows) => {
        console.log(rows);
      });
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let file = e.target.files[0];
      let fileReader = new FileReader();
      console.log(file);
      fileReader.onload = () => {
        setAnything((anything: any) => fileReader.result);
        console.log(anything);
      };
      fileReader.readAsText(file);
      console.log(anything);
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
            {/* <div className='admin_container'>
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
            </div> */}
            <div>
              <input type='file' onChange={(e) => onFileChange(e)} />
              <button
                onClick={() => {
                  console.log(JSON.parse(anything));
                }}
              >
                CONSOLE
              </button>
              <button
                onClick={() => {
                  _.map(JSON.parse(anything), (o) => {
                    let add: string[] = o.addr1.split(',');
                    const covername = `${add[add.length - 2]}, ${
                      add[add.length - 1]
                    }`;
                    const regExp = new RegExp(/[a-zA-Z0-9-'? ]*/);
                    const num = _.findIndex(common, (p) => {
                      return o.contentid == p.contentid;
                    });
                    let a = {
                      id: o.contentid,
                      typeId: 76,
                      coverName: o.title,
                      coverImg:
                        common[num].firstimage !== ''
                          ? common[num].firstimage
                          : '',
                      coverLocate: 'Seoul Info',
                      coverTitle: o.title.match(regExp)[0].trim(),
                      coverAddr: covername
                    };
                    if (a.coverImg === '') {
                      arr000.push(a);
                    }
                    arr123.push(a);
                  });
                }}
              >
                CONSOLE
              </button>
              <button
                onClick={() => {
                  console.log(arr123);
                  console.log(arr000);
                }}
              >
                Console Result
              </button>
              <button
                onClick={() => {
                  console.log(anything2);
                }}
              >
                Console anything2
              </button>
              <input type='file' onChange={(e) => getExcel(e)} />
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
