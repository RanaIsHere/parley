import styles from './UnselectedChat.module.css';

export default function UnselectedChat() {
    return (
        <div className={styles.unselectedChat}>
            <p>Parley</p>
            <p>Welcome to Parley.</p>
            <p>Add a contact to start a conversation.</p>
        </div>
    );
}