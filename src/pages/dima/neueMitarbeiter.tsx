// layouts

import Page from "src/components/Page"
import { RootStyle } from "src/components/_Main/RootStyle"

import Layout from "src/layouts"

// components

export default function NeueMitarbeiter() {
  const isEdit = false;
  return (
    <Layout>
      <Page title={`${isEdit ? 'Edit' : 'Neues'} Mitarbeiter | Dima & Partner`}>
        <RootStyle>
          <p>neue Mitarbeiter</p>
        </RootStyle>
      </Page>
    </Layout>
  );
}
