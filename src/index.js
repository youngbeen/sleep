
const sleep = (time = 1000) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, time)
})

export {
  sleep
}