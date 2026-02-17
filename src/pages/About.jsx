import React from "react";
import { FaEnvelope, FaFacebook } from "react-icons/fa";

export const About = () => {
  // const members = [ { name: " Mr. Marcel O. Agbakaja", role: "Founder", img: "/assets/about01.jpeg" },
  //   { name: "Chijoke Anthony Agbakaja ", role: "Benefactor", img: "/assets/about2.jpeg" },
  //   { name: "Chief Christian Asubike Enwuru Ph.D. ", role: "Chairman", img: "/assets/lord3.jpg" },
  //   { name: "Ernest Asogwa", role: "CFO Outreach", img: "/assets/about9.jpg" },
  //   { name: "Dr. (Sir.) Paulinus Chika Enwuru", role: "Member", img: "/assets/port1.jpeg" },
  //   { name: "Ifeanyi Eze", role: "President", img: "/assets/unknown1.jpeg" }, ];
  return (
    <>
      <div className="w-full  text-white">
        {/* Mission Section */}
        <section className="relative w-full min-h-screen">
          <img
            src={"/assets/about7.jpg"}
            alt="Team collaboration"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-dark-bg via-dark-bg/60 to-transparent"></div>

          <div className="relative container mx-auto px-6 py-16 h-full min-h-screen flex items-end">
            <div className="max-w-2xl pb-12 md:pb-16 bg-dark-bg/80 backdrop-blur-sm p-8 md:p-10 rounded-lg border border-dark-border/50">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
                The Team: Helping Millions Grow Better
              </h3>
              <p className="text-sm md:text-base text-white/90 leading-relaxed font-serif">
                Empowering individuals. Building excellence. Creating positive
                community change.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-10 container  mx-auto px-6">
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
              “Mii-sa” (Onye-nkuzi). <br /> In his efforts to improve the
              society/community, ‘Mii-sa’, together with his cohort severally
              founded Urualla Graduate Association (UGA), Urualla Development
              Auction Committee (UDAC) (which gave birth to Comprehensive
              Secondary school, Urualla), and the Cooperative Association in
              Urualla, among many others. <br /> It is against this backdrop
              that his son (Ikenga) decided to honour him now that he is alive,
              hale, and hearty. The Educational foundation is to be enhanced to
              be self-sustaining through “one for two” principle. <br /> This
              implies that one successful beneficiary shall surely produce one
              person more for the Foundation, thereby making it a sustainable
              Organization that shall out-live the founders. With the same
              ideals, we promote the value of sound professionalism and
              demonstrate that “education is a good business” and is a core
              component of a healthy Community.
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
        <section className="py-10 ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Our Board Members
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Leader */}
              <div className=" backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-lg text-center ">
                <a href="#">
                  {" "}
                  <img
                    src="/assets/about01.jpeg"
                    alt="Leader"
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <h3 className="text-xl font-semibold mb-2">
                  {" "}
                  Mr. Marcel O. Agbakaja.
                </h3>
                <p className="text-gray-600">Honorary</p>
                <div className="flex flex-col items-center mt-4 space-y-4">
                  <a  className="text-white hover:text-blue-800">
                    <FaEnvelope />
                  </a>
                  <a className="text-white hover:text-blue-600">
                    <FaFacebook />
                  </a>
                </div>
              </div>

              <div className=" backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-lg text-center">
                <a href="#">
                  {" "}
                  <img
                    src="/assets/about2.jpeg"
                    alt="Leader"
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <h3 className="text-xl font-semibold mb-2">
                  Okechukwu Ndubuisi
                </h3>
                <p className="text-gray-600">Founder/Benefactor</p>
                <div className="flex flex-col items-center mt-4 space-y-4">
                  <a className="text-white hover:text-blue-800">
                    <FaEnvelope />
                    <h5>tonyagba@yahoo.com</h5>
                  </a>
                  <a  className="text-white hover:text-blue-600">
                    <FaFacebook />
                    <h5> </h5>
                  </a>
                </div>
              </div>

              <div className="backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-lg text-center">
                <a href="#">
                  {" "}
                  <img
                    src="/assets/lord3.jpg"
                    alt="Leader"
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <h3 className="text-xl font-semibold mb-2">
                  Chief DR. Christian Azubike Enwuru Ph.D.{" "}
                </h3>
                <p className="text-gray-600"> Chairman (BOT)</p>
                <div className="flex flex-col items-center mt-4 space-y-4">
                  <a className="text-white hover:text-blue-800">
                    <FaEnvelope />
                    <h4>enwuru@ymail.com</h4>
                  </a>
                  <a className="text-white hover:text-blue-600">
                    <FaFacebook />
                    <h4></h4>
                  </a>
                </div>
              </div>

              <div className="backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-lg text-center">
                <a href="#">
                  {" "}
                  <img
                    src="/assets/about9.jpg"
                    alt="Leader"
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <h3 className="text-xl font-semibold mb-2">
                  Dr. Obiesie Ahuize Emmanuel{" "}
                </h3>
                <p className="text-gray-600">Secretary (BOT)</p>
                <div className="flex flex-col items-center mt-4 space-y-4">
                  <a className="text-white hover:text-blue-800">
                    <FaEnvelope />
                    <h4>santasibito@yahoo.com </h4>
                  </a>
                  <a className="text-white hover:text-blue-600">
                    <FaFacebook />
                    <h4></h4>
                  </a>
                </div>
              </div>
              <div className="backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-lg text-center ">
                <a href="#">
                  {" "}
                  <img
                    src="/assets/port1.jpeg"
                    alt="Leader"
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <h3 className="text-xl font-semibold mb-2">
                  Dr. (Sir.) Paulinus Chika Enwuru{" "}
                </h3>
                <p className="text-gray-600">Member</p>
                <div className="flex flex-col items-center mt-4 space-y-4">
                  <a className="text-white hover:text-blue-800">
                    <FaEnvelope />
                    <h4>enwuruchikapaul1@gmail.com</h4>
                  </a>
                  <a  className="text-white hover:text-blue-600">
                    <FaFacebook />
                    <h4></h4>
                  </a>
                </div>
              </div>
              <div className="backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-lg text-center ">
                <a href="#">
                  {" "}
                  <img
                    src="/assets/unknown1.jpeg"
                    alt="Leader"
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <h3 className="text-xl font-semibold mb-2">
                  Rev. Fr. Dr. Paschal Chukwuemeka Amagba{" "}
                </h3>
                <p className="text-gray-600">Member</p>
                <div className="flex flex-col items-center mt-4 space-y-4">
                  <a className="text-white hover:text-blue-800">
                    <FaEnvelope />
                    <h4>hosana2505@gmail.com </h4>
                  </a>
                  <a  className="text-white hover:text-blue-600">
                    <FaFacebook />
                    <h4></h4>
                  </a>
                </div>
              </div>
              <div className="backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-lg text-center ">
                <a href="#">
                  {" "}
                  <img
                    src="/assets/unknown1.jpeg"
                    alt="Leader"
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <h3 className="text-xl font-semibold mb-2">
                  Oliver Chimmamkpa Obiukwu{" "}
                </h3>
                <p className="text-gray-600">Member</p>
                <div className="flex flex-col items-center mt-4 space-y-4">
                  <a className="text-white hover:text-blue-800">
                    <FaEnvelope />
                    <h4>obiukwuoliver@yahoo.com</h4>
                  </a>
                  <a  className="text-white hover:text-blue-600">
                    <FaFacebook />
                    <h4></h4>
                  </a>
                </div>
              </div>
              <div className="backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-lg text-center">
                <a href="#">
                  {" "}
                  <img
                    src="/assets/unknown1.jpeg"
                    alt="Leader"
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <h3 className="text-xl font-semibold mb-2">
                  Barr. Wisdom Okezie Igweh{" "}
                </h3>
                <p className="text-gray-600">Member</p>
                <div className="flex flex-col items-center mt-4 space-y-4">
                  <a className="text-white hover:text-blue-800">
                    <FaEnvelope />
                    <h4> pnigwe@yahoo.com</h4>
                  </a>
                  <a className="text-white hover:text-blue-600">
                    <FaFacebook />
                    <h4></h4>
                  </a>
                </div>
              </div>
              {/* <div className="relative w-[350px] h-[350px] left-95 sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] mx-auto flex items-center justify-center">
  {members.map((member, index, arr) => {
    const angle = (index / arr.length) * 2 * Math.PI;
    const radius = arr.length > 4 
      ? (window.innerWidth < 640 ? 140 : window.innerWidth < 1024 ? 200 : 280) 
      : 200;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    return (
      <div
        key={member.name + index}
        className="absolute w-32 sm:w-40 md:w-48 text-center"
        style={{
          left: `calc(50% + ${x}px - 4rem)`,
          top: `calc(50% + ${y}px - 4rem)`,
        }}
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 mx-auto rounded-full mb-2 object-cover hover:scale-105 transition-transform duration-300 shadow-lg"
        />
        <h3 className="text-sm sm:text-base md:text-lg font-semibold">{member.name}</h3>
        <p className="text-gray-600 text-xs sm:text-sm">{member.role}</p>
        <div className="flex flex-col items-center gap-2 mt-2">
          <a href={`mailto:${member.email}`} className="text-red-600 hover:text-red-800"><FaEnvelope /></a>
          <a href={`tel:${member.phone}`} className="text-green-600 hover:text-green-800"><FaPhone /></a>

        </div>
      </div>
    );
  })}
</div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
