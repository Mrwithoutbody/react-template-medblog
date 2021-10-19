import React, { useState } from 'react';

interface Props {
  className?: string;
  types: any;
}
// TODO - add vlid types
// const types:any = [
//   { label:"A", name:"a", component:"AC" , icon:'icon' },
//   { label:"B", name:"b", component:"BC" , icon:'icon' },
// ];

export const StatedTabs: React.FC<Props> = ({ className, types, children }) => {
  const [active, setActive] = useState(types[0]);
  return <div>
    <div className="flex border-b text-sm mb-3 gap-x-5">
    {types.map( (type:any) => (
      <div
        key={type.name}
        className={`flex items-center justify-center gap-x-1 py-2.5 select-none  ${active.name === type.name ? 'border-b-2 border-green-500 cursor-auto' : 'cursor-pointer'}`}
        onClick={() => setActive(type)}
      >
        <div className="text-xs">{type.Icon}</div>
        {type.label}
      </div>
    ))}
    </div>
    <div>{active.component}</div>
  </div>
};
                    
                      
                      