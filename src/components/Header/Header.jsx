import React from 'react';
import styles from './Header.module.scss';
import { Dropdown, Menu } from 'antd';
import IMGChevron from './../../img/chevron20.png';
import IMGBurger from './../../img/burger60.png';

const Header = ({ setActive }) => {
	return (
		<header className={styles.header_wrapper}>
			<span className={styles.logo}>ВОЛГА-ЩИТ</span>
			<img className={styles.burger} src={IMGBurger} alt="burger_menu" onClick={() => setActive((prev) => !prev)} />
			<ul className={styles.links}>
				<Dropdown
					placement="bottom"
					overlay={
						<Menu
							items={[
								{
									label: <a to="/docs">Руководство</a>,
									key: '0',
								},
								{
									label: <a to="/exams">Вакансии</a>,
									key: '1',
								},
								{
									label: <a to="/fire-safety">Клиенты и партнеры</a>,
									key: '2',
								},
							]}
						/>
					}
					trigger={['click', 'hover']}>
					<li className={styles.link}>
						О КОМПАНИИ <img className={styles.chevron} src={IMGChevron} alt="chevron" />
					</li>
				</Dropdown>
				<Dropdown
					placement="bottom"
					overlay={
						<Menu
							items={[
								{
									label: <a to="/docs">Руководство</a>,
									key: '0',
								},
								{
									label: <a to="/exams">Вакансии</a>,
									key: '1',
								},
								{
									label: <a to="/fire-safety">Клиенты и партнеры</a>,
									key: '2',
								},
							]}
						/>
					}
					trigger={['click', 'hover']}>
					<li className={styles.link}>
						УСЛУГИ <img className={styles.chevron} src={IMGChevron} alt="chevron" />
					</li>
				</Dropdown>
				<Dropdown
					placement="bottom"
					overlay={
						<Menu
							items={[
								{
									label: <a to="/docs">Руководство</a>,
									key: '0',
								},
								{
									label: <a to="/exams">Вакансии</a>,
									key: '1',
								},
								{
									label: <a to="/fire-safety">Клиенты и партнеры</a>,
									key: '2',
								},
							]}
						/>
					}
					trigger={['click', 'hover']}>
					<li className={styles.link}>
						МЕДИА <img className={styles.chevron} src={IMGChevron} alt="chevron" />
					</li>
				</Dropdown>
				<Dropdown
					placement="bottom"
					overlay={
						<Menu
							items={[
								{
									label: <a to="/docs">Руководство</a>,
									key: '0',
								},
								{
									label: <a to="/exams">Вакансии</a>,
									key: '1',
								},
								{
									label: <a to="/fire-safety">Клиенты и партнеры</a>,
									key: '2',
								},
							]}
						/>
					}
					trigger={['click', 'hover']}>
					<li className={styles.link}>
						КОНТАКТЫ <img className={styles.chevron} src={IMGChevron} alt="chevron" />
					</li>
				</Dropdown>
			</ul>
		</header>
	);
};

export default Header;
