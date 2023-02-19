export const homePage = {
  history: {
    text: (
      <>
        <p>
          Coffee plants were introduced to Rwanda by German missionaries in the
          early 1900s, though the country’s local production would not garner
          international acclaim until the beginning of the 21st century.
        </p>
        <p>In the 1990s two crises threatened the future of coffee in Rwanda</p>
        <p>
          The crash of the international coffee market and the Genocide against
          the Tutsis in 1994.{' '}
        </p>
        <p>
          Rather than abandoning the industry a National Coffee Strategy was
          developed, and international funding and organisations stepped in to
          support its revitalisation.
        </p>
        <p>
          Today there are nearly half a million coffee smallholdings in Rwanda
          and coffee is the country’s fourth largest export. Communal washing
          stations and government investment in infrastructure, quality control
          and training have helped Rwandan farmers economise their production
          and focus on the high quality of their crops.
        </p>
      </>
    ),
    imgPath: '/images/Header-coffee.png',
  },
  currentState: {
    img1Path: '/images/cur.jpg',
    img2Path: '/images/rcoffee.jpg',
  },
  rCoffeeValue: {
    text: 'The farmers deliver cherry to medium-sized washing stations who process and dry the coffee. Washing stations deliver the parchment to exporters who cup and grade the coffee, dry mill and export the finished green coffee',
    imgPath: '/images/val.jpg',
  },
  rGrowingCalendar: {
    text: 'The season runs from March to August, this can always shift a little depending on the region, weather and the altitude of the farm.',
    imgPath: '/images/calendar.jpg',
  },
  news: [
    {
      imgPath: '/images/phase1-coffee.jpg',
      head: 'RWANDAN COFFEE RANKED AMONG THE BEST OF THE BEST GLOBALLY',
      subHead: 'Admin - Thursday 24th May 2021',
      text: 'Rwanda beat eight other competitors to the “Best of the Best” coffee accolade on grounds of the beans’ aromatic richness, complexity, balance, elegance and aroma intensity and strength, according to judges. The…',
      articleUrl: '/article',
    },
    {
      imgPath: '/images/phase2-coffee.jpg',
      head: 'RWANDA CELEBRATES INTERNATIONAL COFFEE DAY BY PROMOTING LOCAL CONSUMPTION',
      subHead: 'Admin - Thursday 24th May 2021',
      text: 'Export Development Board (NAEB) has kicked off a series of activities meant to boost Rwanda’s coffee industry as part of the celebration of the International Coffee Day; which is, this year, celebrated…',
      articleUrl: '/article',
    },
    {
      imgPath: '/images/phase3-coffee.jpg',
      head: 'CHINESE AMBASSADOR PLEDGES MARKET FOR RWANDA’S COFFEE AND TEA',
      subHead: 'Admin - Thursday 24th May 2021',
      text: 'committed himself to do his best to attract potential investors and buyers of Rwanda’s tea and coffee from his country by providing them with more information on available opportunities in tea and coffee…',
      articleUrl: '/article',
    },
  ],
};

export const processingData = {
  headerContent: {
    imgPath: '/images/proccessing-coffee.jpg',
    title: (
      <>
        Processing coffee <br /> in{' '}
        <span className='font-weight-bold'>Rwanda</span>
      </>
    ),
  },
  intro: {
    title: 'Coffee processing process',
    text: (
      <>
        <p>
          Coffee in Rwanda is generally wet processed throughout the country{' '}
        </p>
        <p>
          The method is called wet process because water is the primary means to
          both moving the coffee through the process and to making the
          extraction of the seed possible. Since processing method affects
          taste, understanding these things is important if we are to fully
          understand why certain coffees taste the way they do.
        </p>
      </>
    ),
  },

  details: [
    {
      title: '1. The coffee grows on a shrub',
      text: 'The shrub does not get harvested usually for the first 3 years of growth, and may last 15-20 years before having to be replanted. When the berries turn red (well, a few varieties turn yellow, but usually red) then they are ripe to pick. These must be harvested by hand so as not to break open the coffee cherry.  Once it is broken open, it starts to ferment and will be no good for high quality specialty coffee.  Coffee can only grow at very high altitudes.',
      imgPath1: '/images/img1.jpg',
      imgPath2: '/images/img2.jpg',
      isTitleOffset: true,
      offset: 'offset-md-2',
      size: 'col-md-8',
    },

    {
      title: '2. The coffee must then be poured into a huge vat.',
      text: 'From this vat it will be shaken and washed through a screen to divide up the larger ripe fruit, from the less desirable smaller berries.  The lesser quality berries will be sold as a lower quality coffee.',
      imgPath1: '/images/img3.jpg',
      imgPath2: '/images/img4.jpg',
      isTitleOffset: false,
      offset: '',
      size: 'col-md-12',
    },

    {
      title: '3. After being separated, the coffee will go into a de-pulper.',
      text: 'The pulp is the red part of the cherry.  This is removed and kept for compost/fertilizer.  It shows the depulper spinning in the picture on the left, and dumping the refuse into a pile on the left.  If the pulp does not come off in this step, then it is not completely ripe and is hand sorted out and used in the lesser quality coffee.  Yes, that’s right…hand sorted out.  All the coffee in the world.',
      imgPath1: '/images/img5.jpg',
      imgPath2: '/images/img6.jpg',
      isTitleOffset: false,
      offset: '',
      size: 'col-md-12',
    },

    {
      title: (
        <>
          4. The coffee dumps out from the de-pulper into large vats where it
          ferments for a while.
        </>
      ),
      text: 'The vat is then filled with water and forced out into a long drainage half pipe.  This pipe is filled with water, and the workers stir the coffee around.  The particles of shell around the coffee pit, or pieces of pulp rise to the top and are siphoned off.',
      imgPath1: '/images/img7.jpg',
      imgPath2: '/images/img8.jpg',
      isTitleOffset: false,
      offset: '',
      size: 'col-md-12',
    },

    {
      title: (
        <>
          5. The coffee is sorted several times if it is specialty coffee to
          look for any defects.
        </>
      ),
      text: 'If it is grown at a lower altitude, there are also coffee beans that are ruined because of a little worm that digs into and look how tiny this worm is!  Can you see the tiny white thing in his hand?',
      imgPath1: '',
      imgPath2: '',
      isTitleOffset: false,
      offset: '',
      size: 'col-md-12',
    },

    {
      title: (
        <>
          6. The coffee has to be dried for several days to lower the moisture
          content to 12%.
        </>
      ),
      text: 'If it is grown at a lower altitude, there are also coffee beans that are ruined because of a little worm that digs into and look how tiny this worm is!  Can you see the tiny white thing in his hand?',
      imgPath1: '/images/img9.jpg',
      imgPath2: '/images/img10.jpg',
      isTitleOffset: false,
      offset: '',
      size: 'col-md-12',
    },

    {
      title: (
        <>
          7. When the coffee is dry enough, the coffee has to be taken out of
          what is called the parchment.
        </>
      ),
      text: 'The coffee bean has been shrinking as the moisture is dried out, so the parchment pulls away from it.  ',
      imgPath1: '',
      imgPath2: '',
      isTitleOffset: false,
      offset: '',
      size: 'col-md-12',
    },
  ],
};

export const institutionData = {
  mainTitle: 'General overview on Rwandan coffee stakeholders',
  statisticNumber: [
    { title: 'Total coffee farmers', numbers: '355,000' },
    {
      title: (
        <>
          Large estimated <br /> traders
        </>
      ),
      numbers: '30',
    },
    { title: 'Private coffee washing stations', numbers: '185' },
    { title: 'Coops coffee washing stations', numbers: '96' },
  ],
  institutions: {
    title: 'Government institutions',
    mainText:
      'The government institutions you need to help you start, run and maintain your coffee business in Rwanda',
    imgPath: '/images/statistic-image.jpg',
    data: [
      {
        text: 'The Ministry of Agriculture and Animal Resources has the mission of promoting the sustainable development of a modern, efficient and competitive agriculture and livestock sector, in order to ensure food security, agriculture export and diversification of the productions for the benefit of the farmer and the economy of the country.',
        contact: {
          email: 'info@minagri.gov.rw',
          tel: '4127',
          web: 'www.minagri.gov.rw',
        },
        imgPath: '/images/minagri.jpg',
        picHeight: '120',
      },
      {
        text: 'Rwanda Development Board (RDB) is a government institution whose mandate is to accelerate Rwanda’s economic development by enabling private sector growth. RDB was established in 2008 out of a merger of 8 Government institutions to create a One Stop Shop for business and investments.',
        contact: {
          email: 'info@rdb.rw',
          tel: '1415 / (+250) 727775170',
          web: 'www.rdb.rw',
        },
        imgPath: '/images/rdb.jpg',
        picHeight: '110',
      },
      {
        text: 'National Agricultural Export Development Board provides trusted market intelligence, practical advice and business tools to help Rwanda companies expand in global markets.',
        contact: {
          email: 'info@naeb.gov.rw',
          tel: '3800',
          web: 'www.naeb.gov.rw',
        },
        imgPath: '/images/naeb.jpg',
      },

      {
        text: 'RAB has the general mission of championing the agriculture sector development into a knowledge based; technology driven and market oriented industry, using modern methods in crop, animal, fisheries, forestry and soil and water management in food, fibre and fuel wood production and processing.',
        contact: {
          email: 'infos@rab.gov.rw',
          tel: '+250788385312',
          web: 'www.rab.gov.rw',
        },
        imgPath: '/images/rab.jpg',
      },
    ],
  },

  guidance: {
    mainTitle: 'Guide to coffee exporting',
    text: 'To export coffee you need to acquire documents from different institutions allowing you to export coffee on international’s standards',
    data: [
      {
        title: 'Obtain a coffee export license',
        text: 'A Coffee export license is an official permission to conduct a particular export transaction. For exporting coffee from Rwanda, you will need to obtain a coffee export license from the National Agricultural Export Development Board (NAEB). It is valid for one year and renewable on request.',
        link: '>> CHECK THE EXPORT LICENCE REQUIREMENT DOCUMENT',
      },
      {
        title: 'Obtain certificates of origin and quality',
        text: 'A certificate of origin refers to a document that attests in which country export goods have been obtained, produced, manufactured or processed. It is issued by the National Agricultural Export Development Board (NAEB) and is necessary to profit from trade agreements that grant to certain export products from Rwanda preferable market access. A certificate of quality, also issued by NAEB, specifies the type and grade of the coffee to be exported.',
        link: '>> REGISTER TO OBTAIN CERTIFICATES',
      },
      {
        title: 'Obtain a phytosanitary certificate',
        text: 'A phytosanitary certificate is an official document issued by the Rwanda Agriculture and Livestock Inspection and Certification Services (RALIS). It certifies that the plants or plant products covered by the certificate have been inspected according to appropriate procedures and are considered to be free from quarantine pests and that they are considered to conform with the current phytosanitary regulations of the importing country.',
        link: '>> eRALIS',
      },
      {
        title: 'Coffee Export procedures',
        text: 'Rwanda Trade Portal compiles the licenses, permits and clearance steps to be fulfilled by a registered business owner exporting a consignment of different types of coffee, from green coffee to processed coffee for even the first time out of Rwanda. ',
        link: '>> CHECK PROCEDURES ON RWANDA TRADE PORTAL',
      },
    ],
  },
  other: {
    mainTitle: 'Rwanda coffee Roasters and Exporters',
    roasters: {
      subTitles: 'Rwanda coffee potential roasters',
      data: [
        {
          name: 'ENAS Ltd',
          detail: 'Gorilla’s coffee',
          tel: '0788302301',
          email: 'iuwimana@clintonfoundation.org',
        },
        {
          name: 'Micro Roasters',
          detail: 'Coffee shops & Hotels',
          tel: '0788872186',
          email: 'b.badrou@naeb.gov.rw',
        },
        {
          name: 'RFCC Ltd',
          detail: 'Gorilla’s coffee',
          tel: '0788302301',
          email: 'iuwimana@clintonfoundation.org',
        },
        {
          name: 'Rwanda Nut',
          detail: 'Rwanda Nut Company LTD',
          tel: '+250 787888767',
          email: 'momoko.harada@rwandanuts.com',
        },
        {
          name: 'Rwashoscco Ltd',
          detail: 'Maraba',
          tel: '0788456614',
          email: 'rwashoscco@hotmail.com',
        },
        {
          name: 'Huye Mountain Coffee Ltd',
          detail: 'Huye Mountain Coffee',
          tel: '0788303678',
          email: 'rubanzangabo@yahoo.fr',
        },
      ],
    },
    exporters: {
      subTitles: 'Rwanda coffee exporters',
      data: [
        {
          name: 'Cyahinda Coffee Ltd',
          detail: 'Betty Scheba NIYONSABA',
          address: 'Nyaruguru',
          tel: '0788735844',
          email: 'schebaniyonsaba@gmail.com',
        },
        {
          name: '1000 Hills ProductsRwanda Ltd',
          detail: 'Ivan SHEMA MATESO',
          address: 'KICUKIRO',
          tel: '0784466002',
          email: 'ivan.shema@1000hillsproducts.com',
        },
        {
          name: 'Muraho Trading Co. Ltd',
          detail: 'ANBALAGAN NALINI',
          address: 'Kicukiro',
          tel: '0785794976',
          email: 'murahotrading@gmail.com',
        },
        {
          name: 'SIMBA SUPERMARKET LTD',
          detail: 'NGARAMBE Justine',
          address: 'Nyarugenge',
          tel: '0788307200',
          email: 'info@simbasupermarket.com',
        },
        {
          name: 'REGIONAL COFFEE Co LTD',
          detail: 'MUTUYIMANA Divine',
          address: 'Kicukiro',
          tel: '788383840',
          email: 'divine00130@gmail.com',
        },
        {
          name: 'LETSEQUOIA COFFEE',
          detail: 'INYOUNG KIM',
          address: 'Gasabo',
          tel: '0781802109',
          email: 'ikim@letsequoia.com',
        },
      ],
    },
  },
};

export const productsData = {
  headerContent: {
    imgPath: '/images/buy-pic.jpg',
    title: (
      <>
        Shop from a range <br /> of{' '}
        <span className='font-weight-bold'>Rwanda Coffee</span>
      </>
    ),
  },
  coffee: [
    {
      name: <>Gorilla&apos;s Coffee </>,
      imgPath: '/images/gorilla.jpg',
      type: ' - Luxurious',
      company: 'Rwanda coffee Single Estate Fair Trade',
      details: 'Medium Roast Coffee · Whole Bean',
      price: '$13',
    },
    {
      name: 'Westrock Coffee Company Rwanda',
      imgPath: '/images/westrock.jpg',
      type: '',
      company: 'Select Reserve, Dark Roast, 12-ounce ',
      details: 'Whole Bean',
      price: '$11',
    },
    {
      name: 'Kivu noir Specialty Coffee',
      imgPath: '/images/kivu.jpg',
      type: ' - Luxurious',
      company: 'Rwanda coffee Single Estate Fair Trade ',
      details: 'Medium Roast Coffee · Whole Bean',
      price: '$10',
    },

    {
      name: 'Westrock Coffee Company Rwanda',
      imgPath: '/images/west-2.jpg',
      type: '',
      company: 'Select Reserve, Dark Roast, 12-ounce',
      details: 'Whole Bean',
      price: '$10',
    },

    {
      name: 'Kivubelt Coffee - Farm to Cup',
      imgPath: '/images/kivu2.jpg',
      type: '',
      company: 'Rwandan Specialty Coffee',
      details: ' Whole Bean',
      price: '$10',
    },

    {
      name: 'Kirkland Signature Rwandan',
      imgPath: '/images/kirkland.jpg',
      type: '',
      company: 'Bean Dark Roast Coffee',
      details: 'Whole Bean',
      price: '$10',
    },
  ],
};

export const shops = [
  {
    imgPath: '/images/shop1.jpg',
    name: 'Cafe Iwacu',
    details:
      'Located in the middle of the  Kigali business centre, Iwacu offers different coffee flavours with a unique service ',
    link: '',
  },
  {
    imgPath: '/images/shop2.jpg',
    name: 'Cafe Iwacu',
    details:
      'Located in the middle of the  Kigali business centre, Iwacu offers different coffee flavours with a unique service ',
    link: '',
  },
  {
    imgPath: '/images/shop1.jpg',
    name: 'Cafe Iwacu',
    details:
      'Located in the middle of the  Kigali business centre, Iwacu offers different coffee flavours with a unique service ',
    link: '',
  },
  {
    imgPath: '/images/shop2.jpg',
    name: 'Cafe Iwacu',
    details:
      'Located in the middle of the  Kigali business centre, Iwacu offers different coffee flavours with a unique service ',
    link: '',
  },
  {
    imgPath: '/images/shop1.jpg',
    name: 'Cafe Iwacu',
    details:
      'Located in the middle of the  Kigali business centre, Iwacu offers different coffee flavours with a unique service ',
    link: '',
  },
  {
    imgPath: '/images/shop2.jpg',
    name: 'Cafe Iwacu',
    details:
      'Located in the middle of the  Kigali business centre, Iwacu offers different coffee flavours with a unique service ',
    link: '',
  },
];

export const singleShop = {
  espressoBased: [
    'Black Coffee',
    'Turkish Coffee',
    'Cold Brew',
    'Iced Coffee',
    'Ristretto',
    'Lungo',
    'Caffé Crema',
    'Café Zorro',
    'Café Cubano',
    'Americano',
  ],

  milkBased: [
    'Cappuccino',
    'Latte',
    'Piccolo Latte',
    'Mocha',
    'Macchiato',
    'Cortado',
    'Café Bombon',
    'Café Au Lait',
    'Carajillo',
    'Espressino',
  ],
};

export const reportsData = [
  {
    title: 'Report on the total export of coffee in the 2020/2021 year',
    text: 'A Coffee export license is an official permission to conduct a particular export transaction. For exporting coffee from Rwanda, you will need to obtain a coffee export license from the National Agricultural Export Development Board (NAEB). It is valid for one year and renewable on request.',
    link: '>> CHECK THE REPORT',
  },
  {
    title: 'Report on the total export of coffee in the 2020/2021 year',
    text: 'A Coffee export license is an official permission to conduct a particular export transaction. For exporting coffee from Rwanda, you will need to obtain a coffee export license from the National Agricultural Export Development Board (NAEB). It is valid for one year and renewable on request.',
    link: '>> CHECK THE REPORT',
  },
  {
    title: 'Report on the total export of coffee in the 2020/2021 year',
    text: 'A Coffee export license is an official permission to conduct a particular export transaction. For exporting coffee from Rwanda, you will need to obtain a coffee export license from the National Agricultural Export Development Board (NAEB). It is valid for one year and renewable on request.',
    link: '>> CHECK THE REPORT',
  },
];
