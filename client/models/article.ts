type IArticle = {
  _id: string,
  title: string,
  topic: ITopic[],
  tags: ITag[],
  content: string[],
  createdAt: string,
  updatedAt: string,
}

type ITopic = {
  id: string,
  name: string,
  key: string
}

type ITag = {
  id: string,
  name: string,
  key: string
}

export type {
  IArticle
}