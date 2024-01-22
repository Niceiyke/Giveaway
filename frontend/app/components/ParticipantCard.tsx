import React from 'react'

interface ParticipantProp{

    participant:GiveAwayParticipant
}

const ParticipantCard:React.FC<ParticipantProp>=({participant})=> {
  return (
    <ul>
        <li className=' font-normal text-sm'>{participant.email}</li>
    </ul>
  )
}

export default ParticipantCard