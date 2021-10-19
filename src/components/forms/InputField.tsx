interface Props {
  label?: string;
  placeholder?: string;
  value?: string;
  className?: string;
}
export const InputField: React.FC<Props> = ({ label, value, placeholder, className }) => {
  return (
    <div className={`text-sm ${className}`}>
      { label ? <label>{label}</label> : null }
      <input 
        className="bg-white p-3 rounded-sm w-full"
        type="text" 
        // value={value} 
        // onChange={e => props.set(e.target.value)}
      />
    </div>
  );
};
