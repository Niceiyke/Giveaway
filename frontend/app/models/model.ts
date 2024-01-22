interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
}

interface GiveAwayParticipant {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
}

interface GiveAwayModel {
  user: User;
  participant: GiveAwayParticipant[];
  id: string;
  description: string;
  status: boolean;
  created_at: string; 
  name?: string;
  amount?: string;
  category?: string;

}

