import { AppRouter } from "./routes/AppRouter";
import { NavBar } from "./ui/NavBar";
import { CategoryBar } from "./ui/CategoryBar";

function App() {
  return (
    <>
      <header className="bg-slate-100 p-10 text-center border-b border-black">
        Header
      </header>
      <nav className="flex justify-between border-b">
        <CategoryBar />
        <NavBar />
      </nav>
      <main className="mx-20">
        <AppRouter />
      </main>
      <footer className="bg-slate-100 p-10 text-center border-t border-black">
        Footer{" "}
      </footer>
    </>
  );
}

export default App;
