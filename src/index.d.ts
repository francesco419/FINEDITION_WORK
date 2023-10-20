declare module '*.module.css';
declare module '*.module.scss';
declare module '*.module.sass';
declare module '*.module.less';
declare module '*.scss';

declare namespace download {}
declare function download(
  data: string | File | Blob | Uint8Array,
  filename?: string,
  mimeType?: string
): XMLHttpRequest | boolean;
export = download;
