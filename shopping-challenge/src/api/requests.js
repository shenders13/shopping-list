export const fetchBikesInCatalogue = () => {
  return fetch("https://mountain-storm.glitch.me/bikes")
    .then(function(response) {
      return response.json();
    })
};
