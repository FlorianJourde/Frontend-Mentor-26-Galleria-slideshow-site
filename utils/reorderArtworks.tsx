export default function reorderArtworks(artworks: any) {
  return artworks.reduce((acc: any, _: any, i: number, arr: any[]) => {
    const index = Math.floor(i / 4) + (i % 4) * 4;
    acc.push(arr[index]);
    return acc;
  }, []);
}