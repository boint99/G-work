import { BrowserRouter } from "react-router-dom"
import React, { Suspense } from "react"
import RoutesView from "~/routes/RoutesView"
import Loading from "~/components/Loading/Loading"
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "~/theme"

export default function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RoutesView />
      </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  )
}
