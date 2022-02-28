import classNames from 'classnames'
import React from 'react'
import styles from './Button.module.scss'


function Button(props: React.HTMLAttributes<HTMLButtonElement>): JSX.Element {
	return (
		<button className={classNames(styles['btn'])} onClick={props.onClick}>
			{props.children}
			{props.title}
		</button>
	)
}

export default Button