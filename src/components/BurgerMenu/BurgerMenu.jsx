import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';

const BurgerMenu = ({ active, setActive }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<section className={active ? `${styles.menu} ${styles.active}` : styles.menu} onClick={() => setActive(false)}>
			<div
				className={styles.menu__content}
				// onClick={(e) => e.stopPropagation()}
			>
				<ul>
					<li>
						<Link to={'/'}>Главная</Link>
					</li>
					<li>
						<Link to={'/about'}>О Нас</Link>
					</li>
					<li
						onClick={(e) => {
							e.stopPropagation();
							setIsOpen((prev) => !prev);
						}}>
						<p style={{ color: 'white' }}>Обучение {isOpen ? '⮝' : '⮟'}</p>
					</li>
					{isOpen && (
						<>
							<li style={{ fontSize: '0.8rem', paddingLeft: '30px' }}>
								<Link to={'/docs'} onClick={() => setIsOpen(false)}>
									Документы для поступления
								</Link>
							</li>
							<li style={{ fontSize: '0.8rem', paddingLeft: '30px' }}>
								<Link to={'/exams'} onClick={() => setIsOpen(false)}>
									Порядок сдачи экзамена
								</Link>
							</li>
							<li style={{ fontSize: '0.8rem', paddingLeft: '30px' }}>
								<Link to={'/fire-safety'} onClick={() => setIsOpen(false)}>
									Пожарно-технический минимум
								</Link>
							</li>
							<li style={{ fontSize: '0.8rem', paddingLeft: '30px' }}>
								<Link to={'/crew-training'} onClick={() => setIsOpen(false)}>
									Обучение плавсоства
								</Link>
							</li>
						</>
					)}
					<li>
						<Link to={'/prices'}>Цены</Link>
					</li>
					<li>
						<Link to={'/contacts'}>Контакты</Link>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default BurgerMenu;
