import reactLogo from '../assets/react.svg'

export default function Header() {
  return (
    <div class='fixed flex flex-row p-2 w-full bg-gradient-to-r from-purple-500 to-pink-500 font-montserrat font-semibold items-center'>

        <img src={reactLogo} class=' flex-none App-logo hover:animate-spin' alt='logo' />

        <h1 class='flex-none text-white text-2xl pl-2'> javieremanuelhr </h1>

        <nav class='flex-grow text-white hidden'>  
            <ul class='flex flex-row justify-end'>
                <li class='p-2 hover:bg-sky-600'>About</li>
                <li class='p-2 hover:bg-sky-600'>Projects</li>
                <li class='p-2 hover:bg-sky-600'>Contact</li>
            </ul>
        </nav>

    </div>
  )
}