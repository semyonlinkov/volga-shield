import React from 'react';
import styles from './Header.module.scss';
import BigWhiteLogo from '../../img/BigWhiteLogo.png';
import { Dropdown, Menu } from 'antd';
import IMGChevron from './../../img/chevron20.png';

const Header = () => {
	return (
		<>
			<div className={styles.header_wrapper}>
				<div className={styles.blur}>
					<div className={styles.header}>
						<span className={styles.logo}>ВОЛГА-ЩИТ</span>
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
					</div>
					<div className={styles.main_info}>
						<img className={styles.logo_img} src={BigWhiteLogo} alt="logo" />
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
