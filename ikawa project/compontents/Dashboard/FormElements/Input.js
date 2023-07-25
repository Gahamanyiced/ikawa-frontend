import React from 'react';

export default function Input({
  type,
  label,
  placeholder,
  isRequired,
  name,
  value = '',
  id,
  size,
  bgColor,
  extraClass,
  onChange,
}) {

  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={size}>
      <div className='form-group position-relative'>
        <label className='fs--15 font-weight-medium' htmlFor={id}>
          {label}
        </label>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          className={`form-control ${bgColor} ${extraClass ? extraClass : " "}`}
          autoComplete='off'
          required={isRequired}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
