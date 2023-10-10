export const infoData = [
  {
    id: '이건 content id',
    typeId: '여긴 타입 id 지금 고정 76',
    tag: "Traditional,Highlight 등등 띄어쓰기 없이 ',' 구분",
    pickText: 'finedition pick',
    spendTime: '',
    station: '',
    keyword: "띄어쓰기 없이 ',' 구분",
    maylike: [
      {
        name: 'Seoul Grand Park',
        likeId: 'Seoul Grand Park의 id'
      },
      {
        name: 'Seoul Grand Park',
        likeId: 'Seoul Grand Park의 id'
      }
      //원하는 수만큼 증가가능 { ~ }
    ],
    bookmark: '이건내가처리',
    like: '이건내가처리',
    view: '이건내가처리'
  },
  {
    id: '',
    typeId: '',
    tag: '',
    pickText: '',
    spendTime: '',
    station: '',
    keyword: '',
    maylike: '',
    bookmark: '',
    like: '',
    view: ''
  }
];

const cardCover = [
  {
    id: 'info 혹은 story와 같은 id',
    coverImg: '이미지 파일은 따로 폴더에 모아서 주삼. 제목은 id로 3006358',
    coverLocate: 'Seoul Info 등',
    coverTitle: 'Gyeongbokgung Palace 등',
    coverName: 'Jongno-gu, Seoul 등'
  },
  {
    id: '',
    coverImg: '',
    coverLocate: '',
    coverTitle: '',
    coverName: ''
  }
];

const storyData = [
  {
    id: '메가진id 새로 생성을 해야함.이건 0부터 차례대로 표기',
    //따로 입력 요구사항없으면 피그마의 story의 내용을 써놓겟음

    introClass: 'Locale',
    introText:
      'If you have to visit royal palaces, and hesitate to know wyal palaces for foreign travelers. We estimated ...',
    introTitle: 'Five Royal Palaces in Seoul & Which one to Visit', //위와같은 긴 텍스트틑 띄어쓰기 따로 넣지 않기
    introTime: '10min read  l',
    introImg:
      '따로 이미지, 따로 폴더 제목은 id와 같게 = ex) 5-3 (id 5의 5번째 이미지)', //최상단 이미지
    bookmark: '이건내가처리',
    like: '이건내가처리',
    view: '이건내가처리',
    mapText:
      'Discover the rich history and culture of Seoul, the vibrant capital of South...',
    mapImg:
      '따로 이미지, 따로 폴더 제목은 id와 같게 = ex) 5-3 (id 5의 5번째 이미지)', //두번째 이미지
    tag: "Traditional,Highlight 등등 띄어쓰기 없이 ',' 구분",
    indiv: [
      {
        heading: '[Gyeongbokgung Palace]',
        text: `The "Palace of Shining Happiness," is the most iconic of Seoul's palaces. It was built in...`,
        listText: `Geunjeongjeon: The main hall, where important state affairs took place and where the king granted audiences to his officials.,Gyeonghoeru: A stunning pavilion surrounded by a large pond, used for state banquets.`,
        //띄어쓰기 없이 ',' 구분
        cardId: '카드 사용할 id' //경복궁이라면 info의 경복궁 id
      },
      {
        heading: '',
        text: '',
        listText: '',
        cardId: ''
      }
    ],
    mainImg:
      '따로 이미지, 따로 폴더 제목은 id와 같게 = ex) 5-3 (id 5의 5번째 이미지)', //질문섹션 위의 이미지
    qnaTitle: 'Q. If I had to pick one palace, which one would you suggest?',
    qnaText: `When it comes to choosing just one palace to visit, it's essential to focus on what resonates with you ...`,
    qnaList: [
      {
        ansName: '[Gyeongbokgung Palace]',
        ansText:
          'epitome of Korean royal elegance, with its grandeur courtyards and stunning architecture.You can immerse yourself in its splendor by spending a few hours here.'
      },
      {
        ansName: '',
        ansText: ''
      }
    ],
    side: {
      sideText:
        'Keep in mind that all palaces, except Deoksugung, close around 6:00 p.m., and the last admission is an hour before closing.',
      sideImg:
        '따로 이미지, 따로 폴더 제목은 id와 같게 = ex) 5-3 (id 5의 5번째 이미지)'
    },
    ending: '맨 아래 텍스트',
    relateId: "relate Magazine에 사용할 카드들의 id 띄어쓰기 없이 ',' 구분"
  },
  {
    id: '',
    introClass: '',
    introText: '',
    introTitle: '',
    introTime: '',
    introImg: '',
    bookmark: '',
    like: '',
    view: '',
    mapText: '',
    mapImg: '',
    mainImg: '',
    tag: '',
    indiv: {
      heading: '',
      text: '',
      listText: '',
      cardId: ''
    },
    qnaTitle: '',
    qnaText: '',
    qnaList: '',
    side: {
      sideText: '',
      sideImg: ''
    },
    ending: '',
    relateId: ''
  }
];
