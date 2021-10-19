
import doctorImg from 'mockAssets/doctor.jpg';
import logo from 'logo.png';
import { MainMenu, Footer, NavLink } from 'components/nav'
import { Breakpoints, Background, HighlightedCard, IHTCard } from 'components/layout'
import { InputField, SelectField, Button } from 'components/forms'
import { FiSearch, FiWatch, FiPhoneCall, FiCalendar, FiMapPin, FiVideo} from "react-icons/fi";
import { menu } from 'mockData/main'
export const Home: React.FC = () => {
  return (
    <>
      <Background asset={doctorImg} maskColor="green">
        <Breakpoints className="text-white">
          {/*<!-- MAIN MENU -->*/}
          <MainMenu logo={logo} className="py-5" actions={menu} />
          {/*<!-- SPACE -->*/}
          <div className="md:h-20 h-3"></div>
          {/*<!-- HERO SECTION -->*/}
          <section className="md:flex">
            <div className="md:flex-2 px-8">
              <h1 className="text-3xl font-bold mb-2">Booking blog <br/>with example medic content</h1>
              <h2 className="text-xl font-bold mb-1 text-gray-">Tailwind + React + TS</h2>
              <p className="text-sm mb-2 text-gray-">with Vendure e-commerce framework support</p>
            </div>
            <div className="md:flex-1">
              <HighlightedCard>
                <div className="pb-3 text-sm text-left flex gap-x-4">
                  <NavLink to="#" className="flex"><FiMapPin className="mr-1"/>Onplace</NavLink>
                  <NavLink to="#" className="flex"><FiVideo className="mr-1"/>Online</NavLink>
                </div>
                <form className="grid gap-2 text-gray-400 md:flex">
                  <SelectField className="md:flex-2" placeholder="File name" value='' />
                  <SelectField className="md:flex-2" placeholder="File name" value='' />
                  
                  <Button className="md:flex-1">
                    <FiSearch/>
                    <span>Search</span>
                  </Button>
                </form>
              </HighlightedCard>
            </div>
          </section>
          {/*<!-- SPACE -->*/}
          <div className="h-20"></div>
        </Breakpoints>
      </Background>
      <Breakpoints className="text-gray-700 pt-10">
        {/*<!-- CATEGORIES -->*/}
        <HighlightedCard className="text-sm">
          <NavLink to="/search-results">Gynecologist</NavLink> · <NavLink to="/search-results">Dentist</NavLink> · Orthopedist · Psychologist · Psychiatrist · Dermatologist · Laryngologist surgeon · Pediatrician · Physiotherapist · Neurologist · Ophthalmologist · Urologist · Cardiologist · Dietician
        </HighlightedCard>
        {/*<!-- SHORT SLOGANS -->*/}
        <section className="md:flex gap-x-5 pt-10 px-5 md:px-0">
          <IHTCard title="Find a specialist" Icon={FiSearch} className="md:flex-1" content="Choose from over 146,000 doctors and specialists. Explore the opinions of other patients."/>
          <IHTCard title="Make an appointment" Icon={FiWatch} className="md:flex-1" content="Choose from over 146,000 doctors and specialists. Explore the opinions of other patients."/>
          <IHTCard title="Come for a visit" Icon={FiPhoneCall} className="md:flex-1" content="Choose from over 146,000 doctors and specialists. Explore the opinions of other patients."/>
          <IHTCard title="The service is free" Icon={FiCalendar} className="md:flex-1" content="Choose from over 146,000 doctors and specialists. Explore the opinions of other patients."/>
        </section>
      </Breakpoints>
      <hr className="mt-10"/>
      <Footer />
    </>
  );
};
