import React from 'react';

const Button = ({
  label,
  onClick,
  type = 'button',        
  className = '',           
  disabled = false,          
  variant = 'primary',  
  icon,   
  ...rest               
}) => {
  const baseClasses = `
    px-4 py-2 font-medium rounded-lg text-sm focus:outline-none
    disabled:bg-gray-400 disabled:cursor-not-allowed
  `;

  const variantClasses = {
    primary: `
      bg-[#414EC6] text-white hover:bg-[#38429d]
    `,
    secondary: `
     border border-[#D0D5DD] bg-white text-black hover:bg-[#f9f9f9]
    `,
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`} // Apply variant and custom classes
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <div className='flex flex-row gap-2 items-center'>
      {icon && (
        <img src={icon} alt="icon" />
      )}
      <div>{label}</div>
      </div>
    </button>
  );
};

export default Button;
