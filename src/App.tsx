import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { DefaultLayout } from './layouts/DefaultLayout'
import Home from '~/pages/home'

const App = () => {
  return (
    <main className='app'>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
