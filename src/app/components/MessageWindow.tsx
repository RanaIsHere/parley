import { sendMessage } from '@/app/chat/actions';
import MessageItem from './MessageItem';

export default function MessageWindow() {
    return (
        <main className='message-window'>
            <div className="actions">

            </div>

            <div className="messages">
                <MessageItem></MessageItem>
            </div>

            <form action={sendMessage} className="message-form">
                <input type="text" name="message" placeholder="Type your message..." />
                <button type="submit">Send</button>
            </form>
        </main>
    );
}