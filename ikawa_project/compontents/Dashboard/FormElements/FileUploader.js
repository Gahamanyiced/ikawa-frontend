import React, { useState } from 'react';

export default function FileUploader({
  label,
  isRequired,
  name,
  id,
  size,
  maxFiles,
  accepted,
}) {
  const [fileSelected, setfileSelected] = useState('');
  const [fileCount, setFileCount] = useState(0);

  const handleFileUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFileCount(selectedFiles.length);
    setfileSelected(`(${e.target.files[0].name})`);
  };
  return (
    <div className={size}>
      <div className={`form-group position-relativ`}>
        <label className='fs--15 d-block font-weight-medium' htmlFor={id}>
          {label}
        </label>
        <label className='customize-file-input' htmlFor={id}>
          <input
            type='file'
            name={name}
            className={``}
            id={id}
            required={isRequired}
            onChange={(e) => handleFileUpload(e)}
            accept={accepted}
            multiple
          />
          <span>
            Choose file{' '}
            <span className='fs--12'>
              {' '}
              {parseInt(fileCount) > 1
                ? fileCount + ' files selected.'
                : fileSelected}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
