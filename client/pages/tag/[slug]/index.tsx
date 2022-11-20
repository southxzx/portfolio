import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { IArticle, ITag } from "@Models/article";
import styles from "./styles.module.scss";
import ArticleService from "services/article";
import BackButton from "components/back_button";
import ArticleCardHorizontal from "components/article_card/horizontal";
import HOST from "helpers/variables/host";
import TagService from "services/tag";
import { IReponseList } from "@Models/common";

interface TagDetailProps {
  tagResponses: IReponseList<IArticle>,
  tagDetail: ITag
}
const TagDetail: NextPage<TagDetailProps> = ({
  tagResponses,
  tagDetail
}) => {

  const [articles, setArticles] = useState<IArticle[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isNextPage, setIsNextPage] = useState<boolean>(true);
  const [total, setTotal] = useState<number>(0);

  const limit = 10;

  // useEffect(() => {
  //   getAllArticles();
  // }, [])

  const getAllArticles = async () => {
    const data = await ArticleService.getAllArticles({ page, limit });
    const docs: IArticle[] = data.docs;
    const totalArticle: number = data.total;

    if (total === 0) {
      setTotal(totalArticle);
    }
    setArticles(docs);

    if (total >= page * limit) {
      setIsNextPage(false);
    }
  }

  return <div className={styles.container}>
    <div className={styles.leftBlock}>
      <BackButton backLink="/" label="" />
      <h1 className={styles.titleAllPosts}>#{tagDetail.name}</h1>
      <p className={styles.totalCountLabel}>Total: {total}</p>
    </div>
    <div className={styles.rightBlock}>
      <div className={styles.listicles}>
        {tagResponses.docs.map(blog => <div className={styles.articleCard}>
          <ArticleCardHorizontal blog={blog} key={blog._id} />
        </div>)}
      </div>
    </div>
  </div>
};

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
  const res = await TagService.getAllTags({
    page: 1,
    limit: 50
  });

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = res.docs.map((tag) => ({
    params: { slug: tag.key },
  }))

  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug = "" } = context.params as any;
  try {

    const tagResponses = await ArticleService.getAllArticles({
      tag: slug
    });
    const tagDetail = await TagService.getTagDetail({ tag: slug });
    return {
      props: {
        tagResponses,
        tagDetail
      }
    }
  } catch (error) {
    console.error(error);
    return { props: { notFound: true } };
  }
}
export default TagDetail;