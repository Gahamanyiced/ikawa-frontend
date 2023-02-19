import React from 'react';

export default function Input({
  type,
  label,
  placeholder,
  isRequired,
  name,
  id,
  size,
  bgColor,
  extraClass,
}) {
  return (
    <div className={size}>
      <div className='form-group position-relative'>
        <label className='fs--15 font-weight-medium' htmlFor={id}>
          {label}
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`form-control ${bgColor} ${extraClass ? extraClass : " "}`}
          autoComplete='off'
          required={isRequired}
        />
      </div>
    </div>
  );
}
