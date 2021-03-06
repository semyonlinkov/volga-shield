import React from 'react';
import styles from './News.module.scss';
import IMGNews1 from '../../../img/news1.jpg';
import IMGNews2 from '../../../img/news2.jpg';
import IMGNews3 from '../../../img/news3.png';

const News = () => {
	return (
		<section className={styles.news_wrapper}>
			<div className={styles.news_title}>
				<h2>Последние новости</h2>
				<button className="btn">
					<span>Все новости</span>
				</button>
			</div>
			<div className={styles.news_cards_wrapper}>
				<div className={styles.news_card}>
					<div style={{ overflow: 'hidden' }}>
						<img src={IMGNews1} alt="news-1" />
					</div>
					<h2 className={styles.news_card_title}>«Волга-Щит»: всегда на страже безопасности</h2>
					<p className={styles.news_card_text_content}>
						На пульт «Волга-Щит» поступило сообщение о срабатывании сигнализации с охраняемого объекта (частный
						дом). Незамедлительно на место выехала Группа быстрого реагирования
					</p>
					<p className={styles.news_card_date}>Публикация от 12.05.2022г.</p>
				</div>
				<div className={styles.news_card}>
					<div style={{ overflow: 'hidden' }}>
						<img src={IMGNews2} alt="news-1" />
					</div>
					<h2 className={styles.news_card_title}>«Волга-Щит»: задержали нарушителя на месте преступления</h2>
					<p className={styles.news_card_text_content}>
						На пульт «Волга-Щит» поступил сигнал охранной сигнализации с одного из магазинов области.
						Незамедлительно на место выехала Группа быстрого реагирования «Волга-Щит». По прибытию на объект были
						обнаружены следы несанкционированного проникновения. Нарушитель был задержан ГБР «Волга-щит» и передан
						для дальнейшего разбирательства сотрудникам территориального отдела полиции. Похищенное изъято и
						передано собственнику. По данному факту возбужденно уголовное дело, ведется следствие.
					</p>
					<p className={styles.news_card_date}>Публикация от 12.05.2022г.</p>
				</div>
				<div className={styles.news_card}>
					<div style={{ overflow: 'hidden' }}>
						<img src={IMGNews3} alt="news-1" />
					</div>
					<h2 className={styles.news_card_title}>Волга-Щит – мы ближе, чем вы думаете</h2>
					<p className={styles.news_card_text_content}>
						На Пульт охраны «Волга-Щит» поступил сигнал тревоги. На одном из охраняемых объектов была попытка
						проникновения. Вовремя сработала охранная сигнализация. Своевременный, быстрый приезд сотрудников ГБР
						«Волга-Щит» пресёк планы злоумышленников, и они покинули место происшествия, не успев причинить ущерб.
						Собственник, своевременно позаботился об охране своего имуществ
					</p>
					<p className={styles.news_card_date}>Публикация от 12.05.2022г.</p>
				</div>
			</div>
		</section>
	);
};

export default News;
