import React from 'react';
import ParticipantCard from './ParticipantCard';


interface GiveAwayDetailCardProps {
  item: GiveAwayModel;
}

const GiveAwayDetailCard: React.FC<GiveAwayDetailCardProps> = ({ item }) => {
  return (
    <main className='flex justify-center items-center'>
      {item?<section className='mt-4 border-2 p-4 w-1/2'>
          <h2>#{item?.amount} Giveaway by {item.user.email}</h2>
          <p>{item?.description}</p>
          <h2 className="font-bold">participant: {item?.participant.map((item)=><div key={item.email}><ParticipantCard participant={item}/></div>)} </h2>

        
      </section>:''
      }
     
    </main>
  );
};

export default GiveAwayDetailCard;
