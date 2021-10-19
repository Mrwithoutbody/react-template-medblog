import logo from 'logo.png';
import { MainMenu, Footer, RoutingTabs, StatedTabs, NavLink } from 'components/nav'
import { Address } from 'components/custom-layout'
import { Breakpoints, EmptyCard, Stars, SmallCalendar } from 'components/layout'
import { FiMapPin, FiVideo, FiStar, FiMail } from "react-icons/fi";
import { IdCard } from 'components/custom-layout'
import { menu, addresses } from 'mockData/main'
import doctorFront1 from 'mockAssets/doctorFront1.jpg';
import doctorFront2 from 'mockAssets/doctorFront2.jpg';
interface Props {
  slug?: string;
  category?: string;
  tab?: string;
}

export const Single: React.FC<Props> = ({ slug, category, tab}) => {

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
            <h2 className="text-xl font-bold mb-5">Single</h2>
            <div className="flex gap-x-5">
              <div className="flex-auto">
                <EmptyCard className="mb-2.5 p-5">
                  
                  {/*<!-- Person -->*/}
                  
                      <div className="flex gap-x-5 pb-2.5">
                        {/*<!-- Image -->*/}
                        <div className=" w-1/4 pb-1/4 relative bg-blue-300 rounded overflow-hidden">
                          <img className="object-cover absolute h-full w-full " src={doctorFront1} alt="doctor1"/>
                        </div>
                    
                        {/*<!-- Descripton -->*/}
                        <div className="flex-1">
                          <h3 className="text-md font-bold">dr Miłosz Nieomylny</h3>
                          <p className="text-xs pb-1.5 text-gray-500">Ginekolog</p>
                          <Stars stars={3} />
                          <div className="flex gap-x-1">
                            <NavLink asButton={true} to='#' className="text-xs flex w-max gap-x-1"><FiMail/>Wyślij wiadomość</NavLink>
                            <NavLink asButton={true} to='#' className="text-xs flex w-max gap-x-1"><FiStar/>Zapisz</NavLink>
                          </div>
                        </div>

                      </div>
                      
                      {/*<!-- Address tabs -->*/}
                      <RoutingTabs param="tab" actions={[
                        {label:"Addresses", value:"address"},
                        {label:"Price list", value:"price-list"},
                        {label:"Opinions", value:"opinions"},
                        {label:"Q & A", value:"questions-and-answers"},
                        {label:"Experience", value:"experience"},
                      ]} />

                      { tab === 'address' ? 
                        <>
                          {addresses.map((el)=>{
                            return(
                              <div className="flex pb-2.5 gap-x-1">
                                <div className="text-xs mt-1"><FiMapPin /></div>
                                <div>
                                  <p className="text-sm pb-1">{el.street}, {el.city}</p>
                                  <p className="text-xs">Centrum Medyczno-Terapeutyczne Stamina </p>
                                </div>
                              </div>
                            ) 
                          })}
                        </>
                        : null 
                      }

                      { tab === 'price-list' ? 
                        <div className="grid pb-2.5 gap-1 grid-cols-2">
                          
                          <p className="text-lg pb-1 col-span-2">Konsultacja ginekologiczna</p>
                          <p className="text-xs pb-1">Centrum Medyczno-Terapeutyczne Stamina</p>
                          <p className="text-xs pb-1 text-right">2000PLN</p>
                          <p className="text-xs pb-1">OlaMed</p>
                          <p className="text-xs pb-1 text-right">2000PLN</p>

                          <p className="text-lg pb-1 col-span-2">Badanie ctg</p>
                          <p className="text-xs pb-1">Centrum Medyczno-Terapeutyczne Stamina</p>
                          <p className="text-xs pb-1 text-right">2000PLN</p>
                          <p className="text-xs pb-1">OlaMed</p>
                          <p className="text-xs pb-1 text-right">2000PLN</p>

                          <p className="text-lg pb-1 col-span-2">Elektrowstrząsy</p>
                          <p className="text-xs pb-1">Centrum Medyczno-Terapeutyczne Stamina</p>
                          <p className="text-xs pb-1 text-right">2000PLN</p>
                          <p className="text-xs pb-1">OlaMed</p>
                          <p className="text-xs pb-1 text-right">2000PLN</p>
                        </div>
                        : null 
                      }

                      { tab === 'opinions' ? 
                        <div className="flex pb-2.5 gap-x-3">
                          <div className="text-xs mt-1">
                            <div className="w-8 h-8 bg-green-300 rounded flex  items-center text-white justify-center">G</div>
                          </div>
                          <div>
                            
                            <p className="">Gabrysia</p>
                            <p className="text-xs pb-3">14 października 2021 Lokalizacja: GINEMEDICA • konsultacja kompulsywna</p>  
                            <p className="text-sm pb-3">Doktor w bardzo przystępny sposób wyjaśnił co dolega, jakie leczenie zastosować, szczegółowo zbadał i przede wszystkim uspokoił. Dobrze wydane pieniądze! </p>
                            
                          </div>
                        </div>
                        : null 
                      }

                      { tab === 'questions-and-answers' ? 
                        <div className="flex pb-2.5 gap-x-1">
                          <div className="text-xs mt-1"><FiMapPin /></div>
                          <div>
                            <p className="text-sm pb-5">Pytania i odpowiedzi</p>
                            <div className="question p-5 text-sm w-3/4 mb-2.5">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </div>
                            <div className="flex gap-x-5">
                              <div className="answer p-5 text-sm flex-1 mb-2.5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                              </div>
                              
                            </div>
                          </div>
                        </div>
                        : null 
                      }

                      { tab === 'experience' ? 
                        <div className="flex pb-2.5 gap-x-1">
                          
                          <div>
                            
                            <p className="text-lg pb-1 col-span-2">Doświadczenie</p>
                            <p className="text-sm pb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            <p className="text-lg pb-1 col-span-2">Specjalizacjie</p>
                            <p className="text-sm pb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                          </div>
                        </div>
                        : null 
                      }
 
                </EmptyCard>
              </div>
              <EmptyCard className="w-2/5 mb-2.5 p-5 flex-none hidden xl:block">
              {/*<!-- Address tabs -->*/}
                      <StatedTabs types={
                        [
                          { label:"Address 1", name:"a1", component:<SmallCalendar/>, Icon:<FiMapPin /> },
                          { label:"Konsultacja online", name:"a2", component:<SmallCalendar/>, Icon:<FiVideo /> },
                        ]
                      } />
                
              </EmptyCard>
            </div>
        </Breakpoints>
      </section>
      <Footer />
    </>
  );
};
