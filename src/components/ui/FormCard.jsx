import { useState } from "react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/components/ui/client";
import {Database} from "@/components/ui/type";
import { toast } from "sonner";
import {
  CheckCircle2,
  XCircle,
  Mail,
  Clock,
  User,
  MessageSquare,
  Loader2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { cn } from "@/components/ui/utils";

export const FormCard = ({ form, onUpdate, animationDelay = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [adminNotes, setAdminNotes] = useState(form.admin_notes || "");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);

    const updateStatus = async (status) => {
    setIsUpdating(true);
    try {
        const { error } = await supabase
        .from("forms")
        .update({ status, admin_notes: adminNotes })
        .eq("id", form.id);

        if (error) {
        // throw a proper Error so catch receives it
        throw new Error(error.message);
        }

        toast.success(`Form ${status}!`, {
        description: `The form has been ${status} successfully.`,
        });
        onUpdate();
    } catch (err) {
        // use `err` instead of `error` to avoid shadowing
        toast.error("Failed to update form status: " + err.message);
    } finally {
        setIsUpdating(false);
    }
    };

    const sendEmail = async () => {
    setIsSendingEmail(true);
    try {
        // Simulate email sending (in production, you'd call an edge function)
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const { error } = await supabase
        .from("forms")
        .update({ email_sent: true })
        .eq("id", form.id);

        if (error) {
        throw new Error(error.message);
        }

        toast.success("Email sent!", {
        description: `Notification email sent to ${form.email}`,
        });
        onUpdate();
    } catch (err) {
        toast.error("Failed to send email: " + err.message);
    } finally {
        setIsSendingEmail(false);
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
            {form.email_sent && (
              <Badge variant="secondary" className="gap-1">
                <Mail className="w-3 h-3" />
                Email Sent
              </Badge>
            )}
          </div>
          <h3 className="text-lg font-semibold text-foreground truncate">
            {form.subject}
          </h3>
          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {form.name}
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
              Message
            </div>
            <p className="text-foreground whitespace-pre-wrap">{form.message}</p>
          </div>

          <div className="p-4 rounded-lg bg-muted/50">
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Admin Notes
            </label>
            <Textarea
              value={adminNotes}
              onChange={(e) => setAdminNotes(e.target.value)}
              placeholder="Add notes about this submission..."
              className="resize-none"
              rows={3}
            />
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
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
            {form.status !== "pending" && !form.email_sent && (
              <Button
                variant="default"
                onClick={sendEmail}
                disabled={isSendingEmail}
              >
                {isSendingEmail ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Mail />
                )}
                Send Email to {form.email}
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
