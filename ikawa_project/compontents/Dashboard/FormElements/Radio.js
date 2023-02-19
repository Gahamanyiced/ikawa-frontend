import React from 'react';

function Radio({ label, size }) {
  return (
    <div className={size}>
      <label className='form-radio form-radio-dark form-radio-bordered d-flex justify-content-start align-items-center'>
        <input type='radio' name='radio' value='' />
        <i></i> {label}
      </label>
    </div>
  );
}

export default Radio;
