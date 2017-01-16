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

export const getSkills = (callback, callbackError) => {
  get('skills', callback, callbackError)
};

export const getTimeline = (callback, callbackError) => {
  get('timeline', callback, callbackError)
};

export const getConferences = (callback, callbackError) => {
  get('conferences', callback, callbackError)
};