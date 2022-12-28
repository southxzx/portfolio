import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { IconArrowBack } from "../icon";
import styles from "./styles.module.scss";

type BackButtonProps = {
  backLink: string;
  label?: string;
}

const BackButton: FC<BackButtonProps> = ({ backLink, label = "Back" }) => {

  const router = useRouter();
  const onClick = () => {
    router.push(backLink);
  }

  return <button className={styles.container} onClick={onClick}>
    <IconArrowBack />
    {label && <label className={styles.label}>
      &#x200B; &#x200B; Back
    </label>}
  </button>
}

export default BackButton;