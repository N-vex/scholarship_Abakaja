import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Assuming client.js exports the supabase client
import { supabase } from "@/components/ui/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CheckCircle2, Loader2 } from "lucide-react";

/**
 * Scholarship application schema
 * The type definition (ApplicationFormData) is derived from this schema
 */
const applicationSchema = z.object({
  applicationNo: z.string().trim().min(1, "Application number is required").max(100),
  title: z.string().trim().optional().nullable(),
  surname: z.string().trim().min(2, "Surname is required").max(100),
  otherNames: z.string().trim().min(2, "Other names required").max(200),
  dob: z.string().trim().min(4, "Date of birth is required"), // ISO date string from input[type=date]
  gender: z.string().trim().min(1, "Gender is required"),
  permanentAddress: z.string().trim().min(5, "Permanent address is required").max(1000),
  residentialAddress: z.string().trim().min(5, "Residential address is required").max(1000),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  courseStudy: z.string().trim().min(2, "Course of study is required").max(300),
  universityChoice: z.string().trim().min(2, "University choice is required").max(300),
  jambScore: z.string().trim().optional().nullable(),
  utmeScore: z.string().trim().optional().nullable(),
  documents: z.string().trim().min(2, "List required").max(2000),
  statement: z.string().trim().min(20, "Statement must be at least 20 characters").max(300),
  declaration: z.string().trim().min(10, "Declaration is required").max(2000),
});


export const ApplicationFormSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      applicationNo: "",
      title: "",
      surname: "",
      otherNames: "",
      dob: "",
      gender: "",
      permanentAddress: "",
      residentialAddress: "",
      phone: "",
      email: "",
      courseStudy: "",
      universityChoice: "",
      jambScore: "",
      utmeScore: "",
      documents: "",
      statement: "",
      declaration: "",
    },
  });

  // The 'values' parameter will be inferred from the schema structure by react-hook-form
  const onSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      // Insert into Supabase table "applications"
      const { error } = await supabase.from("applications").insert({
        application_no: values.applicationNo,
        title: values.title,
        surname: values.surname,
        other_names: values.otherNames,
        dob: values.dob,
        gender: values.gender,
        permanent_address: values.permanentAddress,
        residential_address: values.residentialAddress,
        phone: values.phone,
        email: values.email,
        course_study: values.courseStudy,
        university_choice: values.universityChoice,
        jamb_score: values.jambScore,
        utme_score: values.utmeScore,
        documents: values.documents,
        statement_of_purpose: values.statement,
        declaration: values.declaration,

      });

      if (error) throw error;

      setIsSubmitted(true);
      toast.success("Application submitted successfully", {
        description: "An administrator will review and contact you shortly.",
      });
      form.reset();
    } catch (err) {
      console.error("Submit error", err);
      toast.error("Failed to submit application", {
        description: "Please try again or contact the administrator.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 animate-scale-in">
        <div className="w-20 h-20 rounded-full gradient-success flex items-center justify-center mb-6 animate-float">
          <CheckCircle2 className="w-10 h-10 text-success-foreground" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground text-white text-center max-w-md">
          Your scholarship application has been submitted successfully. We'll review it and be in touch.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setIsSubmitted(false)}
        >
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <section id="application-form" className="  lg:px-16">
      <div className="max-w-4xl mx-auto bg-transparent border-2 border-white/50 rounded-2xl backdrop-blur-md shadow p-8">
        <h2 className="text-2xl font-bold mb- text-white text-center">Scholarship Application Form</h2>

        {/* Optional: show uploaded image/banner — replace src with your image path if desired */}
        {/* <img src="/assets/scholarship-form.png" alt="form image" className="mb-6 w-full object-contain" /> */}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-transparent ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="applicationNo"
                render={({ field }) => (
                  <FormItem >
                    <FormLabel className="text-white">Application Form No</FormLabel>
                    <FormControl>
                      <Input placeholder="Application Form No" {...field} className="text-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem >
                    <FormLabel className="text-white">Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Mr / Miss / Dr" {...field} className="text-white"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="surname"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-white">Surname</FormLabel>
                    <FormControl>
                      <Input placeholder="Surname" {...field} className="text-white"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="otherNames"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-white">Other Names</FormLabel>
                    <FormControl>
                      <Input placeholder="Other Names" {...field} className="text-white"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-white">Date of Birth</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-white">Gender</FormLabel>
                    <FormControl>
                      <Input placeholder="Male / Female / Other" {...field} className="text-white"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="permanentAddress"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-white">Permanent Home Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Permanent Home Address" className="min-h-20" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="residentialAddress"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-white">Residential Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Residential Address" className="min-h-20" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-white">Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Phone Number" {...field} className="text-white"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-white">Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="courseStudy"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-white">Course of Study</FormLabel>
                  <FormControl>
                    <Input placeholder="Course of study" {...field} className="text-white"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="universityChoice"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-white">University of Choice</FormLabel>
                  <FormControl>
                    <Input placeholder="University of choice" {...field} className="text-white"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="jambScore"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-white">JAMB Score</FormLabel>
                    <FormControl>
                      <Input placeholder="JAMB Score" {...field}className="text-white"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="utmeScore"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-white">UTME Score</FormLabel>
                    <FormControl>
                      <Input placeholder="UTME Score" {...field} className="text-white"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="documents"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-white">List of support documents</FormLabel>
                  <FormControl>
                    <Textarea placeholder="E.g. JAMB, UTME, WAEC & Credentials" className="min-h-20" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="statement"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-white">Statement of Purpose (max 300 words)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Please state in clear terms why you deserve this scholarship..." className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="declaration"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-white">Declaration</FormLabel>
                  <FormControl>
                    <Textarea placeholder="I declare that the information provided is true..." className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="text-center mt-4 text-white ">
              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-linear-to-br from-green-500 via-green-400 to-blue-600 md:w-auto">
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  < >Submit Application</>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ApplicationFormSubmit;