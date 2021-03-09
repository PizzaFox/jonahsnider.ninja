import {FC} from 'react';
import Text from './text';
import styles from './header.module.scss';

export interface Props {
	title?: string;
	subtitle?: string;
}

const Header: FC<Props> = props => (
	<header id='header' className={styles.header}>
		{props.title && (
			<Text kind='h1'>
				<span className={styles.underline}>{props.title}</span>
			</Text>
		)}
		{props.subtitle && (
			<Text kind='h2' as='p'>
				<div className={styles.subtitle}>{props.subtitle}</div>
			</Text>
		)}
	</header>
);

export default Header;
