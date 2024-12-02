'use client'

import styles from './page.module.css';
import { logout } from './actions';
import MessageWindow from '@/app/components/MessageWindow';
import UnselectedChat from '../components/UnselectedChat';
import ProfileDescriptor from '../components/ProfileDescriptor';
import ContactItem from '../components/ContactItem';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FaUserPlus, FaCog, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function Chat() {
    return (
        <div className={styles.chat}>
            <section className={styles.contacts}>
                <div className="contact-list" role='list'>
                    <ContactItem />
                </div>

                <aside className={styles.profileInfo}>
                    <ProfileDescriptor centered={true} />

                    <div className={styles.profileActions}>
                        <button className='iconButton'><FaVolumeMute size={32} /></button>

                        <button className='iconButton'><FaUserPlus size={32} /></button>

                        <button onClick={logout} className='iconButton' type='submit'><FaCog size={32} /></button>
                    </div>
                </aside>
            </section>

            <UnselectedChat />
            {/* <MessageWindow /> */}
        </div >
    );
}