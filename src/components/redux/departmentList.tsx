'use client';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./myStore";
import { fetchUsers } from "./departmentsSlice";
import { useContext } from 'react';
import { Department } from "./departmentsSlice";
import {
  AppLayout,
  Container,
  ContentLayout,
  Header,
  Button,
  Box,
  SpaceBetween,
  TextFilter,
  Pagination,
  CollectionPreferences
} from '@cloudscape-design/components';
import Table from "@cloudscape-design/components/table";
import { Navigation } from '../navigation/Navigation';
import Breadcrumbs from '../Breadcrumbs';
import { AppContext } from '../../root/context';

const DepartmentList: React.FC = () => {
  const { navigationOpen, setNavigationOpen } = useContext(AppContext);
  const { departments, loading } = useSelector((state: RootState) => state.departments);
  const dispatch = useDispatch<AppDispatch>();

  // const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState<Department[]>([]);
  const [filteringText, setFilteringText] = useState(""); // Ajout du state pour le filtre
//mis à jour des preferences
  const [preferences, setPreferences] = useState({
    pageSize: 5,
    contentDisplay: [
      { id: "variable", visible: true },
      { id: "value", visible: true },
      { id: "type", visible: true },
      { id: "description", visible: true }
    ]
  });
  
  const handleConfirmPreferences = (newPreferences: any) => {
    setPreferences(newPreferences);
  };
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <AppLayout
      breadcrumbs={<Breadcrumbs />}
      navigationOpen={navigationOpen}
      navigation={<Navigation />}
      notifications={null}
      onNavigationChange={() => setNavigationOpen(!navigationOpen)}
      content={
        <ContentLayout header={<Header variant="h1">Gestion des utilisateurs</Header>}>
          <Container header={<Header variant="h2">Liste des utilisateurs</Header>}>
            <Table
              items={departments.filter(dep => 
                dep.departmentName.toLowerCase().includes(filteringText.toLowerCase())
              )}
              selectionType="multi"
              trackBy="id"
              selectedItems={selectedItems}
              onSelectionChange={({ detail }) => setSelectedItems(detail.selectedItems)}
              columnDefinitions={[
                { id: "departmentName", header: "Nom du département", cell: item => item.departmentName },
                { id: "description", header: "Description", cell: item => item.description },
                {
                  id: "actions",
                  header: "Actions",
                  cell: item => (
                    <Button variant="link">Supprimer</Button>
                  ),
                },
              ]}
              loadingText="Chargement des départements..."
              empty={
                <Box textAlign="center">
                  <SpaceBetween size="m">
                    <b>Aucun département trouvé</b>
                    <Button>Ajouter un département</Button>
                  </SpaceBetween>
                </Box>
              }
              filter={
                <TextFilter 
                  filteringPlaceholder="Rechercher un département..." 
                  filteringText={filteringText}
                  onChange={({ detail }) => setFilteringText(detail.filteringText)}
                />
              }
              pagination={<Pagination currentPageIndex={1} pagesCount={Math.ceil(departments.length / 10)} />}
              preferences={
                <CollectionPreferences
                  title="Préférences"
                  confirmLabel="Confirmer"
                  cancelLabel="Annuler"
                  preferences={preferences}
                  onConfirm={({ detail }) => handleConfirmPreferences(detail)}
                  pageSizePreference={{
                    title: "Taille de la page",
                    options: [
                      { value: 5, label: "5 éléments" },
                      { value: 10, label: "10 éléments" },
                      { value: 20, label: "20 éléments" }
                    ]
                  }}
                  contentDisplayPreference={{
                    options: [
                      { id: "variable", label: "Variable name", alwaysVisible: true },
                      { id: "value", label: "Text value" },
                      { id: "type", label: "Type" },
                      { id: "description", label: "Description" }
                    ]
                  }}
                />
              }
            />
          </Container>
        </ContentLayout>
      }
    />
  );
};

export default DepartmentList;
