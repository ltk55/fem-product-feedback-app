interface SortOption {
  value: string;
  label: string;
}

interface User {
  image: string;
  name: string;
  username: string;
}

interface Reply {
  content: string;
  replyingTo: string;
  user: User;
}

interface Comment {
  id: number;
  content: string;
  user: User;
  replies?: Reply[];
}

type Status = "suggestion" | "planned" | "in-progress" | "live";

interface ProductRequest {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: Status;
  description: string;
  comments?: Comment[];
}

interface Data {
  currentUser: User;
  productRequests: ProductRequest[];
}

export type { Data, ProductRequest, SortOption, Status };
