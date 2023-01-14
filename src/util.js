export const filterByGenre = (data = [], genres = []) =>
  data.filter((d) => genres.includes(d.category));

export const filterByRating = (data = [], ratings = []) =>
  data.filter((d) => ratings.includes(d.rating));

export const filerByName = (data = [], searchText = '') =>
  data.filter((d) => d.title.toLowerCase().includes(searchText.toLowerCase()));
