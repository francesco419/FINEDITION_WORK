import { InfoCount_Type } from '../components/common/pageCount';
import hanji1 from '../data/temp/story/Hanji-1.jpg';
import hanji2 from '../data/temp/story/Hanji-2.jpg';
import hanji3 from '../data/temp/story/Hanji-3.jpg';
import hanji4 from '../data/temp/story/Hanji-4.jpg';
import samg1 from '../data/temp/story/samgyeopsal-1.jpg';
import samg2 from '../data/temp/story/samgyeopsal-2.gif';
import samg3 from '../data/temp/story/samgyeopsal-3.jpg';
import samg4 from '../data/temp/story/samgyeopsal-4.jpg';

export type storyData_Type = {
  id: number;
  upperTheme: string;
  upperWhy: string;
  upperTitle: string;
  upperTime: string;
  upperImg: string;
  tagline: string[];
  introText: string;
  introImg: string;
  introImgText: string;
  individual: Individual_Type[];
  mainImg: string;
  qna: qna_Type[];
  sideText: string;
  sideImg: string;
  conclusion: string;
  relatedMagazineStory: string;
  pageCount: InfoCount_Type;
};

export type Individual_Type = {
  individual_Heading: string;
  individual_Text: string;
  individual_ListText: string[];
  individual_CardID: string;
};

export type qna_Type = {
  mainTitle: string;
  mainText: string;
  main_ListText: qna_point_Type[] | string;
};

type qna_point_Type = {
  point: string;
  pointAns: string;
};

export const storyData: storyData_Type[] = [
  {
    id: 1,
    upperTheme: 'Cuisine',
    upperWhy:
      'Foreigners can benefit from knowing the types of Samgyeopsal because it allows them to experience and appreciate a popular aspect of Korean cuisine.',
    upperTitle: 'Samgyeopsal, Every Korean’s Favorite!',
    upperTime: '5min',
    upperImg: samg1,
    tagline: ['Interesting', 'Recommend', 'Interesting'],
    introText:
      'Samgyeopsal is iconic Korean dish that consists of thick slices of pork belly, grilled to perfection at the table. The name means "three-layered flesh" as each slice contains three distinct layers of meat, fat, and skin. It is not just a meal but an experience, that\'s often shared with friends and family. Samgyeopsal is a symbol of camaraderie and bonding, making it a top pick for both casual get-togethers and celebratory occasions.',
    introImg: samg3,
    introImgText: '',
    individual: [
      {
        individual_Heading: 'The types of Saeng Samgyeopsal',
        individual_Text:
          'Here are 2 types of Saeng Samgyeopsals that are popular among Koreans. Saeng means not frozen! Understanding the different cuts and flavors of Samgyeopsal can enhance their dining experience.',
        individual_ListText: [
          '- (Saeng) Samgyeopsal: The basic type of ‘saeng’ means unfrozen and unseasoned.',
          '- Ogyeopsal: Five-layered pork belly, as the premium version of samgyeopsal / thicker and succulent.'
        ],
        individual_CardID: ''
      },
      {
        individual_Heading: 'The types of frozen Samgyeopsal',
        individual_Text:
          'There are 2 types of frozen Samgyeopsals - Daepae & Original frozen. One of the key point about frozen Samgyeopsal is that its a bit cheaper than the others!',
        individual_ListText: [
          '- Daepae Samgyeopsal: Thin-sliced pork belly of frozen Samgyeopsal, More tasty as it melts in the mouth',
          '- Frozen Samgyeopsal: Preserved in an extremely low-temperature / Thin thickness.'
        ],
        individual_CardID: ''
      }
    ],
    mainImg: samg3,
    qna: [
      {
        mainTitle:
          'Some important facts which you must know before having Samgyeopsal',
        mainText:
          'Knowing the different types of Samgyeopsal (Korean grilled pork belly) can help foreigners appreciate and enjoy Korean cuisine. Familiarizing oneself with the various cuts and flavors of Samgyeopsal can greatly enhance the dining experience. However, learning about Samgyeopsal may require some effort and cultural adaptation for foreigners, which can be a bit challenging. Fortunately, many restaurants in Korea are tourist-friendly and provide assistance in ordering, making the experience more accessible.',
        main_ListText: [
          {
            point: '1 - Find houses where they grill the meat for you.',
            pointAns:
              "The grilling method is very important! If you haven't grilled samgyeopsal before, it's best to go to places where they grill all the meats for you. Some places don't grill at all, some grill roughly (leaving you to do the rest), and some grill everything perfectly."
          },
          {
            point:
              "2 - If you didn't make a reservation you might have to wait.",
            pointAns:
              'Samgyeopsal is a favorite food among co-workers, and these places may be fully booked at night, especially on Friday.'
          },
          {
            point: ' Try many side dishes.',
            pointAns:
              "You'll discover that the taste of the meat changes depending on the side dish you choose. Try them all and pick your favorite!"
          }
        ]
      }
    ],
    sideText:
      'When you are first time in Korea, visit the place where they cook it for you.',
    sideImg: samg4,
    conclusion:
      "Samgyeopsal is not just a meal; it's a cultural and gastronomic adventure that offers a taste of Korea's rich culinary traditions. By considering these important facts before savoring this beloved dish, you can enhance your experience and fully immerse yourself in the unique flavors and traditions of Samgyeopsal. From choosing the right grill and making reservations to exploring the delightful side dishes, you're well-equipped to embark on a delicious journey through the world of Korean cuisine. So, fire up the grill, enjoy the sizzle, and create lasting memories with Samgyeopsal.",
    relatedMagazineStory: '',
    pageCount: {
      value: {
        bookmark: 0,
        liked: 0,
        view: 0
      }
    }
  },
  {
    id: 2,
    upperTheme: 'Culture',
    upperWhy:
      'Learning about Hanji can procide insight into Korean heritage and artistic traditions.',
    upperTitle: 'Hanji - Korean traditional\nPaper & Where to find them',
    upperTime: '10min',
    upperImg: hanji1,
    tagline: ['Historical', 'Recommend', 'Good with Kids'],
    introText:
      'It is important to appreciate traditional craftsmanship in a world that relies heavily on digital technology and mass-produced goods. Hanji, a traditional Korean paper made from the inner bark fibers of the mulberry tree, is a prime example of such craftsmanship. This essay will explore the history, characteristics, uses, and significance of Hanji.',
    introImg: hanji2,
    introImgText: '',
    individual: [
      {
        individual_Heading: 'About Hanji, the paper',
        individual_Text:
          'Hanji, known as 한지 in Korean, is crafted by Korean artisans through a meticulous process of boiling, cleaning, and beating mulberry tree bark into a pulp, which is then formed into delicate, yet durable paper sheets. What sets Hanji apart from ordinary paper is its unique texture and characteristics. It is soft yet sturdy, slightly translucent, and highly absorbent, making it ideal for traditional ink and watercolor painting without bleeding.',
        individual_ListText: [
          '- Hanji usage in Old Days & Modern Times\nThroughout Korean history, Hanji has played a significant role in their culture. It adorned traditional Korean architecture, wrapped sacred objects in religious rituals, and preserved important documents and texts. In contemporary times, Hanji has found a place in art, craft, fashion, and even origami.'
        ],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Hanji Culture & Industry Center 한지문화산업센터',
        individual_Text:
          'Hanji Culture and Industry Center is situated at Bukchon, Jongno in Seoul. Their mission is to promote the excellence of Hanji, our traditional heritage, and expand its usage globally. They aim to introduce the various meanings and values of Hanji into the lifestyles and cultures of people worldwide, not just in Korea.',
        individual_ListText: [
          '- There are some workshops that you can participate for free. Check the website before going to this place.',
          ' Some Hanji souvenirs are prepared - for you to enjoy uniqueness.'
        ],
        individual_CardID: ''
      }
    ],
    mainImg: hanji3,
    qna: [
      {
        mainTitle: 'Some interesting facts about Hanji',
        mainText:
          'Not many travelers are familiar with Hanji. So why now discover this hidden and intriguing aspect of Korean culture?',
        main_ListText:
          "1 - Resistance to Aging: Hanji is highly prized for its longevity. Unlike many other types of paper, it doesn't yellow or become brittle as quickly. This durability is a testament to the quality and craftsmanship involved in its production.\n2 - The cultural significance of Hanji is underscored by its designation as Important Intangible Cultural Property No. 108 in South Korea. This recognition highlights its role in preserving and representing Korean heritage.\n3 - Hanji is often used to craft intricate and colorful paper lanterns. These lanterns are a significant part of Korean culture and can be seen during various festivals and celebrations. Their delicate beauty, combined with the soft glow of the light within, creates a mesmerizing sight.\n4 - Hanji Crafts: For travelers interested in experiencing Hanji, there are many opportunities to participate in craft workshops. Visitors can learn how to make items like fans, masks, and other traditional crafts using Hanji. These workshops offer a hands-on introduction to the art of Hanji."
      },
      {
        mainTitle: 'Some interesting facts about Hanji',
        mainText:
          'Not many travelers are familiar with Hanji. So why now discover this hidden and intriguing aspect of Korean culture?',
        main_ListText:
          "1 - Resistance to Aging: Hanji is highly prized for its longevity. Unlike many other types of paper, it doesn't yellow or become brittle as quickly. This durability is a testament to the quality and craftsmanship involved in its production.\n2 - The cultural significance of Hanji is underscored by its designation as Important Intangible Cultural Property No. 108 in South Korea. This recognition highlights its role in preserving and representing Korean heritage.\n3 - Hanji is often used to craft intricate and colorful paper lanterns. These lanterns are a significant part of Korean culture and can be seen during various festivals and celebrations. Their delicate beauty, combined with the soft glow of the light within, creates a mesmerizing sight.\n4 - Hanji Crafts: For travelers interested in experiencing Hanji, there are many opportunities to participate in craft workshops. Visitors can learn how to make items like fans, masks, and other traditional crafts using Hanji. These workshops offer a hands-on introduction to the art of Hanji."
      }
    ],
    sideText: 'null',
    sideImg: hanji4,
    conclusion: 'null',
    relatedMagazineStory: '',
    pageCount: {
      value: {
        bookmark: 0,
        liked: 0,
        view: 0
      }
    }
  }
];

const a = [
  {
    point: '1 - Find houses where they grill the meat for you.',
    pointAns:
      "The grilling method is very important! If you haven't grilled samgyeopsal before, it's best to go to places where they grill all the meats for you. Some places don't grill at all, some grill roughly (leaving you to do the rest), and some grill everything perfectly."
  },
  {
    point: "2 - If you didn't make a reservation you might have to wait.",
    pointAns:
      'Samgyeopsal is a favorite food among co-workers, and these places may be fully booked at night, especially on Friday.'
  },
  {
    point: ' Try many side dishes.',
    pointAns:
      "You'll discover that the taste of the meat changes depending on the side dish you choose. Try them all and pick your favorite!"
  }
];

/* main={{
  mainImage: mainImg,
  sideImage: sideImg,
  question: [
    {
      title:
        'Q. If I had to pick one palace, which one would you suggest?',
      explain: `When it comes to choosing just one palace to visit, it's essential to focus on what resonates with you the most. Each palace has its unique charm, making it a challenging choice. However, here are some recommendations based on your preferences and available time:`,
      answer: [
        {
          point: '[Gyeongbokgung Palace]',
          pointAns: `epitome of Korean royal elegance, with its grandeur courtyards and stunning architecture.
You can immerse yourself in its splendor by spending a few hours here.`
        },
        {
          point: '[Changdeok Palace]',
          pointAns: `UNESCO World Heritage site, is perfect for those who seek a peaceful escape amidst natural beauty.
Its tranquil Secret Garden is known for its serenity, so allocate at least two hours for your visit.`
        },
        {
          point: '[Deoksugung Palace]',
          pointAns: `The only palace open until 9 p.m., making it a top choice if you're interested in experiencing a palace's nighttime charm. You can enjoy a unique night view without prior reservation.`
        },
        {
          point: '[Changgyeong Palace]',
          pointAns: `A smaller palace with a serene atmosphere, is ideal for a peaceful stroll. Consider adding it
to your itinerary if you have time.`
        }
      ]
    },
    {
      title: 'Q. Do I need to visit all five palaces?',
      explain: `When it comes to choosing just one palace to visit, it's essential to focus on what resonates with you the most. Each palace has its unique charm, making it a challenging choice. However, here are some recommendations based on your preferences and available time:`,
      answer: [
        {
          point: '[Gyeongbokgung Palace]',
          pointAns: `epitome of Korean royal elegance, with its grandeur courtyards and stunning architecture.
You can immerse yourself in its splendor by spending a few hours here.`
        },
        {
          point: '[Changdeok Palace]',
          pointAns: `UNESCO World Heritage site, is perfect for those who seek a peaceful escape amidst natural beauty.
Its tranquil Secret Garden is known for its serenity, so allocate at least two hours for your visit.`
        },
        {
          point: '[Deoksugung Palace]',
          pointAns: `The only palace open until 9 p.m., making it a top choice if you're interested in experiencing a palace's nighttime charm. You can enjoy a unique night view without prior reservation.`
        },
        {
          point: '[Changgyeong Palace]',
          pointAns: `A smaller palace with a serene atmosphere, is ideal for a peaceful stroll. Consider adding it
to your itinerary if you have time.`
        }
      ]
    }
  ],
  ending: `Exploring Jongno and its royal palaces is an unforgettable journey through Korea's history and culture. Whether you choose to visit one or all of these magnificent palaces, each holds a piece of the nation's heritage waiting to be discovered. So, step into the past and embrace the beauty and grandeur of
Seoul's royal legacy.`
}} */
