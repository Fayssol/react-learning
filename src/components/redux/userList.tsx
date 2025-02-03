'use client';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./myStore";
import { fetchUsers, addUser, updateUser, deleteUser } from "./usersSlice";
import { useContext } from 'react';
import {
  AppLayout,
  Container,
  ContentLayout,
  Header,
  Table,
  Button,
  Box,
  FormField,
  Input,
} from '@cloudscape-design/components';
import { Navigation } from '../../components/navigation/Navigation';
import Breadcrumbs from '../../components/Breadcrumbs';
import { AppContext } from '../../root/context';

const UserList: React.FC = () => {
  const { navigationOpen, setNavigationOpen } = useContext(AppContext);
  const { users, loading } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [editingUser, setEditingUser] = useState<{ id: number; name: string; email: string } | null>(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      dispatch(addUser(newUser));
      setNewUser({ name: "", email: "" });
    }
  };

  const handleUpdateUser = () => {
    if (editingUser) {
      dispatch(updateUser(editingUser));
      setEditingUser(null);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <AppLayout
      breadcrumbs={<Breadcrumbs />}
      navigationOpen={navigationOpen}
      navigation={<Navigation />}
      notifications={null}
      onNavigationChange={() => setNavigationOpen(!navigationOpen)}
      content={
        <ContentLayout
          header={<Header variant="h1">Gestion des utilisateurs</Header>}
        >
         <Box margin="m">
          <Container header={<Header variant="h2">Ajouter un utilisateur</Header>}>
            <FormField label="Nom">
              <Input
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.detail.value })}
              />
            </FormField>
            <FormField label="Email">
              <Input
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.detail.value })}
              />
            </FormField>
            <Box padding="m">
            <Button variant="primary" onClick={handleAddUser}>Ajouter</Button>
            </Box>
          </Container>
        </Box>
          {editingUser && (
            <Container header={<Header variant="h2">Modifier l'utilisateur</Header>}>
              <FormField label="Nom">
                <Input
                  value={editingUser.name}
                  onChange={(e) => setEditingUser({ ...editingUser, name: e.detail.value })}
                />
              </FormField>
              <FormField label="Email">
                <Input
                  value={editingUser.email}
                  onChange={(e) => setEditingUser({ ...editingUser, email: e.detail.value })}
                />
              </FormField>
              <Button variant="primary" onClick={handleUpdateUser}>Mettre à jour</Button>
            </Container>
          )}

          <Container header={<Header variant="h2">Liste des utilisateurs</Header>}>
            <Table
              items={users}
              columnDefinitions={[
                { id: "departmentName", header: "departmentName", cell: (item) => item.departmentName },
                { id: "description", header: "description", cell: (item) => item.description },
                {
                  id: "actions",
                  header: "Actions",
                  cell: (item) => (
                    <>
                      {/* <Button onClick={() => setEditingUser(item)}>Modifier</Button> */}
                      <Button onClick={() => dispatch(deleteUser(item.id))} variant="link">Supprimer</Button>
                    </>
                  ),
                },
              ]}
            />
          </Container>
        </ContentLayout>
      }
    />
  );
};

// export default UserList;















// 'use client';
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState, AppDispatch } from "./myStore";
// import { fetchUsers, deleteUser } from "./usersSlice";
// import { useContext, useState } from 'react';
// import {
//   AppLayout,
//   Container,
//   ContentLayout,
//   Header,
//   Link,
//   SplitPanel,
// } from '@cloudscape-design/components';

// import { Navigation } from '../../components/navigation/Navigation';
// import Breadcrumbs from '../../components/Breadcrumbs';
// import { AppContext } from '../../root/context';


// const UserList: React.FC = () =>  {

//   const { navigationOpen, setNavigationOpen } = useContext(AppContext);
//   const { users, loading } = useSelector((state: RootState) => state.users);

//   const dispatch = useDispatch<AppDispatch>();
//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <AppLayout
//       breadcrumbs={<Breadcrumbs />}
//       navigationOpen={navigationOpen}
//       navigation={<Navigation />}
//       notifications={null}
//       onNavigationChange={() => setNavigationOpen(!navigationOpen)}
//       // tools={<HelpPanel header={<÷h2>Overview</h2>}>Help content</HelpPanel>}
//       content={
//         <ContentLayout
//           header={
//             <Header variant="h1" info={<Link variant="info">Info</Link>}>
//               About our little company.
//             </Header>
//           }
//         >
//           <Container
//             header={
//               <Header variant="h2" description="What is this company about">
//                 Created at some point in the pass, we deal with....
//               </Header>
//             }
//           >
//              <div>
//                 <h2>Liste des utilisateurs</h2>
//                 <ul>
//                     {users.map((user) => (
//                     <li key={user.id}>
//                         {user.name} - {user.email}
//                         <button onClick={() => dispatch(deleteUser(user.id))}>Supprimer</button>
//                     </li>
//                     ))}
//                 </ul>
//                 </div>
//             <div className="contentPlaceholder" />
//           </Container>
//         </ContentLayout>
//       }
//       splitPanel={<SplitPanel header="More details">Maybe a summary of the user,
//         should be a separate components</SplitPanel>}
//     />
//   );
// }





















// const UserList: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { users, loading } = useSelector((state: RootState) => state.users);

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>Liste des utilisateurs</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name} - {user.email}
//             <button onClick={() => dispatch(deleteUser(user.id))}>Supprimer</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default UserList;
