import { BrowserRouter } from "react-router-dom"
import React, { Suspense } from "react"
import RoutesView from "~/routes/RoutesView"
import Loading from "~/components/Loading/Loading";

// Lazy load About page
const About = React.lazy(() => import("./pages/About/About"));

export default function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <RoutesView />
      </Suspense>
    </BrowserRouter>
  );
}
