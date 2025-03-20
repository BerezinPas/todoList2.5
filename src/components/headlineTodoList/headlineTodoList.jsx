import { useStateManager } from '../../stateManager';
import { Checkbox } from '../checkbox/checkbox';
import styles from './headlineTodoList.module.scss';

export const HeadlineTodoList = () => {
	const {
		state: { shouldSort },
		updateState,
	} = useStateManager();

	return (
		<h2 className={styles.title}>
			Todo list
			<Checkbox
				className={styles.sortCheckbox}
				icon="⇅"
				checked={shouldSort}
				setChecked={() => {
					updateState('shouldSort', !shouldSort);
				}}
			/>
		</h2>
	);
};
