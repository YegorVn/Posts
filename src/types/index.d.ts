export interface post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface postListProps {
  items: Array<post> | [];
}

export interface postProps {
  data: post;
}

export interface paginationProps {
  totalPages: number;
  className?: string;
  handlePage: (page: number) => void;
}
