import Link from "next/link";

export default function Header() {
    return(
        <header className="fixed left-1/2 sm:left-[70%] md:left-[75%] lg:left-[80%]">
            <ul className="flex gap-8">
                <li>
                    <Link className="anchor-direction text-sm sm:text-base" href="https://www.linkedin.com/in/brustolinsaulo/" target="blank">
                        Linkedin
                    </Link>
                </li>

                <li>
                    <Link className="anchor-direction text-sm sm:text-base" href="https://github.com/saulobrustolin" target="blank">
                        Github
                    </Link>
                </li>
            </ul>
        </header>
    );
}