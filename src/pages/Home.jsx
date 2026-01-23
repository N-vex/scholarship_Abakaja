import React, { useEffect, useState, useRef, Link } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import about01 from "/assets/about01.jpeg";
import about2 from "/assets/about2.jpeg";
import about9 from "/assets/about9.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FileText,
  CheckCircle,
  BookOpen,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Quote } from "lucide-react";
import {
  Linkedin,
  Mail,
  Users,
  DollarSign,
  TrendingUp,
  Award,
  Rocket,
  Shield,
  Handshake,
} from "lucide-react";

export const Home = () => {
  const slides = [
    {
      image: "/assets/img2.jpg",
      title: "Fueling Dreams. Funding Futures.",
      subtitle: "Every scholar we support is a story rewritten.",
    },
    {
      image: "/assets/photo3.jpg",
      title: "Opportunity Starts Here.",
      subtitle: "Where ambition meets real support.",
    },
    {
      image: "/assets/photo4.jpg",
      title: "Education Without Limits.",
      subtitle: "Breaking barriers. Building leaders.",
    },
    {
      image: "/assets/photo5.jpg",
      title: "Powered by Hope. Driven by Purpose.",
      subtitle: "Your journey begins the moment you believe.",
    },
    {
      image: "/assets/photo6.jpg",
      title: "Becoming the Next Success Story.",
      subtitle: "Your future is worth investing in.",
    },
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We recognize and nurture academic excellence while supporting students in reaching their highest potential.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Education",
      description:
        "We believe education is the most powerful tool for personal growth and societal transformation.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description:
        "We build lasting connections between scholars, mentors, and alumni to create a supportive network.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We continuously evolve our programs to meet the changing needs of students and the education landscape.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description:
        "We maintain the highest standards of transparency and accountability in all our operations.",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Partnership",
      description:
        "We collaborate with institutions, corporations, and donors to maximize our impact and reach.",
    },
  ];

  const founders = [
    {
      name: " Mr. Marcel O. Agbakaja",
      role: "Founder & Executive Director",
      bio: "Former university dean with 20+ years in education. Passionate about breaking down barriers.",
      education: "PhD in Education Policy, Harvard University",
      image: about01,
    },
    {
      name: "Chief Chijoke Agbakaja",
      role: "Benefactor & Director of Operations",
      bio: "First-gen scholar dedicated to creating pathways for underrepresented students.",
      education: "MBA, Stanford University",
      image: about2,
    },
    {
      name: "Dr. Aisha Patel",
      role: "Co-Founder & Head of Partnerships",
      bio: "Leader in nonprofit fundraising and educational equity.",
      education: "PhD in Social Entrepreneurship, Oxford University",
      image: about9,
    },
  ];

  const testimonials = [
    {
      quote:
        "M.O Agbakaja Educational Foundation Scholarship didn't just fund my education, it gave me a community of mentors and peers who believed in me when I couldn't believe in myself.",
      name: "Ejezie Chidimma Ann",
      role: "Class of 2019, Social Works",
      image: "/assets/port5.jpeg",
    },
    {
      quote:
        "As a first-generation college student, I had no roadmap. This foundation provided not just funding, but guidance that changed the trajectory of my life.",
      name: "Uzomba Peter Ogemdi",
      role: "Class of 2021, Biochemistry",
      image: "/assets/port3.jpeg",
    },
    {
      quote:
        "The mentorship program connected me with industry leaders who helped me navigate my career path. I'm forever grateful for this opportunity.",
      name: "Ewulu Tobechukwu Anthony",
      role: "Class of 2020, Economics",
      image:
        "/assets/port11.jpeg",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: 5000,
      label: "Students Funded",
      prefix: "",
      suffix: "+",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: DollarSign,
      value: 10,
      label: "Million in Scholarships",
      prefix: "$",
      suffix: "M+",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: TrendingUp,
      value: 95,
      label: "Graduation Rate",
      prefix: "",
      suffix: "%",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Award,
      value: 150,
      label: "Partner Universities",
      prefix: "",
      suffix: "+",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  const steps = [
    {
      icon: FileText,
      title: "Apply Online",
      description:
        "Complete our simple online application with your academic records and personal statement.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: CheckCircle,
      title: "Review Process",
      description:
        "Our committee carefully reviews each application based on merit, need, and potential.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Trophy,
      title: "Selection & Award",
      description:
        "Selected scholars are notified and receive their scholarship awards directly.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: BookOpen,
      title: "Continuous Support",
      description:
        "Recipients gain access to mentorship, networking, and ongoing educational resources.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  // const [isVisible, setIsVisible] = useState(false);
  // const ref = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) setIsVisible(true);
  //     },
  //     { threshold: 0.1 }
  //   );

  //   if (ref.current) observer.observe(ref.current);
  //   return () => observer.disconnect();
  // }, []);

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full pb-10 pt-16 md:pt-10 lg:pt-16">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          className="w-screen h-screen overflow-hidden"
        >
          {slides.map(({ image, title, subtitle }) => (
            <SwiperSlide key={image} className="relative">
              <img src={image} className="w-full h-full object-cover" />

              <div className="absolute inset-0 flex items-end justify-start p-6">
                <div className="bg-black/50 p-8 rounded-2xl backdrop-blur-sm text-left max-w-2xl">
                  <h2 className="text-xl font-bold text-white drop-shadow-xl">
                    {title}
                  </h2>
                  <p className="text-white mt-3 text-lg drop-shadow-lg">
                    {subtitle}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons so arrows are visible and styled */}
        <button
          className="swiper-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 bg-black/40 text-white hover:bg-black/50 rounded-full flex items-center justify-center"
          aria-label="Previous slide"
          type="button"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          className="swiper-next absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 bg-black/40 text-white hover:bg-black/50 rounded-full flex items-center justify-center"
          aria-label="Next slide"
          type="button"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* MISSION / VALUES / VISION */}
      <section id="values" className="py-10 ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 dark:text-white">
            Our Mission, Goal & Vision
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="p-6 bg-white dark:bg-black rounded-2xl shadow-md">
              <div className="w-28 h-28 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-semibold mb-4">
                Mission
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The Mission is to eradicate ignorance and poverty through career
                revolution and to create community partnerships to fulfill
                educational dreams in Urualla and beyond.
              </p>
            </div>

            {/* Values */}
            <div className="p-6 bg-white dark:bg-black rounded-2xl shadow-md">
              <div className="w-28 h-28 mx-auto flex items-center justify-center rounded-full bg-green-600 text-white text-xl font-semibold mb-4">
                Goal
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To create and promote a world-class educational scholarship
                programme for our people and foster mutually beneficial
                partnerships.
              </p>
            </div>

            {/* Vision */}
            <div className="p-6 bg-white dark:bg-black rounded-2xl shadow-md">
              <div className="w-28 h-28 mx-auto flex items-center justify-center rounded-full bg-yellow-500 text-white text-xl font-semibold mb-4">
                Vision
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To bridge the gaps between opportunities toexcel, and to
                transform the community into a world-class society, where
                career\vocation is supreme
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={ref}
        className="py-10 bg-gradient-hero text-white relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute -top-20 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            className={`absolute -bottom-20 -left-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="container mx-auto px-10 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold font-semibold rounded-full text-sm mb-6">
              What We Stand For
            </span>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our Core Values
            </h2>

            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              These principles guide our decisions and shape our commitment to
              our scholars.
            </p>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-500 hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>

                <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-3">
                  {value.title}
                </h3>

                <p className="text-primary-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENT SECTION */}
      <section ref={ref} className="py-10 text-white bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold font-semibold rounded-full text-sm mb-6">
              Scholar Stories
            </span>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Voices of Our Scholars
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from the students whose lives have been transformed by our
              scholarship program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl bg-card shadow-card border border-border/50 hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Quote className="w-10 h-10 text-gold/30 mb-4" />

                <p className="text-foreground/80 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-gold/20"
                  />

                  <div>
                    <div className="font-display font-semibold text-foreground">
                      {testimonial.name}
                    </div>

                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* More students under scholarship */}
        <div className="container mx-auto px-10">
          <p className="text-center text-muted-foreground mt-12">
            And many more students are thriving under our scholarship program,
            achieving their dreams and making a difference in their communities.
          </p>
          <a href="/scholar-profile">
            <div className="mt-6 text-center">
              <button className="px-6 py-3 bg-linear-to-br from-green-500 via-green-400 to-blue-600 font-semibold hover:bg-primary/90 transition-all hover:scale-105">
                Meet More Scholars
              </button>
            </div>
          </a>
        </div>
      </section>

      <section className="py-14 text-white bg-background" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              A straightforward process designed to get you funded quickly and
              efficiently
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="relative animate-fade-in-up group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Connector Line (hidden on last item and mobile) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-linear-to-r from-primary/30 to-accent/30 -z-10" />
                    )}

                    <div className="text-center">
                      {/* Step Number */}
                      <div className="inline-flex items-center bg-linear-to-br from-green-500 via-green-400 to-blue-600 justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground font-bold text-sm mb-4">
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <div
                        className={`w-20 h-20 mx-auto rounded-2xl ${step.bgColor} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover: bg-emerald-300`}
                      >
                        <Icon className={`h-10 w-10 ${step.color}`} />
                      </div>

                      {/* Content */}
                      <h3 className="font-display text-xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* FOUNDERS SECTION */}
      <section className="py-10 text-white bg-muted/30 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Meet Our Founders
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {founders.map((f, index) => {
              return (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="p-6 border-2 hover:border-primary transition-all hover:shadow-xl h-full">
                    <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                      <img
                        src={f.image}
                        alt={f.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-center">{f.name}</h3>
                    <p className="text-primary text-center">{f.role}</p>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      {f.education}
                    </p>
                    <p className="text-muted-foreground text-center mb-6">
                      {f.bio}
                    </p>

                    <div className="flex justify-center gap-3">
                      <Linkedin className="h-6 w-6 text-primary" />
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="py-10 text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">
            Our Impact in Numbers
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} delay={index * 0.1} />
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-20 max-w-4xl mx-auto bg-black p-8 rounded-2xl border">
            <p className="italic text-lg">
              “This scholarship didn’t just pay for my education — it changed my
              life.”
            </p>
            <div className="mt-4 font-semibold">Jessica Martinez</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="container mx-auto px-10">
        <div className="mt-16 text-center bg-muted/50 rounded-2xl text-white bg-linear-to-br from-green-500 via-green-400 to-blue-600 p-8 border-white border-border animate-fade-in-up stagger-4">
          <h3 className="font-display text-2xl font-bold text-foreground mb-6">
            Ready to Start Your Journey?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Applications are reviewed on a rolling basis. The sooner you apply,
            the sooner you could be on your way to achieving your educational
            goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/application-form">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105">
                Start Application
              </button>
            </a>
            <a href="/scholarships">
              <button className="px-8 py-3 border-2 border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-all">
                View Requirements
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

/* ----------------------------- COUNTER CARD ----------------------------- */
const StatCard = ({
  icon: Icon,
  value,
  label,
  prefix,
  suffix,
  color,
  bgColor,
  delay,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;

    const increment = end / (duration / 40);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 40);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div
      className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-md text-center border"
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full ${bgColor}`}
      >
        <Icon className={`w-8 h-8 ${color}`} />
      </div>

      <div className="text-3xl font-bold">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>

      <p className="text-muted-foreground mt-2">{label}</p>
    </div>
  );
};
