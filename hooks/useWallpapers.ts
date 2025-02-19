export interface Wallpaper {
  url: string;
  name: string;
}
export function useWallpaper(): Wallpaper[] {
  return [
    {
      url: "https://images.pexels.com/photos/3876412/pexels-photo-3876412.jpeg?auto=compress&cs=tinysrgb&w=1200",
      name: "Night",
    },
    {
      url: "https://images.pexels.com/photos/46168/space-telescope-mirror-segments-james-webb-cosmos-46168.jpeg?auto=compress&cs=tinysrgb&w=1200",
      name: "Satallite",
    },
    {
      url: "https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Rocket",
    },
    {
      url: "https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg?auto=compress&cs=tinysrgb&w=1200",
      name: "Planet",
    },
    {
      url: "https://images.pexels.com/photos/3374210/pexels-photo-3374210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Aurora",
    },
    {
      url: "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=1200",
      name: "Girl",
    },
    {
      url: "https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=1200",
      name: "Girl in forest",
    },
  ];
}
