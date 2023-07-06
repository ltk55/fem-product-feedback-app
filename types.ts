interface SortOption {
  value: string;
  label: string;
}

interface Comment {
  id: number;
  content: string;
  user: {
    name: string;
    avatar: string;
  };
}

interface Suggestion {
  id: number;
  title: string;
  description: string;
  category: string;
  upvotes: number;
  comments?: Comment[];
}

interface Data {
  productRequests: Suggestion[];
}

export type { Data, SortOption };
