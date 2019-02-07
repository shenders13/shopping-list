export const fetchBikesInCatalogue = () => {
  return fetch("https://mountain-storm.glitch.me/bikes").then(response => {
    return response.json();
  });
};

export const fetchDiscounts = () => {
  return fetch("https://mountain-storm.glitch.me/discounts").then(response => {
    return response.json();
  });
};

export const fetchInventory = () => {
    return fetch("https://mountain-storm.glitch.me/inventory").then(response => {
        return response.json();
    });
};


