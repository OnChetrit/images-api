import axios from "axios";
const URL =
  "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=";
const SIZE = 9;

export const getImages = async (page, catagory) => {
  const startIdx = (page - 1) * SIZE;
  const endIdx = page * SIZE;
  const images = await axios.get(`${URL}${catagory}`).then((res) => res.data);
  const result = {};
  result.totalImages = images.hits.length;
  result.images = images.hits.slice(startIdx, endIdx);
  return result
  // const res = await axios.get(`/api/images?catagory=${catagory}&page=${page}`);
  // return res.data;
};
