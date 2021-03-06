// layouts

import Page from "src/components/Page"
import { RootStyle } from "src/components/_Main/RootStyle"
import ProjectNewEditForm from "src/components/_Projekte/ProjectNewEditForm";
import AuthGuard from "src/guards/AuthGuard";
import Layout from "src/layouts"

// components

export default function NeuesProjekt() {
  const isEdit = false;
  return (
    <AuthGuard>
      <Layout>
        <Page title={`${isEdit ? 'Edit' : 'Neues'} Projekt | Dima & Partner`}>
          <RootStyle>
            <ProjectNewEditForm isEdit={isEdit} />
          </RootStyle>
        </Page>
      </Layout>
    </AuthGuard>

  );
}
