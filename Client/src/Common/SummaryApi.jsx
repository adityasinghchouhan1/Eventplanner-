// const backendDomain = 'http://localhost:8008'
const backendDomain = 'https://eventplanner-8671.onrender.com'

const SummaryApi = {
  Contect: {
    url: `${backendDomain}/api/contectus`,
    method: 'post',
  },
  getsliderdata: {
    url: `${backendDomain}/api/getsliderdata`,
    imageBaseUrl: `${backendDomain}/uploads`, // 👈 Add this line
    method: 'get',
  },
}

export default SummaryApi
