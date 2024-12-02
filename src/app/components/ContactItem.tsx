import styles from './ContactItem.module.css';

export default function ContactItem({ onSelect, contact }: { onSelect: (contact: { username: string, email: string }) => void, contact: { username: string, email: string } }) {
    return (
        <div onClick={() => onSelect(contact)} role='listitem' className={styles.contactItem}>
            <p>{contact?.username}</p>
            <p>Status</p>
        </div>
    );
}