import React from 'react';

export default function PrintReports({ reportTitle }) {
  return (
    <div className='print-field pb--20'>
      <h4 className='fs--25 show-on-print'>{reportTitle}</h4>
      <button
        className='btn btn-print btn-sm pl--20 pr--20 pt--3 pb--3 no-print'
        onClick={() => window.print()}
        style={{ height: '40px' }}>
        <i className='fi fi-print fs--15 mr--5'></i>
        <span className='hidden-sm'>Print</span>
      </button>
    </div>
  );
}
