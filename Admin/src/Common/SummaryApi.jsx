const backendDomain = 'http://localhost:8008'

const SummaryApi = {
  Contectus: {
    url: `${backendDomain}/api/getcontectus`,
    method: 'post',
  },
  contectusdelete: {
    url: `${backendDomain}/api/deleteContect`,
    method: 'delete',
  },
  contectusupdate: {
    url: `${backendDomain}/api/updateContectdata`,
    method: 'put',
  },
}

export default SummaryApi
