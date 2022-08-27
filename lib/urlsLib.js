export const urlsLib = (category, type, id) => {
  let req;
  const url = {
    GET: `${process.env.NEXT_PUBLIC_API_URL}/${category}?_sort=created_at:desc`,
    GET_ID: `${process.env.NEXT_PUBLIC_API_URL}/${category}/${id}`,
  };
  if (type === "GET" || type === "GET_SHOP") {
    req = url.GET;
  } else if (type === "GET_ID") {
    req = url.GET_ID;
  }

  return req;
};
