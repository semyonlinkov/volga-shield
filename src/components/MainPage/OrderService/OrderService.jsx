import React from 'react';
import styles from './OrderService.module.scss';
import { Button, Input, Select } from 'antd';

import TextArea from 'antd/lib/input/TextArea';
import { Link } from 'react-router-dom';

const { Option } = Select;

const OrderService = () => {
	return (
		<div className={styles.orderService_wrapper}>
			<h2 className={styles.title}>Форма обратной связи</h2>
			<div className={styles.form_wrapper}>
				<div className={styles.form}>
					<div className={styles.form_item1}>
						<Input size="large" placeholder="Имя, фамилия *" />
					</div>
					<div className={styles.form_item2}>
						<Input size="large" placeholder="Телефон *" />
					</div>
					<div className={styles.form_item3}>
						<Input size="large" placeholder="E-mail *" />
					</div>
				</div>
				<Select placeholder="Цель обращения *" size="large" className={`${styles.select_order} select_order`}>
					<Option value="work">Устроиться на работу</Option>
					<Option value="defence">Заказать услуги охраны</Option>
					<Option value="raport">Отправить жалобу</Option>
				</Select>
				<TextArea
					className={styles.textarea_order}
					size="large"
					placeholder="Описание заявки *"
					autoSize={{ minRows: 3, maxRows: 5 }}
				/>
				<div style={{ width: '100%', padding: '10px 0', textAlign: 'center' }}>
					<Link to={'/personal-data-agreement'} style={{ fontSize: '0.9rem' }}>
						Заполняя форму, я соглашаюсь на обработку персональных данных
					</Link>
				</div>
				<button className="btn" style={{ border: '1px solid #dfdfdf', padding: '0.95rem', textAlign: 'center' }}>
					<span>Отправить</span>
				</button>
			</div>
		</div>
	);
};

export default OrderService;
