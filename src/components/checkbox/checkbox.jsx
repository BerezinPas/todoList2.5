import styles from './checkbox.module.scss';

export const Checkbox = ({ checked, setChecked, icon, className, text }) => {
	return (
		<label className={`${styles.checkbox}`} onClick={() => setChecked()}>
			<input
				type="checkbox"
				value={true}
				checked={checked}
				onChange={() => setChecked()}
				className={styles.checkboxInput}
			/>
			<div className={` ${className} ${styles.checkboxFake}`}>{icon}</div>
			{text}
		</label>
	);
};
