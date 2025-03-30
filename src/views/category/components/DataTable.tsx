"use client";

import DataTable, { TableColumn } from "react-data-table-component";
import { DataRow } from "../types/DataRow";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPaginationCategories } from "../actions/actions";

export default function DataTableCategory() {
  const [categories, setCategories] = useState([]);

  const columns: TableColumn<DataRow>[] = [
    {
      name: "Icon",
      width: "100px",
      sortable: true,
      cell: (row) => (
        <img src={row.iconUrl ? row.iconUrl : ""} alt={`icon-${row.slug}`} className="w-6 h-6" />
      ),
    },
    {
      name: "Category",
      sortable: true,
      sortField: "name",
      cell: (row) => row.name,
    },
    {
      name: "Slug",
      cell: (row) => row.slug,
    },
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getPaginationCategories();

      setCategories(data.data);
    };

    fetchCategories();
  }, []);

  return (
    <DataTable
      noHeader
      subHeader
      sortServer
      pagination
      selectableRows
      paginationServer
      data={categories}
      columns={columns}
      subHeaderComponent={
        <div className="grid items-center w-full grid-cols-12 py-8 text-start">
          <div className="col-span-6">
            <h1 className="text-2xl align-top">Table Category</h1>
          </div>
          <div className="col-span-6 text-end">
            <Link
              href={"/admin/category/create"}
              className="px-5 py-2 text-white rounded-sm bg-trv-blue-3 ring-1 ring-trv-blue-9"
            >
              Add Category
            </Link>
          </div>
        </div>
      }
    />
  );
}
