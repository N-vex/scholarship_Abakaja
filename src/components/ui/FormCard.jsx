import { useState } from "react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import JsPDF from "jspdf";

import {
  approveApplication,
  rejectApplication,
} from "@/components/ui/ApplicationAction";
import { toast } from "sonner";
import {
  CheckCircle2,
  XCircle,
  Clock,
  User,
  MessageSquare,
  Loader2,
  ChevronDown,
  ChevronUp,
  Download,
} from "lucide-react";
import { cn } from "@/components/ui/utils";

export const FormCard = ({ form, onUpdate, animationDelay = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [adminNotes, setAdminNotes] = useState(form.admin_notes || "");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const updateStatus = async (status) => {
    setIsUpdating(true);
    try {
      if (status === "approved") {
        await approveApplication(form.id, adminNotes);
      } else {
        await rejectApplication(form.id, adminNotes);
      }

      toast.success(`Application ${status}`);
      onUpdate();
    } catch (err) {
      toast.error(err.message || "Failed to update application");
    } finally {
      setIsUpdating(false);
    }
  };

const handleDownload = async () => {
  try {
    setIsDownloading(true);

    const doc = new JsPDF();

    let y = 10; // vertical position

    const addLine = (label, value) => {
      doc.setFont("helvetica", "bold");
      doc.text(label, 10, y);
      y += 6;

      doc.setFont("helvetica", "normal");
      doc.text(String(value || "—"), 10, y);
      y += 10;
    };

    doc.setFontSize(14);
    doc.text("Scholarship Application", 10, y);
    y += 12;

    doc.setFontSize(10);
    addLine("Application ID:", form.id);
    addLine("Surname:", form.surname);
    addLine("Other Names:", form.other_names);
    addLine("Email:", form.email);
    addLine("Date of Birth:", form.date_of_birth);
    addLine("Address:", form.permanent_address);
    addLine("Phone:", form.phone);
    addLine("Gender:", form.gender);
    addLine("Course of Study:", form.course_study);
    addLine("University Choice:", form.university_choice);
    addLine("JAMB Score:", form.jamb_score);
    addLine("UTME Score:", form.utme_score);
    addLine("Declaration:", form.declaration);
    addLine("Status:", form.status);

    doc.setFont("helvetica", "bold");
    doc.text("Personal Statement:", 10, y);
    y += 6;

    doc.setFont("helvetica", "normal");
    doc.text(
      doc.splitTextToSize(form.statement || "—", 180),
      10,
      y
    );

    const fileName = `application-${form.surname}-${format(
      new Date(form.created_at),
      "yyyy-MM-dd"
    )}.pdf`;

    doc.save(fileName);

    toast.success("PDF downloaded successfully");
  } catch (err) {
    console.error("PDF download error:", err);
    toast.error("Failed to generate PDF");
  } finally {
    setIsDownloading(false);
  }
};

  const statusVariant = {
    pending: "pending",
    approved: "approved",
    rejected: "rejected",
  };

  return (
    <div
      className={cn(
        "glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg opacity-0 animate-fade-in-up",
        isExpanded && "ring-2 ring-primary/20"
      )}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <Badge variant={statusVariant[form.status]} className="capitalize">
              {form.status}
            </Badge>
          </div>

          <h3 className="text-lg font-semibold text-foreground truncate">
            {form.surname} {form.other_names}
          </h3>

          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {form.email}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {format(new Date(form.created_at), "MMM d, yyyy HH:mm")}
            </span>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </Button>
      </div>

      {isExpanded && (
        <div className="mt-6 space-y-4 animate-fade-in">
          <div className="p-4 rounded-lg bg-muted/50">
            <div className="flex items-center gap-2 mb-2 text-sm font-medium text-muted-foreground">
              <MessageSquare className="w-4 h-4" />
              Statement
            </div>
            <p className="text-foreground whitespace-pre-wrap">
              {form.statement}
            </p>
          </div>

          <div className="p-4 rounded-lg text-black bg-muted/50">
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Admin Notes
            </label>
            <Textarea
              value={adminNotes}
              onChange={(e) => setAdminNotes(e.target.value)}
              placeholder="Add notes..."
              rows={3}
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="secondary"
              onClick={handleDownload}
              disabled={isDownloading}
            >
              {isDownloading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <Download />
              )}
              Download PDF
            </Button>

            {form.status === "pending" && (
              <>
                <Button
                  variant="success"
                  onClick={() => updateStatus("approved")}
                  disabled={isUpdating}
                >
                  {isUpdating ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <CheckCircle2 />
                  )}
                  Approve
                </Button>

                <Button
                  variant="destructive"
                  onClick={() => updateStatus("rejected")}
                  disabled={isUpdating}
                >
                  {isUpdating ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <XCircle />
                  )}
                  Reject
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}; // <--- Fixed: Component was missing its final closing brace