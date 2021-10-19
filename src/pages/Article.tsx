
import { useLayoutEffect } from "react";
import logo from 'logo.png';
import { MainMenu, Footer } from 'components/nav'
import { Breakpoints } from 'components/layout'
import { menu } from 'mockData/main'

interface Props {
  slug?: string;
}
export const Article: React.FC<Props> = ({ slug }) => {
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
          <h2 className="text-2xl font-bold">{slug}</h2>
          {/*<!-- SPACE -->*/}
          <div className="h-5"></div>
          <p className="mb-5 w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="mb-5 w-4/5">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
          <div className="h-10"></div>
        </Breakpoints>
      </div>
      <Footer />
    </>
  );
};