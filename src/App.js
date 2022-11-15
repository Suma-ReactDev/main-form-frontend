import {RegForm, Registered, FormikContainer, DateComponent, FormikContainerEdit} 
from './components/fileImports'
import { Routes, Route } from "react-router-dom";
import  {PaginationProvider}  from './components/store/pagination'
import PaginatedComponent from './components/PaginatedComponent';
import ParentOfTable from './components/pagination/ParentOfTable';

function App() {
  return (
    <div
      className="flex flex-col items-center justify-center
    min-h-screen mx-auto bg-slate-400 rounded"
    >
  
      <Routes>
        <Route path="/" element={<Registered />} />
        <Route path="rgster" element={<FormikContainer />} />
        {/* <Route path="date" element={<DateComponent />} /> */}
        <Route path="rgster-edit" element={<FormikContainerEdit />} />
        {/* <Route path='paginated' 
          element={<PaginationProvider>
                    <PaginatedUsers />
                  </PaginationProvider>} /> */}
        <Route path='paginated' element={<PaginatedComponent />} />
        <Route path='/paginated/extract-paginate' element={<PaginationProvider><ParentOfTable /></PaginationProvider>} />
      </Routes>
    </div>
  );
}

export default App;