function requestParse(url) {
  const [path, search] = url.split('?');
  const parts = path.slice(1).split('/');
  const params = new URLSearchParams(search);
  const query = Object.fromEntries(params.entries());

  return { parts, query };
}

module.exports = { requestParse };
