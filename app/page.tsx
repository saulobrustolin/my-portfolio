import Header from "./modules/Header";
import Content from "./modules/Content";

export default function Home() {
  return(
    <div className="py-8 px-12 h-screen w-screen flex flex-col items-end">
    <Header/>
    <Content/>
    </div>
  );
}
