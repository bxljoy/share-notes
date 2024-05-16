import UserButton from "./user-button";

export default function Header() {
  return (
    <header className=" w-screen flex justify-center border-b">
      <div className="flex items-center justify-end w-full h-16 px-4 mx-auto sm:px-6">
        <UserButton />
      </div>
    </header>
  );
}
