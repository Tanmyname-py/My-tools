import fs from "fs"
import axios from "axios"


function getExtension(contentType) {
  if (!contentType) return "bin";
  if (contentType.includes("video/mp4")) return "mp4";
  if (contentType.includes("image/jpeg")) return "jpg";
  if (contentType.includes("image/png")) return "png";
  if (contentType.includes("audio/mpeg")) return "mp3";
  if (contentType.includes("application/pdf")) return "pdf";
  return "bin";
}

/*
** @param {string} -> url  
** @param {string} -> file
** @param {Object} -> headers
** default use stream for responseType
**/
async function getFile(url,File,head = { headers :  { 'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36' } }){
    try {
      const req = await axios.get(
      url,{ responseType: "stream", headers : head.headers })
      if(req.status === 200){
        const total = parseInt(req.headers["content-length"], 10);
        let downloaded = 0;
        const ext = getExtension(req.headers["content-type"]);    
        const writer = fs.createWriteStream(`${File || Date.now() }.${ext}`);   
                  
    req.data.on("data", chunk => {
        downloaded += chunk.length;
        const percent = ((downloaded / total) * 100).toFixed(2);
        process.stdout.write(`\rDownloading: ${percent}%`);
});
    req.data.pipe(writer)
    writer.on("finish", () => {
  process.stdout.write("\nDownload complete ✅\n");
});
    return "process ok"
      } else {
        return `Error with status code ${req.status} see to (), for checked type error status code`
      }
    } catch (error){
     console.log('Download error ',error.message);
    }
}


export default getFile