// Correct the import statement to include the correct file name
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className='max-w-6xl mx-auto'>
      <nav className="flex justify-between items-center py-2">
        <h1 className="font-bold tracking-tighter text-2xl">LoreIpsum</h1>
        <ul className="md:flex space-x-4 hidden">
          <li className="font-bold px-2 cursor-pointer">Diensten</li>
          <li className="font-bold px-2 cursor-pointer">Over Ons</li>
          <li className="font-bold px-2 cursor-pointer">Contact</li>
        </ul>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Start nu</button>
      </nav>
      <Hero />
    </div>
  );
}
