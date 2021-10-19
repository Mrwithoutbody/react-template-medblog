import { NavLink } from 'components/nav'
type actionsType = {
    left:{ label:string, to:string }[]
    right:{ label:string, to:string }[]
};
interface Props {
  className?: string;
  actions?: actionsType,
  logo?: string
}
export const MainMenu: React.FC<Props> = ({ className, actions, logo }) => {
  return (
    <div className={`md:flex text-sm items-center gap-x-5 uppercase ${className} `}>
      { logo ? <NavLink  to="/"><img className="m-auto" src={logo} alt="logo"/></NavLink> : null }
      <div  className="md:flex items-center md:text-xs xl:text-sm md:gap-x-3 xl:gap-x-5 flex-auto">
        {actions?.left?.map((el,i)=>{
          return <NavLink key={i} to={el.to}>{el.label}</NavLink>
          // return <div key={i} >{el.label}</div>
        })}
      </div>

      <div  className="md:flex items-center md:text-xs xl:text-sm text-sm gap-x-5">
        {actions?.right?.map((el,i)=>{
          return <NavLink key={i} to={el.to}>{el.label}</NavLink>
          // return <div key={i} >{el.label}</div>
        })}
      </div>
      
    </div>
  );
};