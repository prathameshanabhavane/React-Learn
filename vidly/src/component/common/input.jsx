import React from 'react';

const Input = ({ name, label, value,  onChange }) => {
    return ( 
    	<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input 
				value={value} 
				onChange={onChange} 
				name={name}
				autoFocus 
				// ref={this.username} 
				type="text" 
				className="form-control" 
				id={name}
				// placeholder="Enter email" 
				/>
		</div>
    );
}
 
export default Input;