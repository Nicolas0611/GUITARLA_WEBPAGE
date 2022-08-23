export const urlsLib = (type, id) => {
  let req;
  const url = {
    GET: `${process.env.NEXT_PUBLIC_API_URL}/blogs`,
    GET_ID: `${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`,
  };
  switch (type) {
    case "GET":
      req = url.GET;
      break;
    case "GET_ID":
      req = url.GET_ID;
      break;
    default:
      break;
  }
  return req;
};
