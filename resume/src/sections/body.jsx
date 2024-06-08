import { Button } from "@/components/ui/button";
import { Bs0Circle } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FcElectricity } from "react-icons/fc";
import { CgScreen } from "react-icons/cg";
import { FcElectronics } from "react-icons/fc";
import { FaGraduationCap } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import { MdOutlineWork } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";
import Flag from 'react-world-flags'

export default function Body() {
    return (
        <div class='flex flex-col text-white'>

          <div class=' sm:px-14 py-14 bg-[#151515]'>

            <p class='px-8 pt-12 font-montserrat text-6xl font-semibold'> Javier Emanuel </p>
            <p class='px-8 pt-2 font-montserrat text-2xl'> Industrial Electronics & Software Engineer </p>
            <p class='px-8 pt-6 font-montserrat text-xl indent-4 text-justify'> I am a software engineer with a background in industrial electronics. I have experience in the design, installation, and maintenance of industrial control systems. I am passionate about technology and how it can be used to improve the quality of life of people. </p>

          </div>
          <div class='sm:px-14 bg-[#151515] text-white'>

            <p class='flex flex-row items-center px-8 text-2xl font-semibold'> <FaGraduationCap /> <div class='pl-2'> Education </div> </p>

            <div class='flex flex-col sm:flex-row'>

              <div class='sm:flex-1 px-8 py-6'>
                <p class='font-montserrat text-xl'> BE Industrial Electronics </p>
                <p class='font-montserrat text-lg'> TecNM Campus Madero </p>
                <p class='font-montserrat text-lg'> 2018 - 2021 </p>
              </div>

              <div class='sm:flex-1 px-8 py-6'>
                <p class='font-montserrat text-xl'> AA English </p>
                <p class='font-montserrat text-lg'> American School of Tampico </p>
                <p class='font-montserrat text-lg'> 2019 - 2021 </p>
              </div>

            </div>
          
        </div>
        <div class='sm:px-14 bg-[#151515] text-white'>

          <p class='flex flex-row items-center px-8 text-2xl font-semibold'> <HiLightningBolt /> <div class='pl-2'> Skills </div> </p>

          <div class='flex flex-col sm:flex-row'>
              
              <div class='flex-1 px-8 py-6'>

                <p class='font-montserrat text-xl'> FrontEnd Development </p>

                <div class='pl-2 pt-2 font-montserrat text-lg'>

                  <ul>
                    <li class='flex flex-row items-center'> <FaReact /> <div class='pl-2'> React </div> </li>
                    <li class='flex flex-row items-center'> <RiTailwindCssFill /> <div class='pl-2'> Tailwind CSS </div> </li>
                    <li class='flex flex-row items-center'> <IoLogoJavascript /> <div class='pl-2'> Javascript </div> </li>
                  </ul>

                </div>
              </div>
  
              <div class='flex-1 px-8 py-6'>

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
            
            <p class='flex flex-row items-center px-8 text-2xl font-semibold'> <IoLanguageSharp /> <div class='pl-2'> Languages </div> </p>
  
            <div class='flex flex-col sm:flex-row'>
                
                <div class='sm:flex-1 px-8 py-6'>
                  <p class='flex flex-row font-montserrat text-lg'> <Flag code='US' width='24'></Flag> <div class='pl-2'>English C1</div> </p>
                  <p class='flex flex-row font-montserrat text-lg'> <Flag code='MEX' width='24'></Flag> <div class='pl-2'> Spanish (Native) </div> (Native)</p>
                  <p class='flex flex-row font-montserrat text-lg'> <Flag code='FRA' width='24'></Flag> <div class='pl-2'>French A2</div></p>
                  <p class='flex flex-row font-montserrat text-lg'> <Flag code='JPN' width='24'></Flag> <div class='pl-2'>Japanese N4</div></p>
                </div>
  
            </div>
        </div>

        <div class='sm:px-14 bg-[#151515] text-white'>

          <div>
              
            <p class='flex flex-row items-center px-8 text-2xl font-semibold'> <MdOutlineWork /> <div class='pl-2'> Work Experience </div> </p>

            <div class='flex flex-col'>
                
                <div class='sm:flex-1 px-8 py-6'>
                  <p class='font-montserrat text-xl'> Control Room Supervisor </p>
                  <p class='font-montserrat text-lg italic'> Flex Americas </p>
                  <p class='font-montserrat text-lg italic'> December 2023 - Present </p>
                  <p class='font-montserrat text-lg indent-4 text-justify pt-1'> As a Control Room Supervisor at Flex Americas, I am responsible for supervising the operation of the control room and the maintenance of the industrial control systems. This includes monitoring and troubleshooting system performance, coordinating with maintenance teams, and ensuring compliance with safety regulations. </p>
                </div>
  
                <div class='sm:flex-1 px-8 py-6'>
                  <p class='font-montserrat text-xl'> Industrial Electronics Engineer </p>
                  <p class='font-montserrat text-lg italic'> Susess Group </p>
                  <p class='font-montserrat text-lg italic'> January 2023 - December 2023 </p>
                  <p class='font-montserrat text-lg indent-4 text-justify pt-1'> As an Industrial Electronics Engineer at Susess Group, my role involved designing and installing industrial control systems. I worked closely with clients to understand their requirements, developed system specifications, and oversaw the installation process. Additionally, I conducted testing and troubleshooting to ensure optimal system performance. </p>
                </div>

                <div class='sm:flex-1 px-8 py-6'>
                  <p class='font-montserrat text-xl'> Full Time English Teacher </p>
                  <p class='font-montserrat text-lg italic'> Berlitz </p>
                  <p class='font-montserrat text-lg italic'> October 2022 - January 2023 </p>
                  <p class='font-montserrat text-lg indent-4 text-justify pt-1'> At Berlitz, I worked as a Full Time English Teacher, delivering English language instruction to students of all ages. I developed lesson plans, conducted classes, and provided individualized support to help students improve their language skills. </p>
                </div>

            </div>

          </div>

        </div>
        <div>

          <div class='sm:px-14 bg-[#151515] text-white'>
            <p class='flex flex-row items-center px-8 text-2xl font-semibold'> <FaTools /> <div class='pl-2'> Projects </div> </p>

            <div class='flex flex-col'>

              <div class='sm:flex-1 px-8 py-6'>

                <p class='font-montserrat text-xl'> Smart Home Automation System </p>
                <p class='font-montserrat text-lg'> 2021 </p>
                <p class='font-montserrat text-lg indent-4 text-justify'> Designed and implemented a smart home automation system using Arduino and Raspberry Pi. The system allows users to control lights, appliances, and security cameras remotely using a mobile app. </p>

              </div>

              <div class='sm:flex-1 px-8 py-6'>
  
                  <p class='font-montserrat text-xl'> Industrial Control System </p>
                  <p class='font-montserrat text-lg'> 2020 </p>
                  <p class='font-montserrat text-lg indent-4 text-justify'> Developed an industrial control system for a manufacturing plant using PLCs and SCADA software. The system automated the production process, improved efficiency, and reduced downtime. </p>

              </div>

            </div>

          </div>

        </div>
        
      </div>
    )
}