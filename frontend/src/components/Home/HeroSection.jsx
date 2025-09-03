import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#E6F3FF] via-[#CCE9FF] to-[#99D0FF]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <p className="text-[#0089FF] font-semibold uppercase tracking-wide">
            EXPERT SURGERY, ALWAYS
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
Best General & Laparoscopic Surgeon in Jaipur
          </h1>
          <p className="mt-6 text-gray-700 max-w-lg mx-auto md:mx-0">
            Dr. Amit Bengani provides advanced treatments for hernia, piles, gallbladder stones, and more. Honest guidance, patient comfort, and safe recovery every step of the way
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href='/contact'>
            <button className="bg-gradient-to-r from-[#0089FF] to-[#005FCC] hover:scale-105 transition-transform text-white font-semibold px-7 py-3 rounded-lg shadow-lg">
              Contact Us
            </button>
            </Link>
            <Link href='/about'>
            <button className="border-2 border-[#0089FF] text-[#0089FF] hover:bg-[#E6F3FF] transition font-semibold px-7 py-3 rounded-lg">
              Learn More
            </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div className="absolute -z-10 w-80 h-80 bg-[#B3E6FF] rounded-full blur-3xl opacity-40"></div>
          <img
            src="/jain2.png"
            alt="Doctor"
            className="w-full max-w-sm object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
