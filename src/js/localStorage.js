function getData(key) {
  const data = localStorage.getItem(key)
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
}

function setData(key, data) {
  if (typeof data !== 'undefined') {
    const jsonData = JSON.stringify(data)
    localStorage.setItem(key, jsonData)
  }
}

export { getData, setData }
