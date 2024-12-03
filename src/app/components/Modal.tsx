import styles from './Modal.module.css';
import { BsXLg } from "react-icons/bs";

export default function Modal({ isOpen, onClose, modalName, children }: { isOpen: boolean, onClose: () => void, modalName: string, children: React.ReactNode }) {
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className={styles.modal}>
            <div onClick={(e) => e.stopPropagation()} className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>{modalName}</h2>
                    <button onClick={onClose} className='iconButton'><BsXLg size={32} /></button>
                </div>
                {children}
            </div>
        </div>
    );
}
