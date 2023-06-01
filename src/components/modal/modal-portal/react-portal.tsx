import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import styles from '../modal.module.css'

const portal = document.getElementById('portal') as HTMLDivElement;

type ReactPortalProps = {
    children: React.ReactNode
}

const ReactPortal:FC<ReactPortalProps> = ({children}) =>
  ReactDOM.createPortal(
    <div className={styles.portal}>
      {children}
    </div>,
    portal
  );


export default ReactPortal;
