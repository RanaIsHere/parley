import styles from './MessageItem.module.css';
import ProfileDescriptor from './ProfileDescriptor';

export default function MessageItem(props: { message: string }) {
    return (
        <div className={styles.messageItem}>
            <ProfileDescriptor name='Username' centered={true} />
            <p>{props.message}</p>
        </div>
    );
}