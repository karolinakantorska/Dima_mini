// layouts

import Page from "src/components/Page"
import { RootStyle } from "src/components/_Main/RootStyle"
import AuthGuard from "src/guards/AuthGuard";

import Layout from "src/layouts"

// components

export default function NeueMitarbeiter() {
  const isEdit = false;
  return (
    <AuthGuard>
      <Layout>
        <Page title={`${isEdit ? 'Edit' : 'Neues'} Mitarbeiter | Dima & Partner`}>
          <RootStyle>
            <p>neue Mitarbeiter</p>
          </RootStyle>
        </Page>
      </Layout>
    </AuthGuard>
  );
}
