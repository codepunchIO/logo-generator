import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const StartPage: React.FC = () => {


//  const handleSubmit=(e:React.FormEventHandler<HTMLFormElement>)=>{
  
//   }
  return(
    <div className='p-1 h-full flex flex-col'>
      <Header />
      <div className='flex flex-col justify-self-center  w-auto mx-auto h-full items-center justify-center'>
      <p className='text-3xl  text-center font-bold mb-4 '>
     Create logo in 3 minutes
        </p>
        <p className='text-l text-center font-semibold'>
          Flex is a Small SaaS Business. Flex isn’t a traditional company. </p>
        <div className='flex flex-row justify-center mt-10 '>
          <form>
              
              {/* <textarea
                placeholder='Brand name...'
                className='border border-black-100 h-10 w-64'
             ></textarea> */}
            <input
              name='brand'
              placeholder='Brand name...'
                className='border border-black-100 h-10 w-64'
            />
            
            <NavLink to={'/generator'}> <button className='w-32 px-1 mx-5 h-10 bg-green-500 rounded text-white'>
                Get Started!
          </button>
            </NavLink>
            </form>
        </div>

        

      
      </div>

      <Footer />
    </div>

  )
}
export default StartPage
