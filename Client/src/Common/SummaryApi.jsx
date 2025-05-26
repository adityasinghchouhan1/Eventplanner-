const backendDomain = 'https://eventplanner-8671.onrender.com'

const SummaryApi = {
  Contect: {
    url: `${backendDomain}/api/contectus`,
    method: 'post',
  },
  getsliderdata: {
    url: `${backendDomain}/api/getsliderdata`,
    imageBaseUrl: `${backendDomain}/uploads`,
    method: 'get',
  },
}

export default SummaryApi
