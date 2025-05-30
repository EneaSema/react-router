import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import Homepage from "./assets/pages/Homepage";
import PostsListPage from "./assets/pages/PostsListPage";
import AboutUsPage from "./assets/pages/AboutUsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          {/* <Outlet /> */}
        </Route>

        <Route path="/postslist" element={<PostsListPage />}>
          {/* <Outlet /> */}
        </Route>

        <Route path="/aboutus" element={<AboutUsPage />} />
        {/* <Outlet /> */}
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
