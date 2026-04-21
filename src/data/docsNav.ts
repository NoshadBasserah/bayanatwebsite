import { type Lang, useTranslations, localePath } from '@/i18n/utils';

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

export function getNavSections(lang: Lang = 'en'): NavSection[] {
  const t = useTranslations(lang);
  const p = (path: string) => localePath(path, lang);

  return [
    {
      label: t('nav.admin'),
      id: 'admin',
      items: [
        { title: t('nav.access-requests'), href: p('/docs/access-requests/') },
        { title: t('nav.data-assets'), href: p('/docs/data-assets/') },
        { title: t('nav.assets-connector'), href: p('/docs/assets-connector/') },
        { title: t('nav.classifications'), href: p('/docs/classifications/') },
        { title: t('nav.glossary'), href: p('/docs/glossary/') },
        { title: t('nav.lists'), href: p('/docs/lists/') },
        { title: t('nav.identity-providers'), href: p('/docs/identity-providers/') },
        { title: t('nav.analytics-engine'), href: p('/docs/analytics-engine/') },
        { title: t('nav.theme-settings'), href: p('/docs/theme-settings/') },
        {
          title: t('nav.users'),
          href: p('/docs/users/'),
          children: [
            { title: t('nav.users-section'), href: p('/docs/users/users-section/') },
            { title: t('nav.roles-section'), href: p('/docs/users/roles-section/') },
            { title: t('nav.policies-section'), href: p('/docs/users/policies-section/') },
          ],
        },
        { title: t('nav.domains'), href: p('/docs/domains/') },
        { title: t('nav.projects'), href: p('/docs/projects/') },
      ],
    },
    {
      label: t('nav.user'),
      id: 'user',
      items: [
        { title: t('nav.datasets'), href: p('/docs/user/datasets/') },
        { title: t('nav.dashboard'), href: p('/docs/user/dashboard/') },
        { title: t('nav.form-builder'), href: p('/docs/user/form-builder/') },
        { title: t('nav.team-spaces'), href: p('/docs/user/team-spaces/') },
        { title: t('nav.access-requests'), href: p('/docs/user/access-requests/') },
        { title: t('nav.data-assets'), href: p('/docs/user/data-assets/') },
        { title: t('nav.planner-tasks'), href: p('/docs/user/planner-tasks/') },
        { title: t('nav.projects'), href: p('/docs/user/projects/') },
      ],
    },
  ];
}

export const docsNavSections: NavSection[] = getNavSections('en');

export function flattenNavItems(sections: NavSection[], lang: Lang = 'en'): NavItem[] {
  const t = useTranslations(lang);
  const overviewHref = localePath('/docs/', lang);
  const result: NavItem[] = [{ title: t('nav.overview'), href: overviewHref }];
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
