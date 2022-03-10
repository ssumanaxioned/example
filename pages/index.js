import CardList from "./Component/CardList";
import Header from "./Component/Header";
import SubHead from "./Component/SubHead";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />
      <SubHead />
      <CardList />
    </div>
  )
}
