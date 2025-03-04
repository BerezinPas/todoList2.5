import styles from './controlBtns.module.scss';

export const ControlBtns = ({ handleRedact, handleDelete }) => {
	return (
		<>
			<button onClick={() => handleRedact()} className={styles.editBtn}>
				<svg
					width="21"
					height="17"
					viewBox="0 0 21 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10.0154 16.3333V14.0743L15.9134 8.44L18.2782 10.699L12.3802 16.3333H10.0154ZM0 11.018V8.89181H7.78979V11.018H0ZM19.0572 9.95488L16.6924 7.69585L17.4992 6.92512C17.7032 6.73022 17.9629 6.63277 18.2782 6.63277C18.5935 6.63277 18.8532 6.73022 19.0572 6.92512L19.864 7.69585C20.068 7.89075 20.17 8.1388 20.17 8.44C20.17 8.74121 20.068 8.98926 19.864 9.18415L19.0572 9.95488ZM0 6.76566V4.63951H12.2411V6.76566H0ZM0 2.51336V0.387207H12.2411V2.51336H0Z"
						fill="#DFBD43"
					/>
				</svg>
			</button>
			<button onClick={handleDelete} className={styles.deleteBtn}>
				<svg
					width="12"
					height="17"
					viewBox="0 0 12 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 1.13843H9L8.14286 0.252533H3.85714L3 1.13843H0V2.91022H12M0.857143 14.4269C0.857143 14.8968 1.03775 15.3474 1.35925 15.6797C1.68074 16.012 2.11677 16.1987 2.57143 16.1987H9.42857C9.88323 16.1987 10.3193 16.012 10.6408 15.6797C10.9622 15.3474 11.1429 14.8968 11.1429 14.4269V3.79612H0.857143V14.4269Z"
						fill="#DFBD43"
					/>
				</svg>
			</button>
		</>
	);
};
