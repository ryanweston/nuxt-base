export default defineSitemapEventHandler(async (event) => {
  const contentList = await queryCollection(event, 'content')
    .all()

  const postUrls = contentList.map((c) => {
    return asSitemapUrl({
      loc: c.path,
      lastmod: new Date(),
    })
  })

  return postUrls
})
