import { Route, Routes } from 'react-router'
import './App.css'
import PageNotFound from './components/PageNotFound/PageNotFound'
import CamelRegistration from './pages/camelRegistration'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import CamelHistory from './pages/CamelHistory'
import CamelEdit from './pages/CamelEdit'
import View from './components/View/View'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<CamelHistory />}></Route>
        <Route path='/add' element={<CamelRegistration />}></Route>
        <Route path='/edit/:id' element={<CamelEdit />}></Route>
        <Route path='/view/:id' element={<View />} ></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </>
  )
}

export default App