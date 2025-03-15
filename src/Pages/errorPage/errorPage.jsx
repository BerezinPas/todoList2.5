import { Link } from 'react-router-dom';
import styles from './errorPage.module.scss';

export const ErrorPage = (params) => {
	return (
		<div className={styles.text}>
			<span className={styles.number}>404</span>
			<p>Page not found</p>
			<Link className="link" to="/">
				Go home
			</Link>
		</div>
	);
};
