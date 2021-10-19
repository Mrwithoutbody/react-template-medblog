
import { useLayoutEffect } from "react";
import logo from 'logo.png';
import { IdCard } from 'components/custom-layout'
import { MainMenu, Footer } from 'components/nav'
import { Breakpoints, EmptyCard, HighlightedCard, IHTCard} from 'components/layout'
import { menu } from 'mockData/main'
import { TextareaField, Button } from 'components/forms'
import { FiArrowRightCircle, FiInfo } from "react-icons/fi";
import doctorFront2 from 'mockAssets/doctorFront2.jpg';
interface Props {
  slug?: string;
}
export const Questions: React.FC<Props> = ({ slug }) => {
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
          <h2 className="text-2xl font-bold mb-2.5">Ask question</h2>
          {/*<!-- SPACE -->*/}
          <EmptyCard className="mb-2.5 p-5">
            <p className="mb-2.5">
              Get help with health concerns using the knowledge of our doctors and specialists.
            </p>
            <HighlightedCard className="text-sm mb-2.5">

              <form className="flex flex-col gap-2 text-gray-400">
                <label>Your question</label>
                <TextareaField className="md:flex-2" placeholder="File name" value='' />
                <Button className="w-max">
                  <FiArrowRightCircle className="mr-1"/>
                  <span>Ask question</span>
                </Button>
              </form>
            </HighlightedCard>
          </EmptyCard>
          <EmptyCard className="mb-2.5 p-5">
            <p className="mb-5 text-lg">
              How it work
            </p>
            <div className="md:flex gap-x-5">
              <IHTCard title="Find a specialist" Icon={FiInfo} className="md:flex-1" content="Choose from over 146,000 doctors and specialists. Explore the opinions of other patients."/>
              <IHTCard title="Make an appointment" Icon={FiInfo} className="md:flex-1" content="Choose from over 146,000 doctors and specialists. Explore the opinions of other patients."/>
              <IHTCard title="Come for a visit" Icon={FiInfo} className="md:flex-1" content="Choose from over 146,000 doctors and specialists. Explore the opinions of other patients."/>
              <IHTCard title="The service is free" Icon={FiInfo} className="md:flex-1" content="Choose from over 146,000 doctors and specialists. Explore the opinions of other patients."/>
            </div>
          </EmptyCard>
          <EmptyCard className="mb-2.5 p-5">
            <p className="mb-2.5 text-lg">
              The most popular questions from the last 30 days
            </p>
            <div className="question p-5 text-sm w-3/4 mb-2.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </div>
            <div className="flex gap-x-5">
              <div className="answer p-5 text-sm flex-1 mb-2.5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              </div>
              <div className="w-1/4 ">
                <IdCard 
                  image={doctorFront2}
                  href="/single/gonekolog/roman-konieczny/address"
                  name="Dr. Milena Infallible"
                  category="Gynecologist"
                  stars={3}
                />
              </div>
            </div>
          </EmptyCard>
          {/*<!-- SPACE -->*/}
          <div className="h-10"></div>
        </Breakpoints>
      </div>
      <Footer />
    </>
  );
};