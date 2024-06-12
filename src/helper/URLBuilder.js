const URLBuilder = (USerDetails) => {
  const urlParams = [];

  if (USerDetails.PageNumber) {
    urlParams.push(`pageno=${encodeURIComponent(USerDetails.PageNumber)}`);
  }

  if (USerDetails.LimitsPerPage) {
    urlParams.push(
      `limit_per_page=${encodeURIComponent(USerDetails.LimitsPerPage)}`
    );
  }
  if (USerDetails.SearchText) {
    urlParams.push(`searchquery=${encodeURIComponent(USerDetails.SearchText)}`);
  }
  if (USerDetails.ShowSearchBar) {
    urlParams.push(`show=${encodeURIComponent(true)}`);
  }
  if (USerDetails.SearchMode) {
    urlParams.push(`mode=${encodeURIComponent(USerDetails?.SearchMode)}`);
  }

  return urlParams.join("&");
};

export default URLBuilder;
