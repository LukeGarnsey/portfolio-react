import SectionHeader from "../components/SectionHeader";

export default function About(){
  return (
    <>
      <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me">
        <SectionHeader text={"About"} />
        <div>
          <p className="mb-4">Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an
            <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="google.com" target="_blank" rel="noreferrer noopener" aria-label="what is this?">
              link to work statement
            </a>
          </p>
          <p className="mb-4">With a decade of experience crafting fully featured applications in various languages and specializing in the MERN stack, I am passionate about creating seamless user experiences. My diverse skill set extends beyond code to include pixel art and music composition, allowing me to infuse creativity into every project. When not immersed in development, you can find me on the golf course or spending quality time with my Shih-Tzu.</p>
          <p></p>
        </div>
      </section>
    </>
  );
}
      