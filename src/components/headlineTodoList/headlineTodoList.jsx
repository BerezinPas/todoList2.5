import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from '../checkbox/checkbox';
import styles from './headlineTodoList.module.scss';
import { selectShouldSort } from '../../selectors';
import { setShouldSort } from '../../actions/optionsActions';

export const HeadlineTodoList = () => {
	const shouldSort = useSelector(selectShouldSort);
	const dispatch = useDispatch();

	return (
		<h2 className={styles.title}>
			Todo list
			<Checkbox
				className={styles.sortCheckbox}
				icon="⇅"
				checked={shouldSort}
				setChecked={() => {
					dispatch(setShouldSort(!shouldSort));
				}}
			/>
		</h2>
	);
};
