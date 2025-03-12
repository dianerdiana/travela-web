import DataTable, { TableColumn } from "react-data-table-component";

type TableRow = {
  id: string;
  name: string;
  slug: string;
  iconUrl: string;
};

const columns: TableColumn<TableRow>[] = [
  {
    name: "#",
    selector: (row) => row.id,
  },
  {
    name: "Category Name",
    selector: (row) => row.name,
  },
  {
    name: "Slug",
    selector: (row) => row.slug,
  },
];

export default function CategoryTable() {
  return <h1>Kategori table</h1>;
}
