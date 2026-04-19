import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  ChevronRight,
  Zap,
  PieChart,
  DollarSign,
  MessagesSquare,
  Files,
  FolderKey,
  ShieldCheck,
  UserPlus,
  AlertCircle,
  FileWarning,
  Lock, 
  UserCircle, 
  Shapes,
  LayoutTemplate,
  PanelTop,
  TextCursorInput,
  Table,
  BarChart3,
  Layers,
  CreditCard,
  Kanban,
  LucideIcon
} from "lucide-react";

export interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
  items?: NavItem[];
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const navigationGroups: NavGroup[] = [
  {
    label: "Dashboards",
    items: [
      { title: "Overview", url: "/dashboard", icon: LayoutDashboard },
      { title: "Analytics", url: "/dashboard/analytics", icon: PieChart },
      { title: "Finance", url: "/dashboard/finance", icon: DollarSign },
    ],
  },
  {
    label: "Applications",
    items: [
      { 
        title: "Users", 
        icon: Users, 
        url: "#",
        items: [
          { title: "List", url: "/users", icon: Users },
          { title: "Roles", url: "/users/roles", icon: ShieldCheck },
          { title: "Add User", url: "/users/add", icon: UserPlus },
        ]
      },
      { title: "Messages", url: "/messages", icon: MessagesSquare },
      { title: "Kanban", url: "/applications/kanban", icon: Kanban },
      { title: "Wizard", url: "/applications/wizard", icon: Zap },
    ],
  },
  {
    label: "UI Showroom",
    items: [
      { title: "Base UI", url: "/components/base", icon: LayoutTemplate },
      { title: "Cards & Widgets", url: "/components/cards", icon: PanelTop },
      { title: "Forms & Inputs", url: "/components/forms", icon: TextCursorInput },
      { title: "Advanced Tables", url: "/components/tables", icon: Table },
      { title: "Charts & Graphs", url: "/components/charts", icon: BarChart3 },
      { title: "Icons", url: "/components/icons", icon: Shapes },
      { title: "Modals & Overlays", url: "/components/overlays", icon: Layers },
    ],
  },
  {
    label: "Pages & Utilities",
    items: [
      { 
        title: "Authentication", 
        icon: FolderKey, 
        url: "#",
        items: [
          { title: "Login", url: "/auth/login", icon: Lock },
          { title: "Register", url: "/auth/register", icon: UserCircle },
          { title: "Forgot Password", url: "/auth/forgot-password", icon: AlertCircle },
        ]
      },
      { title: "Pricing", url: "/pricing", icon: CreditCard },
      { 
        title: "Error Pages", 
        icon: Files, 
        url: "#",
        items: [
          { title: "404 Not Found", url: "/error/404", icon: FileWarning },
          { title: "500 Server Error", url: "/error/500", icon: AlertCircle },
        ]
      },
      { title: "Settings", url: "/settings", icon: Settings },
    ],
  },
];
