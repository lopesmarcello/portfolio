import { useParams } from 'next/navigation';
import en from '../../locales/en.json';
import ptBR from '../../locales/pt-BR.json';

const translations = {
  en,
  'pt-BR': ptBR,
};

type TranslationNode = string | { [key: string]: TranslationNode };

export const useTranslation = () => {
  const params = useParams();
  const locale = params.locale as keyof typeof translations;

  const t = (key: string) => {
    return key.split('.').reduce((acc: TranslationNode, cur: string): TranslationNode => {
      if (acc && typeof acc === 'object' && Object.prototype.hasOwnProperty.call(acc, cur)) {
        return acc[cur];
      }
      return key;
    }, translations[locale]);
  };

  return { t, locale };
};
