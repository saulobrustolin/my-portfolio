import Header from "./modules/Header";
import Content from "./modules/Content";

export default function Home() {
  return(
    <div className="flex flex-col justify-center items-center w-[90vw] h-[90vh] relative">
      <Header/>
      <div className="py-8 px-12 w-full block">
      <Content/>
      </div>
    </div>
  );
}
