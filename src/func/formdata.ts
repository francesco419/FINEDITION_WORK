import { sendAxiosState } from './interceptor';

export const sendFilesPost = (
  data: any,
  files: File[],
  axios: string,
  func?: () => void
) => {
  if (data.text === '') {
    return false;
  }

  let file = createFormData(data, files);

  if (axios === 'put') {
    //putInterceptor(file);
  } else if (axios === 'post') {
    //postInterceptor(file);
  }

  if (func) func();
};

export const createFormData = (data: any, files: File[]) => {
  let CRUDTO: string = 'editpost';
  let formdata = new FormData();

  files.map((file, index) => {
    formdata.append(`img+${index}`, file);
  });
  if (data.id) {
    formdata.append('id', data.id);
    CRUDTO = 'upload';
  }
  if (data.name) {
    formdata.append('name', data.name);
  }
  if (data.text) {
    formdata.append('text', data.text);
  }
  if (data.tag) {
    formdata.append('tag', JSON.stringify(data.tag));
  }
  if (data.date) {
    formdata.append('time', data.date);
  }
  if (data.code) {
    formdata.append('code', data.code);
  }
  if (typeof data.announcement) {
    console.log(1);
    formdata.append('announcement', JSON.stringify(data.announcement));
  }

  let file: sendAxiosState = {
    url: `http://localhost:8080/${CRUDTO}`,
    data: formdata,
    config: {
      headers: {
        'Content-Type': `multipart/form-data`
      }
    },
    callback: undefined
  };
  return file;
};

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
