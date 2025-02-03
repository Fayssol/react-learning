'use client';
import {
  AppLayout,
  Container,
  ContentLayout,
  Header,
  HelpPanel,
  Link,
  SplitPanel,
} from '@cloudscape-design/components';
import { AppContext } from '../../root/context';
import { useContext } from 'react';
import Navigation from '../navigation/Navigation';
import Breadcrumbs from '../Breadcrumbs';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers/store';
import { increment,decrement } from '../../actions';
import Button from "@cloudscape-design/components/button";
import Form from '../form/Form';
export default function Home() {
    const { navigationOpen, setNavigationOpen, toolNavigation , setToolNavigation} = useContext(AppContext);
    const counter = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();
  return (
   
      <AppLayout
        breadcrumbs={
          <Breadcrumbs/>
        }
        navigationOpen={navigationOpen}
        onNavigationChange={() => setNavigationOpen(!navigationOpen)}
        navigation={
          <Navigation/>
        }
        notifications={
         null
        }
        toolsOpen={toolNavigation}
        onToolsChange={() => setToolNavigation(!toolNavigation)}
        tools={<HelpPanel header={<h2>Overview</h2>}>Help content</HelpPanel>}
        content={
          <ContentLayout
            header={
              <Header variant="h1" info={<Link variant="info">Info</Link>}>
                Page header
              </Header>
            }
          >
            <Container
              // header={
              //   <Header variant="h2" description="Container description">
              //     Container header **** {counter}
                 
              //   </Header>
                
              // }
            >
               {/* <Button variant="primary" onClick={()=>dispatch(decrement())}>++</Button> */}
               <Form></Form>
              <div className="contentPlaceholder" />
            </Container>
          </ContentLayout>
        }
        splitPanel={<SplitPanel header="Split panel header">Split panel content</SplitPanel>}
      />
 
  );
}
