'use client';

import Link from 'next/link';
import styles from './page.module.css';
import { login } from './actions';
import { useActionState } from 'react';

export default function Login() {
    const [state, action, pending] = useActionState(login, null);

    return (
        <div className={styles.page}>
            <Link href={"/"}><button className='buttonGlobal'>Back</button></Link>

            <section className={styles.section}>
                <aside>
                    <h1 className={styles.sectionTitle}>Login</h1>
                    <p>to Parley</p>
                </aside>

                <form action={action} className={styles.form}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="email@email.com" />
                    {state?.errors?.email && <p className={styles.error}>{state.errors.email}</p>}

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                    {state?.errors?.password && <p className={styles.error}>{state.errors.password}</p>}


                    <button disabled={pending} className='button' type="submit">Login</button>
                </form>

                <Link href={"/register"}><button className='button'>Register</button></Link>
            </section>
        </div >
    );
}