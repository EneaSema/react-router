import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./assets/layouts/DefaultLayout";
import Homepage from "./assets/pages/Homepage";
import PostsListPage from "./assets/pages/PostsListPage";
import AboutUsPage from "./assets/pages/AboutUsPage";
import PostDettailsPage from "./assets/pages/PostDettailsPage";
import NotFoundPage from "./assets/pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />

          <Route path="/postslist">
            <Route path="/postslist" element={<PostsListPage />} />
            <Route path=":id" element={<PostDettailsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <>
    //   <Homepage />
    //   <PostsList />
    //   <AboutUs />
    // </>
  );
}

export default App;
