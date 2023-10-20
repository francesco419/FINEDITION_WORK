import id3 from './temp/cover/snack-cover.jpg';
import id4 from './temp/cover/famousregion-cover.jpg';
import id5 from './temp/cover/5.transport-cover.jpg';
import id6 from './temp/cover/6.culinary-cover.jpg';
import id7 from './temp/cover/7.palace-cover.jpg';
import id8 from './temp/cover/8.banchan-cover.jpg';
import id9 from './temp/cover/9.mueseum-cover.jpg';
import id10 from './temp/cover/10.market-cover.jpg';

export type StoryCardDate_Type = {
  id: number;
  coverTheme: string;
  coverRegion: string;
  coverImg: string;
  coverTitle: string;
  isCard: boolean;
  keyword: string[];
};

export const storyCardData: StoryCardDate_Type[] = [
  {
    id: 1,
    coverTheme: 'Cuisine',
    coverRegion: 'None',
    coverImg:
      'https://finedition-bucket.s3.ap-northeast-2.amazonaws.com/coverImage/story/1_cover.png',
    coverTitle: 'Samgyeopsal,\nEvery Korean’s Favorite!',
    isCard: false,
    keyword: ['samgyeopsal', 'food', 'tip', 'cuisine']
  },
  {
    id: 2,
    coverTheme: 'Culture',
    coverRegion: 'Seoul',
    coverImg:
      'https://finedition-bucket.s3.ap-northeast-2.amazonaws.com/coverImage/story/2_cover.png',
    coverTitle: 'Hanji, Korean traditional paper\n& Where to find them',
    isCard: false,
    keyword: ['hanji', 'class', 'jongno', 'bukchon', 'traditional']
  },
  {
    id: 3,
    coverTheme: 'Cuisine',
    coverRegion: '',
    coverImg: id3,
    coverTitle: 'Hanji, Korean traditional paper\n& Where to find them',
    isCard: false,
    keyword: [
      'cuisine',
      'snack',
      'Saewookkang',
      'PocaChip',
      'Swing Chip',
      'KkokkalCorn',
      'SquidandPeanuts',
      'Ojingeo Ttangkong',
      'CaramelCornPeanut',
      'CaramelDdangkong',
      'Soju',
      'Beer',
      'Picnic',
      'Taste',
      'Tasting',
      'Convenientstore',
      'store',
      'supermarket',
      'buy',
      'shopping',
      'Food',
      'Sweet',
      'Cracker',
      'Souvenir',
      'localfood',
      'localexperience'
    ]
  },
  {
    id: 4,
    coverTheme: 'Info',
    coverRegion: 'Busan',
    coverImg: id4,
    coverTitle: 'Hanji, Korean traditional paper\n& Where to find them',
    isCard: false,
    keyword: [
      'info',
      'city',
      'seoul',
      'busan',
      'gyeongju',
      'jeju',
      'jejuisland',
      'gangwon',
      'incheon',
      'where',
      'wheretogo',
      'main',
      'cities',
      'famous',
      'seorabeol',
      'songdo',
      'airport',
      'Gyeongbokgung',
      'BukchonHanokVillage',
      'Insadong',
      'region'
    ]
  },
  {
    id: 5,
    coverTheme: 'Info',
    coverRegion: 'None',
    coverImg: id5,
    coverTitle: 'Useful tips in using\npublic transport in Korea',
    isCard: false,
    keyword: ['transport', 'tip', 'subway', 'bus', 'train']
  },
  {
    id: 6,
    coverTheme: 'Cuisine',
    coverRegion: 'None',
    coverImg: id6,
    coverTitle: 'What a culinary adventure!\n6 Most-loved K-foods',
    isCard: false,
    keyword: ['food', 'tteokbokki', 'ramyeon', 'famous', 'dishes']
  },
  {
    id: 7,
    coverTheme: 'Explore',
    coverRegion: 'Seoul',
    coverImg: id7,
    coverTitle: 'Royal palaces in Seoul\n& Which one to visit',
    isCard: false,
    keyword: ['palace', 'seoul', 'gyeongbokgung', 'traditional', 'historical']
  },
  {
    id: 8,
    coverTheme: 'Cuisine',
    coverRegion: 'None',
    coverImg: id8,
    coverTitle: 'Banchan odyssey\nExplore a world of flavors',
    isCard: false,
    keyword: ['banchan', 'food', 'dishes', 'k-food']
  },
  {
    id: 9,
    coverTheme: 'Explore',
    coverRegion: 'Seoul',
    coverImg: id9,
    coverTitle: 'Journey through\nnational museum in Seoul',
    isCard: false,
    keyword: ['seoul', 'museum', 'national', 'gallery', 'jongno']
  },
  {
    id: 10,
    coverTheme: 'Explore',
    coverRegion: 'Seoul',
    coverImg: id10,
    coverTitle: 'Which markets are\nfamous to locals in Seoul?',
    isCard: false,
    keyword: ['local', 'market', 'seoul', 'gwangjang', 'food']
  }
];
