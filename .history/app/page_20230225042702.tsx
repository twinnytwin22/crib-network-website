import HomePage from "ui/HomePage";
import Foot from "ui/Navigation/Foot";
import Nav from "ui/Navigation/Nav";
export default function Home() {
  return (
    <div className="h-[100vh]">
      <Nav/>
    <HomePage/>
    <Foot/>
  </div>)
}
