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
/**-------------------------------------- */
import transportintro from '../data/temp/story/5.transport-intro.jpg';
import transportupper from '../data/temp/story/5.transport-upper.jpg';
import transportmain from '../data/temp/story/5.transport-main.jpg';
import transportside from '../data/temp/story/5.transport-sideImg.jpg';
/**-------------------------------------- */
import culinaryupper from '../data/temp/story/6.culinary-upper.jpg';
import culinaryintro from '../data/temp/story/6.culinary-intro.jpg';
import culinarymain from '../data/temp/story/6.culinary-main.jpg';
/**-------------------------------------- */
import palaceupper from '../data/temp/story/7.palace-upper.jpg';
import palaceintro from '../data/temp/story/7.palace-intro.jpg';
import palacemain from '../data/temp/story/7.palace-main.jpg';
/**-------------------------------------- */
import banchanupper from '../data/temp/story/8.banchan-upper.jpg';
import banchanintro from '../data/temp/story/8.banchan-intro.jpg';
/**-------------------------------------- */
import museumupper from '../data/temp/story/9.museum-upper.jpg';
import museumintro from '../data/temp/story/9.museum-intro.jpg';
/**-------------------------------------- */
import marketupper from '../data/temp/story/10.market-upper.jpg';
import marketintro from '../data/temp/story/10.market-intro.jpg';

export type storyData_Type = {
  id: number;
  upperRegion: string;
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
    upperRegion: 'None',
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
    upperRegion: 'None',
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
    upperRegion: 'None',
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
    mainImg: '',
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
    sideImg: snack7,
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
    upperRegion: 'Busan',
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
  },
  {
    id: 5,
    upperRegion: 'None',
    upperTheme: 'Info',
    upperWhy:
      'Understanding how public transport works in a foreign country helps you navigate the system more efficiently. This can save you time and reduce the stress of getting lost or missing connections.',
    upperTitle: 'Useful tips in using public transport in Korea',
    upperTime: '12min',
    upperImg: transportupper,
    tagline: ['Recommend', 'Strollfriendly'],
    introText:
      "Traveling in South Korea is an exciting and rewarding experience, offering a unique blend of traditional culture and modern amenities. While the country boasts an efficient and well-connected public transportation system, understanding the intricacies of getting around can significantly enhance your visit. In this guide, we will delve into six essential tips for using public transport in Korea. From the convenience of T-Money cards to respecting local etiquette, these insights will help you navigate the country with ease, save money, and ensure a harmonious experience with the local culture. Let's embark on a journey of discovery through South Korea's public transport system.",
    introImg: transportintro,
    introImgText: '',
    individual: [
      {
        individual_Heading: "T-Money Card: The Traveler's Lifeline",
        individual_image: '',
        individual_Text:
          "South Korea's T-Money card is the ultimate travel companion. This rechargeable transportation card works seamlessly on buses, subways, and even taxis in most Korean cities. You can purchase a T-Money card at convenience stores or subway stations, and it's easy to recharge as you go. Not only does this card offer convenience, but it can also save you money with discounts over cash fares.",
        individual_ListText: [''],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Know the Timetables: Punctuality is Key',
        individual_image: '',
        individual_Text:
          'Public transport schedules can vary by city and time of day. Familiarize yourself with these schedules and plan your journeys accordingly. Apps like KakaoMap and Naver Maps, Seoul Metro provide real-time information, helping you find the quickest routes between destinations.',
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Queue Properly: Politeness in Motion',
        individual_image: '',
        individual_Text:
          'In South Korea, maintaining order and politeness is of utmost importance. When waiting for a bus or subway, form an orderly line and allow passengers to exit before boarding. Being courteous and offering your seat to those in need, such as the elderly, pregnant women, or passengers with disabilities, is a common practice.',
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Learn Basic Korean Phrases',
        individual_image: '',
        individual_Text: `While English signage is common in major cities, a few basic Korean phrases can enhance your travel experience. Phrases like "안녕하세요" (Hello) and "감사합니다" (Thank you) go a long way in showing respect and appreciation. Learning some basic Korean can also help in seeking directions or assistance.`,
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Mind the Etiquette: Respect the Rules',
        individual_image: '',
        individual_Text:
          'Public transportation etiquette in South Korea includes not talking loudly on the phone, refraining from eating or drinking in buses and subways, and keeping your feet off the seats. These practices demonstrate respect for the comfort and sensibilities of fellow passengers.',
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Plan for Rush Hours: Timing is Everything',
        individual_image: '',
        individual_Text:
          'Rush hours in South Korea, especially in major cities like Seoul, can be intensely crowded. Peak hours typically occur in the morning and evening when people are commuting to and from work or school. If possible, plan your travel outside of these times to ensure a more comfortable and less crowded journey. Try to avoid 8-9am and 5pm-7pm.',
        individual_ListText: [],
        individual_CardID: ''
      }
    ],
    mainImg: transportmain,
    qna: [
      {
        mainTitle: 'Q&A for travelers using public transport',
        mainText:
          "Here, we will address three key questions that foreign travelers might have when using public transport in South Korea. From the best modes of transport in major cities to cultural etiquette and communication tips, let's embark on a journey of knowledge to make your travel experience in South Korea memorable and hassle-free.",
        main_ListText: [
          {
            point:
              "What is the best way to get around South Korea's major cities, such as Seoul and Busan?",
            pointAns:
              "The most efficient way to get around major South Korean cities is by using the extensive public transportation system, which includes subways and buses. For added convenience and cost savings, consider obtaining a T-Money card, a rechargeable transportation card accepted on most forms of public transport. It's readily available at convenience stores and subway stations and allows you to travel seamlessly."
          },
          {
            point:
              'Are there any cultural etiquette tips I should be aware of when using public transport in South Korea?',
            pointAns:
              "Yes, it's essential to be mindful of local etiquette when using public transport in South Korea. Some key points include: (1)Forming orderly queues and allowing passengers to exit before boarding. (2)Being courteous and offering your seat to those in need, like the elderly, pregnant women, or passengers with disabilities. (3)Avoiding loud phone conversations, eating, and drinking on buses and subways. (4)Keeping your feet off the seats to show respect for the comfort of fellow passengers."
          },
          {
            point:
              "What should I do if I need help or directions while using public transportation in South Korea, especially if I don't speak Korean?",
            pointAns: `If you find yourself in need of assistance or directions and don't speak Korean, there are a few strategies you can use: (1)Learn a few basic Korean phrases to help with communication. Simple greetings and questions, like "안녕하세요" (Hello) and '어디에요?" (Where is it?), can be useful. (2) Use translation app Papago, or maps like Google Maps, KakaoMap, or Naver Maps, which provide navigation and help you find information in English.`
          }
        ]
      }
    ],
    sideText:
      'No drinks or foods on the bus and subway. You won’t be able to ride on the bus, espescially.',
    sideImg: transportside,
    conclusion:
      "South Korea's public transport system is a gateway to exploring the country's diverse landscapes, from bustling metropolises to tranquil villages. By arming yourself with these six essential tips, you'll not only navigate South Korea efficiently but also embrace the local culture with respect and consideration. Whether you're exploring Seoul's vibrant neighborhoods, taking in the stunning vistas of Jeju Island, or immersing yourself in traditional culture in Gyeongju, these tips will enhance your travel experience, making your journey through South Korea a memorable and enriching one.",
    relatedMagazineStory: '',
    storykeyword: ['transport', 'tip', 'subway', 'bus', 'train'],
    pageCount: {
      value: {
        bookmark: 0,
        liked: 0,
        view: 0
      }
    }
  },
  {
    id: 6,
    upperRegion: 'None',
    upperTheme: 'Cuisine',
    upperWhy:
      'This is your gateway to the vibrant and diverse world of Korean cuisine. Each dish is a symphony of flavors, a medley of textures, and a rich tapestry of dishes that captivate the senses. Understanding the Korean dishes will enhance your travel experience!',
    upperTitle: 'What a Culinary adventure! 6 Most loved K-foods',
    upperTime: '15min',
    upperImg: culinaryupper,
    tagline: ['Recommend', 'Interesting', 'fun&joy'],
    introText:
      "From fiery spices to comforting stews, and the exquisite harmony of fresh ingredients, every bite tells a story that is uniquely Korean. Whether you're a fan of spicy delicacies like kimchi or a lover of comforting classics like samgyeopsal, the variety of Korean dishes is a celebration of life, family, and community. So, let's embark on this adventure and uncover the magic behind each iconic dish that graces the tables of South Korea, and discover why Korean cuisine has captured the hearts of food lovers worldwide.",
    introImg: culinaryintro,
    introImgText:
      'Korean cuisine, celebrated worldwide, is a symphony of flavors, a fusion of tradition and innovation, and a culinary journey that takes you deep into the heart of South Korea. The secret behind its immense popularity lies in its unique ability to captivate palates with diverse tastes, textures, and a rich variety of dishes that cater to all. As a traveler in South Korea, immersing yourself in the world of Korean food is an unforgettable exploration of culture, history, and a delightful symphony for your taste buds. When dining in South Korea, venture into local restaurants for an authentic and immersive experience. The atmosphere is vibrant, the locals are friendly, and the tantalizing aromas will be your guide to a memorable culinary journey.',
    individual: [
      {
        individual_Heading: 'Kimchi',
        individual_image: '',
        individual_Text:
          "Let's begin with kimchi, the epitome of Korean cuisine. This iconic side dish is more than just fermented vegetables; it's a representation of Korea's rich culinary heritage. Made with napa cabbage, red pepper flakes, garlic, and ginger, kimchi offers a fiery blend of flavors. Whether you're having it for breakfast or dinner, this spicy delicacy embodies the heart of Korean food culture.",
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Samgyeopsal',
        individual_image: '',
        individual_Text:
          "When it comes to Korean barbecue, samgyeopsal takes center stage. Comprising thick slices of succulent pork belly, this dish is a paradise for food enthusiasts. At the table, you'll grill these delectable slices and pair them with lettuce leaves, fresh garlic, kimchi, and ssamjang (a spicy dipping sauce). The result? An exquisite ensemble of flavors and textures.",
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Tteokbokki',
        individual_image: '',
        individual_Text:
          "As you stroll through the bustling streets of South Korea, you'll often encounter tteokbokki - chewy rice cakes bathed in a spicy sauce. This beloved street food delights your taste buds with its play of textures and a sauce that's an explosion of flavor. Perfect for a quick, on-the-go snack, tteokbokki is a taste of Korea's vibrant street food culture.",
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Ramyeon',
        individual_image: '',
        individual_Text:
          'Korean ramyeon transcends the concept of instant noodles. A steaming bowl of ramyeon is a comforting blend of chewy noodles, fresh vegetables, and a savory broth. Be it the fiery Shin Ramyun or the soothing Jjapaghetti, ramyeon is a go-to comfort food for Koreans throughout the day.',
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Naengmyeon',
        individual_image: '',
        individual_Text:
          "On sweltering summer days, seek solace in a bowl of naengmyeon. These cold noodles, available in bibim naengmyeon (spicy) and mul naengmyeon (refreshing and tangy) variations, are served in a chilled broth. It's a refreshing escape from the heat, offering a unique medley of flavors and textures.",
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Bossam',
        individual_image: '',
        individual_Text:
          "When celebrating special occasions or gatherings, you'll often find bossam on the menu. This delightful dish features boiled pork belly that you can wrap in Napa cabbage leaves, along with a variety of condiments and kimchi. The combination offers a delightful contrast of flavors and textures, making it a highlight of Korean feasts.",
        individual_ListText: [],
        individual_CardID: ''
      }
    ],
    mainImg: culinarymain,
    qna: [
      {
        mainTitle: 'Unveil Korean dishes',
        mainText: '',
        main_ListText: [
          {
            point: 'Everyday Comfort - Kimchi, Ramyeon',
            pointAns:
              "In South Korea, kimchi is not just a side dish; it's a way of life. This fiery, fermented delicacy graces every meal, connecting families and generations. Whether paired with rice for a quick, nourishing lunch or as a flavorful accompaniment to any meat dish, kimchi is a staple of everyday life. The pungent aroma and tangy bite are the soul of Korean food, and enjoying it is an expression of tradition and family ties. Ramyeon, although not an everyday indulgence, is still a frequent and comforting choice for Koreans. The quick and satisfying nature of ramyeon makes it a convenient yet delicious option for those looking to satiate their taste buds in a hurry."
          },
          {
            point:
              'The Sizzle of Celebration - Samgyeopsal & Naengmyeon, Bossam',
            pointAns:
              "Koreans gather with friends and family around the grill, sharing stories and laughter as they savor the sizzle of the meat. Samgyeopsal nights are an occasion to revel in good company and the simple joys of life. And when the sizzle of samgyeopsal becomes too rich, Koreans refresh their palates with naengmyeon, a cold noodle dish that cleanses and rejuvenates the taste buds. Bossam, another celebratory dish, creats a medley of flavors and textures that elevate gatherings and special occasions. It's a taste of Korean festivity and the warmth of shared moments."
          },
          {
            point: 'Street Food Adventures - Tteokbokki',
            pointAns:
              "Whether you're strolling through vibrant market alleys or catching a quick snack on the go, tteokbokki is the comforting and satisfying choice for those who crave a quick and spicy bite. The experience of indulging in tteokbokki on the streets of South Korea immerses you in the vibrant energy of local life, where every bite is a burst of flavor amidst the hustle and bustle of the city."
          }
        ]
      }
    ],
    sideText:
      'Try Ramyeon with Kimchi and Samgyeopsal with Naengmyeon. These combinations are most loved by Koreans.',
    sideImg: '',
    conclusion:
      "Remember that in South Korea, food is not just sustenance; it's an integral part of the culture, a social experience, and a window into the soul of the country. So, don't miss the opportunity to savor the essence of Korea's vibrant culinary landscape, and let the flavors and stories of these dishes transport you to a world of taste and tradition like no other.",
    relatedMagazineStory: '',
    storykeyword: ['food', 'tteokbokki', 'ramyeon', 'famous', 'dishes'],
    pageCount: {
      value: {
        bookmark: 0,
        liked: 0,
        view: 0
      }
    }
  },
  {
    id: 7,
    upperRegion: 'Seoul',
    upperTheme: 'Explore',
    upperWhy:
      'If you have to visit royal palaces, and hesitate to know which one to visit? Here’s our suggestion about royal palaces for foreign travelers. We estimated time for duration and your interest, and based on that, we curated some itineries for you to check out!',
    upperTitle: 'Royal palaces in Seoul & Which one to visit',
    upperTime: '10min',
    upperImg: palaceupper,
    tagline: ['Traditional', 'Highlight', 'Recommend'],
    introText:
      "Discover the rich history and culture of Seoul, the vibrant capital of South Korea, through the five magnificent royal palaces that were once the epicenters of Korean royalty. These palaces located in the heart of the city offer a captivating glimpse into Korea's imperial past, particularly in the enchanting district of Jongno, where four of them are nestled. In this guide, we will explore the essence of each palace and answer some commonly asked questions to help you plan your visit.",
    introImg: palaceintro,
    introImgText: ' ',
    individual: [
      {
        individual_Heading: 'Gyeongbokgung Palace',
        individual_image: '',
        individual_Text: `The "Palace of Shining Happiness," is the most iconic of Seoul's palaces. It was built in 1395 during the Joseon Dynasty and served as the primary royal residence. This palace holds historical importance as it was the heart of political power for over two centuries.`,
        individual_ListText: [
          'Geunjeongjeon: The main hall, where important state affairs took place and where the king granted audiences to his officials.',
          'Gyeonghoeru: A stunning pavilion surrounded by a large pond, used for state banquets.',
          "Changing of the Guard Ceremony: Don't miss the daily reenactment of this ceremonial event in traditional attire.",
          'National Folk Museum: Located within the palace grounds, it offers insights into Korean culture and history.'
        ],
        individual_CardID: '264337'
      },
      {
        individual_Heading: 'Changdeokgung Palace',
        individual_image: '',
        individual_Text:
          'Established in 1405, was the preferred palace of many Joseon kings due to its harmonious integration with the natural surroundings. Its Secret Garden is a UNESCO World Heritage site and a highlight of any visit.',
        individual_ListText: [
          'Secret Garden (Huwon): Explore this beautifully landscaped garden with tranquil ponds, pavilions, and lush flora.',
          'Injeongjeon: The main hall where coronations and important state affairs took place.',
          'Donhwamun Gate: The grand entrance to the palace.'
        ],
        individual_CardID: '264348'
      },
      {
        individual_Heading: 'Changgyeonggung Palace',
        individual_image: '',
        individual_Text:
          'Originally built in 1483, served as a secondary palace. It was later repurposed as a botanical garden during the Japanese colonial period.',
        individual_ListText: [
          "Biwon (The Rear Garden): Similar to Changdeokgung's Secret Garden, this serene area is a haven of natural beauty.",
          'Myeongjeongjeon: The main hall.',
          'Honghwa Gate: The grand entrance to the palace.'
        ],
        individual_CardID: '264350'
      },
      {
        individual_Heading: 'Deoksugung Palace',
        individual_image: '',
        individual_Text:
          "Unique among Seoul's palaces as it blends traditional Korean, colonial, and Western architectural styles. It served as a temporary palace during the late 19th century.",
        individual_ListText: [
          'Junghwajeon: The main hall, a beautiful mix of Western and Korean architectural styles.',
          'Jeonggwanheon: A Western-style building used as a royal banquet hall.',
          'Daehanmun Gate: The main entrance to the palace.'
        ],
        individual_CardID: '264316'
      },
      {
        individual_Heading: 'Gyeonghuigung Palace',
        individual_image: '',
        individual_Text:
          'Originally served as a secondary palace for the Joseon Dynasty kings, used mainly for leisure and retreats. It was constructed in the late 1600s during the reign of King Gyeongjong. Throughout its history, Gyeonghuigung Palace suffered from numerous fires, destruction, and neglect. It was abandoned during the late Joseon Dynasty and faced a long period of disrepair.',
        individual_ListText: [
          "Historical Exhibits: Inside the palace, you'll find an exhibition hall showcasing artifacts and historical information about the palace's history and significance."
        ],
        individual_CardID: '264308'
      }
    ],
    mainImg: palacemain,
    qna: [
      {
        mainTitle: 'Unveil Korean dishes',
        mainText: ' ',
        main_ListText: [
          {
            point: 'If I had to pick one palace, which one would you suggest?',
            pointAns:
              "When it comes to choosing just one palace to visit, it's essential to focus on what resonates with you the most. Each palace has its unique charm, making it a challenging choice. However, here are some recommendations based on your preferences and available time: [Gyeongbokgung Palace] epitome of Korean royal elegance, with its grandeur courtyards and stunning architecture. You can immerse yourself in its splendor by spending a few hours here. [Changdeok Palace] UNESCO World Heritage site, is perfect for those who seek a peaceful escape amidst natural beauty. Its tranquil Secret Garden is known for its serenity, so allocate at least two hours for your visit. [Deoksugung Palace] The only palace open until 9 p.m., making it a top choice if you're interested in experiencing a palace's nighttime charm. You can enjoy a unique night view without prior reservation. [Changgyeong Palace] A smaller palace with a serene atmosphere, is ideal for a peaceful stroll. Consider adding it to your itinerary if you have time."
          },
          {
            point: 'Do I need to visit all five palaces?',
            pointAns:
              "Although it would be wonderful to explore all five palaces in-depth, it may not be possible due to time constraints. To assist you in making an informed decision, here are some recommendations: [Have a whole day in Jongno] Gyeongbokgung Palace and Changdeok Palace are the two most significant palaces. If you have a full day in Jongno, begin with Gyeongbokgung and then consider visiting Changdeokgung later in the day. If you choose Changdeok Palace, don't forget to explore the Secret Garden. [Available for 2h] If you only have two hours, it is worth visiting Changdeokgung. Its tranquil atmosphere and Secret Garden are worth seeing. [Available  3-4h] With 3-4 hours, you can fully appreciate Gyeongbokgung Palace's magnificence, including the Changing of the Guard ceremony. [Have time after 5pm] If you have time after 5 p.m., visit Deoksugung Palace to witness the enchanting night view, a rare experience among Seoul's palaces. Exploring Jongno and its royal palaces is an unforgettable journey through Korea's history and culture. Whether you choose to visit one or all of these magnificent palaces, each holds a piece of the nation's heritage waiting to be discovered. So, step into the past and embrace the beauty and grandeur of Seoul's royal legacy."
          }
        ]
      }
    ],
    sideText:
      'Keep in mind that all palaces, except Deoksugung, close around 6:00 p.m., and the last admission is an hour before closing.',
    sideImg: '',
    conclusion:
      "Exploring Jongno and its royal palaces is an unforgettable journey through Korea's history and culture. Whether you choose to visit one or all of these magnificent palaces, each holds a piece of the nation's heritage waiting to be discovered. So, step into the past and embrace the beauty and grandeur of Seoul's royal legacy.",
    relatedMagazineStory: '',
    storykeyword: [
      'palace',
      'seoul',
      'gyeongbokgung',
      'traditional',
      'historical'
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
    id: 8,
    upperRegion: 'Seoul',
    upperTheme: 'Explore',
    upperWhy:
      "It's an essential element of Korean dining culture, and understanding its role enhances their culinary experience while promoting cultural appreciation and etiquette during their visit to South Korea.",
    upperTitle: 'Banchan odyssey, Explore a world of flavors',
    upperTime: '8min',
    upperImg: banchanupper,
    tagline: ['Interesting', 'Recommend', "Shopper'sheaven"],
    introText:
      "In the heart of South Korea, where tradition and innovation meld harmoniously, an ancient culinary tradition has thrived for centuries. Banchan, a diverse array of small, flavorful side dishes, is not merely a facet of Korean cuisine; it's the vibrant soul that binds Korean meals together. As we embark on this culinary journey, we'll delve deep into the world of Banchan, exploring its history, significance, and the array of delectable dishes that make up this celebrated tradition.",
    introImg: banchanintro,
    introImgText: ' ',
    individual: [
      {
        individual_Heading:
          'A Plethora of Flavors: The Eclectic World of Banchan',
        individual_image: '',
        individual_Text:
          'A quintessential Korean meal is incomplete without Banchan, and the diversity of these side dishes is nothing short of astonishing. From the fiery kick of kimchi to the soothing simplicity of steamed vegetables, Banchan covers an expansive spectrum of flavors, textures, and ingredients. The choices are boundless, ranging from sesame-seasoned spinach (Sigeumchi-namul) to sweet and savory braised potatoes (Gamja Jorim), and from the hearty delight of Korean pancakes (Jeon) to the crispy seaweed snacks (Gim). Every Banchan dish carries its unique history and regional influence, which together weave the tapestry of Korean culinary culture.',
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading:
          'Beyond Taste: The Cultural Significance of Banchan',
        individual_image: '',
        individual_Text:
          "Banchan transcends mere sustenance; it's an embodiment of Korean culture and hospitality. The practice of sharing an array of Banchan dishes among diners fosters a sense of community and togetherness. In Korean tradition, a well-laden Banchan table signifies respect and affection, making it an essential part of family gatherings, celebrations, and even business meetings. The practice of offering more Banchan is a non-verbal way of showing care and ensuring guests are well-fed.",
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading:
          'Exploring Regional Variations: Banchan Across South Korea',
        individual_image: '',
        individual_Text:
          "Just as South Korea's landscape varies from mountains to coastlines, so do the regional variations of Banchan. Coastal regions are known for their seafood-based Banchan, while inland areas often feature more vegetable-centric dishes. Traveling through the country unveils an exciting journey for your palate, from the hearty fare of Seoul to the bold and spicy dishes of Busan. Each region has its unique Banchan specialties, reflecting local ingredients and flavors.",
        individual_ListText: [],
        individual_CardID: ''
      }
    ],
    mainImg: '',
    qna: [
      {
        mainTitle: 'Useful and Interesting Information',
        mainText:
          "(1)A typical Korean meal may include five to ten different Banchan dishes, providing a myriad of tastes and textures to complement the main course.\n(2)Kimchi, a spicy and fermented cabbage dish, is one of the most famous Banchan dishes. It's not only a staple of Korean cuisine but also a symbol of Korean culture.\n(3)The practice of offering more Banchan to someone is a sign of respect and hospitality in Korean culture. If you're a guest at a Korean home or restaurant, don't be surprised if the Banchan keeps coming!",
        main_ListText: [
          {
            point: ' ',
            pointAns: ' '
          }
        ]
      }
    ],
    sideText:
      "It's also an opportunity to explore a rich array of flavors and textures, making the dining experience more diverse and enjoyable.",
    sideImg: '',
    conclusion:
      "Korean Banchan is more than just food; it's a celebration of history, culture, and the art of sharing. It offers a gateway to understanding the deep-rooted traditions and the warm-hearted hospitality that characterizes Korean society. As you explore South Korea's culinary landscape, make sure to savor the delightful world of Banchan. It's a testament to the diversity and depth of a culture that truly comes to life through the tastes and aromas of its cherished side dishes.",
    relatedMagazineStory: '',
    storykeyword: ['banchan', 'food', 'small', 'kfood', 'dish'],
    pageCount: {
      value: {
        bookmark: 0,
        liked: 0,
        view: 0
      }
    }
  },
  {
    id: 9,
    upperRegion: 'Seoul',
    upperTheme: 'Explore',
    upperWhy:
      "Immerse yourself in South Korea's rich heritage, and enhance your journey through the heart of Seoul by exploring the wonders held within these unique museums.",
    upperTitle: 'A Journey Through the National Museums',
    upperTime: '10min',
    upperImg: museumupper,
    tagline: ['Historical', 'Recommend', 'Interesting'],
    introText:
      "Seoul is the vibrant heart of South Korea that attracts travelers with its rich tapestry of history, culture, and art.  The city's national museums stand out as beacons of knowledge and inspiration. These institutions offer an extraordinary journey of discovery, going beyond the conventional. In this article, we will explore five captivating national museums - Seoul Museum of History, National Museum of Korea, National Palace Museum, National Hangeul Museum, and National Folk Museum of Korea.",
    introImg: museumintro,
    introImgText: ' ',
    individual: [
      {
        individual_Heading: 'Seoul Museum of History',
        individual_image: '',
        individual_Text:
          "Located in the heart of Seoul, the Seoul Museum of History offers a captivating journey through the city's past. It provides a time-travel experience that traces the evolution of Seoul from its humble beginnings to the bustling metropolis it is today. Visitors can explore immersive exhibitions, engage with interactive displays, and even step back in time through meticulously recreated historical streets. The museum paints a vivid picture of Seoul's evolution, making it an essential starting point for any traveler eager to understand the city's story.",
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'National Museum of Korea',
        individual_image: '',
        individual_Text:
          'The National Museum of Korea is one of the largest and most comprehensive museums in Asia, and its grandeur matches its name. It houses a treasure trove of Korean art, history, and culture, with a vast collection of over 420,000 artifacts. Here, visitors can explore everything from ancient relics to modern masterpieces. The innovative use of technology, combined with awe-inspiring artifacts, ensures that each visit is a captivating journey through time.',
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'National Palace Museum',
        individual_image: '',
        individual_Text:
          "Located within the grandeur of Gyeongbokgung Palace, the National Palace Museum is a portal to Korea's royal past. It showcases the opulence and elegance of the Joseon Dynasty and provides a window into the lives of Korean monarchs. Travelers can witness firsthand the splendor of Korea's royal history, making it a must-visit for history enthusiasts.",
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'National Hangeul Museum',
        individual_image: '',
        individual_Text:
          'Dive into the heart of the Korean language at this unique museum. The Hangeul Museum pays homage to King Sejong the Great, the creator of the Korean script, and the evolution of the Korean language. With interactive displays, language workshops, and a deep dive into the beauty of Hangeul characters, this museum is an immersive experience for linguists and language enthusiasts.',
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'National Folk Museum of Korea',
        individual_image: '',
        individual_Text:
          "The National Folk Museum of Korea immerses visitors in the soul of Korean culture. It offers a fascinating glimpse into everyday life in Korea through the ages, from traditional farming practices to traditional festivities. It's a journey into the heart of Korean culture and heritage. The museum's dedication to showcasing Korea's vibrant history is evident in its interactive displays and multimedia exhibits.",
        individual_ListText: [],
        individual_CardID: ''
      }
    ],
    mainImg: '',
    qna: [
      {
        mainTitle: 'What Sets Korean Museums Apart?',
        mainText:
          "Korean museums are unique in their ability to blend tradition and technology seamlessly. They offer an immersive experience that goes beyond the typical museum visit, through interactive exhibits, multimedia installations, and a focus on storytelling. These museums transcend the boundaries of history and culture, providing visitors with an opportunity to explore a living, breathing past. Rather than serving as mere repositories of artifacts, they are gateways to a cultural journey. Hands-on displays, workshops, and interactive experiences ensure that every visit is both educational and engaging. Korean museums cater to all ages and provide an innovative, captivating, and enriching lens through which to explore the nation's soul.",
        main_ListText: [
          {
            point: 'Technological Innovation',
            pointAns:
              'Korean museums seamlessly blend tradition with cutting-edge technology. Interactive exhibits, multimedia installations, and immersive experiences redefine the traditional museum visit.'
          },
          {
            point: 'Cultural Depth',
            pointAns:
              "The depth and breadth of Korean culture are showcased through meticulously curated collections. From ancient artifacts to modern art, Korean museums offer an unparalleled exploration of the nation's heritage."
          },
          {
            point: 'Engaging Experiences',
            pointAns:
              "Visitors aren't mere spectators but active participants. Hands-on exhibits, workshops, and interactive displays bring history and culture to life in a way that is both educational and entertaining."
          }
        ]
      }
    ],
    sideText:
      "Dive into Seoul's cultural oasis! These museums are situated in Jongno & Yongsan.",
    sideImg: '',
    conclusion:
      "The national museums in Seoul offer an exciting journey into the heart of South Korea. These institutions provide an unmatched experience that both informs and entertains, with their unique blend of history, culture, and innovation. Travelers who visit these museums embark on a voyage through Korea's rich tapestry and gain a deeper appreciation for the country's remarkable heritage. So, be sure to include these remarkable institutions in your Seoul itinerary and get ready to be captivated by the treasures they hold.",
    relatedMagazineStory: '',
    storykeyword: ['seoul', 'museum', 'national', 'gallery', 'jongno'],
    pageCount: {
      value: {
        bookmark: 0,
        liked: 0,
        view: 0
      }
    }
  },
  {
    id: 10,
    upperRegion: 'Seoul',
    upperTheme: 'Explore',
    upperWhy:
      " These markets offer a genuine and vibrant experience, providing a deeper understanding of Seoul's rich heritage and contemporary lifestyle.",
    upperTitle: 'Which markets are famous to locals in Seoul?',
    upperTime: '10min',
    upperImg: marketupper,
    tagline: ['Historical', 'Recommend', 'Interesting'],
    introText:
      "In the bustling heart of Seoul, where the ancient meets the modern, lies a treasure trove of culinary delights waiting to be uncovered. Beyond the gleaming skyscrapers and historical palaces, the local markets of Seoul stand as a testament to the city's rich cultural tapestry and culinary heritage. Join us on an expedition through these vibrant marketplaces, where the fragrance of street food mingles with the echoes of spirited bargaining, and where the very essence of Seoul's culture comes alive.",
    introImg: marketintro,
    introImgText: ' ',
    individual: [
      {
        individual_Heading: 'Gwangjang Market: A Gastronomic Extravaganza',
        individual_image: '',
        individual_Text:
          "Gwangjang Market, one of the oldest markets in Seoul, is a sensory whirlwind. Here, you'll encounter a cornucopia of street food stalls, textiles, and artisanal goods. The market is celebrated for its iconic bindaetteok, a savory mung bean pancake, and its legendary array of silk, satin, and hanbok fabric vendors.",
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: "Namdaemun Market: A Shopper's Paradise",
        individual_image: '',
        individual_Text:
          "One of Seoul's largest and most famous markets, Namdaemun Market, is an exploration in itself. From clothing and electronics to traditional crafts and souvenirs, this market has it all. Don't miss the opportunity to savor a bowl of kalguksu (hand-cut noodle soup) or explore the stalls offering fresh ginseng and herbs.",
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: 'Tongin Market: Step Back in Time',
        individual_image: '',
        individual_Text:
          "Tongin Market, tucked away in the heart of Seoul, offers a glimpse into the city's history. It's famous for its Dosirak (Korean lunchbox) program, where visitors can assemble their lunch from various market stalls using old-school brass coins. This concept harks back to a time when sharing food was a vital part of community life.",
        individual_ListText: [],
        individual_CardID: ''
      },
      {
        individual_Heading: " Mangwon Market: The Hipster's Haven",
        individual_image: '',
        individual_Text:
          "Mangwon Market has evolved into a haven for Seoul's hip and trendy crowd. Amidst traditional markets, you'll find artisanal bakeries, cafes, and a stunning array of international cuisine, including Mexican tacos, Japanese ramen, and more. It's a testament to Seoul's rapidly changing culinary landscape.",
        individual_ListText: [],
        individual_CardID: ''
      }
    ],
    mainImg: '',
    qna: [
      {
        mainTitle: 'Must know about these markets',
        mainText:
          "While exploring local markets, don't forget to haggle a little. Bargaining is common in many Korean markets, and you might just score a great deal. If you're an early riser, check out the vibrant morning markets in Seoul, where you'll find fresh produce and seafood. Gwangjang Market is known for its diverse range of street food, including tteokbokki (spicy rice cakes), mung bean pancakes, and mayak kimbap (addictive bite-sized seaweed rice rolls). Many markets have food courts, so it's a great opportunity to try local dishes without venturing too far. Don't miss out on dishes like Yukhwae,Jjokbal and etc. In some markets, like Tongin Market, you can purchase a dosirak (lunchbox) made up of various market items using coin currency, making it a unique and nostalgic dining experience.",
        main_ListText: [
          {
            point: '',
            pointAns: ''
          }
        ]
      }
    ],
    sideText:
      'Local markets will be most unforgettable experience for you. We recommend Mangwon to feel like local, and Gwangjang for real touristic experience.',
    sideImg: '',
    conclusion:
      "Seoul's local markets are more than just places to shop and dine. They are living time capsules of the city's past, present, and future. From delectable street food to centuries-old traditions, Seoul's markets offer an immersive experience into Korean culture. Each market is a microcosm of the diverse neighborhoods that compose this vibrant metropolis, revealing Seoul's essence one bite and one bargain at a time.",
    relatedMagazineStory: '',
    storykeyword: ['seoul', 'market', 'mangwon', 'gwangjang', 'local'],
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
