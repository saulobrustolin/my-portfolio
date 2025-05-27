import Link from "next/link";

export default function Header() {
    return(
        <header className="fixed">
            <ul className="flex gap-8 justify-end">
                <li>
                    <Link className="anchor-direction" href="https://www.linkedin.com/in/brustolinsaulo/" target="blank">
                        Linkedin
                    </Link>
                </li>

                <li>
                    <Link className="anchor-direction" href="https://github.com/saulobrustolin" target="blank">
                        Github
                    </Link>
                </li>
            </ul>
        </header>
    );
}