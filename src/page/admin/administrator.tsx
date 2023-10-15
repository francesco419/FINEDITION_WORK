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

export type info_Type = {
  id: number;
  typeId: number;
  tag: string[];
  pickText: string;
  spendTime: string;
  station: string;
  keyword: string[];
  maylike: mayLike_Type[];
  bookmark: number;
  like: number;
  view: number;
};

export interface mayLike_Type {
  name: string;
  likeId: number;
}

export default function Administrator() {
  const [password, setPassword] = useState<string>();
  const [passwordOK, setPasswordOK] = useState<boolean>(true);
  const [anything, setAnything] = useState<any>();
  const [anything2, setAnything2] = useState<any[]>([]);
  const [story, setStory] = useState<any[]>([]);

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

  const txtToData = () => {
    _.map(JSON.parse(anything), (o) => {
      let add: string[] = o.addr1.split(',');
      const covername = `${add[add.length - 2]}, ${add[add.length - 1]}`;
      const regExp = new RegExp(/[a-zA-Z0-9-'? ]*/);
      const num = _.findIndex(common, (p) => {
        return o.contentid == p.contentid;
      });
      let a = {
        id: o.contentid,
        typeId: 76,
        coverName: o.title,
        coverImg: common[num].firstimage !== '' ? common[num].firstimage : '',
        coverLocate: 'Seoul Info',
        coverTitle: o.title.match(regExp)[0].trim(),
        coverAddr: covername
      };
      if (a.coverImg === '') {
        arr000.push(a);
      }
      arr123.push(a);
    });
  };

  /* const excelToInfoForm = () => {
    let obj: info_Type[] = [];
    _.map(obj, (o) => {
      let info: info_Type = {
        id: 0,
        typeId: 76,
        tag: [],
        pickText: '',
        spendTime: '',
        station: '',
        keyword: [],
        maylike: [],
        bookmark: 0,
        like: 0,
        view: 0
      };
      _.map(o, (g, index) => {
        let data = g === null ? '' : g;
        switch (index) {
          case 0:
            info.id = data as number;
            return;
          case 2:
            if (data === '') {
              return;
            }
            info.tag.push(data as string);
            return;
          case 3:
            if (data === '') {
              return;
            }
            info.tag.push(data as string);
            return;
          case 4:
            if (data === '') {
              return;
            }
            info.tag.push(data as string);
            return;
          case 5:
            info.pickText = data as string;
            return;
          case 6:
            info.spendTime = data as string;
            return;
          case 7:
            info.station = data as string;
            return;
          case 8:
            let arr: string[];
            if (typeof data === 'string') {
              arr = data.split(',');
              const trr = _.forEach(arr, (o) => {
                _.trim(o, '"');
              });
              info.keyword = trr;
            }
            return;
          case 9:
            if (data === '') {
              return;
            }
            console.log(data);
            const arr2 = JSON.stringify(data).split(',');
            console.log(arr2);
            let may2 = {
              name: _.trim(arr2[1], '"'),
              likeId: parseInt(_.trim(arr2[0], '"'))
            };
            info.maylike.push(may2);
            return;
          case 10:
            if (data === '') {
              return;
            }
            const arr3 = JSON.stringify(data).split(',');
            let may3 = {
              name: _.trim(arr3[1], '"'),
              likeId: parseInt(_.trim(arr3[0], '"'))
            };
            info.maylike.push(may3);
            return;
          case 11:
            if (data === '') {
              return;
            }
            const arr4 = JSON.stringify(data).split(',');
            let may4 = {
              name: _.trim(arr4[1], '"'),
              likeId: parseInt(_.trim(arr4[0], '"'))
            };
            info.maylike.push(may4);
            return;
          default:
            return;
        }
      });
      obj.push(info);
    });
    console.log(obj);
  }; */

  const storyIntoData = () => {
    let data: sendAxiosState = {
      url: 'http://localhost:8080/getinfo',
      //url: `${process.env.REACT_APP_PROXY}/getinfo`,
      data: { id: 'frank' },
      callback: (e: AxiosResponse) => {
        console.log(e);
      }
    };
    postInterceptor(data);
  };

  const aaaaa =
    'https://port-0-fine-back-euegqv2bln4k549r.sel5.cloudtype.app/test';

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
            <div>
              <input type='file' onChange={(e) => onFileChange(e)} />
              <button
                onClick={() => {
                  console.log(JSON.parse(anything));
                }}
              >
                CONSOLE
              </button>
              <button onClick={storyIntoData}>test api</button>
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
