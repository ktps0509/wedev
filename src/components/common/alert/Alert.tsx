import React from 'react'
import Backdrop from '../modal/Backdrop'
import styles from './Alert.module.scss'

function Alert() {
	return (
		<>
			<div className={styles['modal']}>
				<h1>Are you sure?</h1>

				<button className={styles.btn}>
					Cancel
				</button>

				<button className={styles.btn}>
					Confirm
				</button>
			</div>
			<Backdrop />
		</>
	)
}

export default Alert
