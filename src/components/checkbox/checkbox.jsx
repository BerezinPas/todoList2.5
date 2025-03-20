import styles from './checkbox.module.scss';

export const Checkbox = ({ checked, setChecked, icon, className }) => {
	return (
		<label className={`${styles.checkbox}`}>
			<input
				type="checkbox"
				checked={checked}
				onChange={() => setChecked()}
				className={styles.checkboxInput}
			/>
			<div className={` ${className} ${styles.checkboxFake}`}>{icon}</div>
		</label>
	);
};
