module.exports = async function (photographer, source) {
  const attr = (d) => {
    if (d.url) {
      return `<a href="${d.url}" target="_blank">${d.name}</a>`;
    }
    return d.name;
  };

  let attributions;
  if (photographer && photographer.name && source && source.name) {
    attributions = `Photo by ${attr(photographer)}, courtesy ${attr(source)}`;
  }
  else if (!photographer || !photographer.name) {
    attributions = `Photo courtesy ${attr(source)}`;
  }
  else if (!source || !source.name) {
    attributions = `Photo by ${attr(photographer)}`;
  }
  else {
    return '';
  }

  return `<div class="photo-attribution">${attributions}</div>`;
};
