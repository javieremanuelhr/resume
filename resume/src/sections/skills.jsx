import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FcElectricity } from "react-icons/fc";
import { CgScreen } from "react-icons/cg";
import { FcElectronics } from "react-icons/fc";
import { FaGraduationCap } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import { IoLanguageSharp } from "react-icons/io5";
import { LuBinary } from "react-icons/lu";
import { SiAutocad } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { RiFileExcel2Line } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import Flag from 'react-world-flags'

export default function Skills() {
    return (
      <div>
        <div class='sm:pl-14 bg-[#151515] text-white'>

            <p class='flex flex-row items-center pl-8 text-2xl font-semibold justify-center sm:justify-start'> <FaGraduationCap /> <div class='pl-2'> Education </div> </p>

            <div class='flex flex-col'>

                <div class='sm:flex-1 pl-8 pt-6 pb-2'>
                    <p class='font-montserrat text-xl'> BE Industrial Electronics </p>
                    <p class='font-montserrat text-lg'> TecNM Campus Madero </p>
                    <p class='font-montserrat text-lg'> 2018 - 2023 </p>
                </div>

                <div class='sm:flex-1 pl-8 pt-2 pb-6'>
                    <p class='font-montserrat text-xl'> AA English </p>
                    <p class='font-montserrat text-lg'> American School of Tampico </p>
                    <p class='font-montserrat text-lg'> 2019 - 2021 </p>
                </div>

            </div>
      
        </div>
        
        <div class='sm:pl-14 bg-[#151515] text-white'>

          <p class='flex flex-row items-center pl-8 text-2xl font-semibold justify-center sm:justify-start'> <HiLightningBolt /> <div class='pl-2'> Skills </div> </p>

          <div class='flex flex-col'>
              
              <div class='flex-1 pl-8 pt-6 pb-0'>

                <p class='font-montserrat text-xl'> Web Development </p>

                <div class='pl-2 pt-2 font-montserrat text-lg'>

                  <ul>
                    <li class='flex flex-row items-center'> <FaReact /> <div class='pl-2'> ReactJs </div> </li>
                    <li class='flex flex-row items-center'> <RiTailwindCssFill /> <div class='pl-2'> Tailwind CSS </div> </li>
                    <li class='flex flex-row items-center'> <IoLogoJavascript /> <div class='pl-2'> Javascript </div> </li>
                    <li class='flex flex-row items-center'> <FaNodeJs /> <div class='pl-2'> NodeJs </div> </li>
                  </ul>

                </div>
              </div>

              <div class='flex-1 pl-8 py-6'>

                <p class='font-montserrat text-xl'> Software </p>

                <div class='pl-2 pt-2 font-montserrat text-lg'>

                  <ul>
                    <li class='flex flex-row items-center'> <SiAutocad /> <div class='pl-2'> AutoCAD </div> </li>
                    <li class='flex flex-row items-center'> <FaDatabase /> <div class='pl-2'> SQL </div> </li>
                    <li class='flex flex-row items-center'> <RiFileExcel2Line /> <div class='pl-2'> Excel </div> </li>
                  </ul>

                </div>
              </div>
  
              <div class='flex-1 px-8 pb-6'>

                <p class='font-montserrat text-xl'> Industrial Electronics </p>

                <div class='pl-2 pt-2 font-montserrat text-lg'>

                  <ul>
                    <li class='flex flex-row items-center'> <FcElectricity /> <div class='pl-2'> PLC Programming </div> </li>
                    <li class='flex flex-row items-center'> <CgScreen /> <div class='pl-2'> SCADA Systems </div> </li>
                    <li class='flex flex-row items-center'> <FcElectronics /> <div class='pl-2'> Microcontrollers </div> </li>
                  </ul>

                </div>
              </div>

          </div>



        </div>
        <div class='sm:px-14 bg-[#151515] text-white'>
            
            <p class='flex flex-row items-center px-8 text-2xl font-semibold justify-center sm:justify-start'> <IoLanguageSharp /> <div class='pl-2'> Languages </div> </p>
  
            <div class='flex flex-col sm:flex-row'>
                
                <div class='sm:flex-1 px-8 py-6'>
                  <p class='flex flex-row font-montserrat text-lg'> <Flag code='MEX' width='24'></Flag> <div class='pl-2'> Spanish </div></p>
                  <p class='flex flex-row font-montserrat text-lg'> <Flag code='US' width='24'></Flag> <div class='pl-2'>English C1</div> </p>
                  <p class='flex flex-row font-montserrat text-lg'> <Flag code='FRA' width='24'></Flag> <div class='pl-2'>French A2</div></p>
                  <p class='flex flex-row font-montserrat text-lg'> <Flag code='JPN' width='24'></Flag> <div class='pl-2'>Japanese N4</div></p>
                </div>
  
            </div>
        </div>
      </div>

    )
}