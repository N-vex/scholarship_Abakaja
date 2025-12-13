import { useEffect, useState } from "react";
import { Link } from "@/components/ui/router";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/components/ui/client";
import { FormCard } from "@/components/ui/FormCard";
import ProtectedRoute from "@/components/ui/ProtectedRoute";
import { NotificationBell } from "@/components/ui/NotificationBell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  FileText,
  ArrowLeft,
  Inbox,
  Filter,
  RefreshCw,
  Loader2,
} from "lucide-react";
import { cn } from "@/components/ui/utils";

const Admin = () => {
  const [forms, setForms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [pendingCount, setPendingCount] = useState(0);

  const fetchForms = async () => {
  setIsLoading(true);
  try {
        const { data, error } = await supabase
        .from("forms")
        .select("*")
        .order("created_at", { ascending: false });

        if (error) {
        throw new Error(error.message);
        }

        const typedData = data || [];
        setForms(typedData);
        setPendingCount(typedData.filter((f) => f.status === "pending").length);
    } catch (err) {
        toast.error("Failed to load forms: " + err.message);
    } finally {
        setIsLoading(false);
    }
    };

const navigate = useNavigate();

const handleLogout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    toast.error("Failed to log out");
  } else {
    navigate("/login", { replace: true });
  }
};

  useEffect(() => {
    fetchForms();

    // Subscribe to realtime updates
    const channel = supabase
      .channel("forms-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "forms" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            toast.info("New form received!", {
              description: "A new form has been submitted.",
            });
          }
          fetchForms();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const filteredForms = forms.filter((form) =>
    filter === "all" ? true : form.status === filter
  );

  const filterOptions = [
    { value: "all", label: "All", count: forms.length },
    {
      value: "pending",
      label: "Pending",
      count: forms.filter((f) => f.status === "pending").length,
    },
    {
      value: "approved",
      label: "Approved",
      count: forms.filter((f) => f.status === "approved").length,
    },
    {
      value: "rejected",
      label: "Rejected",
      count: forms.filter((f) => f.status === "rejected").length,
    },
  ];

  return (
    <div className="min-h-screen text-white bg-background">
     
      <div className="glass-strong sticky  py-12 border-b border-border/50">
        <div className="container mx-auto px-4 py-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-semibold text-lg text-foreground">
                  Admin Panel
                </span>
                <p className="text-xs text-muted-foreground">Form Management</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={fetchForms}
              disabled={isLoading}
            >
              <RefreshCw
                className={cn("w-5 h-5", isLoading && "animate-spin")}
              />
            </Button>
            <NotificationBell count={pendingCount} />
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {filterOptions.map((option, index) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={cn(
                "glass p-4 rounded-xl text-left transition-all duration-200 hover:shadow-md opacity-0 animate-fade-in-up",
                filter === option.value && "ring-2 ring-primary shadow-glow"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl font-bold text-foreground">
                {option.count}
              </div>
              <div className="text-sm text-muted-foreground capitalize flex items-center gap-2">
                {option.label}
                {option.value === "pending" && option.count > 0 && (
                  <span className="w-2 h-2 rounded-full bg-warning animate-pulse" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 animate-fade-in opacity-0 stagger-3">
          <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
          {filterOptions.map((option) => (
            <Badge
              key={option.value}
              variant={filter === option.value ? "default" : "secondary"}
              className={cn(
                "cursor-pointer transition-all duration-200 hover:scale-105",
                filter === option.value && "shadow-md"
              )}
              onClick={() => setFilter(option.value)}
            >
              {option.label}
            </Badge>
          ))}
        </div>

        {/* Forms List */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
            <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground">Loading forms...</p>
          </div>
        ) : filteredForms.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
              <Inbox className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No forms found
            </h3>
            <p className="text-muted-foreground text-center max-w-md">
              {filter === "all"
                ? "No form submissions yet. Forms will appear here when users submit them."
                : `No ${filter} forms at the moment.`}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredForms.map((form, index) => (
              <FormCard
                key={form.id}
                form={form}
                onUpdate={fetchForms}
                animationDelay={index * 100}
              />
            ))}
          </div>
        )}
        <div>
            <Button
              variant="outline"
              className="mt-8"
              onClick={handleLogout}
            >
              Logout
            </Button>
        </div>
      </main>
    </div>
  );
};

export default Admin;