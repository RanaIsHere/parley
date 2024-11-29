import Image from "next/image";
import styles from "./page.module.css";

export default function Landing() {
	return (
		<div className={styles.page}>
			<nav className={styles.nav}>
				<p>Parley</p>
				<button>Login</button>
			</nav>

			<main className={styles.main}>
				<aside>
					<h1>Parley</h1>
					<h3>Real-time chat application</h3>
					<p>For everyday use and everyone</p>
					<button className={styles.button}>Get started</button>
				</aside>

				<div className={styles.image}>
					<Image alt="Parley" src="/globe.svg" width={500} height={500} priority />
				</div>
			</main>
		</div>
	);
}
