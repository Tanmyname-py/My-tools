/*
* @param {string} -> text convert to Capitalize
*/

const toCapiTalize = (string) => {
  if(typeof string !== "string") throw new TypeError('Args must be string');
  const text = string.split(" ").map((t) => {
    let cptz = t.charAt(0).toUpperCase();
    cptz =  cptz + t.slice(1).toLowerCase();
    return cptz
  });
  return text.join(" ");
}
