import { IAboutDataRoot, IResumeRoot } from "@Models/general";
import callApi from "./api";

const GeneralServices = {
  getAboutData: async (): Promise<IAboutDataRoot | null> => {
    try {
      const res = await callApi({
        url: "/about-me-data",
        method: "GET"
      });
      return res.data;
    } catch (error) {
      return null;
    }
  },
  getResume: async (): Promise<IResumeRoot | null> => {
    try {
      const res = await callApi({
        url: "/resume-data",
        method: "GET"
      });
      return res.data;
    } catch (error) {
      return null;
    }
  }
};

export default GeneralServices;