import styles from './ProfileDescriptor.module.css';

export default function ProfileDescriptor(props: { name: string, centered: boolean }) {
    return (
        <div className={props.centered ? styles.profileDescriptorCentered : styles.profileDescriptor}>
            <div className="profile-picture"></div>
            <p>{props.name}</p>
        </div>
    );
}