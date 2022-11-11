import { IArticle } from "../../models/article";

const mock_blog = [
  "Like most Data Scientists these days, I learnt (and am still learning) the techniques on the job. Back in 2014, I graduated with a scientific degree which taught me the foundations of data analysis, statistics and visualisation. After that, I fell into Data Science and landed my first job as a Data Scientist. Probably a familiar story for others out there too?",
  "Earning the job title of ‘Data Scientist’ without having a directly related qualification was odd to me. I knew a few of the concepts, had worked with relational databases and dabbled in a small amount of code, but that was pretty much it. I also wasn’t as dedicated to learning back then as I am now, so most topics I learnt were dictated by the projects I was working on at the time.",
  "As a few years passed, Data Science grew massively in popularity as a career path. As more online resources became available and data professionals were getting churned out of dedicated Data Science programmes, I realised I was getting left behind. My coding skills were underdeveloped, my statistics knowledge was rusty and my analytical approach to solving problems was quite frankly, primitive."
];

const list_blogs: IArticle[] = [
  {
    id: "1",
    title: "📖 Understand the Relationship Between TypeScript and JavaScript",
    topic: {
      id: "1",
      name: "Everyday Learning",
      key: "everyday_learning"
    },
    tags: [
      {
        id: "1",
        name: "Everyday Learning",
        key: "everyday_learning"
      }
    ],
    content: [],
    date: new Date(),
  },
  {
    id: "2",
    title: "Know Which TypeScript Options You’re Using",
    topic: {
      id: "1",
      name: "Everyday Learning",
      key: "everyday_learning"
    },
    tags: [
      {
        id: "1",
        name: "Everyday Learning",
        key: "everyday_learning"
      }
    ],
    content: [],
    date: new Date(),
  },
  {
    id: "2",
    title: "Understand That Code Generation Is Independent of Types 👻",
    topic: {
      id: "1",
      name: "Programmers 101",
      key: "everyday_learning"
    },
    tags: [
      {
        id: "1",
        name: "Programmers 101",
        key: "everyday_learning"
      }
    ],
    content: [],
    date: new Date(),
  },
  {
    id: "2",
    title: "Understand That Code Generation Is Independent of Types 👻",
    topic: {
      id: "1",
      name: "Programmers 101",
      key: "everyday_learning"
    },
    tags: [
      {
        id: "1",
        name: "Programmers 101",
        key: "everyday_learning"
      }
    ],
    content: [],
    date: new Date(),
  },
  {
    id: "2",
    title: "Understand That Code Generation Is Independent of Types 👻",
    topic: {
      id: "1",
      name: "Programmers 101",
      key: "everyday_learning"
    },
    tags: [
      {
        id: "1",
        name: "Programmers 101",
        key: "everyday_learning"
      }
    ],
    content: [],
    date: new Date(),
  },
  {
    id: "2",
    title: "Understand That Code Generation Is Independent of Types 👻",
    topic: {
      id: "1",
      name: "Programmers 101",
      key: "everyday_learning"
    },
    tags: [
      {
        id: "1",
        name: "Programmers 101",
        key: "everyday_learning"
      }
    ],
    content: [],
    date: new Date(),
  },
  {
    id: "2",
    title: "Understand That Code Generation Is Independent of Types 👻",
    topic: {
      id: "1",
      name: "Programmers 101",
      key: "everyday_learning"
    },
    tags: [
      {
        id: "1",
        name: "Programmers 101",
        key: "everyday_learning"
      }
    ],
    content: [],
    date: new Date(),
  },
  {
    id: "2",
    title: "Understand That Code Generation Is Independent of Types 👻",
    topic: {
      id: "1",
      name: "Programmers 101",
      key: "everyday_learning"
    },
    tags: [
      {
        id: "1",
        name: "Programmers 101",
        key: "everyday_learning"
      }
    ],
    content: [],
    date: new Date(),
  },
  {
    id: "2",
    title: "Understand That Code Generation Is Independent of Types 👻",
    topic: {
      id: "1",
      name: "Programmers 101",
      key: "everyday_learning"
    },
    tags: [
      {
        id: "1",
        name: "Programmers 101",
        key: "everyday_learning"
      }
    ],
    content: [],
    date: new Date(),
  },
]

export {
  mock_blog,
  list_blogs
};