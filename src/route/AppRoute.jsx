import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom"
import MainPage from '../component/MainPage'
import Page2 from '../component/Page2'
import Page3 from '../component/Page3'
import ProfilePage from '../component/ProfilePage'
import ConditonalRendring from '../component/ConditonalRendring'
import Virtualization from '../component/Virtualization'
import Memo from '../component/Memo'
import Memo2child from '../component/Memo2child'
import UseMemo from '../component/UseMemo'
import UseCallback from '../component/UseCallback'
import Debouncing from '../component/Debouncing'

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/page2' element={<Page2 />}></Route>
        <Route path='/page3' element={<Page3 />}></Route>
        <Route path='/Profile' element={<ProfilePage />}></Route>
        <Route path='/con_Rendring' element={<ConditonalRendring />}></Route>
        <Route path='/virtual' element={<Virtualization />}></Route>
        <Route path='/memo' element={<Memo />}></Route>
        <Route path='/memoChild' element={<Memo2child />}></Route>
        <Route path='/usememo' element={<UseMemo />}></Route>
        <Route path='/useCallback' element={<UseCallback />}></Route>
        <Route path='/debouncing' element={<Debouncing />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute