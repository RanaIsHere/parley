'use client'

import styles from './page.module.css';
import { useUser } from '../providers/UserContext';
import { useState, useActionState } from 'react';
import { logout, addContacts } from './actions';
import MessageWindow from '@/app/components/MessageWindow';
import UnselectedChat from '../components/UnselectedChat';
import ProfileDescriptor from '../components/ProfileDescriptor';
import ContactItem from '../components/ContactItem';
import Modal from '@/app/components/Modal';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FaUserPlus, FaCog, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function Chat() {
    const { user } = useUser();
    const [state, action, pending] = useActionState(addContacts, { errors: { email: [] } });
    const [selectedContact, setSelectedContact] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!user) return null;

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleContactClick = (contact) => {
        setSelectedContact(contact);
    };

    return (
        <div className={styles.chat}>
            <Modal modalName='Add Contact' isOpen={isModalOpen} onClose={toggleModal}>
                <form className={styles.form} action={action}>
                    <label htmlFor="email">Email</label>
                    {state?.errors?.email && <p>{state.errors.email}</p>}
                    <input type="email" id="email" name="email" placeholder="email@email.com" />
                    <button disabled={pending} className='button' type="submit">Add</button>
                </form>
            </Modal>

            <section className={styles.contacts}>
                <div className="contact-list" role='list'>
                    {user?.contacts.map((contact) => (
                        <ContactItem key={contact._id} contact={contact} onSelect={handleContactClick} />
                    ))}
                </div>

                <aside className={styles.profileInfo}>
                    <ProfileDescriptor name={user?.username} centered={true} />

                    <div className={styles.profileActions}>
                        <button className='iconButton'><FaVolumeMute size={32} /></button>

                        <button onClick={toggleModal} className='iconButton'><FaUserPlus size={32} /></button>

                        <button onClick={logout} className='iconButton' type='submit'><FaCog size={32} /></button>
                    </div>
                </aside>
            </section>

            {selectedContact ? <MessageWindow username={selectedContact.username} /> : <UnselectedChat />}
        </div >
    );
}