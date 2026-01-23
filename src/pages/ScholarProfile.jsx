import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ScholarProfile = () => {
  return (
    <>
       {/*Meet our current scholarship students  */}
        <div className="-600 py-24">
          <h1 className="text-4xl font-bold text-center text-white">
            Meet Our Scholars
          </h1>
          <p className="text-center text-white mt-4">
            Discover the inspiring stories of our scholarship recipients.
          </p>
        </div>
        <section className='text-white'>
            <div className="container mx-auto px-4  text-white">
              <div className="bg-black rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8">
                {/* Left: Profile Image */}
                <div className="shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
                  <img
                    src="/assets/port9.jpeg"
                    alt="Profile"
                    className="w-64 h-80 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Right: Profile Info */}
                <div className="w-full md:w-2/3 text-left">
                  <h2 className="text-3xl font-bold mb-4">About Me</h2>
                  <p className=" mb-6">
                    Hello! I'm Nwabueze Goodness Chetachukwu.
                    A 500 level undergraduate of Micheal Okpara University of Agriculture Umudike,
                    studying Veterinary Medicine.
                    Feel free to reach out to me for any
                    collaborations or just to say hi!
                  </p>

                  {/* Profile Details */}
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Name:</span> Nwabueze Goodness Chetachukwu
                    </p>
                    <p>
                      <span className="font-semibold">Location:</span>{" "}
                      Nigeria,...........
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span> Eze@example.com
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span> +234 456 789
                    </p>
                  </div>

                  {/* Button */}
                  {/* <div className="mt-6">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
                      Download CV
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </section>

          <section className=''>
            <div className="container mx-auto px-4 py-12 ">
              <div className="bg-black text-white rounded-lg shadow-lg p-8 flex flex-col  md:flex-row gap-8">
                {/* Left: Profile Image */}
                <div className="shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
                  <img
                    src="/assets/port8.jpeg"
                    alt="Profile"
                    className="w-64 h-80 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Right: Profile Info */}
                <div className="w-full md:w-2/3 text-left">
                  <h2 className="text-3xl font-bold mb-4">About Me</h2>
                  <p className=" mb-6">
                    Hello! I'm Egbueri Oluebube Mirian.
                    A 200 Level from Imo State University Owerri,
                    studying Political Science.
                    Feel free to reach out to me for any
                    collaborations or just to say hi!
                  </p>

                  {/* Profile Details */}
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Name:</span> Egbueri Oluebube Mirian
                      Ndubuisi
                    </p>
                    <p>
                      <span className="font-semibold">Location:</span>{" "}
                      Nigeria,...........
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span>  oluebubemirian1@gmail.com
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span> +234 8106284517
                    </p>
                  </div>

                  {/* Button */}
                  {/* <div className="mt-6">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
                      Download CV
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container mx-auto px-4 py-12">
              <div className="bg-black text-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8">
                {/* Left: Profile Image */}
                <div className="shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
                  <img
                    src="/assets/port7.jpeg"
                    alt="Profile"
                    className="w-64 h-80 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Right: Profile Info */}
                <div className="w-full md:w-2/3 text-left">
                  <h2 className="text-3xl font-bold mb-4">About Me</h2>
                  <p className=" mb-6">
                    Hello! I'm Emmanuel Precious Chinyere.
                    A 300 Level undergraduate from College of Nursing Science Adazi Nnukwu,
                    studying Basic Midwifery.
                    Feel free to reach out to me for any
                    collaborations or just to say hi!
                  </p>

                  {/* Profile Details */}
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Name:</span> Emmanuel Precious Chinyere
                    </p>
                    <p>
                      <span className="font-semibold">Location:</span>{" "}
                      Nigeria,...........
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span> emma22precious@gmail.com
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span> +234 9030046481
                    </p>
                  </div>

                  {/* Button */}
                  {/* <div className="mt-6">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
                      Download CV
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container mx-auto px-4 py-12">
              <div className="bg-black text-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8">
                {/* Left: Profile Image */}
                <div className="shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
                  <img
                    src="/assets/port6.jpeg"
                    alt="Profile"
                    className="w-64 h-80 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Right: Profile Info */}
                <div className="w-full md:w-2/3 text-left">
                  <h2 className="text-3xl font-bold mb-4">About Me</h2>
                  <p className=" mb-6">
                    Hello! I'm Onuigwe Chikanyima Rita-Chelsea.
                    An undergraduate from the University of Nigeria Nsukka (UNN),
                    studying Economics; Entering 200 Level next year.
                    Feel free to reach out to me for any
                    collaborations or just to say hi!
                  </p>

                  {/* Profile Details */}
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Name:</span> Onuigwe Chikanyima Rita-Chelsea
                    </p>
                    <p>
                      <span className="font-semibold">Location:</span>{" "}
                      Nigeria,...........
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span> Kanyima255@gmail.com
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span> +234 9073062943
                    </p>
                  </div>

                  {/* Button */}
                  {/* <div className="mt-6">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
                      Download CV
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container mx-auto px-4 py-12 ">
              <div className="bg-black text-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8">
                {/* Left: Profile Image */}
                <div className="shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
                  <img
                    src="/assets/port5.jpeg"
                    alt="Profile"
                    className="w-64 h-80 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Right: Profile Info */}
                <div className="w-full md:w-2/3 text-left">
                  <h2 className="text-3xl font-bold mb-4">About Me</h2>
                  <p className=" mb-6">
                    Hello! I'm Ejezie Chidimma Ann.
                    A Graduate form the University of Nigeria Nsukka (UNN),
                    studied Social Works.
                    Feel free to reach out to me for any
                    collaborations or just to say hi!
                  </p>

                  {/* Profile Details */}
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Name:</span> Ejezie Chidimma Ann
                    </p>
                    <p>
                      <span className="font-semibold">Location:</span>{" "}
                      Nigeria,...........
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span> Eze@example.com
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span> +234 916506406
                    </p>
                  </div>

                  {/* Button */}
                  {/* <div className="mt-6">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
                      Download CV
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container mx-auto px-4 py-12">
              <div className="bg-black text-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8">
                {/* Left: Profile Image */}
                <div className="shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
                  <img
                    src="/assets/port4.jpeg"
                    alt="Profile"
                    className="w-64 h-80 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Right: Profile Info */}
                <div className="w-full md:w-2/3 text-left">
                  <h2 className="text-3xl font-bold mb-4">About Me</h2>
                  <p className="mb-6">
                    Hello! I'm Okwesirieze Henry Chidubem.
                    A 200 Level undergraduate from Michael Okpara University of Agriculture Umudike,
                    studying Civil Engineering.
                    Feel free to reach out to me for any
                    collaborations or just to say hi!
                  </p>

                  {/* Profile Details */}
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Name:</span> Okwesirieze Henry Chidubem
                    </p>
                    <p>
                      <span className="font-semibold">Location:</span>{" "}
                      Nigeria,...........
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span> henryceeokwesirieze@gmail.com
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span> +234 9074511051
                    </p>
                  </div>

                  {/* Button */}
                  {/* <div className="mt-6">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
                      Download CV
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container mx-auto px-4 py-12">
              <div className="bg-black text-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8">
                {/* Left: Profile Image */}
                <div className="shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
                  <img
                    src="/assets/port11.jpeg"
                    alt="Profile"
                    className="w-64 h-80 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Right: Profile Info */}
                <div className="w-full md:w-2/3 text-left">
                  <h2 className="text-3xl font-bold mb-4">About Me</h2>
                  <p className=" mb-6">
                    Hello! I'm Ewulu Tobechukwu Anthony.
                    A grduate from Micheal Okpara University of Agriculture Umudike,
                    studied Economics.
                    I'm deeply grateful to the foundation whose generous support made my undergraduate education possible and turned my dreams into reality.
                    Feel free to reach out to me for any
                    collaborations or just to say hi!
                  </p>

                  {/* Profile Details */}
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Name:</span> Ewulu Tobechukwu Anthony
                    </p>
                    <p>
                      <span className="font-semibold">Location:</span>{" "}
                      Nigeria,...........
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span> Eze@example.com
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span> +234 456 789
                    </p>
                  </div>

                  {/* Button */}
                  {/* <div className="mt-6">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
                      Download CV
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container mx-auto px-4 py-12">
              <div className="bg-black text-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8">
                {/* Left: Profile Image */}
                <div className="shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
                  <img
                    src="/assets/port10.jpg"
                    alt="Profile"
                    className="w-64 h-80 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Right: Profile Info */}
                <div className="w-full md:w-2/3 text-left">
                  <h2 className="text-3xl font-bold mb-4">About Me</h2>
                  <p className=" mb-6">
                    Hello! I'm Ndubuaku Chioma Esther. 
                    A 200 Level undergraduate from University of Agriculture and Environment Science Unuagwo,
                    studying Busines Administration.
                    Feel free to reach out to me for any
                    collaborations or just to say hi!
                  </p>

                  {/* Profile Details */}
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Name:</span> Ndubuaku Chioma Esther
                    </p>
                    <p>
                      <span className="font-semibold">Location:</span>{" "}
                      Nigeria,...........
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span> Eze@example.com
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span> +234 456 789
                    </p>
                  </div>

                  {/* Button */}
                  {/* <div className="mt-6">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
                      Download CV
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container mx-auto px-4 py-12">
              <div className="bg-black text-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8">

                <div className="shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
                  <img
                    src="/assets/port2.jpeg"
                    alt="Profile"
                    className="w-64 h-80 object-cover rounded-lg shadow-md"
                  />
                </div>

                <div className="w-full md:w-2/3 text-left">
                  <h2 className="text-3xl font-bold mb-4">About Me</h2>
                  <p className=" mb-6">
                    Hello! I'm Uzomba Peter Ogemdi, 
                    A Biochemistry graduate from the Federal University of Technology Owerri.
                    I thank the M.O Agbakaja Education for investing in human capital development through education.
                    Feel free to reach out to me for any collaborations or just to say hi!
                  </p>

                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Name:</span>  Uzomba Peter Ogemdi
                    </p>
                    <p>
                      <span className="font-semibold">Location:</span>{" "}
                      Nigeria,...........
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span> Eze@example.com
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span> +234 456 789
                    </p>
                  </div>


                  {/* <div className="mt-6">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
                      Download CV
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </section>

          {/* <section>
            <div className="container mx-auto px-4 py-12">
              <div className="bg-black text-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8">
 
                <div className="shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
                  <img
                    src="/assets/profile6.jpg"
                    alt="Profile"
                    className="w-64 h-80 object-cover rounded-lg shadow-md"
                  />
                </div>

                <div className="w-full md:w-2/3 text-left">
                  <h2 className="text-3xl font-bold mb-4">About Me</h2>
                  <p className=" mb-6">
                    Hello! I'm Felix Ogwudile, a passionate member of the WAWA Club.
                    I love connecting with people from different cultures and
                    backgrounds. In my free time, I enjoy reading, traveling, and
                    exploring new cuisines. Feel free to reach out to me for any
                    collaborations or just to say hi!
                  </p>


                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Name:</span> Felix Ogwudile
                    </p>
                    <p>
                      <span className="font-semibold">Location:</span>{" "}
                      Nigeria,...........
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span> Eze@example.com
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span> +234 456 789
                    </p>
                  </div>

                  <div className="mt-6">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
                      Download CV
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* <section>
            <div className="container mx-auto px-4 py-12">
              <div className="bg-black text-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8">

                <div className="shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
                  <img
                    src="/assets/profile5.jpg"
                    alt="Profile"
                    className="w-64 h-80 object-cover rounded-lg shadow-md"
                  />
                </div>

                <div className="w-full md:w-2/3 text-left">
                  <h2 className="text-3xl font-bold mb-4">About Me</h2>
                  <p className=" mb-6">
                    Hello! I'm Chukwuemeka Ude, a passionate member of the WAWA
                    Club. I love connecting with people from different cultures and
                    backgrounds. In my free time, I enjoy reading, traveling, and
                    exploring new cuisines. Feel free to reach out to me for any
                    collaborations or just to say hi!
                  </p>

                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Name:</span> Chukwuemeka Ude
                    </p>
                    <p>
                      <span className="font-semibold">Location:</span>{" "}
                      Nigeria,...........
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span> Eze@example.com
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span> +234 456 789
                    </p>
                  </div>

                  <div className="mt-6">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
                      Download CV
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
      </>
  )
}

export default ScholarProfile