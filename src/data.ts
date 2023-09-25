import { Product } from "./types/Product";

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
      // {
      //   id: 2,
      //   title: "Admins",
      //   url: "/admins",
      //   icon: "post2.svg",
      // },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Customers",
        url: "/customers",
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
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Electronics",
        url: "/electronics",
        icon: "log.svg",
      },
      {
        id: 2,
        title: "Games",
        url: "/games",
        icon: "chart.svg",
      },
      {
        id: 3,
        title: "Foods",
        url: "/foods",
        icon: "note.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Calendar",
        url: "/calendar",
        icon: "calendar.svg",
      },
      {
        id: 2,
        title: "About",
        url: "/about",
        icon: "element.svg",
      },
    ],
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
      visit: 400,
    },
    {
      name: "Mon",
      visit: 300,
    },
    {
      name: "Tue",
      visit: 200,
    },
    {
      name: "Wed",
      visit: 278,
    },
    {
      name: "Thu",
      visit: 189,
    },
    {
      name: "Fri",
      visit: 239,
    },
    {
      name: "Sat",
      visit: 349,
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

export const customers: User[] = [
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
    email: "bhen@hotmail.com",
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

export const products: Product[] = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    description: "Playstation 5",
    color: "white",
    producer: "Sony",
    category: "electronic",
    price: 400,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    description: "Dell Laptop",
    color: "black",
    producer: "Dell",
    category: "electronic",
    price: 250,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    description: "Samsung TV 4K",
    color: "gray",
    producer: "Samsung",
    category: "electronic",
    price: 450,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    description: "Apple Iphone 14",
    color: "white",
    producer: "Apple",
    category: "electronic",
    price: 550,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Mario Cart",
    color: "rainbow",
    producer: "Nitendo",
    category: "Video Game",
    price: 90,
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/9072307/pexels-photo-9072307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Counter Strike",
    color: "black",
    producer: "Steam",
    category: "Video Game",
    price: 65,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/7824275/pexels-photo-7824275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Pokemon Three in One",
    color: "rainbow",
    producer: "Pokemon Company",
    category: "Video Game",
    price: 120,
  },
  {
    id: 8,
    img: "https://media.istockphoto.com/id/511503033/photo/edible-birdnest.jpg?s=2048x2048&w=is&k=20&c=PtdVANWo2DK2QD4z_5GN415ALWW_eBL_2oRngiAFB1E=",
    description: "Swallow Nest",
    color: "white",
    producer: "Golden Nest",
    category: "Food",
    price: 290,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/8105066/pexels-photo-8105066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Manuka Royal Honey",
    color: "Orange",
    producer: "comvita",
    category: "Food",
    price: 190,
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/9698109/pexels-photo-9698109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Wagyu Beef",
    color: "red",
    producer: "Imperial wagyu beef",
    category: "Food",
    price: 500,
  },
];

export const orders = [
  {
    id: 1,
    customerId: 1,
    productId: 5,
    quantity: 3,
    year: "2019",
  },
  {
    id: 2,
    customerId: 1,
    productId: 10,
    quantity: 3,
    year: "2020",
  },
  {
    id: 3,
    customerId: 1,
    productId: 7,
    quantity: 1,
    year: "2021",
  },
  {
    id: 4,
    customerId: 1,
    productId: 2,
    quantity: 2,
    year: "2022",
  },
  {
    id: 5,
    customerId: 1,
    productId: 9,
    quantity: 3,
    year: "2023",
  },
  {
    id: 6,
    customerId: 2,
    productId: 9,
    quantity: 3,
    year: "2019",
  },
  {
    id: 7,
    customerId: 2,
    productId: 4,
    quantity: 3,
    year: "2023",
  },
  {
    id: 8,
    customerId: 2,
    productId: 5,
    quantity: 3,
    year: "2020",
  },
  {
    id: 9,
    customerId: 2,
    productId: 6,
    quantity: 3,
    year: "2020",
  },
  {
    id: 10,
    customerId: 2,
    productId: 2,
    quantity: 2,
    year: "2021",
  },
  {
    id: 11,
    customerId: 2,
    productId: 4,
    quantity: 3,
    year: "2022",
  },
  {
    id: 12,
    customerId: 3,
    productId: 4,
    quantity: 2,
    year: "2020",
  },
  {
    id: 13,
    customerId: 3,
    productId: 5,
    quantity: 2,
    year: "2021",
  },
  {
    id: 14,
    customerId: 3,
    productId: 9,
    quantity: 3,
    year: "2022",
  },
  {
    id: 15,
    customerId: 3,
    productId: 5,
    quantity: 1,
    year: "2019",
  },
  {
    id: 16,
    customerId: 4,
    productId: 10,
    quantity: 2,
    year: "2022",
  },
  {
    id: 17,
    customerId: 4,
    productId: 2,
    quantity: 1,
    year: "2023",
  },
  {
    id: 18,
    customerId: 4,
    productId: 7,
    quantity: 1,
    year: "2021",
  },
  {
    id: 19,
    customerId: 4,
    productId: 9,
    quantity: 4,
    year: "2021",
  },
  {
    id: 20,
    customerId: 4,
    productId: 1,
    quantity: 1,
    year: "2023",
  },
  {
    id: 21,
    customerId: 5,
    productId: 9,
    quantity: 2,
    year: "2023",
  },
  {
    id: 22,
    customerId: 5,
    productId: 5,
    quantity: 5,
    year: "2022",
  },
  {
    id: 23,
    customerId: 5,
    productId: 4,
    quantity: 2,
    year: "2021",
  },
  {
    id: 24,
    customerId: 5,
    productId: 9,
    quantity: 2,
    year: "2021",
  },
  {
    id: 25,
    customerId: 5,
    productId: 6,
    quantity: 4,
    year: "2023",
  },
  {
    id: 26,
    customerId: 6,
    productId: 5,
    quantity: 2,
    year: "2019",
  },
  {
    id: 27,
    customerId: 6,
    productId: 7,
    quantity: 2,
    year: "2021",
  },
  {
    id: 28,
    customerId: 6,
    productId: 8,
    quantity: 3,
    year: "2022",
  },
  {
    id: 29,
    customerId: 6,
    productId: 9,
    quantity: 4,
    year: "2023",
  },
  {
    id: 30,
    customerId: 7,
    productId: 10,
    quantity: 2,
    year: "2019",
  },
  {
    id: 31,
    customerId: 7,
    productId: 4,
    quantity: 3,
    year: "2020",
  },
  {
    id: 32,
    customerId: 7,
    productId: 5,
    quantity: 1,
    year: "2021",
  },
  {
    id: 33,
    customerId: 7,
    productId: 4,
    quantity: 2,
    year: "2022",
  },
  {
    id: 34,
    customerId: 7,
    productId: 2,
    quantity: 1,
    year: "2023",
  },
  {
    id: 35,
    customerId: 8,
    productId: 3,
    quantity: 2,
    year: "2019",
  },
  {
    id: 36,
    customerId: 8,
    productId: 9,
    quantity: 2,
    year: "2023",
  },
  {
    id: 37,
    customerId: 8,
    productId: 7,
    quantity: 2,
    year: "2021",
  },
  {
    id: 38,
    customerId: 8,
    productId: 4,
    quantity: 2,
    year: "2022",
  },
  {
    id: 39,
    customerId: 8,
    productId: 5,
    quantity: 3,
    year: "2023",
  },
  {
    id: 40,
    customerId: 9,
    productId: 8,
    quantity: 2,
    year: "2020",
  },
  {
    id: 41,
    customerId: 9,
    productId: 1,
    quantity: 2,
    year: "2023",
  },
  {
    id: 42,
    customerId: 9,
    productId: 10,
    quantity: 2,
    year: "2023",
  },
  {
    id: 43,
    customerId: 9,
    productId: 8,
    quantity: 3,
    year: "2022",
  },
  {
    id: 44,
    customerId: 9,
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
