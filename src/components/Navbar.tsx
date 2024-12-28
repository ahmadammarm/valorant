import { useState } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"



const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false)

    const links = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Agent",
            href: "/agent"
        }
    ]


    const handleToggle = () => {
        setIsMobile(!isMobile)
    }


  return (
    <nav className="bg-primary shadow-sm fixed top-0 w-full z-50 border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white">
              Valogent
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <Button
              onClick={handleToggle}
              className="text-white hover:text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isMobile ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobile && (
        <div className="md:hidden bg-gray-100 dark:bg-green-900 shadow-md">
          <ul className="space-y-4 p-4">
            {links.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className=""
                  onClick={() => setIsMobile(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
