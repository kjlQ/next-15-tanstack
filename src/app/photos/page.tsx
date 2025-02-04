import { getPhotos } from "@/features/photos/api/photos.api";
import Image from "next/image";
import Link from "next/link";

const Photos = async () => {
  const photos = await getPhotos();
  console.log(photos);
  return (
    <div>
      <button>
        <Link href="/"> ---back</Link>
      </button>
      <h1>Photos</h1>
      {photos.map((photo) => {
        return <p>{photo.title}</p>;
      })}
    </div>
  );
};
export default Photos;
