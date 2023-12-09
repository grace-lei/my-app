
import { Ug_Country_Type, columns } from "./columns"
import { DataTable } from "./data-table"
import { supabase } from '../../utils/supabaseClient'

async function getData() {
try {
    let response = await supabase
    .from('UG_COUNTRY_TYPES')
    .select('*')
    
    if (response.error) {
      // Log the error or handle it accordingly.
      console.error('Error fetching data:', response.error);
      throw response.error;
    }
    if (response.data) {
        return response.data
    }
    
  } catch (error) {
    // Handle errors here
    console.error('Error fetching data:', error);
    throw error;
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




