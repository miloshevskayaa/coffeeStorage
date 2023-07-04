import {
  useCreateFavoriteMutation,
  useGetFavoritesQuery,
  useRemoveFavoriteMutation,
} from 'app/store/favorites';
import { useAppSelector } from './use-app-selector';

export const useToggleFavorites = (coffeeId: string) => {
  const [createFavorite, { isLoading: isCreatingFavorite }] =
    useCreateFavoriteMutation();
  const [removeFavorite, { isLoading: isRemovingFavorite }] =
    useRemoveFavoriteMutation();

  const selectedUser = useAppSelector(state => state.user.user);
  const userId = selectedUser?.id;

  let { data: favorites = [] } = useGetFavoritesQuery(userId);

  favorites = favorites.map((item: any) => item.coffee);

  const toggleFavorite = async () => {
    if (isCreatingFavorite || isRemovingFavorite) {
      return;
    }

    if (favorites.find((item: any) => item.id === coffeeId)) {
      await removeFavorite({ userId, coffeeId });
    } else {
      await createFavorite({ userId, coffeeId });
    }
  };

  return [toggleFavorite, favorites];
};
