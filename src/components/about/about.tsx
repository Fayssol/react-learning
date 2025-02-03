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

import { Navigation } from '../../components/navigation/Navigation';
import Breadcrumbs from '../../components/Breadcrumbs';
import { AppContext } from '../../root/context';


export default function About() {
  const { navigationOpen, setNavigationOpen } = useContext(AppContext);
  return (
    <AppLayout
      breadcrumbs={<Breadcrumbs />}
      navigationOpen={navigationOpen}
      navigation={<Navigation />}
      notifications={null}
      onNavigationChange={() => setNavigationOpen(!navigationOpen)}
      // tools={<HelpPanel header={<÷h2>Overview</h2>}>Help content</HelpPanel>}
      content={
        <ContentLayout
          header={
            <Header variant="h1" info={<Link variant="info">Info</Link>}>
              About our little company.
            </Header>
          }
        >
          <Container
            header={
              <Header variant="h2" description="What is this company about">
                Created at some point in the pass, we deal with....
              </Header>
            }
          >
            <div className="contentPlaceholder" />
          </Container>
        </ContentLayout>
      }
      splitPanel={<SplitPanel header="More details">Maybe a summary of the user,
        should be a separate components</SplitPanel>}
    />
  );
}
