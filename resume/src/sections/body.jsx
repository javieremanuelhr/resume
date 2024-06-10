import Workexperience from './workexperience.jsx'
import Skills from './skills.jsx'
import Projects from './projects.jsx'

export default function Body() {
    return (
        <div class='flex flex-col text-white'>

          <div class=' sm:px-14 py-14 bg-[#151515]'>

            <p class='px-8 pt-12 font-montserrat text-6xl font-semibold text-center sm:text-left'> Javier Emanuel </p>
            <p class='px-8 pt-4 sm:pt-2 font-montserrat text-2xl text-center sm:text-left'> Industrial Electronics & Software Engineer </p>
            <p class='px-8 pt-6 font-montserrat text-xl indent-4 text-justify'> I am a software engineer with a background in industrial electronics. I have experience in the design, installation, and maintenance of industrial control systems. I am passionate about technology and how it can be used to improve the quality of life of people. </p>

          </div>
 
          <div class='flex flex-col sm:flex-row'> 
            <Skills />
            <Workexperience />
          </div>
          <div>
            <Projects />
          </div>

        
      </div>
    )
}