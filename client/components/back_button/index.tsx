import Link from "next/link";
import { FC } from "react";
import { IconArrowBack } from "../icon";
import styles from "./styles.module.scss";

type BackButtonProps = {
  backLink: string;
  label?: string;
}

const BackButton: FC<BackButtonProps> = ({ backLink, label = "Back" }) => {

  return <button className={styles.container}>
    <Link href={backLink}><div>
      <IconArrowBack /></div></Link>
    {label && <label className={styles.label}>
      <Link href={backLink}>
        &#x200B; &#x200B; Back
      </Link>
    </label>}
  </button>
}

export default BackButton;