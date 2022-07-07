import React, { useEffect, useState } from 'react';
import { useStore } from 'effector-react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { $newsForm, setNewsForm } from '../../../state/newsForm';

const Editor = () => {
	const [value, setValue] = useState('');
	const newsForm = useStore($newsForm);

	useEffect(() => {
		setNewsForm({ html: value });
	}, [value]);

	const modules = {
		toolbar: [
			[{ header: [1, 2, false] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
			['link', 'image'],
			[{ align: [] }],
		],
		clipboard: { matchVisual: false },
	};

	const formats = [
		'header',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
		'align',
	];

	return (
		<>
			<ReactQuill
				theme="snow"
				value={value}
				onChange={setValue}
				modules={modules}
				formats={formats}
				placeholder="Введите вашу новость"
			/>
			{/* <div className="view ql-editor" dangerouslySetInnerHTML={{ __html: value }}></div> */}
		</>
	);
};

export default Editor;
