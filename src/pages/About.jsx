import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const About = () => {
  return (
    <>
      <div className="w-full  text-white">
      {/* Mission Section */}
      <section className="relative w-full min-h-screen">
        <img
          src={"./src/assets/about7.jpg"}
          alt="Team collaboration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-linear-to-t from-dark-bg via-dark-bg/60 to-transparent"></div>


        <div className="relative container mx-auto px-6 py-16 h-full min-h-screen flex items-end">
          <div className="max-w-2xl pb-12 md:pb-16 bg-dark-bg/80 backdrop-blur-sm p-8 md:p-10 rounded-lg border border-dark-border/50">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
              The Team: Helping Millions Grow Better
            </h3>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-serif">
              Our aims are to maximize individuals' career potential, develop
              key educational competencies, and shift the community's focus
              towards socio-economic and value chain systems positively.
            </p>
          </div>
        </div>
      </section>
    

        {/* Story Section */}
        <section className="py-20 container  mx-auto px-6">
          <div className="mb-10">
            <h3 className="text-3xl font-bold mb-4 text-white">Our Story</h3>
            <p className="text-lg leading-relaxed text-white">
              The M.O. Agbakaja Educational Foundation is an inspirational
              concept of Chief Chijoke Agbakaja (Ikenga Ozuakoli-Urualla), who
              thought it wise to expand his educational support to the citizens
              of Urualla and beyond to the Educational Foundation in honour of
              his Father Mr. Marcel O. Agbakaja. Mr. M.O Agbakaja served the
              Nation as an erudite teacher in various capacities and became a
              motivator par excellence that earned him the popular pet name
              “Mii-sa” (Onye-nkuzi). In his efforts to improve the
              society/community, ‘Mii-sa’, together with his cohort severally
              founded Urualla Graduate Association (UGA), Urualla Development
              Auction Committee (UDAC) (which gave birth to Comprehensive
              Secondary school, Urualla), and the Cooperative Association in
              Urualla, among many others. It is against this backdrop that his
              son (Ikenga) decided to honour him now that he is alive, hale, and
              hearty. The Educational foundation is to be enhanced to be
              self-sustaining through “one for two” principle. This implies that
              one successful beneficiary shall surely produce one person more
              for the Foundation, thereby making it a sustainable Organization
              that shall out-live the founders. With the same ideals, we promote
              the value of sound professionalism and demonstrate that “education
              is a good business” and is a core component of a healthy
              Community.
            </p>
          </div>

          {/* Multiple Images on Same Line */}
          {/* <div className="grid md:grid-cols-3 gap-6">
            <img
              src="./src/assets/about01.jpeg"
              alt="our story 1"
              className="rounded-xl shadow-md w-full h-full object-cover"
            />
            <img
              src="./src/assets/about5.jpg"
              alt="our story 2"
              className="rounded-xl shadow-md w-full h-64 object-cover"
            />
            <img
              src="./src/assets/about2.jpeg"
              alt="our story 3"
              className="rounded-xl shadow-md w-full h-full object-cover"
            />
          </div> */}
        </section>

        
        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Our Board Members
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Leader */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center ">
                <a href="/Profile">
                  {" "}
                  <img
                    src="/assets/profile7.jpg"
                    alt="Leader"
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <h3 className="text-xl font-semibold mb-2">Ifeanyi Eze</h3>
                <p className="text-gray-600">President</p>
                <div className="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <a href="/Profile">
                  {" "}
                  <img
                    src="/assets/profile1.jpg"
                    alt="Leader"
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <h3 className="text-xl font-semibold mb-2">
                  Okechukwu Ndubuisi
                </h3>
                <p className="text-gray-600">Vice president</p>
                <div className="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
              {/* Team Member 2 */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <a href="/Profile">
                  {" "}
                  <img
                    src="/assets/profile5.jpg"
                    alt="Leader"
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <h3 className="text-xl font-semibold mb-2">Chinedu Alumona</h3>
                <p className="text-gray-600"> Secretary</p>
                <div className="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
              {/* Team Member 3 */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <a href="/Profile">
                  {" "}
                  <img
                    src="/assets/profile2.jpg"
                    alt="Leader"
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <h3 className="text-xl font-semibold mb-2">Ernest Asogwa</h3>
                <p className="text-gray-600">CFO Outreach</p>
                <div className="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center ">
                <a href="/Profile">
                  {" "}
                  <img
                    src="/assets/profile7.jpg"
                    alt="Leader"
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <h3 className="text-xl font-semibold mb-2">Ifeanyi Eze</h3>
                <p className="text-gray-600">President</p>
                <div className="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center ">
                <a href="/Profile">
                  {" "}
                  <img
                    src="/assets/profile7.jpg"
                    alt="Leader"
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <h3 className="text-xl font-semibold mb-2">Ifeanyi Eze</h3>
                <p className="text-gray-600">President</p>
                <div className="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center ">
                <a href="/Profile">
                  {" "}
                  <img
                    src="/assets/profile7.jpg"
                    alt="Leader"
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <h3 className="text-xl font-semibold mb-2">Ifeanyi Eze</h3>
                <p className="text-gray-600">President</p>
                <div className="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center ">
                <a href="/Profile">
                  {" "}
                  <img
                    src="/assets/profile7.jpg"
                    alt="Leader"
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <h3 className="text-xl font-semibold mb-2">Ifeanyi Eze</h3>
                <p className="text-gray-600">President</p>
                <div className="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
