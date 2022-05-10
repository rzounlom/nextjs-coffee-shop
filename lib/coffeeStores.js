const getUrlForCoffeeStores = (latLong, query = "", limit) => {
  return `https://api.foursquare.com/v3/places/nearby?ll=${latLong}&query=${query}&client_id=${process.env.NEXT_PUBLIC_FOURSQUARE_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_FOURSQUARE_CLIENT_SECRET}&v=20210501&limit=${limit}`;
};

export const fetchCoffeeStores = async () => {
  const headers = {
    Authorization: `${process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY}`,
  };
  const response = await fetch(
    getUrlForCoffeeStores(
      "43.65267326999575,-79.39545615725015",
      "coffee stores",
      6
    ),
    { headers }
  );

  const data = await response.json();

  console.log({ data: data.results });
  return data.results;
};
