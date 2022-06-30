import React from 'react';
import styles from './OrderService.module.scss';
import { Button, Input, Select } from 'antd';

import TextArea from 'antd/lib/input/TextArea';

const { Option } = Select;

const OrderService = () => {
	return (
		<div className={styles.orderService_wrapper}>
			<h2 className={styles.title}>Форма обратной связи</h2>
			<div className={styles.form_wrapper}>
				<div className={styles.form1}>
					<div className={styles.form_item}>
						<Input size="large" placeholder="Имя, фамилия *" />
					</div>
					<div className={styles.form_item}>
						<Input size="large" placeholder="Телефон *" />
					</div>
					<div className={styles.form_item}>
						<Input size="large" placeholder="E-mail *" />
					</div>
				</div>
				<Select placeholder="Цель обращения *" style={{ width: '100%', marginBottom: '20px' }}>
					<Option value="work">Устроиться на работу</Option>
					<Option value="defence">Заказать услуги охраны</Option>
					<Option value="raport">Отправить жалобу</Option>
				</Select>
				<TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
				<p style={{ fontSize: '0.9rem', padding: '10px 0', textAlign: 'center' }}>
					Заполняя форму, я соглашаюсь на обработку персональных данных
				</p>
				<button className="btn" style={{ border: '1px solid #dfdfdf', padding: '0.95rem', textAlign: 'center' }}>
					<span>Отправить</span>
				</button>
			</div>
		</div>
	);
};

export default OrderService;
