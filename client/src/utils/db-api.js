import axios from 'axios';
const BASE_URL = 'http://localhost:3001';

const END_POINTS = {
  all: '/api/shop/',
  goodsShop: '/api/shop',
};

export async function allShop() {
  try {
    return await axios
      .get(`${BASE_URL}${END_POINTS.all}`, {})
      .then(response => response.data);
  } catch (error) {
    console.log(error);
  }
}

export async function goodsShop(id) {
  try {
    return await axios
      .get(`${BASE_URL}${END_POINTS.goodsShop}/${id}`, {})
      .then(response => response.data);
  } catch (error) {
    console.log(error);
  }
}
