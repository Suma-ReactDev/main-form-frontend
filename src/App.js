import {RegForm, Registered, FormikContainer, DateComponent, FormikContainerEdit, ErrorPage, SharedLayout,Login} 
from './components/fileImports'
import { Routes, Route, Link, Outlet } from "react-router-dom";
import  {PaginationProvider}  from './components/store/pagination'
import PaginatedComponent from './components/PaginatedComponent';
import ParentOfTable from './components/pagination/ParentOfTable';
import { RiHealthBookLine } from 'react-icons/ri';


function App() {
  return (
    <div
      className="flex flex-col items-center justify-center
    min-h-screen mx-auto bg-slate-400 rounded"
    >
      
      <Routes>
          {/* <Route path='/' element={<Login />} /> */}

          <Route element={<SharedLayout />} >
            <Route index element={<Registered />} />
            <Route path="/rgster" element={<FormikContainer />} />
            <Route path="/rgster-edit" element={<FormikContainerEdit />} />
            <Route path='/paginated' element={<PaginatedComponent />} />
            <Route path='/paginated/extract-paginate' element={<PaginationProvider><ParentOfTable /></PaginationProvider>} />
            <Route path='*' element={<ErrorPage />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
  
        {/* <Route path="date" element={<DateComponent />} /> */}
        
        {/* <Route path='paginated' 
          element={<PaginationProvider>
                    <PaginatedUsers />
                  </PaginationProvider>} /> */}
      </Routes>
    </div>
  );
}

export default App;