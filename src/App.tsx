import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./core/provider/darkMode";
import MainLayout from "./components/partial/MainLayout";
import OTP from "./pages/otp";
import Signup from "./pages/signup";
import NewPin from "./pages/newPin";
import Notification from "./pages/notification";
import PhonePage from "./pages/phone";
import HomePage from "./pages/home";
interface PathsType {
  id: number;
  path: string;
  element: React.ReactNode;
}

export const paths: PathsType[] = [
  { id: 1, path: "/", element: <HomePage /> },
  { id: 2, path: "/digit/phone", element: <PhonePage /> },
  { id: 3, path: "/digit/otp", element: <OTP /> },
  { id: 4, path: "/digit/signup", element: <Signup /> },
  { id: 5, path: "/digit/newPin", element: <NewPin /> },
  { id: 6, path: "/notification", element: <Notification /> },
];
function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            {paths.map((p) => (
              <Route path={p.path} element={p.element} key={p.id} />
            ))}
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
