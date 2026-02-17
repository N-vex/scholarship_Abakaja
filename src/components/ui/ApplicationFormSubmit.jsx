import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SignaturePad from "signature_pad";
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

const formSchema = z.object({
  applicationNo: z.string().min(1, "Required"),
  title: z.string().min(1, "Required"),
  surname: z.string().min(1, "Required"),
  otherNames: z.string().min(1, "Required"),
  dob: z.string().min(1, "Required"),
  gender: z.string().min(1, "Required"),
  permanentAddress: z.string().min(1, "Required"),
  residentialAddress: z.string().min(1, "Required"),
  phone: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  courseStudy: z.string().min(1, "Required"),
  universityChoice: z.string().min(1, "Required"),
  jambScore: z.string().optional(),
  utmeScore: z.string().optional(),
  documents: z.string().optional(),
  statement: z.string().max(300, "Max 300 words"),
  declaration: z.string().min(1, "Required"),
  signature: z.string().min(1, "Signature is required"),
});

const ApplicationFormSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const signatureCanvasRef = useRef(null);
  const signaturePadRef = useRef(null);

  useEffect(() => {
    if (signatureCanvasRef.current) {
      signaturePadRef.current = new SignaturePad(signatureCanvasRef.current, {
        backgroundColor: "#fff",
        penColor: "black",
      });
    }

    return () => {
      signaturePadRef.current?.off();
    };
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
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
      signature: "",
    },
  });

  const onSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("applications").insert([
        {
          application_no: values.applicationNo,
          title: values.title,
          surname: values.surname,
          other_names: values.otherNames,
          date_of_birth: values.dob,
          gender: values.gender,
          permanent_address: values.permanentAddress,
          residential_address: values.residentialAddress,
          phone: values.phone,
          email: values.email,
          course_of_study: values.courseStudy,
          university_choice: values.universityChoice,
          jamb_score: values.jambScore,
          utme_score: values.utmeScore,
          documents: values.documents,
          statement_of_purpose: values.statement,
          declaration: values.declaration,
          signature: values.signature,
        },
      ]);

      if (error) throw error;

      toast.success("Application submitted successfully!");
      setIsSubmitted(true);
      form.reset();
      signaturePadRef.current?.clear();
    } catch (err) {
      console.error("Submission error:", err);
      toast.error(err.message || "An error occurred while submitting");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="application-form" className="lg:px-8 py-10">
      <div className="max-w-4xl mx-auto bg-transparent border-2 border-white/50 rounded-2xl backdrop-blur-md shadow p-8">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">
          Scholarship Application Form
        </h2>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12 px-6">
            <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Form Submitted Successfully!
            </h3>
            <p className="text-white/80 text-center max-w-md mb-6 leading-relaxed">
              Your application has been submitted. Please contact the admin and
              wait to receive feedback from your email.
            </p>
            <p className="text-white/60 text-sm text-center">
              We will review your application and get back to you soon.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="mt-8"
              variant="outline"
            >
              Submit Another Application
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 bg-transparent"
            >
              {/* Form Fields - Grid Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="applicationNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Application Form No
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Application Form No"
                          {...field}
                          className="text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Mr / Miss / Dr"
                          {...field}
                          className="text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="surname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Surname</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Surname"
                          {...field}
                          className="text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="otherNames"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Other Names</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Other Names"
                          {...field}
                          className="text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Date of Birth
                      </FormLabel>
                      <FormControl>
                        <Input type="date" {...field} className="text-black" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Gender</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Male / Female"
                          {...field}
                          className="text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Address Fields */}
              <FormField
                control={form.control}
                name="permanentAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">
                      Permanent Home Address
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="..."
                        className="min-h-20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="residentialAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">
                      Residential Address
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="..."
                        className="min-h-20"
                        {...field}
                      />
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
                    <FormItem>
                      <FormLabel className="text-white">Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* Course and University Fields */}
              <FormField
                control={form.control}
                name="courseStudy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">
                      Course of Study
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Course of Study"
                        {...field}
                        className="text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="universityChoice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">
                      University Choice
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="University Choice"
                        {...field}
                        className="text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jambScore"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-white">JAMB Score</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="JAMB Score"
                        {...field}
                        className="text-white"
                      />
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
                      <Input
                        placeholder="UTME Score"
                        {...field}
                        className="text-white"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="documents"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-white">
                      List of support documents
                    </FormLabel>

                    <FormControl>
                      <Textarea
                        placeholder="E.g. JAMB, UTME, WAEC & Credentials"
                        className="min-h-20"
                        {...field}
                      />
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
                    <FormLabel className="text-white">
                      Statement of Purpose (max 300 words)
                    </FormLabel>

                    <FormControl>
                      <Textarea
                        placeholder="Please state in clear terms why you deserve this scholarship..."
                        className="min-h-[120px]"
                        {...field}
                      />
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
                      <Textarea
                        placeholder="I declare that the information provided is true..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Signature Area */}
              <FormField
                control={form.control}
                name="signature"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Signature</FormLabel>

                    <FormControl>
                      <div className="space-y-2">
                        <canvas
                          ref={signatureCanvasRef}
                          width={400}
                          height={160}
                          className="border rounded-md bg-white touch-none"
                          onMouseUp={() => {
                            const dataUrl =
                              signaturePadRef.current?.toDataURL("image/png");
                            field.onChange(dataUrl);
                          }}
                          onTouchEnd={() => {
                            const dataUrl =
                              signaturePadRef.current?.toDataURL("image/png");
                            field.onChange(dataUrl);
                          }}
                        />

                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            signaturePadRef.current?.clear();
                            field.onChange("");
                          }}
                        >
                          Clear Signature
                        </Button>
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <Loader2 className="animate-spin mr-2" />
                ) : (
                  "Submit Application"
                )}
              </Button>
            </form>
          </Form>
        )}
      </div>
    </section>
  );
};

export default ApplicationFormSubmit;
