import Link from "next/link";
import { FC } from "react";
import { IconArrowBack } from "../icon";
import styles from "./styles.module.scss";

type BackButtonProps = {
  backLink: string
}

const BackButton: FC<BackButtonProps> = ({ backLink }) => {
  return <button className={styles.container}>
    <IconArrowBack />
    <Link href={backLink}>
      &#x200B; &#x200B; Back
    </Link>
  </button>
}

export default BackButton;