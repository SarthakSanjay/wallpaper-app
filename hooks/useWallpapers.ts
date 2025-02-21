export interface Wallpaper {
  url: string;
  name: string;
}

export interface FullWallpaper extends Wallpaper {
  liked: boolean;
  suggested: boolean;
  library: boolean;
}

export function useLibraryWallpaper() {
  const wallpaper = useWallpaper();
  return wallpaper.filter((wallpaper) => wallpaper.library);
}

export function useLikedWallpaper() {
  const wallpaper = useWallpaper();
  return wallpaper.filter((wallpaper) => wallpaper.liked);
}

export function useSuggestedWallpaper() {
  const wallpaper = useWallpaper();
  return wallpaper.filter((wallpaper) => wallpaper.suggested);
}

export function useWallpaper(): FullWallpaper[] {
  return [
    {
      url: "https://images.pexels.com/photos/3876412/pexels-photo-3876412.jpeg?auto=compress&cs=tinysrgb&w=1200",
      name: "Night",
      liked: true,
      suggested: false,
      library: false,
    },
    {
      url: "https://images.pexels.com/photos/46168/space-telescope-mirror-segments-james-webb-cosmos-46168.jpeg?auto=compress&cs=tinysrgb&w=1200",
      name: "Satallite",
      liked: true,
      suggested: false,
      library: false,
    },
    {
      url: "https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Rocket",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      url: "https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg?auto=compress&cs=tinysrgb&w=1200",
      name: "Planet",
      liked: true,
      suggested: true,
      library: true,
    },
    {
      url: "https://images.pexels.com/photos/3374210/pexels-photo-3374210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Aurora",
      liked: true,
      suggested: false,
      library: true,
    },
    {
      url: "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=1200",
      name: "Girl",
      liked: false,
      suggested: true,
      library: true,
    },
    {
      url: "https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=1200",
      name: "Girl in forest",
      liked: false,
      suggested: false,
      library: true,
    },
  ];
}
