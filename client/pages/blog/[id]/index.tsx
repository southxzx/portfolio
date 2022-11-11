import { NextPage } from "next";
import Link from "next/link";
import { IconArrowBack } from "../../../components/icon";
import { mock_blog } from "../mock_blog";
import styles from "./styles.module.scss";

const BlogDetailPage: NextPage = () => {

  return <div className={styles.container}>
    <div className={styles.left}>
      <button>
        <IconArrowBack />
        <Link href="/blog">
          &#x200B; &#x200B; Back
        </Link>
      </button>
    </div>
    <div className={styles.center}>
      <h1>How Going Back to Basics Made Me a Better Data Scientist</h1>
      {mock_blog.map(blog => <p>{blog}</p>)}
    </div>
    <div className={styles.right}>
      {/* <p>Contents</p> */}
    </div>
  </div>
}

export default BlogDetailPage;