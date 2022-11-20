type IArticle = {
  _id: string,
  title: string,
  topic: ITopic[],
  tags: ITag[],
  content: string[],
  slug: string,
  createdAt: string,
  updatedAt: string,
}

type IArticleWirting = {
  title: string,
  topic: string,
  tags: string[],
  content: string[],
}

type ITopic = {
  _id: string,
  name: string,
  key: string
}

type ITag = {
  _id: string,
  name: string,
  key: string
}

export type {
  IArticle,
  ITopic,
  ITag,
  IArticleWirting
}