import { ImageList, ImageListItem } from "@mui/material";

const ImageGroup = () => {
  type item = {
    imgURL: string;
    title: string;
  };
  const itemData: item[] = [
    {
      imgURL: "camera",
      title: "camera",
    },
    {
      imgURL: "drone",
      title: "drone",
    },
    {
      imgURL: "laptop-above",
      title: "laptop above",
    },
    {
      imgURL: "laptop-side",
      title: "laptop side",
    },
    {
      imgURL: "notebook",
      title: "notebook",
    },
    {
      imgURL: "office",
      title: "office",
    },
    {
      imgURL: "tablet",
      title: "tablet",
    },
  ];
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item: item) => (
        <ImageListItem key={item.imgURL}>
          <img
            src={`${process.env.PUBLIC_URL}/img/galleryPhotos/${item.imgURL}.jpg`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageGroup;
