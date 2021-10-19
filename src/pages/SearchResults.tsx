
import logo from 'logo.png';

import { MainMenu, Footer, StatedTabs } from 'components/nav'
import { IdCard, Address } from 'components/custom-layout'
import { Breakpoints, EmptyCard, SmallCalendar } from 'components/layout'
import { FiMapPin, FiVideo } from "react-icons/fi";
import { menu, addresses } from 'mockData/main'
import doctorFront1 from 'mockAssets/doctorFront1.jpg';
import doctorFront2 from 'mockAssets/doctorFront2.jpg';
export const SearchResults: React.FC = () => {
  return (
    <>
      <section className="bg-green-500">
        <Breakpoints className="text-white">
          {/*<!-- MAIN MENU -->*/}
          <MainMenu logo={logo} className="py-5" actions={menu} />
        </Breakpoints>
      </section>  
      <section className="bg-gray-100 text-left">
        <Breakpoints className="text-gray-700 pt-5">
            <h2 className="text-xl font-bold mb-5">Search results</h2>
            <div className="flex gap-x-5">
              <div className="flex-auto">

                {/*<!-- Person  -->*/}
                <EmptyCard className="flex mb-2.5">
                  {/*<!-- Details  -->*/}
                  <div className="flex-1 p-5">
                 
                      <IdCard 
                        image={doctorFront1}
                        href="/single/gonekolog/roman-konieczny/address"
                        name="Dr. Milosz Infallible"
                        category="Gynecologist"
                        stars={2}
                      />
                     
                      <p className="text-xs pb-2.5">„A doctor who exudes warmth and kindness. The visit ran smoothly. Dr. Infallible inquiringly analyzed the state of health”</p>
                      
                      {/*<!-- Address tabs -->*/}
                      <StatedTabs types={
                        [
                          { label:"Address 1", name:"a1", component:<Address data={addresses[0]} />, Icon:<FiMapPin /> },
                          { label:"Online", name:"a2", component:<Address data={addresses[1]} />, Icon:<FiVideo/> },
                        ]
                      } />
                  </div>
                {/*<!-- Calendar -->*/}
                  <div className="flex-1 p-5 border-l border-gray-200">
                    <SmallCalendar/>
                  </div>
                </EmptyCard>


                {/*<!-- Person -->*/}
                <EmptyCard className="flex mb-2.5">
                  {/*<!-- Details -->*/}
                  <div className="flex-1 p-5">
                      <IdCard 
                        image={doctorFront2}
                        href="/single/gonekolog/roman-konieczny/address"
                        name="Dr. Milena Infallible"
                        category="Gynecologist"
                        stars={3}
                      />
                      <p className="text-xs pb-2.5">„A doctor who exudes warmth and kindness. The visit ran smoothly. Dr. Infallible inquiringly analyzed the state of health”</p>
                      
                      <StatedTabs types={
                        [
                          { label:"Address 1", name:"a1", component:<Address data={addresses[0]} />, Icon:<FiMapPin /> },
                          { label:"Address 2", name:"a2", component:<Address data={addresses[1]} />, Icon:<FiMapPin /> },
                          { label:"Online", name:"a3", component:<Address data={addresses[1]} />, Icon:<FiVideo/> },
                        ]
                      } />

                     


                  </div>
                  {/*<!-- Calendar -->*/}
                  <div className="flex-1 p-5 border-l border-gray-200">
                    <SmallCalendar/>
                  </div>
                </EmptyCard>

                {/*<!-- Pagination -->*/}
                <div className="flex text-sm mb-2.5 border w-min bg-white rounded ">
                  <div className="px-2.5 py-1 border-r">-</div>
                  <div className="px-2.5 py-1 border-r">1</div>
                  <div className="px-2.5 py-1 border-r">2</div>
                  <div className="px-2.5 py-1 border-r">3</div>
                  <div className="px-2.5 py-1">+</div>
                </div>
              </div>
              <div className="flex-none hidden xl:block">
                <div className="w-60 bg-yellow-100 h-4/5 p-5">MAP</div>
              </div>
            </div>
        </Breakpoints>
      </section>
      <Footer />
    </>
  );
};
