import { FC } from "react";
import styles from "./modal.module.css";

type ModalOverlayProps = {
  onCloseClick: () => void;
};

const ModalOverlay: FC<ModalOverlayProps> = ({ onCloseClick }) => {
  return <div className={styles.overlay} onClick={onCloseClick}></div>;
};

export default ModalOverlay;
