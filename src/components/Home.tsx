import { Button } from "./ui/button"


const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 mt-5 md:mt-10">
      <div className="flex flex-col md:flex-row px-10 py-10 md:px-20 md:py-20">
            <div className="mt-20">
                <img src="/valo.jpg" alt="" className="w-[40rem] rounded-lg border md:mr-10"/>
            </div>
            <div className="mt-10 md:mt-36">
                <h1 className="text-4xl font-bold text-center text-white">
                    Welcome to Valogent
                </h1>
                <p className="text-xl text-gray-300 mt-5 text-center">
                    Valogent is a website that provides information about Valorant agents.
                </p>
                <p className="text-xl text-gray-300 mt-5 text-center">
                    Valogent provides detailed information about each agent, including their roles and skills.
                </p>
                <a href="/agent" className="flex justify-center mt-10">
                    <Button className="bg-gradient-to-r from-red-500 to-purple-800">
                        Get Started
                    </Button>
                </a>
            </div>
      </div>
    </div>
  )
}

export default Home
