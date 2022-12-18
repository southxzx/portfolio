import { SampleSchema } from "../../models/Sample";


const getSample = async ({ name = "" }) => {
  try {
    const sample = await SampleSchema.findOne({ name });
    return sample;
  } catch (error) {
    return {}
  }
}

export {
  getSample
}