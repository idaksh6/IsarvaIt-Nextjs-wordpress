'use client';

import { memo, useState, useRef } from 'react';

/**
 * Global Button Component
 * Premium button design with hover-tracking gradient effects
 * 
 * @param {Object} props
 * @param {string} props.variant - 'primary' | 'secondary' | 'glass' | 'outline'
 * @param {string} props.color - 'default' | 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'pink'
 * @param {string} props.children - Button text or content
 * @param {string} props.href - Optional link URL
 * @param {Function} props.onClick - Optional click handler
 * @param {boolean} props.icon - Whether to show arrow icon
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.size - 'sm' | 'md' | 'lg'
 */
function Button({ 
  variant = 'primary', 
  color = 'default',
  children, 
  href, 
  onClick, 
  icon = true, 
  className = '',
  size = 'md',
  ...props 
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setMousePosition({ x: x * 0.5, y: y * 0.5 }); // Reduced sensitivity
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Color schemes for different button colors
  const colorSchemes = {
    default: {
      bg: '#d1d1d1',
      border: 'border-white/60',
      textColor: 'text-[#5A250A]',
      gradient1: 'bg-[radial-gradient(50%_50%_at_50%_50%,#FFFFF5_3.5%,_#FFAA81_26.5%,#FFDA9F_37.5%,rgba(255,170,129,0.50)_49%,rgba(210,106,58,0.00)_92.5%)]',
      gradient2: 'bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#FFFFF7_29%,_#FFFACD_48.5%,_#F4D2BF_60.71%,rgba(214,211,210,0.00)_100%)]'
    },
    blue: {
      bg: '#bfdbfe',
      border: 'border-blue-300/60',
      textColor: 'text-[#1e3a8a]',
      gradient1: 'bg-[radial-gradient(50%_50%_at_50%_50%,#dbeafe_3.5%,_#93c5fd_26.5%,#bfdbfe_37.5%,rgba(147,197,253,0.50)_49%,rgba(59,130,246,0.00)_92.5%)]',
      gradient2: 'bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#dbeafe_29%,_#bfdbfe_48.5%,_#93c5fd_60.71%,rgba(59,130,246,0.00)_100%)]'
    },
    green: {
      bg: '#bbf7d0',
      border: 'border-green-300/60',
      textColor: 'text-[#14532d]',
      gradient1: 'bg-[radial-gradient(50%_50%_at_50%_50%,#dcfce7_3.5%,_#86efac_26.5%,#bbf7d0_37.5%,rgba(134,239,172,0.50)_49%,rgba(34,197,94,0.00)_92.5%)]',
      gradient2: 'bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#dcfce7_29%,_#bbf7d0_48.5%,_#86efac_60.71%,rgba(34,197,94,0.00)_100%)]'
    },
    purple: {
      bg: '#ddd6fe',
      border: 'border-purple-300/60',
      textColor: 'text-[#581c87]',
      gradient1: 'bg-[radial-gradient(50%_50%_at_50%_50%,#ede9fe_3.5%,_#c4b5fd_26.5%,#ddd6fe_37.5%,rgba(196,181,253,0.50)_49%,rgba(147,51,234,0.00)_92.5%)]',
      gradient2: 'bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#ede9fe_29%,_#ddd6fe_48.5%,_#c4b5fd_60.71%,rgba(147,51,234,0.00)_100%)]'
    },
    orange: {
      bg: '#fed7aa',
      border: 'border-orange-300/60',
      textColor: 'text-[#9a3412]',
      gradient1: 'bg-[radial-gradient(50%_50%_at_50%_50%,#ffedd5_3.5%,_#fdba74_26.5%,#fed7aa_37.5%,rgba(253,186,116,0.50)_49%,rgba(234,88,12,0.00)_92.5%)]',
      gradient2: 'bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#ffedd5_29%,_#fed7aa_48.5%,_#fdba74_60.71%,rgba(234,88,12,0.00)_100%)]'
    },
    red: {
      bg: '#fecaca',
      border: 'border-red-300/60',
      textColor: 'text-[#991b1b]',
      gradient1: 'bg-[radial-gradient(50%_50%_at_50%_50%,#fee2e2_3.5%,_#fca5a5_26.5%,#fecaca_37.5%,rgba(252,165,165,0.50)_49%,rgba(239,68,68,0.00)_92.5%)]',
      gradient2: 'bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#fee2e2_29%,_#fecaca_48.5%,_#fca5a5_60.71%,rgba(239,68,68,0.00)_100%)]'
    },
    pink: {
      bg: '#fbcfe8',
      border: 'border-pink-300/60',
      textColor: 'text-[#831843]',
      gradient1: 'bg-[radial-gradient(50%_50%_at_50%_50%,#fce7f3_3.5%,_#f9a8d4_26.5%,#fbcfe8_37.5%,rgba(249,168,212,0.50)_49%,rgba(236,72,153,0.00)_92.5%)]',
      gradient2: 'bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#fce7f3_29%,_#fbcfe8_48.5%,_#f9a8d4_60.71%,rgba(236,72,153,0.00)_100%)]'
    }
  };

  const currentScheme = colorSchemes[color] || colorSchemes.default;

  const sizeStyles = {
    sm: "h-8 px-12 text-[11px] sm:pl-[40px] sm:pr-[35px]",
    md: "h-10 px-14 text-[12px] sm:pl-[50px] sm:pr-[45px]", 
    lg: "h-12 px-16 text-[12px] sm:pl-[59px] sm:pr-[52px]",
  };

  const baseClasses = `relative inline-flex items-center justify-center font-bold uppercase -tracking-[0.015em] rounded-full ${currentScheme.border} text-black space-x-1 overflow-hidden transition-all duration-200 z-10`;

  const combinedClassName = `${baseClasses} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {/* Border effects */}
      <div className="absolute left-1/2 top-1/2 h-[calc(100%+9px)] w-[calc(100%+9px)] -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform" style={{opacity: 1}}>
        <div className="relative h-full w-full rounded-full border border-white/20 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm"></div>
      </div>
      <div className="absolute left-1/2 top-1/2 h-[calc(100%+9px)] w-[calc(100%+9px)] -translate-x-1/2 -translate-y-1/2 scale-x-[-1] transform rounded-full will-change-transform" style={{opacity: 0}}>
        <div className="relative h-full w-full rounded-full border border-white/20 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm"></div>
      </div>
      
      {/* Moving gradient background */}
      <div 
        className="absolute -z-10 flex w-[204px] items-center justify-center transition-transform duration-300 ease-out" 
        style={{transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px) translateZ(0px)`}}
      >
        <div className={`absolute top-1/2 h-[121px] w-[121px] -translate-y-1/2 ${currentScheme.gradient1}`}></div>
        <div className={`absolute top-1/2 h-[103px] w-[204px] -translate-y-1/2 ${currentScheme.gradient2} blur-[5px]`}></div>
      </div>

      <span className={`${currentScheme.textColor} relative z-10`}>{children}</span>
      
      {icon && (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className={`h-[9px] w-[17px] ${currentScheme.textColor} relative z-10`}>
          <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd"></path>
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={combinedClassName}
        style={{ backgroundColor: currentScheme.bg }}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={combinedClassName}
      style={{ backgroundColor: currentScheme.bg }}
      {...props}
    >
      {content}
    </button>
  );
}

export default memo(Button);
