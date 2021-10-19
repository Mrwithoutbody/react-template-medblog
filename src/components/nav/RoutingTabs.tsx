import { FiMapPin } from "react-icons/fi";
import { useParams, useLocation, Link } from 'react-router-dom'


interface Props {
  className?: string;
  param?: string; // urlParam name to linked with tabs
  actions?: actionsType
}
type actionsType = {label:string, value:string }[]

export const RoutingTabs: React.FC<Props> = ({ className, param ,actions}) => {
  
  const params:any = useParams(); 
  const location = useLocation();
 
  const isActive = (name: string) => params[param || 'tab'] === name ? true : false
  const genPath = (name: string) => location.pathname.replace(params[param || 'tab'], name)
  const tabClass = (name: string) => `flex items-center justify-center gap-x-1 py-2.5 ${ isActive(name) ? 'border-b-2 border-green-500' : null}`

  return (
    <div className="flex border-b text-sm mb-2.5 gap-x-5">
      
      {actions?.map((el,i)=>{
          return (<Link key={i} to={genPath(el.value)} className={tabClass(el.value)}>
            <div className="text-xs"><FiMapPin/></div><span>{el.label}</span>
          </Link>)
        })}
    </div>
  );
};

