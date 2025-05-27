export default function parseLocation(input) {
  const pattern = /^(.*?),\s*(.*?),\s*(.*?)\s+(\d{5})$/;
  const match = input.match(pattern);
  if (!match) return null;

  return {
    address: match[1].trim(),
    city: match[2].trim(),
    state: match[3].trim(),
    zip: parseInt(match[4], 10)
  };
}
