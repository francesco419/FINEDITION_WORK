import { AxiosResponse } from 'axios';
import {
  sendAxiosState,
  postInterceptor,
  putInterceptor,
  getInterceptor
} from './interceptor';

export const sendFilesPost = (
  data: any,
  files: File | undefined,
  axios: string,
  func: (id: number) => void
) => {
  if (data.userid === null || files === undefined) {
    return false;
  }

  console.log('formdata pass');

  let file = createFormData(data, files, func);

  if (axios === 'put') {
    putInterceptor(file);
  } else if (axios === 'post') {
    postInterceptor(file);
  }
};

export const createFormData = (
  data: any,
  files: File,
  func: (id: number) => void
) => {
  let CRUDTO: string = 'updateuser';
  let formdata = new FormData();

  formdata.append(`file`, files);
  if (data.userid) {
    formdata.append('userid', data.userid);
  }
  if (data.username) {
    formdata.append('username', data.username);
  }
  if (data.usernation) {
    formdata.append('usernation', data.usernation);
  }
  if (data.usergender) {
    formdata.append('usergender', data.usergender);
  }
  if (data.userbirth) {
    formdata.append('userbirth', data.userbirth);
  }

  let file: sendAxiosState = {
    url: `${process.env.REACT_APP_PROXY}/${CRUDTO}`,
    data: formdata,
    config: {
      headers: {
        'Content-Type': `multipart/form-data`
      }
    },
    callback: (e: AxiosResponse) => {
      if (e.data.flag) {
        func(data.userid as number);
      }
    }
  };
  return file;
};

/* const getUserInfo = (id: number,set:any) => {
  let data: sendAxiosState = {
    url: `${process.env.REACT_APP_PROXY}/getinfo`,
    data: { userid: id },
    callback: (e: AxiosResponse) => {}
  };
  getInterceptor(data);
}; */

export const setFilesOnState = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFunc: (value: React.SetStateAction<File[]>) => void
) => {
  const fetchFile = e.currentTarget.files;
  if (fetchFile) {
    if (fetchFile.length >= 7) {
      return;
    }
    setFunc([]);
    for (let i = 0; i < fetchFile.length; i++) {
      setFunc((files) => [...files, fetchFile[i]]);
    }
  }
};

export const setTagsOnState = (
  setTag: (value: React.SetStateAction<string[]>) => void,
  e?: React.FocusEvent<HTMLInputElement, Element>,
  tags?: string
) => {
  const text: string | undefined = e ? e.target.value : tags;
  const arr = text?.split(' ');
  let newArr: string[] = [];
  if (arr)
    arr.map((tag) => {
      let temp = tag.trim();
      if (tag.charAt(0) === '#') {
        newArr.push(temp);
      }
    });
  setTag((tag) => newArr);
};
