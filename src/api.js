export const fetchDetails = async id => {
  try {
    const response = await fetch(`http://api.tvmaze.com/shows/${id}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchShowEpisodes = async id => {
  try {
    const response = await fetch(`http://api.tvmaze.com/shows/${id}/episodes`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
