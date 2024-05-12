import IconAnimateBack from "../components/Animate/IconAnimateBack";
import Spotlight from "../components/Animate/Spotlight";
import ArchiveItem from "../components/archive/ArchiveItem";

export default function Archive(){

    return (
    <>
        <Spotlight />
        <div className="lg:py-24">
            <a className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300" href="/">
                <IconAnimateBack />
                Luke Garnsey
            </a>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                All Projects
            </h1>

            <table className="mt-12 w-full border-collapse text-left">
                <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                    
                    <tr>
                        <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                        <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Made at</th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
                    </tr>
                </thead>
                <tbody>
                <ArchiveItem year={"2023"} project={"Throw Stones"} madeAt={"filament"} builtWithChips={["TypeScript", "JavaScript"]} link={"https://google.com"}/>
                </tbody>
            </table>
        </div>
    </>);
}