import  ApplicationFormSubmit  from "@/components/ui/ApplicationFormSubmit";
import { Send } from "lucide-react";

const ApplicationForm = () => {
  return (
    <div className="min-h-screen py-12 bg-background ">
      <main className="container mx-auto px-4 py-16">
        
        {/* Hero Section */}
        <div className="text-center text-white mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Scholarship Application Form
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out all required fields accurately. Your application will be reviewed
            by the foundation.
          </p>
        </div>

        {/* Full-width form container */}
        <div className="max-w-6xl mx-auto text-black rounded-2xl p-6 md:p-10 shadow-xl">
          <ApplicationFormSubmit />
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center text-white gap-8 text-sm text-muted-foreground animate-fade-in opacity-0 stagger-5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success" />
            <strong>Secure submission</strong>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success" />
            <strong>Verified processing</strong>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success" />
              <strong> Fast review time</strong>
          </div>
        </div>

      </main>
    </div>
  );
};

export default ApplicationForm;
