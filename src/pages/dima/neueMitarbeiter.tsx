import Page from "src/components/Page"
import AuthGuard from "src/guards/AuthGuard";
import Layout from "src/layouts"

export default function NeueMitarbeiter() {
  const isEdit = false;
  return (
    <AuthGuard>
      <Layout>
        <Page title={`${isEdit ? 'Edit' : 'Neues'} Mitarbeiter | Dima & Partner`}>
          <p>neue Mitarbeiter</p>
        </Page>
      </Layout>
    </AuthGuard>
  );
}
