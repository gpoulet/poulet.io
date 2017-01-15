const get = (entity, callback, callbackError) => {
  fetch(`/data/${entity}.json`)
    .then((response)=> {
      return response.json()
    }).then((data)=>{
    callback(data)
  }).catch((error)=>{
    callbackError(error)
  })
};

export const getTimeline = (callback, callbackError) => {
  get('timeline', callback, callbackError)
};