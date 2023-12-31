import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./Layout";
import Home from "./pages/Home";
import Detail from "./pages/movie/Detail";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import PopularMovie from "./pages/movie/Popular";
import TopRatedMovie from "./pages/movie/TopRated";
import theme from "./utils/constants/theme";

function App() {
  /* 
   * Membuat Routing.
   * Bungkus Routing menggunakan Routes.
   * Buat Routing menggunakan Route.
  */
  return (
    <>
      {/* 
      - Bungkus App dengan ThemProvider
      - Beri props theme dengan tema yang sudah dibuat
      */}
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/popular" element={<PopularMovie />} />
            <Route path="/movie/now" element={<NowPlayingMovie />} />
            <Route path="/movie/top" element={<TopRatedMovie />} />
            <Route path="/movie/:id" element={<Detail />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;