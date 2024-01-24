import React from 'react';
import GiveAwayCard from '@/app/components/GiveAwayCard';
import { getGiveAways } from '../endpoints/api';



const ListGiveAways: React.FC = async () => {
  const data = await getGiveAways()

  return (
    <div>
      {data?.map((item:GiveAwayModel) => (
        <main key={item.id}>
          <GiveAwayCard item={item} />
        </main>
      ))}
    </div>
  );
};


export default ListGiveAways;
