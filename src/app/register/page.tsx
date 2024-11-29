import Link from 'next/link';
import styles from './page.module.css';

export default function Register() {
    return (
        <div className={styles.page}>
            <Link href={"/"}><button className={styles.buttonGlobal}>Back</button></Link>

            <section className={styles.section}>
                <aside>
                    <h1 className={styles.sectionTitle}>Register</h1>
                    <p>to Parley</p>
                </aside>

                <form action="" method="post" className={styles.form}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />

                    <button className={styles.button} type="submit">Register</button>
                </form>

                <Link href={"/login"}><button className={styles.button}>Login</button></Link>
            </section>
        </div >
    );
}