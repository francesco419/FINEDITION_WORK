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
