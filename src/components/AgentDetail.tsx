import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface Ability {
  slot: string
  displayName: string
  description: string
  displayIcon: string
}

interface Role {
    uuid: string,
    displayName: string
    displayIcon: string
}

interface AgentDetailProps {
  id: string
  name: string
  imageUrl: string
  smallImageUrl: string
  description: string
  abilities: Ability[]
  role: Role
}

const AgentDetail: React.FC = () => {
  const { uuid } = useParams()
  const [agent, setAgent] = useState<AgentDetailProps | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://valorant-api.com/v1/agents/${uuid}`)
        const data = await response.json()
        setAgent({
          id: data.data.uuid,
          name: data.data.displayName,
          imageUrl: data.data.displayIcon,
          smallImageUrl: data.data.bustPortrait,
          description: data.data.description,
          abilities: data.data.abilities,
          role: data.data.role
        })
      } catch(error) {
        console.log(error)
      }
    }

    fetchData()
  }, [uuid])

  if(!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-pulse text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <img
              src={agent.smallImageUrl}
              alt={agent.name}
              className="relative w-64 h-64 object-cover rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
              loading='lazy'
            />
          </div>

          <div className="flex-1 space-y-4">
            <h1 className="text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500">
              {agent.name}
            </h1>
            <img
              src={agent.role.displayIcon}
              alt={agent.name}
              className="w-7 h-7"
              loading='lazy'
            />
            <p className="text-gray-500 text-lg">
                {agent.role.displayName}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              {agent.description}
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Agent Abilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agent.abilities.map((ability) => (
              <div
                key={ability.slot}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-purple-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-red-500 to-purple-500 p-0.5 rounded-lg">
                    <div className="bg-gray-900 p-2 rounded-lg">
                      {ability.displayIcon && (
                        <img
                          src={ability.displayIcon}
                          alt={ability.displayName}
                          className="w-12 h-12"
                          loading="lazy"
                        />
                      )}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {ability.displayName}
                  </h3>
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    {ability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentDetail