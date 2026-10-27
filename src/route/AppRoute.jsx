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
import Zustand from '../component/Zustand'
import P_Question from '../component/P_Question'
import UseRef from '../component/UseRef'
import Create404page from '../component/Create404page'
import LanguageToggle from '../component/i18n/LanguageToggle'

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
        <Route path='/zustand' element={<Zustand />}></Route>
        <Route path='/question' element={<P_Question />}></Route>
        <Route path='/useRef' element={<UseRef />}></Route>
        <Route path='/language' element={<LanguageToggle />}></Route>
        <Route path='*' element={<Create404page />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute