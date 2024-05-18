import UserButton from "./user-button";
import NavBar from "./ main-nav";

export default function Header() {
  return (
    <header className=" w-screen flex justify-center p-5">
      <div className="flex items-center justify-between w-full h-16 px-4 mx-auto sm:px-6">
        <NavBar />
        <UserButton />
      </div>
    </header>
  );
}
