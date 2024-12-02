'use client'

import styles from './page.module.css';
import { logout } from './actions';
import MessageWindow from '@/app/components/MessageWindow';
import ProfileDescriptor from '../components/ProfileDescriptor';

export default function Chat() {
    return (
        <div className={styles.chat}>
            <section className={styles.contacts}>
                <ul>
                    <li>
                        <p>John Doe</p>
                        <p>Online</p>
                    </li>
                    <li>
                        <p>Smith Doe</p>
                        <p>Online</p>
                    </li>
                    <li>
                        <p>Lena Doe</p>
                        <p>Online</p>
                    </li>
                    <li>
                        <p>Mark Doe</p>
                        <p>Online</p>
                    </li>
                    <li>
                        <p>Jon Doe</p>
                        <p>Online</p>
                    </li>
                    <li>
                        <p>Jane Doe</p>
                        <p>Online</p>
                    </li>
                </ul>

                <aside className='profile-info'>
                    <ProfileDescriptor centered={false} />

                    <form action={logout}><button type='submit'>Logout</button></form>
                </aside>
            </section>

            <MessageWindow />
        </div>
    );
}