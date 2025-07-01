import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  const locales = ['en', 'pt-BR'];

  const getLocalizedPath = (locale: string) => {
    const pathSegments = pathname.split('/');
    pathSegments[1] = locale;
    return pathSegments.join('/');
  };

  return (
    <div className="flex items-center gap-2">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={getLocalizedPath(locale)}
          className={`text-sm font-medium ${currentLocale === locale ? 'text-green-400' : 'text-white'}`}>
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};