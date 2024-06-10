import { FaTools } from "react-icons/fa";

export default function Projects() {
    return (

        <div>

        <div class='sm:px-14 pt-8 bg-[#151515] text-white'>
          <p class='flex flex-row items-center px-8 text-2xl font-semibold'> <FaTools /> <div class='pl-2'> Projects </div> </p>

          <div class='flex flex-col'>

            <div class='sm:flex-1 px-8 py-6'>

              <p class='font-montserrat text-xl'> Real Time Statistics Excel Darshboard for Pipedrive CRM through API </p>
              <p class='font-montserrat text-lg'> 2023 </p>
              <p class='font-montserrat text-lg indent-4 text-justify'> 
                Designed a real-time statistics dashboard for Pipedrive CRM using Excel and the Pipedrive API. The dashboard provided insights into sales performance, customer interactions, and pipeline management. The project improved data visibility and decision-making for the sales team.
                The project was developed using Excel ODBC connections, VBA macros, a SQL database fed by a NodeJs server, and the Pipedrive API to fetch data.  
              </p>

            </div>



          </div>

        </div>

      </div>

    )
}