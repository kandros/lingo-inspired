import response from './apiResponse.json';

const cardFactory = (photo) => {
    return {
        id: photo.id,
        title: photo.name,
        creator: photo.user.username,
        image: photo.image_url,
        url: `http://500px.com${photo.url}`
    }
}

export const getPhotosCards = () => {
    return response.photos.map(cardFactory);
}