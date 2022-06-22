import React from 'react';
import styles from './Header.module.scss';
import BigWhiteLogo from '../img/BigWhiteLogo.png';

const Header = () => {
	return (
		<>
			<div className={styles.header_wrapper}>
				<div className={styles.blur}>
					<div className={styles.header}>
						<span className={styles.logo}>ВОЛГА-ЩИТ</span>
						<ul className={styles.links}>
							<li>О КОМПАНИИ</li>
							<li>УСЛУГИ</li>
							<li>НОВОСТИ</li>
							<li>КОНТАКТЫ</li>
						</ul>
					</div>
					<div className={styles.main_info}>
						<div className={styles.logo_img}>
							<img src={BigWhiteLogo} alt="" />
						</div>
						<div className={styles.info}>
							<h1>20 лет на защите ваших интересов</h1>
							<p>
								Охрана – наша основная задача. Мы считаем приоритетом создание безопасной системы контроля,
								которая работает эффективно и слаженно, является доступной в эксплуатации. Ответственное
								отношение наших специалистов позволяет создавать эффективные решения при принятии нового
								охраняемого объекта с использованием всех мер обеспечения безопасности.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
