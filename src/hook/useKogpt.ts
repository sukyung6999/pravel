import { useQuery } from '@tanstack/react-query';

interface KeywordProps {
  prompt: string;
}

export const useFetchKeyword = ({ prompt }: KeywordProps) => {
  return useQuery({
    queryKey: [prompt],
    queryFn: async () => {
      const response = await fetch('/api/kogpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: `` }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    },
    staleTime: 1000 * 60 * 60 * 24,
  });
};
export default {};
