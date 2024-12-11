export interface Community {
  name: string;
  image: string;
  description: string;
  stats: {
    avgPrice: string;
    schools: string;
    lifestyle: string;
  };
}

export interface CommunityItemProps {
  community: Community;
  isActive: boolean;
  onClick: () => void;
  index: number;
}