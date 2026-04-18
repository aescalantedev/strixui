export type UserRole = "Admin" | "Editor" | "Viewer";
export type UserStatus = "Active" | "Inactive";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
  status: UserStatus;
  lastLogin: string;
}

export const users: User[] = [
  { id: "USR-001", name: "Alex Rivera", email: "alex.rivera@strix.ui", avatar: "https://github.com/shadcn.png", role: "Admin", status: "Active", lastLogin: "2 hours ago" },
  { id: "USR-002", name: "Sarah Jenkins", email: "s.jenkins@strix.ui", avatar: "https://github.com/nutlope.png", role: "Editor", status: "Active", lastLogin: "5 hours ago" },
  { id: "USR-003", name: "Marcus Chen", email: "marcus@strix.ui", avatar: "", role: "Viewer", status: "Inactive", lastLogin: "2 days ago" },
  { id: "USR-004", name: "Elena Rodriguez", email: "elena.r@strix.ui", avatar: "", role: "Admin", status: "Active", lastLogin: "10 mins ago" },
  { id: "USR-005", name: "David Kim", email: "david.k@strix.ui", avatar: "", role: "Editor", status: "Active", lastLogin: "1 day ago" },
  { id: "USR-006", name: "Sofia Müller", email: "sofia@strix.ui", avatar: "", role: "Viewer", status: "Active", lastLogin: "3 hours ago" },
  { id: "USR-007", name: "James Wilson", email: "james.w@strix.ui", avatar: "", role: "Editor", status: "Inactive", lastLogin: "1 week ago" },
  { id: "USR-008", name: "Isabella Rossi", email: "isabella@strix.ui", avatar: "", role: "Admin", status: "Active", lastLogin: "Just now" },
  { id: "USR-009", name: "Thomas Wright", email: "thomas@strix.ui", avatar: "", role: "Viewer", status: "Active", lastLogin: "4 days ago" },
  { id: "USR-010", name: "Lucas Vance", email: "lucas@strix.ui", avatar: "", role: "Editor", status: "Active", lastLogin: "6 hours ago" },
];
