import { MainLayout } from "./app/Layout/main/ui/MainLayout"
import { CounterPage } from "./pages/counter"

const App = () => {
  return (
    <>
      <MainLayout>
        <CounterPage />
      </MainLayout>
    </>
  );
}

export default App;