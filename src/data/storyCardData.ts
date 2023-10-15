export type StroyCardDate_Type = {
  id: number;
  coverTheme: string;
  coverRegion: string;
  coverImg: string;
  coverTitle: string;
  isCard: boolean;
};

export const storyCardData = [
  {
    id: 1,
    coverTheme: 'Cuisine',
    coverRegion: 'None',
    coverImg:
      'https://finedition-bucket.s3.ap-northeast-2.amazonaws.com/coverImage/story/1_cover.png',
    coverTitle: 'Samgyeopsal,\nEvery Korean’s Favorite!',
    isCard: false
  },
  {
    id: 2,
    coverTheme: 'Culture',
    coverRegion: 'Seoul',
    coverImg:
      'https://finedition-bucket.s3.ap-northeast-2.amazonaws.com/coverImage/story/2_cover.png',
    coverTitle: 'Hanji, Korean traditional paper\n& Where to find them',
    isCard: false
  }
];
