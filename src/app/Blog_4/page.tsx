"use client";

import Image from 'next/image';
import Head from 'next/head';
import Particle from '../Particles'; // Optional, if you have a particle effect

export default function BlogPost() {
  return (
    <div className="container mx-auto px-4 py-8 bg-[#1f2937] text-white h-auto">
      <Head>
        <title>Sustainability and Green Technology: A Greener Future</title>
        <meta name="description" content="Explore how green technologies like renewable energy, energy efficiency, and sustainable computing are shaping a greener and more sustainable future." />
      </Head>

      <div className="flex flex-col items-center justify-center text-center">
        <Image
          src="/blogimages/Sustainability and Green Technol (2).png" // Replace with your actual image path
          alt="Sustainability and Green Technology"
          width={600}
          height={400}
          className="object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
        <h1 className="mt-8 text-4xl md:text-5xl font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-300 to-gray-500">
          Sustainability and Green Technology: A Greener Future
        </h1>
      </div>

      <div className="max-w-screen-2xl mx-auto mt-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 rounded-lg shadow-xl text-white">
        <p className="mb-6 text-[22px] md:text-[28px] text-opacity-75 leading-relaxed">
          In today's rapidly evolving world, the growing urgency of environmental issues has brought sustainability to the forefront of global discussions. The intersection of technology and sustainability is particularly critical, as technological advancements can play a pivotal role in addressing the pressing challenges of climate change, resource depletion, and environmental degradation.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-300 to-gray-500">
          The Growing Importance of Sustainability in Technology
        </h2>
        <p className="mb-6 text-[22px] md:text-[28px] text-opacity-75 leading-relaxed">
          Technological advancements have transformed our lives but also contributed to environmental problems like greenhouse gas emissions and resource depletion. It is crucial to recognize the potential for technology to address these challenges through sustainable solutions.
        </p>

        <ul className="space-y-6 text-[22px] md:text-[28px]">
          <li>
            <strong className="text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-300 to-gray-500">
              Renewable Energy:
            </strong> Harnessing natural, replenishable energy sources like solar, wind, and hydropower provides a cleaner alternative to fossil fuels.
          </li>
          <li>
            <strong className="text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-300 to-gray-500">
              Solar Energy:
            </strong> Advances in solar panel efficiency offer a sustainable, cost-effective way to generate power from sunlight.
          </li>
          <li>
            <strong className="text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-300 to-gray-500">
              Wind Energy:
            </strong> Wind turbines are capturing more of the kinetic energy in wind, turning it into electricity and reducing reliance on non-renewable resources.
          </li>
          <li>
            <strong className="text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-300 to-gray-500">
              Hydropower:
            </strong> Using water to generate electricity is an ancient method, but modern advancements have made it even more efficient.
          </li>
        </ul>

        <h2 className="mt-12 mb-6 text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-300 to-gray-500">
          Energy Efficiency: Reducing Consumption and Waste
        </h2>
        <p className="text-[22px] md:text-[28px] text-opacity-75 leading-relaxed mb-4">1. Energy-Efficient Appliances:</p>
        <p className="text-[22px] md:text-[28px] text-opacity-75 leading-relaxed mb-6">
          Appliances designed to consume less energy help reduce overall energy use while maintaining performance.
        </p>

        <p className="text-[22px] md:text-[28px] text-opacity-75 leading-relaxed mb-4">2. Smart Grids:</p>
        <p className="text-[22px] md:text-[28px] text-opacity-75 leading-relaxed mb-6">
          Integrating smart technology into power grids optimizes energy distribution and incorporates renewable energy sources effectively.
        </p>

        <p className="text-[22px] md:text-[28px] text-opacity-75 leading-relaxed mb-4">3. Sustainable Buildings:</p>
        <p className="text-[22px] md:text-[28px] text-opacity-75 leading-relaxed mb-6">
          Energy-efficient buildings utilize better insulation, lighting, and renewable energy systems to reduce energy waste.
        </p>

        <h2 className="mt-12 mb-6 text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-300 to-gray-500">
          Sustainable Computing: Reducing Tech's Environmental Impact
        </h2>
        <p className="text-[22px] md:text-[28px] text-opacity-75 leading-relaxed">
          Sustainable computing involves reducing the carbon footprint of technology, from energy-efficient hardware to managing electronic waste responsibly.
        </p>
      </div>

      <Particle />
    </div>
  );
}
