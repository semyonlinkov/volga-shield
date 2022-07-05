import React from 'react';
import styles from './Hero.module.scss';
import BigWhiteLogo from './../../../img/BigWhiteLogo.png';
import IMGFb from './../../../img/fb50.png';
import IMGPhone from './../../../img/phone25.png';
import IMGWhatsup from './../../../img/whatsapp50.png';
import IMGVk from './../../../img/vk50.png';

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
			<div className={styles.contacts}>
				<div className={styles.phones}>
					<img src={IMGPhone} alt="phone" />
					<p>
						<span>8 800 5 503 000</span> / <span>8 8512 503 000</span>
					</p>
				</div>
				<div className={styles.socials}>
					<img src={IMGFb} alt="facebook" />
					<img src={IMGWhatsup} alt="whatsup" />
					<img src={IMGVk} alt="vk" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
