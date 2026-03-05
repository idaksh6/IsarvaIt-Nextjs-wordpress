import Image from "next/image";

export const metadata = {
  title: "About Us - My App",
  description: "Learn more about our company and mission",
};

export default function     () {
  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            About Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We are passionate about building amazing web experiences using cutting-edge technologies.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                We believe in creating digital solutions that make a difference. Our team is dedicated to 
                delivering high-quality applications that combine beautiful design with powerful functionality.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Using modern frameworks like Next.js and Tailwind CSS, we ensure our applications are 
                fast, accessible, and built to scale.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-8">
                <Image
                  className="dark:invert"
                  src="/next.svg"
                  alt="Next.js logo"
                  width={200}
                  height={41}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full bg-indigo-100 dark:bg-indigo-900 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Performance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We optimize every aspect to ensure lightning-fast load times and smooth user experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full bg-green-100 dark:bg-green-900 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every line of code is crafted with attention to detail and follows industry best practices.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We work closely with our clients to understand their needs and deliver exactly what they envision.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">John Doe</h3>
              <p className="text-gray-600 dark:text-gray-300">Lead Developer</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Jane Smith</h3>
              <p className="text-gray-600 dark:text-gray-300">UI/UX Designer</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mike Johnson</h3>
              <p className="text-gray-600 dark:text-gray-300">Project Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}