"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { supabase } from '../../utils/supabaseClient'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Ug_Country_Type = {
  COUNTRY_CODE: string
  DESCR: string
  LONG_NAME: string
}

async function handleDelete(countryCode: string) {
  console.log("Deleting this country: ", countryCode);

  try {
    // const { data, error } = await supabase
    // .from('UG_COUNTRY_TYPES')
    // .select('COUNTRY_CODE')
    // .eq('COUNTRY_CODE', countryCode)

    // console.log(data)

    const { error } = await supabase
    .from('UG_COUNTRY_TYPES')
    .delete()
    .eq('COUNTRY_CODE', countryCode);
    console.log(error, "~~~");


    // if (error) {
    //   console.log(error);
    //   throw new Error("You are not allowed to delete");
    // }
    
  } catch (error) {
    // Handle other errors
    throw new Error(`Error deleting data: ${error}`);
    console.log("Error 2");
}

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
  {
    id: "actions",
    cell: ({ row }) => {
      const country = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => handleDelete(country.COUNTRY_CODE)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]
