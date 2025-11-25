import { useRef } from 'react';
import {
  StoreRounded,
  LocalPhoneRounded,
  CheckCircleRounded,
} from '@mui/icons-material';
import DMVlogo from '@assets/dmv-logo.png';
import { useIntersectionObserver } from '@/lib/useIntersectionObserver';
import sunrays from '@assets/logo-sunrays.png';
import mainlogo from '@assets/logo-main.png';

const INTERSECT_THESHOLD = 0.4;

const HomePage = () => {
  const addressBoxRef = useRef(null);
  const phoneBoxRef = useRef(null);
  const dmvRef = useRef(null);
  const marketingRef = useRef(null);
  const imagesRef = useRef(null);
  const locationRef = useRef(null);
  const footerRef = useRef(null);

  const isAddressBoxVisible = useIntersectionObserver(addressBoxRef, {
    threshold: INTERSECT_THESHOLD,
  });
  const isPhoneBoxVisible = useIntersectionObserver(phoneBoxRef, {
    threshold: INTERSECT_THESHOLD,
  });
  const isDmvVisible = useIntersectionObserver(dmvRef, {
    threshold: INTERSECT_THESHOLD,
  });
  const isMarketingVisible = useIntersectionObserver(marketingRef, {
    threshold: INTERSECT_THESHOLD,
  });
  const isImgsVisible = useIntersectionObserver(imagesRef, {
    threshold: INTERSECT_THESHOLD,
  });
  const isLocationVisible = useIntersectionObserver(locationRef, {
    threshold: INTERSECT_THESHOLD,
  });
  const isFooterVisible = useIntersectionObserver(footerRef, {
    threshold: INTERSECT_THESHOLD,
  });

  return (
    <div
      id="home"
      className="flex flex-col h-full w-full bg-[var(--bg-homepage)] justify-start items-center-safe"
    >
      <div className="flex flex-col w-full max-w-6xl items-center justify-center">
        <div className="relative w-[400px] h-[400px]">
          <img
            className="absolute inset-0 transition-all sunray"
            src={sunrays}
          />
          <img className="absolute inset-0" src={mainlogo} />
        </div>
        <div className="flex w-full flex-col px-4 mt-[-3rem] md:flex-row md:px-0 md:gap-x-8 justify-center items-center md:max-w-2xl">
          <div
            ref={addressBoxRef}
            className={`bg-white px-4 py-8 md:w-1/2 w-full flex flex-row rounded-md shadow-md home-element-transition ${
              isAddressBoxVisible ? 'home-hover-action' : 'opacity-0'
            }`}
          >
            <StoreRounded sx={{ color: '#f59e0b' }} fontSize="large" />
            <div className="flex flex-col ml-2">
              <a
                href="https://maps.app.goo.gl/SEifnRz1yAToK5Pf8"
                className="underline text-lg font-medium"
                aria-label="131 Industrial Road, Suite 12, Belmont, CA 94002"
              >
                131 Industrial Road, Suite 12,
                <br />
                Belmont, CA 94002
              </a>
            </div>
          </div>
          <a
            ref={phoneBoxRef}
            href="tel:16507329732"
            className={`bg-white px-4 py-8 md:w-1/2 w-full flex flex-row rounded-md shadow-md mt-8 items-center home-element-transition md:mt-0 ${
              isPhoneBoxVisible ? 'home-hover-action' : 'opacity-0'
            }`}
            aria-label="650-732-9732"
          >
            <div>
              <LocalPhoneRounded sx={{ color: '#f59e0b' }} fontSize="large" />
            </div>
            <div className="flex flex-col ml-2">
              <p className="font-medium text-2xl">650-732-9732</p>
            </div>
          </a>
        </div>
      </div>
      <div className="flex bg-white mt-12 w-full justify-center items-center">
        <div
          ref={dmvRef}
          className={`flex flex-col p-8 text-center items-center max-w-6xl home-element-transition ${
            isDmvVisible ? 'home-hover-action' : 'opacity-0'
          }`}
        >
          <h3 className="text-2xl font-medium">
            Trust Smogday for all your emmisions needs.
          </h3>
          <div className="relative">
            <img src={DMVlogo} className="mt-8 w-48" />
            <CheckCircleRounded
              className="absolute bottom-0 right-[-1rem] mt-6 z-50"
              sx={{ color: '#15803D', fontSize: '3rem' }}
            />
          </div>
          <h3 className="font-bold text-2xl mt-2">
            We work directly with DMV to get you smog approved{' '}
            <span className="underline">instantly</span>!
          </h3>
        </div>
      </div>
      <div className="flex flex-col w-full bg-[var(--bg-homepage)] pt-12 px-8 items-center">
        <div
          ref={marketingRef}
          className={`flex flex-col text-center justify-center items-center max-w-6xl home-element-transition ${
            isMarketingVisible ? 'home-hover-action' : 'opacity-0'
          }`}
        >
          <p className="text-white font-bold text-3xl">
            In and out quick! ✅
            <br />
            <br />
            Pass or <span className="text-[var(--bg-nav)]">
              FREE RETEST*
            </span>{' '}
            within 30 days ✅
          </p>
          <p className="text-slate-700 mt-2">
            *Non-STAR Directed Vehicles: Only vehicles from the year 2000 or
            newer are eligible.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full bg-[var(--bg-nav)] mt-8">
        <div
          ref={imagesRef}
          className={`flex gap-x-2 md:flex-row flex-col px-4 py-8 md:gap-x-8 gap-y-4 home-element-transition ${
            isImgsVisible ? 'home-hover-action' : 'opacity-0'
          }`}
        >
          <img
            src="https://static.wixstatic.com/media/2b6b90_153af15a03ac4754abd087dfe17507b5~mv2.png/v1/fill/w_459,h_375,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1206_HEIC.png"
            className="w-full flex-1 object-cover"
          />
          <img
            src="https://static.wixstatic.com/media/2b6b90_034b5102c3014cf784634e7eeef9ccc1~mv2.jpeg/v1/fill/w_423,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1201.jpeg"
            className="w-full flex-1 object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-full px-4 py-8 bg-[var(--bg-nav)]">
        <div
          id="location"
          className={`flex justify-center items-center max-w-6xl w-full home-element-transition ${
            isLocationVisible ? 'home-hover-action' : 'opacity-0'
          }`}
          ref={locationRef}
        >
          <iframe
            className="w-full h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.4556283854586!2d-122.26874182306932!3d37.52075552675008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9f91b0e0a585%3A0x8231a88708e2cd6e!2sSmogDay!5e0!3m2!1sen!2sus!4v1764038982758!5m2!1sen!2sus"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="flex w-full bg-[var(--bg-nav)] items-center justify-center text-center py-12">
        <div
          ref={footerRef}
          className={`flex flex-col max-w-6xl w-full items-center justify-center home-element-transition ${
            isFooterVisible ? 'home-hover-action' : 'opacity-0'
          }`}
        >
          <h2 className="uppercase text-7xl font-SpaceGrotesk font-normal">
            Smogday
          </h2>
          <a
            href="https://maps.app.goo.gl/SEifnRz1yAToK5Pf8"
            className="text-2xl font-semibold mt-4"
            aria-label="131 Industrial Road, Suite 12, Belmont, CA 94002"
          >
            131 Industrial Road, Suite 12,
            <br />
            Belmont, CA 94002
          </a>
          <a
            href="tel:16507329732"
            className="text-2xl font-semibold mt-2"
            aria-label="650-732-9732"
          >
            650-732-9732
          </a>
          <a
            href="tel:16507329732"
            className="font-SpaceGrotesk text-2xl bg-black text-[var(--bg-nav)] w-48 uppercase py-4 px-8 mt-8 hover:bg-[var(--bg-nav)] hover:text-black border-2 border-black hover:cursor-pointer font-semibold"
            aria-label="Call now"
          >
            Call now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
