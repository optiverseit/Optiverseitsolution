import MainNavbar from "./MainNavbar";

export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <MainNavbar />
      </header>
      <div className="h-16" />
    </>
  );
}