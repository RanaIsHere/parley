import styles from './MessageWindow.module.css';
import { sendMessage } from '@/app/chat/actions';
import MessageItem from './MessageItem';
import { FaBars, FaAngleRight } from "react-icons/fa";
import ProfileDescriptor from './ProfileDescriptor';

export default function MessageWindow() {
    return (
        <main className={styles.messageWindow}>
            <div className={styles.actions}>
                <ProfileDescriptor centered={false} />
                <button className='iconButton'><FaBars size={32} /></button>
            </div>

            <div className={styles.messages}>
                <MessageItem message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam, tempore soluta non dicta laudantium id. Amet laboriosam nisi reprehenderit modi, aliquid repudiandae, tempora quam, nihil fugiat quas animi maxime.' />
                <MessageItem message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam, tempore soluta non dicta laudantium id. Amet laboriosam nisi reprehenderit modi, aliquid repudiandae, tempora quam, nihil fugiat quas animi maxime.' />
                <MessageItem message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam, tempore soluta non dicta laudantium id. Amet laboriosam nisi reprehenderit modi, aliquid repudiandae, tempora quam, nihil fugiat quas animi maxime.' />
            </div>

            <form action={sendMessage} className={styles.messageForm}>
                <input type="text" name="message" placeholder="Type your message..." />
                <button className='iconButton' type="submit"><FaAngleRight size={32} /></button>
            </form>
        </main>
    );
}