import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import Home from '~/pages/home'
import './styles/index.scss'

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
