import React from 'react';
import styles from './Header.module.scss';
import { Dropdown, Menu } from 'antd';
import IMGChevron from './../../img/chevron20.png';
import IMGBurger from './../../img/burger60.png';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ setActive, style = {} }) => {
	const navigate = useNavigate();

	return (
		<header className={styles.header_wrapper} style={style}>
			<span className={styles.logo} onClick={() => navigate('/')}>
				ВОЛГА-ЩИТ
			</span>
			<img className={styles.burger} src={IMGBurger} alt="burger_menu" onClick={() => setActive((prev) => !prev)} />
			<ul className={styles.links}>
				<Dropdown
					placement="bottom"
					overlay={
						<Menu
							items={[
								{
									label: <Link to="/about-us">О нас</Link>,
									key: '0',
								},
								{
									label: <Link to="/vacancies">Вакансии</Link>,
									key: '1',
								},
								{
									label: <Link to="/clients-and-partners">Клиенты и партнеры</Link>,
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
									label: <Link to="/docs">Охрана объектов</Link>,
									key: '0',
								},
								{
									label: <Link to="/exams">Личная охрана</Link>,
									key: '1',
								},
								{
									label: <Link to="/fire-safety">Охрана мероприятий</Link>,
									key: '2',
								},
								{
									label: <Link to="/fire-safety">Служба ПЦО</Link>,
									key: '3',
								},
								{
									label: <Link to="/fire-safety">Мониторинг автотранспортных средств</Link>,
									key: '4',
								},
								{
									label: <Link to="/fire-safety">Контрольная панель</Link>,
									key: '5',
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
									label: <Link to="/exams">Рекомендации</Link>,
									key: '0',
								},
								{
									label: <Link to="/fire-safety">Документы для договора</Link>,
									key: '1',
								},
								{
									label: <Link to="/fire-safety">Автоматическая проверка состояния охраняемого объекта</Link>,
									key: '2',
								},
							]}
						/>
					}
					trigger={['click', 'hover']}>
					<li className={styles.link}>
						КЛИЕНТАМ <img className={styles.chevron} src={IMGChevron} alt="chevron" />
					</li>
				</Dropdown>
				<Dropdown
					placement="bottom"
					overlay={
						<Menu
							items={[
								{
									label: <Link to="/news">Новости</Link>,
									key: '0',
								},
								{
									label: <Link to="/exams">Галерея</Link>,
									key: '1',
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
									label: <Link to="/docs">Главный офис</Link>,
									key: '0',
								},
								{
									label: <Link to="/exams">Филиалы</Link>,
									key: '1',
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
