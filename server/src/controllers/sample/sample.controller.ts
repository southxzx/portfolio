import { IRequest } from "../../helpers/models/common"
import { ErrorResponse } from "../../helpers/models/error_message";
import { getSample } from "./database";

const getAboutData = async (req: IRequest) => {
  const sample = await getSample({ name: "about-me-data" });
  return req.customRes({
    isError: false,
    message: ErrorResponse.GET_SUCCESSFUL,
    data: sample
  });
}

const getResumeData = async (req: IRequest) => {
  const sample = await getSample({ name: "resume-data" });
  return req.customRes({
    isError: false,
    message: ErrorResponse.GET_SUCCESSFUL,
    data: sample
  });
}

export {
  getAboutData,
  getResumeData
}

const b = {
  about: {
    name: "Nam Dang",
    other_name: "Daniel Dang",
    profile_picture: "https://lastfm.freetls.fastly.net/i/u/avatar170s/83203018c8f61ce69be960632da15784.png",
  },
  contact: {
    linkedin: "a",
    github: "a",
    phone: "a",
    twitter: "a",
    email: "a"
  },
  work_exp: {
    title: "🎗 Work Experience",
    content: [
      {
        company: "Google Inc",
        company_logo: "",
        company_link: "",
        subtitle: "",
        content: [
          {
            title: "Frontend Engineer",
            content_html: [
              "<p>Participated in developing, maintain the product features in 2 main projects: vietcetera.com and the CMS. The most impressive one is the home page for vietcetera.com</p>"
            ]
          },
          {
            title: "Mobile Engineer",
            content_html: [
              "<p>Participated in developing Vetcetera’s app for both Android & iOS.</p>"
            ]
          },
        ]
      }
    ]
  },
  skills: {
    title: "✍🏻 Skills",
    content_html: [
      "<p>JavaScript, TypeScript, HTML5 & CSS3 (strong experienced)</p>"
    ]
  },
  education: {
    title: "📖 Education",
    content: [
      {
        title: "Bachelor of Engineering (Information Technology)",
        subtitle: "HCMC University of Technology & Education (2017 - 2021)"
      }
    ]
  },
  languages: {
    title: "💬 Languages",
    content: [
      "Vietnamese",
      "English"
    ]
  }
}