import { InfoCount_Type } from '../components/common/pageCount';
import hanji1 from '../data/temp/story/Hanji-1.jpg';
import hanji2 from '../data/temp/story/Hanji-2.jpg';
import hanji3 from '../data/temp/story/Hanji-3.jpg';
import hanji4 from '../data/temp/story/Hanji-4.jpg';
import samg1 from '../data/temp/story/samgyeopsal-1.jpg';
import samg2 from '../data/temp/story/samgyeopsal-2.jpg';
import samg3 from '../data/temp/story/samgyeopsal-3.jpg';
import samg4 from '../data/temp/story/samgyeopsal-4.jpg';
import snack1 from '../data/temp/story/snack-1.jpg';
import snack2 from '../data/temp/story/snack-2.jpg';
import snack3 from '../data/temp/story/snack-3.jpg';
import snack4 from '../data/temp/story/snack-4.jpg';
import snack5 from '../data/temp/story/snack-5.jpg';
import snack6 from '../data/temp/story/snack-6.jpg';
import snack7 from '../data/temp/story/snack-7.jpg';
import famousRegion1 from '../data/temp/story/famousregion-1.jpg';
import famousRegion2 from '../data/temp/story/famousregion-2.jpg';
import famousRegion3 from '../data/temp/story/famousregion-3.jpg';
import famousRegion4 from '../data/temp/story/famousregion-4.jpg';
import famousRegion5 from '../data/temp/story/famousregion-5.jpg';
import famousRegion6 from '../data/temp/story/famousregion-6.jpg';
import famousRegion7 from '../data/temp/story/famousregion-7.jpg';
import famousRegion8 from '../data/temp/story/famousregion-8.jpg';
import famousRegion9 from '../data/temp/story/famousregion-9.jpg';

export type storyData_Type = {
  id: number;
  upperRegion: string[];
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
  storykeyword: string[];
  relatedMagazineStory: string;
  pageCount: InfoCount_Type;
};

export type Individual_Type = {
  individual_Heading: string;
  individual_Text: string;
  individual_ListText: string[];
  individual_image: string;
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
    upperRegion: [],
    upperTheme: 'Cuisine',
    upperWhy:
      'Foreigners can benefit from knowing the types of Samgyeopsal because it allows them to experience and appreciate a popular aspect of Korean cuisine.',
    upperTitle: 'Samgyeopsal, Every Korean’s Favorite!',
    upperTime: '5min',
    upperImg: samg1,
    tagline: ['Interesting', 'Recommend', 'Interesting'],
    introText:
      'Samgyeopsal is iconic Korean dish that consists of thick slices of pork belly, grilled to perfection at the table. The name means "three-layered flesh" as each slice contains three distinct layers of meat, fat, and skin. It is not just a meal but an experience, that\'s often shared with friends and family. Samgyeopsal is a symbol of camaraderie and bonding, making it a top pick for both casual get-togethers and celebratory occasions.',
    introImg: samg2,
    introImgText: '',
    individual: [
      {
        individual_Heading: 'The types of Saeng Samgyeopsal',
        individual_image: '',
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
        individual_image: '',
        individual_Text:
          'There are 2 types of frozen Samgyeopsals - Daepae & Original frozen. One of the key point about frozen Samgyeopsal is that its a bit cheaper than the others!',
        individual_ListText: [
          '- Daepae Samgyeopsal: Thin-sliced pork belly of frozen Samgyeopsal, More tasty as it melts in the mouth',
          '- Frozen Samgyeopsal: Preserved in an extremely low-temperature / Thin thickness.'
        ],
        individual_CardID: ''
      }
    ],
    storykeyword: [],
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
    upperRegion: [],
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
        individual_image: '',
        individual_Text:
          'Hanji, known as 한지 in Korean, is crafted by Korean artisans through a meticulous process of boiling, cleaning, and beating mulberry tree bark into a pulp, which is then formed into delicate, yet durable paper sheets. What sets Hanji apart from ordinary paper is its unique texture and characteristics. It is soft yet sturdy, slightly translucent, and highly absorbent, making it ideal for traditional ink and watercolor painting without bleeding.',
        individual_ListText: [
          '- Hanji usage in Old Days & Modern Times\nThroughout Korean history, Hanji has played a significant role in their culture. It adorned traditional Korean architecture, wrapped sacred objects in religious rituals, and preserved important documents and texts. In contemporary times, Hanji has found a place in art, craft, fashion, and even origami.'
        ],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Hanji Culture & Industry Center 한지문화산업센터',
        individual_image: '',
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
    storykeyword: [],
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
  },
  {
    id: 3,
    upperRegion: [],
    upperTheme: 'Cuisine',
    upperWhy:
      "If you're not sure what snacks to try, take a look at the list above and give one a shot. These snacks have been popular in Korea for quite some time, so I'm confident you'll enjoy them too.",
    upperTitle: 'Classic never goes out of style: About Korean Snacks',
    upperTime: '10min',
    upperImg: snack1,
    tagline: ['Interesting', 'Shooper’sheaven', 'Fun&joy'],
    introText:
      "Welcome to South Korea, a land of rich history, stunning landscapes, and a culinary treasure trove. Beyond the bulgogi and kimchi lies another hidden gem - iconic Korean snacks. These flavorful morsels are a delectable reflection of the nation's diverse culture, and they have earned their place in the hearts of locals and adventurers from far and wide. What makes these iconic Korean snacks truly special is their ability to bridge the gap between the traditional and the contemporary. They are an embodiment of South Korea's culinary heritage, offering a glimpse into the past while being firmly rooted in the modern food landscape. Let's delve into the fascinating world of these beloved snacks, why you must try them, and where you can find them on your Korean adventure.",
    introImg: '',
    introImgText:
      "Iconic Korean snacks are like edible time capsules. They encapsulate centuries of tradition, regional influences, and distinctive flavors. For instance, shrimp crackers (Saewookkang) are a testament to Korea's love for seafood, and the craftsmanship that goes into creating them is a nod to the country's artisanal heritage. When it comes to flavor, Korean snacks are the embodiment of 'variety is the spice of life.' Swing Chip, for example, offers a tantalizing array of flavors from sweet honey to savory barbeque. These snacks are a rollercoaster of sensations, where sweet, salty, spicy, and savory flavors collide in a harmonious explosion.",
    individual: [
      {
        individual_Heading: 'Shrimp Crackers (Saewookkang)',
        individual_image: snack2,
        individual_Text:
          'Shrimp crackers have been a beloved snack in Korea for a long time. They are a classic snack enjoyed by people of all ages. These crackers are made using shrimp and other seafood as their primary ingredients. They are popular for their crispy texture and come in various flavors, including spicy, truffle, and seasoned tastes.',
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Poca / Swing Chip',
        individual_image: snack3,
        individual_Text:
          'Poca and Swing Chip are two popular potato chips from the Orion brand. Poca is thinly sliced and deep-fried to a crisp and light texture, while Swing is thickly sliced and deep-fried to a rich and hearty crunch. It’s a reinvention of the classic potato chip. The diverse range of flavors adds a touch of adventure to your snacking experience.',
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Kkokkal Corn',
        individual_image: snack4,
        individual_Text:
          'Kkokkal Corn is a fun snack that resembles a corn-shaped hat(kkokkal) and can be eaten by putting it on our fingers. It is primarily a corn-based snack with a savory, sweet corn flavor and crispy texture. The main flavors available are Original, Sweet & Spicy, and Baked Corn.',
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Squid and Peanuts (Ojingeo Ttangkong)',
        individual_image: snack5,
        individual_Text:
          'Ojingeo Ttangkong is an iconic South Korean snack made with squid and peanuts. It has a savory and slightly salty taste that emphasizes the flavor of squid. Recently, a seaweed version has been released, making it the perfect snack to eat with beer.',
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Caramel Corn Peanut (Caramel Ddangkong)',
        individual_image: snack6,
        individual_Text:
          'Last but not least, Maple Corn is a delicious snack that offers a sweet and nutty taste. The caramel provides sweetness, while the peanuts contribute a savory, nutty flavor. The Maple Corn flavor is a blend of caramel and maple syrup, and the snack size is a bit bigger.',
        individual_ListText: [],
        individual_CardID: ''
      }
    ],
    mainImg: snack7,
    qna: [
      {
        mainTitle: 'Elevating Your Snacking Experience',
        mainText:
          'As you embark on your Korean adventure, consider elevating your snacking experience with a few insider tips:',
        main_ListText: [
          {
            point: 'Soju and Beer Companionship',
            pointAns:
              "Pair iconic Korean snacks with a bottle of Soju, the nation's favorite liquor. This harmonious combination will take your taste buds on an unforgettable journey and is a beloved pastime among locals."
          },
          {
            point: 'Picnic in Paradise',
            pointAns:
              "South Korea's natural beauty is a feast for the eyes, and it pairs wonderfully with iconic Korean snacks. Find a serene park, riverbank, or mountain trail, and create memories as you savor your snacks amid nature's splendor."
          },
          {
            point: 'Snack Tasting Tours',
            pointAns:
              'For a more in-depth exploration of the world of Korean snacks, consider joining a snack tasting tour. These immersive experiences introduce you to local artisans, their snack-making techniques, and the intriguing stories behind each iconic snack.'
          }
        ]
      }
    ],
    sideText:
      'You can meet these snacks everywhere: convenient store, large brand supermarket and etc.',
    sideImg: '',
    conclusion:
      "Your journey through South Korea will undoubtedly be a cultural and culinary adventure. As you explore the vibrant streets, tranquil parks, and breathtaking landscapes, let iconic Korean snacks be your guide to the heart and soul of the country. Each bite carries the essence of South Korea's rich heritage, and every moment spent savoring these beloved snacks will be a memory cherished forever. So, dive into the world of Korean snack culture and relish the flavors, traditions, and stories it has to offer. Your adventure awaits, so start your gastronomic journey today!",
    relatedMagazineStory: '',
    storykeyword: [
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
    ],
    pageCount: {
      value: {
        bookmark: 0,
        liked: 0,
        view: 0
      }
    }
  },
  {
    id: 4,
    upperRegion: ['Seoul', 'Busan', 'Jeju', 'Gyeongbuk', 'Busan', 'Gangwon'],
    upperTheme: 'Info',
    upperWhy:
      'Each region offers a distinct flavor and cultural experience, making it important to tailor your itinerary and accommodations accordingly.',
    upperTitle: 'Discover famous regions in Korea',
    upperTime: '8min',
    upperImg: famousRegion1,
    tagline: ['Recommend', 'Interesting', 'Greatscenery'],
    introText:
      "Understanding the significance of these regions is essential for planning an unforgettable journey. From the bustling streets of Seoul to the coastal charm of Busan, and the pristine natural beauty of Jeju Island, each region offers a distinct flavor, culture, and history. In this article, we'll delve into the characteristics of these regions to help you navigate your South Korean adventure with confidence and curiosity.",
    introImg: famousRegion2,
    introImgText:
      "Now, let's delve into each region's distinctive charm, culture, and activities that beckon foreign travelers. Our selection of these six regions is based on a combination of factors that collectively provide foreign travelers with a well-rounded experience of South Korea: Geographical Diversity, Cultural Significance, ctivities for Diverse Interests, Transportation Connectivity.",
    individual: [
      {
        individual_Heading: 'Seoul - The Vibrant Capital',
        individual_image: famousRegion3,
        individual_Text:
          "Seoul is an obvious choice for any South Korea itinerary. It serves as the cultural, economic, and political hub of the country. The city effortlessly blends the old and the new, with historic palaces like Gyeongbokgung and Bukchon Hanok Village coexisting alongside futuristic skyscrapers. It's a melting pot of South Korean culture, and foreign travelers can explore traditional markets, bustling shopping districts, and the thriving contemporary art scene in Insadong.",
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Busan - Coastal Charm',
        individual_image: famousRegion4,
        individual_Text:
          "As the second-largest city in South Korea, Busan offers a completely different experience. The city's coastal location means it's all about beaches, seafood, and the ocean. It's perfect for travelers seeking a mix of culture and relaxation. The city is famous for its stunning beaches like Haeundae and Gwangalli, along with vibrant festivals, and the bustling Jagalchi Fish Market.",
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Jeju Island - Natural Beauty',
        individual_image: famousRegion5,
        individual_Text:
          "Jeju Island, a volcanic paradise, is known for its breathtaking natural landscapes. It's a unique region that feels like a world apart from mainland South Korea. The island is famous for its waterfalls, lush forests, lava tubes, and unique cultural heritage. Travelers can enjoy hiking, exploring caves, and experiencing the local culture, including unique Jeju divers.",
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Gyeongju - Historical Treasures',
        individual_image: famousRegion6,
        individual_Text:
          "Gyeongju is often referred to as an open-air museum due to its wealth of historical sites. This region provides an in-depth look at South Korea's rich history and heritage, featuring ancient temples, royal tombs, and archaeological sites. Foreign travelers who are history enthusiasts can immerse themselves in the fascinating stories of this ancient capital, which was once known as 'Seorabeol.' Gyeongju is an opportunity to explore the roots of South Korean civilization.",
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Incheon - Gateway to Korea',
        individual_image: famousRegion7,
        individual_Text:
          "Incheon's significance as the country's primary international gateway makes it an important inclusion in this list. It offers a glimpse of South Korea's modern infrastructure and international connectivity. Travelers often land at Incheon International Airport, and the city presents opportunities to explore before embarking on journeys to other regions. It boasts attractions such as vibrant Chinatown and the futuristic Songdo district.",
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Gangwon Province - Nature and Sports',
        individual_image: famousRegion8,
        individual_Text:
          "Gangwon Province is a region where South Koreans go to escape the hustle and bustle of city life. It's a playground for outdoor enthusiasts, offering activities like skiing in Pyeongchang during the winter and beach adventures in Gangneung during the summer. This region provides a contrast to the urban centers and a chance to appreciate South Korea's stunning natural beauty.",
        individual_ListText: [],
        individual_CardID: ''
      }
    ],
    mainImg: '',
    qna: [
      {
        mainTitle: 'Imagine your Korea with us',
        mainText:
          'As you embark on your Korean adventure, consider elevating your snacking experience with a few insider tips:',
        main_ListText: [
          {
            point: 'Which region stands out as the most renowned?',
            pointAns:
              'Seoul is undoubtedly the most famous, serving as the political, economic, and cultural center of South Korea.'
          },
          {
            point:
              'Which regions can we uncover the richest historical heritage?',
            pointAns:
              'Gyeongju takes the crown for its wealth of historical sites, making it a must-visit for history enthusiasts.'
          },
          {
            point:
              'Among these regions, where can we experience the pinnacle of modernization?',
            pointAns:
              'Seoul and Incheon stand out as the most modernized regions, featuring the latest in technology and infrastructure.'
          },
          {
            point: 'Which region offers the most diverse natural landscape?',
            pointAns:
              'Jeju Island is renowned for its unique volcanic terrain, featuring stunning coastal cliffs, lush forests, serene beaches, and impressive volcanic craters. Gangwon Province offers a variety of outdoor activities throughout the year, including skiing in the winter and beach adventures during the summer.'
          }
        ]
      }
    ],
    sideText: 'There are many small but beautiful cities all around Korea.',
    sideImg: famousRegion9,
    conclusion:
      "These six regions were carefully selected to provide foreign travelers with a diverse and immersive experience of South Korea. Each offers something unique, whether it's the dynamic blend of tradition and modernity in Seoul, the coastal allure of Busan, the natural wonder of Jeju Island, the historical treasures of Gyeongju, the modern gateway of Incheon, or the natural beauty and sporting adventures in Gangwon Province. Together, they paint a comprehensive picture of the culture, history, and natural beauty of this captivating nation.",
    relatedMagazineStory: '',
    storykeyword: [
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
    ],
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
