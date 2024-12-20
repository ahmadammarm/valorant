import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface AgentDetailProps {
    id: string,
    name: string,
    imageUrl: string,
    description: string
}

const AgentDetail: React.FC = () => {

    const {uuid} = useParams<{ uuid: string }>()
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
                    description: data.data.description
                })
            } catch(error) {
                console.log(error)
            }
        }

        fetchData()
    }, [uuid])

    if(!agent) {
        return <p>Loading.....</p>
    }

  return (
    <div>
      <div className="p-4">
      <img src={agent.imageUrl} alt={agent.name} className="w-64 h-64" />
      <h1 className="text-3xl mt-4">{agent.name}</h1>
      <p className="mt-2">{agent.description}</p>
    </div>
    </div>
  )
}

export default AgentDetail
