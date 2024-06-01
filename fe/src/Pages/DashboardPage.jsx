import { useQuery } from '@tanstack/react-query';

import { getUsers } from '../api/api.js';

export default function DashboardPage() {
  const { isLoading, data } = useQuery({
    queryKey: ['user'],
    queryFn: getUsers,
  });
  const text = data?.data?.users[0].firstName;
  console.log(text);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      Dashboard <p>{text}</p>
    </div>
  );
}
