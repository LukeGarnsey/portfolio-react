import NavJumpItem from "../components/NavJumpItem";
import SocialList from "../components/SocialList";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Home(){

  
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute">
        
      </div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <a href="#content" className="absolute left-0 top-0 block -translate-x-full round-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppdercase tracus-visible:translate-x-0"></a>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"><a href="/">Luke Garnsey</a></h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Senior Fullstack Engineer</h2>
              <p className="mt-4 max-w-xs leading-normal">I build pixel-perfect, engaging, and accessible digital experiences.</p>
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  <li>
                    <NavJumpItem text={"About"} href={"#about"} />
                    <NavJumpItem text={"Experience"} href={"#experience"} />
                    <NavJumpItem text={"Projects"} href={"#projects"} />
                  </li>
                </ul>
              </nav>
            </div>
            <SocialList/>
          </header>
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />

            <footer>
              
            </footer>
          </main>
        </div>
        
        
      </div>
    </>
  );
}