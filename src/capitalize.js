/*
* @param {string} -> text convert to Capitalize
*/

const toCapiTalize = (string) => {
  const text = string.split(" ").map((t) => {
    let cptz = t.charAt(0).toUpperCase();
    cptz =  cptz + t.slice(1).toLowerCase();
    return cptz
  });
  return text.join(" ");
}
