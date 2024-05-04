import { mainHero } from '../app/content'

const Hero = () => {
    return ( 
        <div className="gap-4 py-8 md:py-10 ">
			<div className="grid grid-cols-12 px-2 items-center gap-8">
				<div className="col-span-6 text-left">
					<h1 className="text-6xl font-bold tracking-tight">{mainHero.h1}</h1>
					<p className="text-xl font-base tracking-tight py-6">{mainHero.paragraaf}</p>
					<button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xl mt-2">Neem contact op</button>
				</div>
				<div className="col-span-6">
					<img className="rounded-lg p-4" src="/business-idea.svg" alt="An SVG of an eye" />
				</div>
			</div>
        </div>
     );
}
 
export default Hero;
