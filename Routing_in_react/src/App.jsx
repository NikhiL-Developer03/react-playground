import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/neet/online-coaching-class-11"
              element={<Class11Program />}
            />
            <Route
              path="/neet/online-coaching-class-12"
              element={<Class12Program />}
            />
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <div>

        <Link to="/">Allen</Link> |
        <Link to="/neet/online-coaching-class-11">Class 11</Link> |
        <Link to="/neet/online-coaching-class-12">Class 12</Link>
      </div>
      <div>
        <Outlet />
      </div>
      <div>Footer</div>
    </div>
  );
}
function Landing() {
  return (
    <div>
      <p>Welcome to Allen</p>
    </div>
  );
}
function Class11Program() {
  return (
    <div>
      <p>NEET programs for Class 11th</p>
    </div>
  );
}
function Class12Program() {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/");
  }
  return (
    <div>
      <p>NEET programs for Class 12th</p>
      <button onClick={handleNavigate}>Home</button>
    </div>
  );
}
function ErrorPage() {
  return (
    <div>
      <p>Error, Page not found!</p>
    </div>
  );
}

export default App;
