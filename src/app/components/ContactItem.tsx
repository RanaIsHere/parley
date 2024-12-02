import styles from './ContactItem.module.css';

export default function ContactItem() {
    return (
        <div role='listitem' className={styles.contactItem}>
            <p>User Name</p>
            <p>Status</p>
        </div>
    );
}