import React from 'react';

interface Props {
  params: { id: number; photoId: number };
}

const PhotoDetailPage = ({ params: { photoId, id } }: Props) => {
  return (
    <div>
      PhotoDetailPage: {photoId} with user id: {id}
    </div>
  );
};
1;
export default PhotoDetailPage;
