import SectionHeader from "../components/SectionHeader";

export default function About(){
  return (
    <>
      <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me">
        <SectionHeader text={"About"} />
        <div>
          <p className="mb-4">Back in 2008, I decided to try my hand at Half Life 2 modding and ended up stumbling upon a career in software development. Fast-forward to today, and I have had the privilege of building software for a 
            <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.immersivetouch.com/" target="_blank" rel="noreferrer noopener" aria-label="Start up (opens in a new tab)"> Start-up</a>
          , a 
          <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.dexcom.com/en-us" target="_blank" rel="noreferrer noopener" aria-label="Large Corporation (opens in a new tab)"> Large Corporation</a>
          , and an 
          <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.scholastic.com/home" target="_blank" rel="noreferrer noopener" aria-label="Educational staple (opens in a new tab)"> Educational staple</a>
          .
          </p>
          <p className="mb-4">My main focus these days is building connected applications with an intuitive user experience. I most enjoy building software that pushes the boundary of user expectations - something that is approachable and familiar while bringing something unexpected to the table.</p>
          <p className="mb-4">When I am not immersed in development, you can find me on the golf course, writing music, making a lasagna from scratch, or spending quality time with my Shih-Tzu.</p>
          <p></p>
        </div>
      </section>
    </>
  );
}
      