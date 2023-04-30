import { AppRouter } from "./routes/AppRouter";
import { NavBar } from "./ui/NavBar";

function App() {
  return (
    <>
      <header className="bg-md pd-sm txt-cntr">Header</header>
      <NavBar />
      <main className="mx-20">
        <AppRouter />
      </main>
      <footer className="bg-md pd-sm txt-cntr">Footer </footer>
    </>
  );
}

export default App;
