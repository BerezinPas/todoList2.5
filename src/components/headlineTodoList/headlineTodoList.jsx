import { Checkbox } from '../checkbox/checkbox';
import styles from './headlineTodoList.module.scss';

export const HeadlineTodoList = ({ handlerSortBtn, checked }) => {
	return (
		<h2 className={styles.title}>
			Todo list
			<Checkbox
				className={styles.sortCheckbox}
				icon="⇅"
				checked={checked}
				setChecked={() => {
					handlerSortBtn();
				}}
			/>
		</h2>
	);
};
