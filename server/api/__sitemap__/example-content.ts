import { serverQueryContent } from '#content/server'

export default defineSitemapEventHandler(async (event) => {
  const contentList = await serverQueryContent(event)
    .where({ draft: { $not: true } })
    .sort({ date: -1 })
    .only(['_path'])
    .find()

  const postUrls = contentList.map((c) => {
    return asSitemapUrl({
      loc: c._path,
      lastmod: new Date(), // TODO: Use a last updated frontmatter field
    })
  })

  return postUrls
})
