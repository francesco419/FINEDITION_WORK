export interface API_TYPE {
  url: string;
  callback: (o: any) => void;
}

export interface String_Type {
  str: string;
}

export interface gallary_type {
  galContentId: string;
  galContentTypeId: string;
  galCreatedtime: string;
  galModifiedtime: string;
  galPhotographer: string;
  galPhotographyLocation: string;
  galPhotographyMonth: string;
  galSearchKeyword: string;
  galTitle: string;
  galWebImageUrl: string;
}

export interface API_DATA_TYPE {
  addr1: string;
  contentid: string;
  contenttypeid: string;
  firstimage: string;
  title: string;
  mapx: string;
  mapy: string;
  homepage: string;
  overview: string;
  infocenter: string;
  restdate: string;
  usetime: string;
  fee: INFO_TYPE;
  Interpretation: INFO_TYPE;
  originimgurl: imgurlTYPE[];
}

export interface imgurlTYPE {
  contentid: string;
  originimgurl: string;
  imgname: string;
  smallimageurl: string;
  cpyrhtDivCd: string;
  serialnum: string;
}

export interface INFO_TYPE {
  contentid: string;
  contenttypeid: string;
  fldgubun: string;
  infoname: string;
  infotext: string;
  serialnum: string;
}

export interface CardComp_Type {
  img: string;
  color: string;
  click?: boolean;
  type?: boolean;
}

export interface LocationType {
  mapx: string;
  mapy: string;
}
