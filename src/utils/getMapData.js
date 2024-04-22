export const getMapData = async (path) => {
  const response = await fetch(path);
  const data = response.json();
  return data;
};

export default getMapData;
