export const Constants = {
  public: {
    Enums: {
      form_status: ["pending", "approved", "rejected"],
    },
  },
};


export const Database = {
  __InternalSupabase: {
    PostgrestVersion: "13.0.5",
  },
  public: {
    Tables: {
      forms: {
        Row: {
          id: "string",
          created_at: "string",
          updated_at: "string",
          applicationNo: "string",
          title: "string",
          surname: "string",
          otherNames: "string",
          dob: "string",
          gender: "string",
          permanentAddress: "string",
          residentialAddress: "string",
          phone: "string",
          email: "string",
          courseStudy: "string",
          universityChoice: "string",
          jambScore: "number",
          utmeScore: "number",
          documents: "json", 
          statement: "string",
          declaration: "string",
          status: "pending | approved | rejected",
          admin_notes: "string | null",
          email_sent: "boolean",
        },
        Insert: {
          
        },
        Update: {
          
        },
        Relationships: [],
      },
    },
    Views: {},
    Functions: {},
    Enums: {
      form_status: ["pending", "approved", "rejected"],
    },
    CompositeTypes: {},
  },
};
