import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
	return (
		<div {...props}>
			<div className={styles.container}>
				<div className={styles.paragraph}>
				
				</div>
				<div className={styles.link}>
					<a href="#" className={styles.linkCursor} target="_blank">
						Terms of use
					</a>
				</div>
				<div>
					<a href="#" className={styles.linkCursor} target="_blank">
						Privacy Policy
					</a>
				</div>
			</div>
		</div>
	);
};
