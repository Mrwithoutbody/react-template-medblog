
import { useLayoutEffect } from "react";
import logo from 'logo.png';
import { MainMenu, Footer } from 'components/nav'
import { Breakpoints,EmptyCard, HighlightedCard } from 'components/layout'
import { menu } from 'mockData/main'
import { InputField, Button } from 'components/forms'
import { FiArrowRightCircle } from "react-icons/fi";

interface Props {
  slug?: string;
}
export const Login: React.FC<Props> = ({ slug }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <>
      <section className="bg-green-500">
        <Breakpoints className="text-white">
          {/*<!-- MAIN MENU -->*/}
          <MainMenu logo={logo} className="py-5" actions={menu} />
        </Breakpoints>
      </section>  
      <div className="bg-gray-100">
        <Breakpoints className="text-gray-700 pt-10 bg-gray-100 text-left">
          <h2 className="text-2xl font-bold">Login</h2>
          {/*<!-- SPACE -->*/}
          <div className="h-5"></div>
            <EmptyCard className="mb-2.5">
              <HighlightedCard className="md:flex text-sm mb-2.5 gap-x-5">
                <form className="flex flex-col flex-1 gap-2 text-gray-400">
                  <label>Email</label>
                  <InputField className="md:flex-2" placeholder="File name" value='' />
                  <label>Password</label>
                  <InputField className="md:flex-2" placeholder="File name" value='' />
                  <Button className="w-max">
                    <FiArrowRightCircle className="mr-1"/>
                    <span>Login</span>
                  </Button>
                </form>
                <div className="flex-1">
                  <p className="mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  </p>
                  <p className="mt-5">
                    Forgot password?
                  </p>
                </div>
              </HighlightedCard>
            </EmptyCard>
          <div className="h-10"></div>
        </Breakpoints>
      </div>
      <Footer />
    </>
  );
};