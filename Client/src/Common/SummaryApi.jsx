const backendDomain = 'http://localhost:8008'

const SummaryApi = {
  Contect: {
    url: `${backendDomain}/api/contectus`,
    method: 'post',
  },
  getsliderdata: {
    url: `${backendDomain}/api/getsliderdata`,
    method: 'get',
  },
}

export default SummaryApi
