"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Ug_Country_Type = {
  COUNTRY_CODE: string
  DESCR: string
  LONG_NAME: string
}

export const columns: ColumnDef<Ug_Country_Type>[] = [
  {
    accessorKey: "COUNTRY_CODE",
    header: "Country Code",
  },
  {
    accessorKey: "DESCR",
    header: "Description",
  },
  {
    accessorKey: "LONG_NAME",
    header: "Country Name",
  },
]
