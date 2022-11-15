import {useState, useEffect, useCallback} from 'react'
import PaginatedUsers from './PaginatedUsers'
import http from './http';
import toast, {Toaster} from 'react-hot-toast'
import { Link } from 'react-router-dom';
const PaginatedComponent = () => {

  const [users, setUsers] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(1);

//************** getting the form Data ******************/
  const getFormData = useCallback( async () => {
    const response = await http.get("api/registers");
    const array = response.data.data;
    console.log(array);
    setUsers(array);
  },[]
)

useEffect(() => {
  getFormData();
   }, [getFormData]);

  // ***************
// To change current page number
const handleClickPageNumber = (e) => {
  setCurrentPage(Number(e.target.id));
};
//
const hanldeNext = () => {
  setCurrentPage(currentPage + 1);
  if (currentPage + 1 > maxPageNumberLimit) {
    setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
  }
};

const handlePrev = () => {
  setCurrentPage(currentPage - 1);
  if ((currentPage - 1) % pageNumberLimit == 0) {
    setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
    setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
  }
};

// To set total number of Pages
const pages = [];
for (let i = 1; i <= Math.ceil(users.length / itemsPerPage); i++) {
  pages.push(i);
}

let pageIncrementBtn = null;
if (pages.length > maxPageNumberLimit) {
  pageIncrementBtn = (
    <li onClick={hanldeNext} className="flex p-2 cursor-pointer text-xl">
      {" "}
      &hellip;{" "}
    </li>
  );
}
let pageDecrementBtn = null;
if (minPageNumberLimit > 1) {
  pageDecrementBtn = (
    <li onClick={handlePrev} className="flex p-2 cursor-pointer text-xl">
      {" "}
      &hellip;{" "}
    </li>
  );
}

const renderPageNumbers = pages.map((number) => {
  if (number < maxPageNumberLimit + 1 && number >= minPageNumberLimit) {
    return (
      <li
        key={number}
        id={number}
        className={`rounded-full p-3 m-2 cursor-pointer ${
          currentPage === number ? "bg-slate-500" : "bg-slate-300"
        }`}
        onClick={handleClickPageNumber}
      >
        {number}{" "}
      </li>
    );
  } else return null;
});

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
// console.log(currentItems)
// console.log(users.length)

  return (
    <div>
      <button className='bg-emerald-400 p-5 m-2'><Link to='/paginated/extract-paginate'>ExtractPagination</Link> </button>
      <PaginatedUsers users={currentItems}/>
      <ul className="flex bg-white list-none place-content-center">
        <li>
          <button
            onClick={handlePrev}
            disabled={currentPage <= pages[0] ? true : false}
            className={`rounded-sm bg-slate-400 p-3 m-2 cursor-pointer `}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li>
          <button
            onClick={hanldeNext}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
            className={`rounded-sm bg-slate-400 p-3 m-2 cursor-pointer`}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  )
}

export default PaginatedComponent