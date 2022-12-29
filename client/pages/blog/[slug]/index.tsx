import dayjs from "dayjs";
import { 
  GetStaticPaths,
  GetStaticProps,
  NextPage
} from "next";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { ParsedUrlQuery } from "querystring";
import BackButton from "../../../components/back_button";
import { IconClock } from "../../../components/icon";
import { rawHtml } from "../../../helpers/utils/common";
import HOST from "../../../helpers/variables/host";
import { IArticle } from "../../../models/article";
import ArticleService from "../../../services/article";
import { Heading } from "@chakra-ui/react";

import styles from "./styles.module.scss";



type BlogDetailPageType = {
  article: IArticle;
}
const BlogDetailPage: NextPage<BlogDetailPageType> = ({ article }) => {

  // useScript(url: );

  return <>
    <Head>
      <title>{dayjs(article.createdAt).format("MM.DD.YYYY") + " | " + article.title}</title>
      <meta property="og:title" content={article.title} key="title" />
      <meta property="og:description" content={article.title} key="title" />
    </Head>

    <Script strategy="lazyOnload">hljs.highlightAll()</Script>

    <div className={styles.container}>
      <div className={styles.left}>
        <BackButton backLink="/blog" label="" />
      </div>
      <div className={styles.center}>
        <div className={styles.timeBlock}>
          <IconClock size={16} color="#757575" />
          {/* <span className={styles.labelTimeAgo}>{timeAgo(article.createdAt)}</span> */}
          <span className={styles.labelTimeAgo}>{dayjs(article.createdAt).format("MM.DD.YYYY")}</span>
        </div>
        <Heading as="h1" size="lg" mb={8}>{article.title}</Heading>
        {article.content.map(content => rawHtml(content))}

      </div>
      <div className={styles.right}>
        <div className={styles.listTagContainer}>
          {article.tags.map(tag =>
            <Link href={`/tag/${tag.key}`} key={tag._id}><span className={styles.tagItem}>#{tag.name}</span>
            </Link>)}
        </div>
      </div>
    </div>
  </>
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  if (HOST.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

  // Call an external API endpoint to get posts
  const res = await ArticleService.getAllArticles({
    page: 1,
    limit: 50
  });

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = res.docs.map((article) => ({
    params: { slug: article.slug },
  }))

  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug = "" } = context.params as IParams;
  try {

    const article = await ArticleService.getArticleDetail(slug);
    return {
      props: {
        article
      }
    }
  } catch (error) {
    console.error(error);
    return { props: { notFound: true } };
  }
}

export default BlogDetailPage;