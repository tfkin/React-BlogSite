// Partials
import Layout from "./Layout";

//Content
import Homepage from "./pages/Homepage";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import PostPage from "./pages/PostPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";

// Data Import
// import { DataProvider } from "./context/DataContext";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { useStoreActions } from "easy-peasy";

// React Imports
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    // <DataProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<Homepage isLoading={isLoading} fetchError={fetchError} />}
        />
        <Route path="post">
          <Route index element={<AddPost />} />
          <Route path=":id" element={<PostPage />} />
        </Route>
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
    // </DataProvider>
  );
}

export default App;
