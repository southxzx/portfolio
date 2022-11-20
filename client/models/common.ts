type IResponse = {
  message: string,
  data: any,
  error: any
}

type IReponseList<T> = {
  docs: T[],
  total: number
}

export type {
  IResponse,
  IReponseList
}