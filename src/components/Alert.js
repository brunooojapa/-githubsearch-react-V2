import React from 'react';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

const Alert = ({ show, title, type, text, onConfirm }) => {
	return (
		<SweetAlert
			show={show}
			title={title}
			type={type}
			text={text}
			onConfirm={onConfirm}
		/>
	);
};

export { Alert };
