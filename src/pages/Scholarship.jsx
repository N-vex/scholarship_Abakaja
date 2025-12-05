import React from "react";
import { Award, GraduationCap, BookOpen, Star, Handshake, Pencil, Users } from "lucide-react";

const links = [
  { name: "Check Requirements", href: "#requirements" },
];

export const Scholarship = () => {
  return (
    <>
          <section className="flex flex-col md:flex-row items-center justify-between text-white  py-20 px-4 sm:py-20 sm:px-6 lg:px-8">
      {/* Left Text Section */}
      <div className="md:w-1/2 mb-10 text-center md:mb-0">
        <h1 className="text-4xl md:text-5xl  font-bold leading-tight mb-6">
          Welcome to Our Scholarship Program
          <div className="absolute inset-0 overflow-hidden pointer-events-none">

  <Award className="w-64 h-64 text-white/5 absolute top-10 right-10 rotate-12" />

  <GraduationCap className="w-72 h-72 text-white/5 absolute bottom-10 left-5 -rotate-6" />

  <BookOpen className="w-96 h-96 text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
</div>

        </h1>
        <p className="text-xl md:text-2xl font-medium mb-8">
          Empowering Dreams, Transforming Futures
                <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full top-0 left-0" />
        <div className="absolute w-80 h-80 bg-green-400/20 blur-3xl rounded-full bottom-0 right-0" />

        <Star className="w-56 h-56 text-white/10 absolute top-16 left-12 rotate-12" />
        <Handshake className="w-64 h-64 text-white/10 absolute bottom-24 right-10 -rotate-6" />
      </div>

        </p>
        <div className="flex justify-center ">
                {links.map((link) => (
                  <a key={link.name} href={link.href}>
                    {link.name} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
        </div>
        </div>
      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="./src/assets/img1.jpg" // Replace with your actual image path
          alt="Person using laptop"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
      {/* Scholarships we offer and criterias */}
      <section className="py-16 px-4 sm:py-20 ">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Scholarships We Offer & Criteria
          </h2>
          <p className="mb-3 text-body">
            Any career opportunity to study mainly in the Federal Universities
            in Nigeria in the following professional courses:
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <p className="mb-3 text-body">
              Law, medicine/paramedical courses, engineering (Mechanical, civil,
              electrical, structural), Aviation engineering, marine engineering
              Computer sciences, mathematics, Project Management, statistics,
              metrological engineering, Information Technology, Accountancy,
              health management accountancy.
            </p>
            <p className="mb-3 text-body">
              This is without prejudice to the fact that candidates could access
              opportunities for international scholarships via the foundation in
              any country of the world.
            </p>
          </div>
          <strong >
            <p className="mb-3 text-3xl text-body text-center" >
              Eligibility and requirements.
            </p>
          </strong>
          <p className="mb-3 text-body">
            Candidates for application into the Foundation’s scholarship must
            fulfil the following condition:
          </p>
          <p className="mb-3 text-body">
            1. Must have met all requirements to be admitted into any Federal
            University in Nigeria.
          </p>
          <p className="mb-3 text-body">
            2. Must have the relevant WAEC/NECO credits to be admitted for the
            course of study.
          </p>
          <p className="mb-3 text-body">
            3. Must have met the JAMB and post UTME test, on good merit stand.
          </p>
          <p className="mb-3 text-body">
            4. Must have a genuine and verifiable need for scholarship help.
          </p>
          <p className="mb-3 text-body">
            5. Must have an impeccable record of good standing (in character and
            morality) from schools attended previously.
          </p>
          <p className="mb-3 text-body">
            6. Must sign MOU on “one for two” concept of the Foundation.
          </p>
          <p className="mb-3 text-body">
            7. Must demonstrate good understanding of the Mission, vision,
            goals, aim and objectives of the Foundations.
          </p>
          <br />
          <br />

          <strong>
            <p className="mb-3 text-3xl text-body text-center">
              Method of application.
            </p>
          </strong>
          <p className="mb-3 text-body">
            The Foundation Board of Directors shall announce for each academic
            year the application period via local, print, audio and social
            media. The application forms shall be obtainable at prominent
            Churches within the town and electronically via social media. The
            form shall be completed and re-submitted in record time. Only the
            shortlisted candidates shall be contacted for interview by the
            Foundation Board. The list of successful candidates shall be
            announced and published accordingly.
          </p>
        </div>
      </section>
    </>
  );
};
