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
  Sliderdataupload: {
    url: `${backendDomain}/api/sliderdata`,
    method: 'post',
  },
  getSliderdata: {
    url: `${backendDomain}/api/getsliderdata`,
    imageBaseUrl: `${backendDomain}/uploads`,  // 👈 Add this line
    method: 'get',
  },
  deleteslider: {
    url: `${backendDomain}/api/deleteslider`,
    method: 'delete',
  },
  UpdateSlider: { 
    url: `${backendDomain}/api/updateslider`,
    method: 'put',
  },
  
}

export default SummaryApi
