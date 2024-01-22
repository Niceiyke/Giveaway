import React from 'react';
import ItemGiveAwayCard from '@/app/components/ItemGiveAwayCard';
import { getItemGiveAways } from '../endpoints/api';



const ListItemGiveAways: React.FC = async () => {
  const data = await getItemGiveAways()
  return (
    <div>
      {data?.map((item:GiveAwayModel) => (
        <main key={item.id}>
          <ItemGiveAwayCard item={item} />
        </main>
      ))}
    </div>
  );
};


export default ListItemGiveAways;
