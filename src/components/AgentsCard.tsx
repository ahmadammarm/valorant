/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface AgentProps {
    id: string,
    name: string,
    imageUrl: string,
    description: string
}

const AgentsCard: React.FC = () => {

    const [agent, setAgent] = useState<AgentProps[]>([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://valorant-api.com/v1/agents/")
            const data = await response.json()
            const result = data.data.map((item: any) => {
                return {
                    id: item.uuid,
                    name: item.displayName,
                    imageUrl: item.displayIcon,
                    description: item.description
                }
            })
            setAgent(result)
            console.log(result)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-4 mt-16 bg-gradient-to-b from-gray-900 to-gray-800">
        {agent.map((item, index) => (
            <Card key={index} className="px-4 py-4 bg-primary">
                <CardContent className='flex items-center justify-center rounded-lg border border-red-500 pt-4'>
                    <img src={item.imageUrl} alt="" />
                </CardContent>
                <CardTitle className="text-2xl text-white mt-5 mb-10">
                    {item.name}
                </CardTitle>
                <CardDescription>
                    {item.description}
                </CardDescription>
                <a href={`/agent/${item.id}`}>
                    <Button className="mt-5 bg-gradient-to-r from-red-500 to-purple-800">
                        Get Details More
                    </Button>
                </a>
            </Card>
        ))}
    </div>
  )
}

export default AgentsCard
