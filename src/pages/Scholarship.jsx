import React, { useState, useMemo } from "react";
import { Award, GraduationCap, BookOpen, Star, Handshake, Pencil, Users } from "lucide-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const links = [
  { name: "Check Requirements", href: "#requirements" },
];

const sampleScholarships = [
  {
    id: 1,
    title: "Best Graduating Student Award",
    level: "Secondary / University / Postgraduate",
    award: "Award and Recognition",
    deadline: "2026-12-30",
    duration: "Final Year",
    summary:
      "This scholarship celebrates students with outstanding academic performance in their graduating year. The award is given based on results, character, and overall performance.",
    applyUrl: "#",
  },
  {
    id: 2,
    title: "Undergraduate Entry Support Scholarship",
    level: "University Admission",
    award: "Tuition Support",
    deadline: "2026-09-10",
    duration: "First Year",
    summary:
      "For students who have completed secondary school and plan to study in a university. Priority is given to students from low-income households and excellent academic records.",
    applyUrl: "#",
  },
  {
    id: 3,
    title: "Secondary School Progression Scholarship",
    level: "JSS → SSS or Primary → Secondary",
    award: "School Support",
    deadline: "2026-08-05",
    duration: "One term / One session",
    summary:
      "For students proceeding into secondary school who show strong academic interest and financial need. Includes partial or full support.",
    applyUrl: "#",
  },
  {
    id: 4,
    title: "Postgraduate Excellence Scholarship",
    level: "Postgraduate",
    award: "Tuition and Research Grant",
    deadline: "2026-11-15",
    duration: "One Academic Year",
    summary:
      "For students pursuing master's or doctoral degrees. Awarded based on academic excellence, research potential, and leadership qualities.",
    applyUrl: "#",
  },
];


export const Scholarship = ({ scholarships = sampleScholarships }) => {

        const [query, setQuery] = useState("");
      const [levelFilter, setLevelFilter] = useState("All");


      const levels = useMemo(() => {
      const set = new Set(scholarships.map((s) => s.level));
      return ["All", ...Array.from(set)];
      }, [scholarships]);


      const filtered = useMemo(() => {
      return scholarships.filter((s) => {
      const matchesLevel = levelFilter === "All" || s.level === levelFilter;
      const matchesQuery =
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.summary.toLowerCase().includes(query.toLowerCase());
      return matchesLevel && matchesQuery;
      });
      }, [scholarships, query, levelFilter]);

  return (
    <>
          <section className="flex flex-col md:flex-row items-center justify-between text-white  py-20 px-4 sm:py-20 sm:px-6 lg:px-8">
      {/* Left Text Section */}
      <div className="md:w-1/2 mb-10 text-center md:mb-0">
        <h1 className="text-4xl md:text-5xl  font-bold leading-tight mb-6">
          Welcome to Our Scholarship Program


        </h1>
        <p className="text-xl md:text-2xl font-medium mb-8">
          Empowering Dreams, Transforming Futures
                <div className="absolute inset-0">
        <div
    className="
      absolute rounded-full blur-3xl 
      bg-blue-500/20 
      top-0 left-0 
      w-60 h-60         
      sm:w-80 sm:h-80   
      md:w-96 md:h-96   
    "
  />

  {/* GREEN BLOB */}
  <div
    className="
      absolute rounded-full blur-3xl 
      bg-green-400/20 
      bottom-0 right-0
      w-52 h-52 
      sm:w-72 sm:h-72
      md:w-80 md:h-80
    "
  />

  {/* STAR ICON */}
  <Star
    className="
      absolute text-white/10 rotate-12
      top-10 left-8
      w-24 h-24         
      sm:w-40 sm:h-40   
      md:w-56 md:h-56   
    "
  />

  {/* HANDSHAKE ICON */}
  <Handshake
    className="
      absolute text-white/10 -rotate-6
      bottom-20 right-6
      w-28 h-28
      sm:w-48 sm:h-48
      md:w-64 md:h-64
    "
  />

  {/* AWARD ICON (Top Right) */}
  <Award
    className="
      absolute text-white/5 rotate-12
      top-6 right-6
      hidden sm:block          /* hide on mobile */
      w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64
    "
  />

  {/* GRADUATION CAP (Bottom Left) */}
  <GraduationCap
    className="
      absolute text-white/5 -rotate-6
      bottom-6 left-6
      hidden sm:block
      w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72
    "
  />

  {/* BOOK ICON (Center) */}
  <BookOpen
    className="
      absolute text-white/5 
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      hidden md:block         /* only show on desktop */
      w-80 h-80
    "
  />
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
          src="./src/assets/img1.jpg" 
          alt="Person using laptop"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>

      <section id="scholarships" className="py-12 px-6 sm:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                Scholarships we offer
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">
                Financial support and fellowships designed to help students focus on study and impact.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="relative">
                <label htmlFor="search" className="sr-only">
                  Search scholarships
                </label>
                <input
                  id="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by title or keyword"
                  className="w-64 sm:w-80 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                />
                </div>
                    <div className="hidden sm:flex gap-2 items-center">
                {levels.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setLevelFilter(lvl)}
                    className={`text-sm px-3 py-2 rounded-md transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-700 ${
                      levelFilter === lvl
                        ? "bg-indigo-600 text-white shadow-md"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {filtered.map((s) => (
        <article
          key={s.id}
          className="group relative rounded-2xl border border-gray-100 dark:border-gray-800 p-6 bg-linear-to-br from-green-500 via-green-400 to-blue-600 shadow-sm hover:shadow-lg transition-shadow"
        >
          <header className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{s.title}</h3>
              <p className="mt-1 text-sm text-white">
                {s.level} • {s.duration}
              </p>
            </div>
            <div className="text-sm text-right">
                    <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-black text-white">
                      {s.award}
                    </span>
                  </div>
                </header>
              </article>
            ))}
          </div>

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
            <p className="mb-3 text-3xl text-body text-center" id="requirements" >
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
        <div className="mt-10 text-center">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Have you reviewed the requirements and you’re ready to apply?
        </p>

        <a
          href="/application-form"
          className="inline-bock rounded-full px-6 py-3 bg-blue-700 text-white hover:bg-green-700 transition"
        >
          Proceed to Application Form
        </a>
      </div>

        </div>
      </section>

      {/* Scholarships we offer and criterias */}
      
    </>
  );
};
