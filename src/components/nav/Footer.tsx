
import { Breakpoints } from 'components/layout'
import { NavLink } from 'components/nav'
export const Footer: React.FC = () => {
  return (
    <Breakpoints className="text-gray-700 ">
      <section className="md:flex gap-x-5 py-10 text-left">
        <div className="md:flex-1">
          <h3>Service</h3>
          <ul className="text-sm py-5 text-gray-500 leading-6">
            <li><NavLink to="/article/cookies">Cookies</NavLink></li>
            <li><NavLink to="/article/about-us">About us</NavLink></li>
            <li><NavLink to="/article/contact">Contant</NavLink></li>
            <li><NavLink to="/article/work-with-us">Work with us</NavLink></li>
            <li><NavLink to="/article/terms-of-service">Terms of service</NavLink></li>
          </ul>
        </div>
        <div className="md:flex-1">
          <h3>For the patients</h3>
          <ul className="text-sm py-5 text-gray-500 leading-6">
            <li><NavLink to="/article/cookies">Cookies</NavLink></li>
            <li><NavLink to="/article/about-us">About us</NavLink></li>
            <li><NavLink to="/article/contact">Contant</NavLink></li>
            <li><NavLink to="/article/work-with-us">Work with us</NavLink></li>
            <li><NavLink to="/article/terms-of-service">Terms of service</NavLink></li>
          </ul>
        </div>
        <div className="md:flex-1">
          <h3>For professionals</h3>
          <ul className="text-sm py-5 text-gray-500 leading-6">
            <li><NavLink to="/article/cookies">Cookies</NavLink></li>
            <li><NavLink to="/article/about-us">About us</NavLink></li>
            <li><NavLink to="/article/contact">Contant</NavLink></li>
            <li><NavLink to="/article/work-with-us">Work with us</NavLink></li>
            <li><NavLink to="/article/terms-of-service">Terms of service</NavLink></li>
          </ul>
        </div>
        <div className="md:flex-1">
          <h3>Serwis</h3>
          <ul className="text-sm py-5 text-gray-500 leading-6">
            <li><NavLink to="/article/cookies">Cookies</NavLink></li>
            <li><NavLink to="/article/about-us">About us</NavLink></li>
            <li><NavLink to="/article/contact">Contant</NavLink></li>
            <li><NavLink to="/article/work-with-us">Work with us</NavLink></li>
            <li><NavLink to="/article/terms-of-service">Terms of service</NavLink></li>
          </ul>
        </div>
      </section>
    </Breakpoints>
  );
};
