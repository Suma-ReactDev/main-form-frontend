import Card from './helpers/Card';
import {Link} from 'react-router-dom';
const ErrorPage = () =>{
  return(
    <Card className="grid place-content-center bg-cyan-800 capitalize text-2xl text-white text-center">
      page not found
      <Link to='/' className='bg-cyan-500 p-1 m-1 rounded'>back home</Link>
    </Card>
  )
}
export default ErrorPage;