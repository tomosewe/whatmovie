export const getTrailerLink = (movie: any) => {
  const BASE_URL = "https://www.youtube.com/results?search_query=";

  const title = movie.title.replace(/\s/g, "+").toLowerCase();
  const releaseYear = movie.release_date.substring(0, 4);

  return `${BASE_URL}${title}+${releaseYear}+trailer+hd`;
};

export const constructYouTubeEmbed = (videoInfoResults: any) => {
  // https://stackoverflow.com/questions/33913737/inserting-the-iframe-into-react-component
  const TRAILER = "Trailer";
  const YOUTUBE = "YouTube";
  const ORIGIN = "https://whatmovie.tomosewe.com";

  if (videoInfoResults) {
    const filtered = videoInfoResults.find(
      (x: any) => x.type === TRAILER && x.site === YOUTUBE
    );
    let youtubeKey;
    if (filtered !== undefined) {
      youtubeKey = filtered.key;
    } else {
      youtubeKey = videoInfoResults[0].key;
    }

    return {
      __html: `<iframe id="ytplayer" type="text/html" width="640" height="360"
    src="https://www.youtube.com/embed/${youtubeKey}?enablejsapi=1&autoplay=0&origin=${ORIGIN}"
    &hl=en-US&modestbranding=1&fs=1></iframe>`
    };
  }
  return { __html: "" };
};
