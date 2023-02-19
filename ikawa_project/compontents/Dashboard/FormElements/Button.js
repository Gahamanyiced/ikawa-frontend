import React from 'react';

export default function Button({ label, size, offset, marginTop }) {
  return (
    <div className={`${size} ${offset}  mt--${marginTop}`}>
      <button className='btn btn-primary w-100p'>{label}</button>
    </div>
  );
}
