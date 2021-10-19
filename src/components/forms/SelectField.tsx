// https://blog.logrocket.com/building-a-custom-dropdown-menu-component-for-react-e94f02ced4a1/
import { FiChevronDown, FiX } from "react-icons/fi";
import React, { useState } from 'react';

// TODO - add vlid types
interface Props {
  label?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  list?: any
}

export const SelectField: React.FC<Props> = ({ label, value, placeholder, className }) => {
  const [active, setActive] = useState(false);
  const [activeValue, setActiveValue] = useState(value);
  return (
     <div className={`relative text-sm ${className}`}>
      { label ? <label>{label}</label> : null }
      <input 
        className="bg-white p-3 pr-12 rounded-sm w-full"
        type="text" 
        value={activeValue} 
        onChange={e => setActiveValue(e.target.value)}
      />
      {/* dropdownicon */}
      <div 
        className="absolute w-11 h-11 border-l border-gray-300 top-0 right-0 bg-white rounded-r flex items-center justify-center cursor-pointer"
        onClick={() => setActive(!active)}
        >
        { active ? <FiX/> : <FiChevronDown/> }
        
      </div>
      
      {/* options*/}
      {active ? 
        <ul className="w-full md:w-auto absolute text-left bg-white mt-1 rounded-sm flex flex-col right-0 cursor-pointer z-10">
          <li onClick={() => { setActiveValue('Warszawa'); setActive(!active); }} className="px-2 leading-8 border-b hover:bg-gray-100">Warszawa</li>
          <li onClick={() => { setActiveValue('Lublin'); setActive(!active); }} className="px-2 leading-8 border-b hover:bg-gray-100">Lublin</li>
          <li onClick={() => { setActiveValue('Kraków'); setActive(!active); }} className="px-2 leading-8 hover:bg-gray-100">Kraków</li>
        </ul>
      : null}
    </div>
   
  );
};