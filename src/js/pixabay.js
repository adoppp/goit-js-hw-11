import axios from "axios";

const API_KEY = '37837033-b275b0d8f4f032e99cd88a403';
const URL = 'https://pixabay.com/api/';
const searchParams = new URLSearchParams({
	image_type: 'photo',
	orientation: 'horizontal',
	safesearch: true,
	per_page: 40,
});

export async function getData(query, page) {
	try {
		const response = await axios.get(
      `${URL}?key=${API_KEY}&q=${query}&${searchParams}&page=${page}`
		);
		return response.data;
	} catch (error) {
		console.log(error)
	}
}