import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import GetStarted from "./pages/GetStarted";
import Strategy from "./pages/Strategy";
import Resources from "./pages/Resources";
import CaseStudies from "./pages/CaseStudies";
import Fountain from "./pages/Fountain";
import AinsleyCostello from "./pages/AinsleyCostello";
import Events from "./pages/Events";
import { NIP19Page } from "./pages/NIP19Page";
import NotFound from "./pages/NotFound";

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* GNI Section */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />

        {/* Guides Section */}
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/resources" element={<Resources />} />

        {/* Case Studies Section */}
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/fountain" element={<Fountain />} />
        <Route path="/ainsley-costello" element={<AinsleyCostello />} />

        {/* Events */}
        <Route path="/events" element={<Events />} />

        {/* NIP-19 route for npub1, note1, naddr1, nevent1, nprofile1 */}
        <Route path="/:nip19" element={<NIP19Page />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;