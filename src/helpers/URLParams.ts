export const URLParams = (paramsName:string) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramsName);
};
