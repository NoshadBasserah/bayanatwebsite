export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export interface NavSection {
  label: string;
  id: string;
  items: NavItem[];
}

export const docsNavSections: NavSection[] = [
  {
    label: "As Admin role",
    id: "admin",
    items: [
      { title: "Access Requests", href: "/docs/access-requests/" },
      { title: "Data Assets", href: "/docs/data-assets/" },
      { title: "Assets Connector", href: "/docs/assets-connector/" },
      { title: "Classifications", href: "/docs/classifications/" },
      { title: "Glossary", href: "/docs/glossary/" },
      { title: "Lists", href: "/docs/lists/" },
      { title: "Identity Providers", href: "/docs/identity-providers/" },
      { title: "Analytics Engine", href: "/docs/analytics-engine/" },
      { title: "Theme Settings", href: "/docs/theme-settings/" },
      {
        title: "Users",
        href: "/docs/users/",
        children: [
          { title: "Users Section", href: "/docs/users-section/" },
          { title: "Roles Section", href: "/docs/roles-section/" },
          { title: "Policies Section", href: "/docs/policies-section/" },
        ],
      },
      { title: "Domains", href: "/docs/domains/" },
      { title: "Projects", href: "/docs/projects/" },
    ],
  },
  {
    label: "As User role",
    id: "user",
    items: [
      { title: "Datasets", href: "/docs/user/datasets/" },
      { title: "Dashboard", href: "/docs/user/dashboard/" },
      { title: "Form builder", href: "/docs/user/form-builder/" },
      { title: "Team & Spaces", href: "/docs/user/team-spaces/" },
      { title: "Access Requests", href: "/docs/user/access-requests/" },
      { title: "Data Assets", href: "/docs/user/data-assets/" },
      { title: "Planner & Tasks", href: "/docs/user/planner-tasks/" },
      { title: "Projects", href: "/docs/user/projects/" },
    ],
  },
];

/** Flatten all nav items (including children) in sidebar order */
export function flattenNavItems(sections: NavSection[]): NavItem[] {
  const result: NavItem[] = [{ title: "Overview", href: "/docs/" }];
  for (const section of sections) {
    for (const item of section.items) {
      result.push({ title: item.title, href: item.href });
      if (item.children) {
        for (const child of item.children) {
          result.push({ title: child.title, href: child.href });
        }
      }
    }
  }
  return result;
}
