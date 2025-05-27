import Image from "next/image";

export default function Content() {
   return(
    <main className="flex gap-4 justify-center items-center h-full">
        <div className="container flex flex-col gap-4 max-w-[800px]">
            <Image className="w-16 h-16 rounded-full" src="/profile-baw.jpg" alt="imagem do programador" width={500} height={500}/>

            <h1 className="text-2xl font-semibold">
                Hi, I'm Saulo.
            </h1>

            <p>
                Full-stack software engineer focused on building functional and optimized applications without compromising user experience.
                <br/>Currently working on <a className="text-white font-medium anchor-direction" href="https://www.linkedin.com/company/ampla-industria-metalurgica-ltda" target="blank">Ampla Performance Industrial</a> ⚙️
            </p>

            <div className="flex flex-col gap-2">
                <h4 className="text-lg">
                    Top Skills
                </h4>
                <ul className="flex gap-2 list-dot-separator break-normal flex-wrap">
                    <li>TypeScript</li>
                    <li>Tailwind</li>
                    <li>UI/UX Design</li>
                    <li>React.js</li>
                    <li>Angular</li>
                    <li>Node.js</li>
                    <li>Go</li>
                </ul>
            </div>

            <a className="bg-white rounded-full text-center p-2 my-2 inline font-semibold max-w-[150px]" href="https://wa.me/5554991134299?text=Hello%20Saulo!">
                Say Hello
            </a>
        </div>
    </main>
   ); 
}