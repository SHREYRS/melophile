import React from 'react'
import { getProviders, signIn} from "next-auth/react"; //getting providers

function Login( {providers}) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
        <img className="w-52 mb-5" src="https://i.ibb.co/5LQHXZs/Untitled.png" alt=""/>

        {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button className="bg-[#5500ff] text-white p-4 rounded-full"
              onClick={() => signIn(provider.id, {callbackUrl: "/"})}
              >
                Login With {provider.name}</button>
            </div>

        ))} 

    </div>
  )
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  }
}