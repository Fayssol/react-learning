'use client';
import { useContext, useState } from 'react';
import {
  AppLayout,
  Container,
  ContentLayout,
  Header,
  Link,
  SplitPanel,
} from '@cloudscape-design/components';
import { Navigation } from '../navigation/Navigation';
import Breadcrumbs from '../Breadcrumbs';
import { AppContext } from '../../root/context';


export default function Transactions() {
  const { navigationOpen, setNavigationOpen } = useContext(AppContext);
  return (
    <AppLayout
      breadcrumbs={<Breadcrumbs />}
      navigationOpen={navigationOpen}
      navigation={<Navigation />}
      notifications={null}
      onNavigationChange={() => setNavigationOpen(!navigationOpen)}
      content={
        <ContentLayout
          header={
            <Header variant="h1" info={<Link variant="info">Info</Link>}>
              Transactions
            </Header>
          }
        >
          <Container
            header={
              <Header variant="h2" description="What is this company about">
                Put the damn transaction table here with some filter/search options
              </Header>
            }
          >
            <div className="contentPlaceholder" />
          </Container>
        </ContentLayout>
      }
      splitPanel={<SplitPanel header="More details">More details on the selected transaction...</SplitPanel>}
    />
  );
}
