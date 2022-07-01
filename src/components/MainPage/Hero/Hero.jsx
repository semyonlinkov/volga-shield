import React from 'react';
import styles from './Hero.module.scss';
import BigWhiteLogo from './../../../img/BigWhiteLogo.png';

const Hero = () => {
	return (
		<section className={styles.hero_wrapper}>
			<div className={styles.hero_info}>
				<img className={styles.logo_img} src={BigWhiteLogo} alt="logo" />
				<div className={styles.info}>
					<h1>20 лет на защите ваших интересов</h1>
					<br />
					<p>
						Охрана – наша основная задача. Мы считаем приоритетом создание безопасной системы контроля, которая
						работает эффективно и слаженно, является доступной в эксплуатации. Ответственное отношение наших
						специалистов позволяет создавать эффективные решения при принятии нового охраняемого объекта с
						использованием всех мер обеспечения безопасности.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
