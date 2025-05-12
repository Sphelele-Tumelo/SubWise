import {Link} from 'react-router-dom'

function Register (){
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
          <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
           <h2 className="text-2xl font-bold mb-6 text-center">Create An Account</h2>
           <form>
            <div className='mb-4'>
             <label className="block text-sm mb-1">Email</label>
             <input type="email" placeholder="you@example.com" className="w-full px-4 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div> 
            <div className='mb-4'>
             <label className="block text-sm mb-1">Password</label>
             <input type="email" placeholder="Create Password" className="w-full px-4 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            
            <div className='mb-6'>
             <label className="block text-sm mb-1">Confirm Password</label>
             <input type="email" placeholder="Confirm Password" className="w-full px-4 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 py-2 rounded font-semibold">Register</button>
           </form>
           <p className="mt-4 text-sm text-center">
              Already Have an Account? <Link to="/login" className="text-blue-400 hover:underline">Login</Link>
           </p>
          </div>
        </div>
    );
}

export default Register;