
import { Ug_Country_Type, columns } from "./columns"
import { DataTable } from "./data-table"
import { supabase } from '../../utils/supabaseClient'



async function getData() : Promise<Ug_Country_Type[]>{

  try {
    // Fetch data from Supabase
    const { data, error } = await supabase
        .from('UG_COUNTRY_TYPES')
        .select('*');

    if (error) {
        // Handle Supabase API error
        throw new Error(`Supabase API error: ${error.message}`);
    }

    // 'data' here is of type Ug_Country_Type[] | null
    // You may want to handle the case where 'data' is null based on your app's logic
    if (data) {
        return data as Ug_Country_Type[];
    } else {
        throw new Error('Data not found');
    }
  } catch (error) {
      // Handle other errors
      throw new Error(`Error fetching data: ${error}`);
  }
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}


