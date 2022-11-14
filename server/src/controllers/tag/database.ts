import { TagSchema } from "../../models/Tag";

const createTagDatabase = (data) => {
  return TagSchema.create(data);
}

export {
  createTagDatabase,
}