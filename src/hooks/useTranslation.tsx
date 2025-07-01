import { useParams } from 'next/navigation';
import en from '../../locales/en.json';
import ptBR from '../../locales/pt-BR.json';

const translations = {
  en,
  'pt-BR': ptBR,
};

export const useTranslation = () => {
  const params = useParams();
  const locale = params.locale as keyof typeof translations;

  const t = (key: string) => {
    return key.split('.').reduce((acc: any, cur: string) => {
      if (acc && typeof acc === 'object') {
        return acc[cur];
      }
      return key;
    }, translations[locale]);
  };

  return { t, locale };
};