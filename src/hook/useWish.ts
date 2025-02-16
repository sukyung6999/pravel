import {
  InfiniteData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { GetWish, PostWish } from '@/services/api/wish.api';
import { ListResultProps, WishDataProps } from '@/types/search.type';

export const useGetWish = () => {
  return useQuery({
    queryKey: ['wisht'],
    queryFn: () => {
      return GetWish();
    },
  });
};

export const usePostWish = (tab: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (wishData: WishDataProps) => {
      return PostWish(wishData);
    },

    onMutate: (wishData) => {
      const result = queryClient.getQueryData([
        'search',
        tab,
      ]) as InfiniteData<ListResultProps>;
      const item = result.pages
        .flatMap((page) => page.list)
        .find(({ contentId }) => wishData.contentId === contentId);

      if (!item) return;
      item.wish = !item.wish;
      queryClient.setQueryData(['search', tab], result);
    },

    onSuccess: (id) => {
      queryClient.invalidateQueries({
        queryKey: ['search', tab],
      });
      queryClient.invalidateQueries({
        queryKey: [tab, 'detail', id, 'info'],
      });
    },
  });
};
