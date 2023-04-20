module.exports = async function (text) {
	const toHTML = text
    .replace(/^### (.*$)/gim, '<h3>$1</h3>') // h3 tag
    .replace(/^## (.*$)/gim, '<h2>$1</h2>') // h2 tag
    .replace(/^# (.*$)/gim, '<h1>$1</h1>') // h1 tag
    .replace(/[\*_][\*_](.*)[\*_][\*_]/gim, '<b>$1</b>') // bold text
    .replace(/[\*_](.*)[\*_]/gim, '<i>$1</i>'); // italic text
  return toHTML.trim();
}
