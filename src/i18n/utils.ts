import { ui as en } from './en';
import { ui as ar } from './ar';

export type Lang = 'en' | 'ar';
export type TranslationKey = keyof typeof en;

const translations = { en, ar } as const;

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first === 'ar' ? 'ar' : 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return (translations[lang][key] as string) ?? (translations.en[key] as string) ?? key;
  };
}

export function switchLangPath(currentPath: string, targetLang: Lang): string {
  if (targetLang === 'ar') {
    if (currentPath.startsWith('/ar')) return currentPath;
    return `/ar${currentPath}`;
  }
  if (currentPath.startsWith('/ar/')) return currentPath.slice(3);
  if (currentPath === '/ar') return '/';
  return currentPath;
}

export function localePath(path: string, lang: Lang): string {
  return lang === 'ar' ? `/ar${path}` : path;
}
