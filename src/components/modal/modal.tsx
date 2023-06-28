import { FC, useEffect } from "react";
import styles from "./modal.module.css";
import ModalOverlay from "./modal-overlay";
import ReactPortal from "./modal-portal/react-portal";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

type ModalProps = {
  children: React.ReactNode;
  closeModal: () => void;
};

const Modal: FC<ModalProps> = ({ children, closeModal }) => {
  const handleKeyDown = (e: globalThis.KeyboardEvent): void => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ReactPortal>
      <div id="modal" className={styles.modal}>
        <div id="modal-close" className={styles.closeIcon} onClick={closeModal}>
          <CloseIcon type="primary" />
        </div>
        {children}
      </div>
      <ModalOverlay onCloseClick={closeModal} />
    </ReactPortal>
  );
};

export default Modal;
