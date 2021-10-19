interface Props {
  className?: string;
  asset?: string;
  maskColor?: string;
}
export const Background: React.FC<Props> = ({ children, className, asset, maskColor }) => {
  return (
    <div  style={{ backgroundImage: `url(${asset})`}} className={`bg-no-repeat bg-cover bg-center relative ${className}`}>
      { maskColor ? 
        <div className={`absolute bg-gradient-to-b from-${maskColor}-500 to-${maskColor}-400 opacity-75 inset-0 z-0`}></div> 
        : null 
      }
      <div className="z-1 relative">{children}</div>
    </div>
  );
};