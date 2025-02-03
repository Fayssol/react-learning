'use client';

import { I18nProvider } from '@cloudscape-design/components/i18n';
import messages from '@cloudscape-design/components/i18n/messages/all.fr';
import { AppContext } from './root/context';
import AppRoutes from './routes/app-routes';
import { useState } from 'react';
import { DEFAULT_ASKIA_APP_CONTEXT_PROPS } from './constants/constants';

const LOCALE = 'fr';

export default function App() {
  const [activeNavigation, setActiveNavigation] = useState('home');
  const [navigationOpen, setNavigationOpen] = useState(true);
  const [toolNavigation, setToolNavigation] = useState(false);
  const contextValues = {
    ...DEFAULT_ASKIA_APP_CONTEXT_PROPS,
    activeNavigation,
    setActiveNavigation,
    navigationOpen,
    setNavigationOpen,
    toolNavigation,
    setToolNavigation,
  };
  return (
    <AppContext.Provider value={contextValues}>
    <I18nProvider locale={LOCALE} messages={[messages]}>
      <AppRoutes />
    </I18nProvider>
    </AppContext.Provider>
  );
}
