import Link from "next/link";

export default function Header() {
    return(
        <header className="absolute right-0 top-0">
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