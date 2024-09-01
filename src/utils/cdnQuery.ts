import algoliaSearch from 'algoliasearch'
import type { SearchOptions } from '@algolia/client-search'

const algolia = algoliaSearch('OFCNCOG2CU', 'f54e21fa3a2a0160595bb058179bfb1e')
const index = algolia.initIndex('npm-search')

export interface AlgoliaHit {
  name: string
  version: string
  description: string
  githubRepo: { user: string, project: string, path: string, head: string }
  owner: { name: string, avatar: string, link: string }
  deprecated: boolean
  homepage: string
  license: string
  keywords: Array<string>
  objectID: string
}

export default async (queryString: string, page = 0, hitsPerPage = 10) => {
  try {
    const parsed = parseQuery(queryString)
    if (!parsed) {
      return {
        response: null,
        query: queryString,
      }
    }
    const options: SearchOptions = {
      page,
      hitsPerPage,
      attributesToHighlight: [],
      attributesToRetrieve: ['deprecated', 'description', 'githubRepo', 'homepage', 'keywords', 'license', 'name', 'owner', 'version'],
      analyticsTags: ['jsdelivr'],
      facetFilters: parsed.facetFilters ? parsed.facetFilters : undefined,
    }

    const response = await index.search<AlgoliaHit>(parsed.query, options)
    response.hits.sort((a, b) => {
      if (a.name === parsed.query) {
        return -1
      }
      else if (b.name === parsed.query) {
        return 1
      }
      else {
        return 0
      }
    })

    return {
      response,
      query: queryString,
    }
  }
  catch (e) {
    return {
      response: null,
      query: queryString,
    }
  }
}

export async function getByName(name: string) {
  return index.getObject(name)
}

// eslint-disable-next-line regexp/no-super-linear-backtracking
const ATTR_REGEXP = /\s*[a-z]+\s*:\s*(?:.(?![a-z]*\s*:))*/gi
const QUERY_REGEXP = /^((?:[^\s:]+(?!\s*:)\s*)*)/
const filterMapping: Record<string, string> = {
  author: 'owner.name',
  type: 'moduleTypes',
}

function parseQuery(queryString: string) {
  const query = queryString.match(QUERY_REGEXP)?.[0].trim()
  if (query == null) {
    return
  }
  const substr = queryString
  const filters = []
  let match

  // eslint-disable-next-line no-cond-assign
  while ((match = ATTR_REGEXP.exec(substr)) !== null) {
    const temp = match[0].split(':')

    if (filterMapping[temp[0].trim()]) {
      filters.push(`${filterMapping[temp[0].trim()]}:${temp[1].trim()}`)
    }
  }

  return {
    query,
    facetFilters: filters.join(','),
  }
}
