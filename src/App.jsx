import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./assets/layouts/DefaultLayout";

import Homepage from "./assets/pages/Homepage";

import PostsListPage from "./assets/pages/PostsListPage";

import AboutUsPage from "./assets/pages/AboutUsPage";

import NotFoundPage from "./assets/pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />

          <Route path="/posts" element={<PostsListPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
