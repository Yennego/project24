// For Document components
import DocumentList from "../src/components/Document/DocumentList";
import DocumentDetail from "../src/components/Document/DocumentDetail";
import DocumentForm from "../src/components/Document/DocumentForm";
import DocumentItem from "../src/components/Document/DocumentItem";

const DocumentPage = () => {
  return (
    <div>
      <h1>Documents</h1>
      <DocumentList />
      <DocumentDetail />
      <DocumentForm />
      <DocumentItem />
    </div>
  );
};

export default DocumentPage;
