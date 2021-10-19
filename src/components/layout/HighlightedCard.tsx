interface Props {
  className?: string;
  color?: string;
}
export const HighlightedCard: React.FC<Props> = ({ children, className, color }) => {
  return (
    <div className={`p-5 bg-${color ? color : 'gray'}-800 bg-opacity-10 rounded ${className}`}>
      {children}
    </div>
  );
};