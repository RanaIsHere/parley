'use client'

import './page.module.css';
import { logout } from './actions';

export default function Chat() {
    return (
        <div>
            <form action={logout}><button type='submit'>Logout</button></form>
        </div>
    );
}