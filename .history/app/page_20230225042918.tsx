import HomePage from "ui/HomePage";
import Foot from "ui/Navigation/Foot";
import Nav from "ui/Navigation/Nav";
export default function Home() {
  return (
    <div className="h-[100vh] bg-red-100 dark:bg-gray-900 ">
      <div className="mt-20">
      <Nav/></div>
    <HomePage/>
    <Foot/>
  </div>)
}
