import fs, { PathLike } from 'fs-extra'
import https from 'https'
import http from 'http'

/**
 * @param {URL} url The URL to download from. Can be either http or https
 * @param {PathLike} fileName the file name of the downloaded content. You have to add the extension and full filepath!
*/
export default function downloadFile(url: URL, fileName: PathLike) {
    let file = fs.createWriteStream(fileName);
    if (url.protocol === 'http:') http.get(url, (res) => res.pipe(file));
    if (url.protocol === 'https:') https.get(url, (res) => res.pipe(file));
    file.on("finish", () => file.close());
}
