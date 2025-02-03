import { BreadcrumbGroup } from '@cloudscape-design/components';
import { useContext } from 'react';
import { AppContext } from '../root/context';

const Breadcrumbs = () => {
  const {activeNavigation} = useContext(AppContext);
  return <BreadcrumbGroup
    items={[
      { text: 'Askia', href: '#' },
      { text: activeNavigation, href: `/${activeNavigation}` },
    ]}
  />;
}

export default Breadcrumbs;