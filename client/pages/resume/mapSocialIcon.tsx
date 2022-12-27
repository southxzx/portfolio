import { EmailIcon, GithubIcon, LinkedinIcon, PhoneIcon, TwitterIcon } from "@Components/icon/iconSocial";
import React, { ReactNode } from "react";

const mapSocialIcon = (key: string): ReactNode => {
  switch (key) {
    case "github": return <GithubIcon />;
    case "twitter": return <TwitterIcon />;
    case "email": return <EmailIcon />;
    case "phone": return <PhoneIcon />;
    case "linkedin": return <LinkedinIcon />;
    default: return <EmailIcon />;
  }
};

export default mapSocialIcon;