import { GetStaticProps, NextPage } from "next";
import GeneralServices from "services/general";
// import isEmpty from "lodash/isEmpty";
import { IAboutData } from "@Models/general";

import styles from "./styles.module.scss";
import Button from "@Components/button";
import Link from "next/link";

interface AboutPageProps {
  data: IAboutData
}
const AboutPage: NextPage<AboutPageProps> = ({ data }) => {
  const cv = data.cv;
  return <div className={styles.container}>

    <div className={styles.contentBlock}>
      <h2>{cv.about.title}</h2>
      {
        cv.about.content.map(e => <p key={e}>{cv.about.content}</p>)
      }
    </div>

    <div className={styles.contentBlock}>
      <h2>{cv.work_exp.title}</h2>
      {
        cv.work_exp.content.map(e => <div key={e.title}>
          <p>{e.time}</p>
          <p><strong>{e.title}</strong></p>
          <a href={e.subtitle_link} target="blank">{e.subtitle}</a>
        </div>)
      }
    </div>

    <div className={styles.contentBlock}>
      <h2>{cv.education.title}</h2>
      {
        cv.education.content.map(e => <div key={e.title}>
          <p>{e.time}</p>
          <p><strong>{e.title}</strong></p>
          <a href={e.subtitle_link} target="blank">{e.subtitle}</a>
        </div>)
      }
    </div>

    <Button>
      <Link href="/resume">See my full resume</Link>
    </Button>

  </div>
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const aboutData = await GeneralServices.getAboutData();

    return {
      props: {
        data: aboutData?.data || {}
      }
    }
  } catch (error) {
    return {
      props: {
        data: {}
      }
    }
  }
};

export default AboutPage;