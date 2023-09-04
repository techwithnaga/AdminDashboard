export let initialEvents = [
  {
    id: 1,
    title: "Techwithnaga's Christmas Celebration",
    start: "2023-12-23",
  },
  {
    id: 2,
    title: "Meeting with vendors",
    start: "2023-11-23",
  },
  {
    id: 3,
    title: "Performance review",
    start: "2023-10-23",
  },
];

export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/calendar",
        icon: "calendar.svg",
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "Maintenance",
  //   listItems: [
  //     {
  //       id: 1,
  //       title: "Settings",
  //       url: "/",
  //       icon: "setting.svg",
  //     },
  //     {
  //       id: 2,
  //       title: "Backups",
  //       url: "/",
  //       icon: "backup.svg",
  //     },
  //   ],
  // },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  // {
  //   id: 1,
  //   img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //   username: "Elva McDonald",
  //   email: "elva@gmail.com",
  //   amount: "3.668",
  // },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "2.134",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Augusta McGee",
    email: "augusta@gmail.com",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Angel Thomas",
    email: "angel@gmail.com",
    amount: "1.560",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

type User = {
  id: number;
  img: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  verified: boolean;
};

export const userRows: User[] = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Groban",
    firstName: "Christina",
    email: "cgroban@yahoo.com",
    phone: "7737070005",
    verified: false,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Songoku",
    firstName: "Jeremy",
    email: "jsongoku@mail.com",
    phone: "7737070006",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Man",
    firstName: "Wanpan",
    email: "wman@gmail.com",
    phone: "7737070007",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Popcorn",
    firstName: "Garrett",
    email: "gpopcornc@mail.com",
    phone: "7737070008",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Perdana",
    firstName: "Leah",
    email: "lperdana@gmail.com",
    phone: "7737070009",
    verified: false,
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Wolf",
    firstName: "Peter",
    email: "pwolf@gmail.com",
    phone: "7737070010",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "vegita",
    email: "vdunn@gmail.com",
    phone: "7737070011",
    verified: true,
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Henricksen",
    firstName: "Bulma",
    email: "bhenricksen@hotmail.com",
    phone: "7737070012",
    verified: false,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Griffin",
    firstName: "Charlotte",
    email: "cgriffin@gmail.com",
    phone: "7737070013",
    verified: false,
  },
];

export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 ",
    color: "white",
    producer: "Sony",
    price: 250,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop",
    color: "black",
    producer: "Dell",
    price: 300,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K",
    color: "gray",
    producer: "Samsung",
    price: 650,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14",
    color: "white",
    producer: "Apple",
    price: 750,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue",
    color: "rainbow",
    producer: "Philips",
    price: 40,
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX",
    color: "black",
    producer: "Logitech",
    price: 60,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: 120,
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: 800,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia",
    color: "black",
    producer: "Sony",
    price: 950,
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop",
    color: "black",
    producer: "Acer",
    price: 600,
  },
];

export const orders = [
  {
    userId: 1,
    productId: 5,
    quantity: 3,
    year: "2019",
  },
  {
    userId: 1,
    productId: 3,
    quantity: 2,
    year: "2020",
  },
  {
    userId: 1,
    productId: 7,
    quantity: 1,
    year: "2021",
  },
  {
    userId: 1,
    productId: 2,
    quantity: 2,
    year: "2022",
  },
  {
    userId: 1,
    productId: 9,
    quantity: 3,
    year: "2023",
  },
  {
    userId: 2,
    productId: 4,
    quantity: 3,
    year: "2019",
  },
  {
    userId: 2,
    productId: 3,
    quantity: 2,
    year: "2020",
  },
  {
    userId: 2,
    productId: 6,
    quantity: 3,
    year: "2020",
  },
  {
    userId: 2,
    productId: 2,
    quantity: 2,
    year: "2021",
  },
  {
    userId: 2,
    productId: 8,
    quantity: 2,
    year: "2022",
  },
  {
    userId: 3,
    productId: 4,
    quantity: 2,
    year: "2020",
  },
  {
    userId: 3,
    productId: 5,
    quantity: 2,
    year: "2021",
  },
  {
    userId: 3,
    productId: 8,
    quantity: 2,
    year: "2022",
  },
  {
    userId: 4,
    productId: 1,
    quantity: 2,
    year: "2019",
  },
  {
    userId: 4,
    productId: 2,
    quantity: 3,
    year: "2020",
  },
  {
    userId: 4,
    productId: 3,
    quantity: 4,
    year: "2022",
  },
  {
    userId: 5,
    productId: 4,
    quantity: 2,
    year: "2021",
  },
  {
    userId: 5,
    productId: 5,
    quantity: 3,
    year: "2022",
  },
  {
    userId: 5,
    productId: 6,
    quantity: 4,
    year: "2023",
  },
  {
    userId: 6,
    productId: 7,
    quantity: 2,
    year: "2021",
  },
  {
    userId: 6,
    productId: 8,
    quantity: 3,
    year: "2022",
  },
  {
    userId: 6,
    productId: 9,
    quantity: 4,
    year: "2023",
  },
  {
    userId: 7,
    productId: 10,
    quantity: 2,
    year: "2019",
  },
  {
    userId: 7,
    productId: 1,
    quantity: 2,
    year: "2021",
  },
  {
    userId: 7,
    productId: 2,
    quantity: 3,
    year: "2023",
  },
  {
    userId: 8,
    productId: 3,
    quantity: 2,
    year: "2019",
  },
  {
    userId: 8,
    productId: 4,
    quantity: 2,
    year: "2022",
  },
  {
    userId: 8,
    productId: 5,
    quantity: 3,
    year: "2023",
  },
  {
    userId: 9,
    productId: 6,
    quantity: 2,
    year: "2021",
  },
  {
    userId: 9,
    productId: 7,
    quantity: 2,
    year: "2022",
  },
  {
    userId: 9,
    productId: 8,
    quantity: 3,
    year: "2023",
  },
];

export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};
