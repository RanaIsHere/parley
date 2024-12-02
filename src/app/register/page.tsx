'use client';

import Link from 'next/link';
import styles from './page.module.css';
import { register } from './actions';
import { useActionState } from 'react';

export default function Register() {
    const [state, action, pending] = useActionState(register, null);

    return (
        <div className={styles.page}>
            <Link href={"/"}><button className='buttonGlobal'>Back</button></Link>

            <section className={styles.section}>
                <aside>
                    <h1 className={styles.sectionTitle}>Register</h1>
                    <p>to Parley</p>
                </aside>

                <form action={action} className={styles.form}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="email@email.com" />
                    {state?.errors?.email && <p className={styles.error}>{state.errors.email}</p>}

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />

                    {
                        state?.errors?.password &&
                        (
                            <div className={styles.error}>
                                <p><b>Password must:</b></p>
                                <ul>
                                    {state.errors.password.map((error: string) => (<li key={error}>{error}</li>))}
                                </ul>
                            </div>
                        )
                    }
                    <button disabled={pending} className='button' type="submit">{pending ? "Registering..." : "Register"}</button>

                </form>

                <Link href={"/login"}><button className='button'>Login</button></Link>
            </section>
        </div >
    );
}
