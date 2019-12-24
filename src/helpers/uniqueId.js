/**
 * @returns {String} random string that is sufficiently long enough to be presumed unique
 */
const generateUniqueId = () => {
  return Number(String(Math.random()).split(".")[1]).toString(16);
};

export default generateUniqueId;
