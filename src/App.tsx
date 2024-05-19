import companyLogo from '../ImageAssets/CompanyLogo.svg';
import poweredByLogo from '../ImageAssets/PoweredByIcon.svg';
import fbLogo from '../ImageAssets/fbLogo.svg';
import instaLogo from '../ImageAssets/InstagramIcon.svg';
import linkedinLogo from '../ImageAssets/LinkedInIcon.svg';
import houseLogo from '../ImageAssets/House.svg';
import calendarLogo from '../ImageAssets/Calendar.svg';
import rocketLogo from '../ImageAssets/Rocket.svg';
import { VscThreeBars } from "react-icons/vsc";
import FeatureItem from './Components/FeatureItem.tsx';
import SSOSignUp from './Views/SSOSignUp.tsx';
import EmailSignUp from './Views/EmailSignUp.tsx';

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <main className='flex flex-col min-h-screen'>
        <section className="header w-full bg-[#0A3C55] flex items-center justify-between py-[10px] px-[30px]">
          <img src={companyLogo} alt="Company Logo" className="" />
          <div className="headerNavRight text-[#FAFBFC] flex items-center">
            <button className="nav hidden md:block border border-[#FAFBFC] px-[16px] py-[12px] rounded-lg mr-[20px] poppins-bold active:scale-95">EN</button>
            <nav className="flex items-center active:scale-95 cursor-pointer">
              <VscThreeBars className='w-[32px] h-[27px]' />
              <p>Menu</p>
            </nav>
          </div>
        </section>
        <section className="mainBody text-[#0A3C55] bg-[#F3F5F6] flex justify-between">
          <section className="leftBodySection hidden md:flex w-1/2 flex justify-center">
            <div className="w-1/2">
              <p className="text-[36px] font-semibold mt-[135px] mb-[80px] ">Get an Instant Quote and Purchase Coverage</p>
              <FeatureItem
                imgSrc="Rocket.svg"
                title="Fast and Secure"
                description="Apply for coverage in minutes, view and manage your applications all within the web portal."
              />
              <FeatureItem
                imgSrc="Calendar.svg"
                title="Customized Policies"
                description="Coverage for only what you need. Whether it is an hour-long birthday party, seasonal sports league or trade show full of vendors, only pay for the coverage you require."
              />
              <FeatureItem
                imgSrc="House.svg"
                title="Instant Delivery"
                description="Policy is generated and available for download immediately after purchase."
              />
            </div>
          </section>
          <section className="rightBodySection w-full md:w-1/2 mx-[40px] md:mr-[40px] py-[50px]">
            <SSOSignUp />
            <EmailSignUp />
          </section>
        </section>
        <section className="footer w-full bg-[#0A3C55] p-[50px] md:p-[100px] text-[#F3F5F6]">
          <p className="text-[14px]">Powered by:</p>
          <img src={poweredByLogo} alt="Company Logo" className="h-[50px]" />
          <p className="text-[18px] py-[10px]">Instant Risk Coverage is a trademark of Instant Risk Coverage Inc. Refer to your policy for the most detailed and accurate information about your coverage and terms of insurance. Your policy, which serves as your insurance contract, will always prevail if there’s ever a conflict with the information found on this site.</p>
          <p>&copy; {currentYear} instantriskcoverage</p>
          <section className="flex justify-start mt-[40px] md:mt-[15px] md:justify-end space-x-[15px]">
            <button className="w-[35px] h-[35px] active:scale-95 hover:scale-105" onClick={(e) => { e.preventDefault(); }}>
              <img src={fbLogo} alt="Company Logo" className="w-[35px] h-[35px]" />
            </button>
            <button className="w-[35px] h-[35px] active:scale-95 hover:scale-105" onClick={(e) => { e.preventDefault(); }}>
              <img src={instaLogo} alt="Company Logo" className="w-[35px] h-[35px]" />
            </button>
            <button className="w-[35px] h-[35px] active:scale-95 hover:scale-105" onClick={(e) => { e.preventDefault(); }}>
              <img src={linkedinLogo} alt="Company Logo" className="w-[35px] h-[35px]" />
            </button>
          </section>
          <div className="flex-grow border-t border-[#F3F5F6] mt-[25px]"></div>
          <section className="links flex justify-between md:justify-start mt-[25px]">
            <a href="#" className='underline mr-[25px]'>Privacy Policy</a>
            <a href="#" className='underline'>Broker Webpage</a>
          </section>
        </section>
      </main>
    </>
  )
}

export default App
