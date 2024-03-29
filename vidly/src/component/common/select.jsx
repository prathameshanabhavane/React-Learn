import React from 'react';

const Select = ({ name, label, options, error, ...rest }) => {
    return ( 
    	<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<select {...rest} name={name} id={name} className="form-control">
                <option value="" />
                {options.map(option => (
                    <option key={option._id} value={option._id}>
                        {option.name}
                    </option>
                ))}
            </select>
			{ error && <div className="alert alert-danger mt-2" role="alert">{error}</div> }
		</div>
		
    );
}
 
export default Select;