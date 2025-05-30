import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./assets/layouts/DefaultLayout";
import Homepage from "./assets/pages/Homepage";
import PostsListPage from "./assets/pages/PostsListPage";
import AboutUsPage from "./assets/pages/AboutUsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />}></Route>

          <Route path="/postslist" element={<PostsListPage />}></Route>

          <Route path="/aboutus" element={<AboutUsPage />} />
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
