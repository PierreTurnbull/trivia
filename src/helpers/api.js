class api {
  async getCategories(count) {
    const data = await fetch(`http://jservice.io/api/categories?count=${count}`)
    const formattedData = await data.json()
    return formattedData
  }
  async getCategoryById(id) {
    const data = await fetch(`http://jservice.io/api/category?id=${id}`)
    const formattedData = await data.json()
    return formattedData
  }
}

export default new api()