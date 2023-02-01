import React from 'react';

const Input = ({ label, inputProps, onChange, value }) => {
  return (
    <div className='flex items-center'>
      <label className=' text-base text-gray-800'>{label}</label>
      <input
        className=' rounded-sm w-48 h-8 md:h-10 p-2 m-2 bg-white border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
        {...inputProps}
        onChange={onChange}
        defaultValue={value}
      />
    </div>
  );
};

export default Input;
