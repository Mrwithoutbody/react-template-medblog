interface Props {
  label?: string;
  placeholder?: string;
  value?: string;
  className?: string;
}
export const TextareaField: React.FC<Props> = ({ label, value, placeholder, className }) => {
  return (
    <div className={`text-sm ${className}`}>
      { label ? <label>{label}</label> : null }
      <textarea 
        className="bg-white p-3 rounded-sm w-full"

        value={value} 
        // onChange={e => props.set(e.target.value)}
      />
    </div>
  );
};
