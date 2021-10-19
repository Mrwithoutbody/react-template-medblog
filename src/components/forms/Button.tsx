interface Props {
  label?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  color?: string;
}
export const Button: React.FC<Props> = ({ label, value, placeholder, children, className, color  }) => {
  return (
	<button className={`flex items-center border-b-2 border-gray-600 border-opacity-20 bg-${color ? color : 'blue'}-500 text-white px-5 py-2.5 rounded-sm w-full ${className}`}>{children}</button>
  );
};

