import Link from "next/link";
import { useRouter } from "next/router";
import cn from 'classnames';

import styles from "./styles.module.scss";

export default function NavBar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  function getHighlightClassname(type: string) {
    return cn({
      [styles.hightlightedItemNav]: type === currentRoute
    });
  }
  return (
    <nav>
      <div className={styles.navList}>
        <ul>
          <li className={getHighlightClassname("/")}><Link href="/">Home</Link></li>
          <li className={getHighlightClassname("/blog")}><Link href="/blog">Blog</Link></li>
          <li className={getHighlightClassname("/about")}><Link href="/about">About</Link></li>
          {/* <li className={getHighlightClassname("/contact")}><Link href="/contact">Contact</Link></li> */}
        </ul>
      </div>
      <div className={styles.rightNav}>
        {/* <IconMoon /> */}
        <img src="/images/southxzx_logo.png" width={100} style={{ objectFit: "contain" }} />
      </div>
    </nav>
  )
}