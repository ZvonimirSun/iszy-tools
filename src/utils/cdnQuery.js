import algoliaSearch from 'algoliasearch'

const algolia = algoliaSearch('OFCNCOG2CU', 'f54e21fa3a2a0160595bb058179bfb1e', { protocol: 'https:' })
const index = algolia.initIndex('npm-search')

export default async (queryString, page = 0, hitsPerPage = 10) => {
  try {
    const parsed = parseQuery(queryString)
    const options = {
      page,
      hitsPerPage,
      attributesToHighlight: [],
      attributesToRetrieve: ['deprecated', 'description', 'githubRepo', 'homepage', 'keywords', 'license', 'name', 'owner', 'version'],
      analyticsTags: ['jsdelivr']
    }
    if (parsed.facetFilters) {
      options.facetFilters = parsed.facetFilters
    }
    const response = await index.search(parsed.query, options)
    response.hits.sort((a, b) => {
      return a.name === parsed.query ? -1 : b.name === parsed.query
    })

    return {
      response,
      query: queryString
    }
  } catch (e) {
    return {
      response: {},
      query: queryString
    }
  }
}

export const getByName = async (name) => {
  return index.getObject(name)
}

const ATTR_REGEXP = /\s*(?:[a-z]+)\s*:\s*(?:.(?![a-z]*\s*:))*/gi
const QUERY_REGEXP = /^((?:(?:[^\s:]+(?![a-z]*\s*:))\s*)*)/i
const filterMapping = {
  author: 'owner.name',
  type: 'moduleTypes'
}

function parseQuery (queryString) {
  const query = queryString.match(QUERY_REGEXP)[0].trim()
  const substr = queryString.substr(query.length)
  const filters = []
  let match

  while ((match = ATTR_REGEXP.exec(substr)) !== null) {
    const temp = match[0].split(':')

    if (filterMapping[temp[0].trim()]) {
      filters.push(filterMapping[temp[0].trim()] + ':' + temp[1].trim())
    }
  }

  return {
    query,
    facetFilters: filters.join(',')
  }
}
