type IArticle = {
  id: string,
  title: string,
  topic: ITopic,
  tags: ITag[],
  content: string[],
  date: Date
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