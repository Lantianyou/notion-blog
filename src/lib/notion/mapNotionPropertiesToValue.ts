const mapNotionPropertiesToValue = (properties: any, key: string) => {
  try {
    const property = properties[key]
    const type = property['type']
    const value = property[type][0]['plain_text']
    return value
  } catch (_) {
    return null
  }
}

export interface QueryDatabaseResponse {
  results?: {
    properties?: any
  }[]
}

export const mapNotionDatabaseToPreviewList = (
  response: QueryDatabaseResponse
) => {
  return response.results
    .filter((item) => {
      const hasTitle = mapNotionPropertiesToValue(item.properties, 'Title')
      return Boolean(hasTitle)
    })
    .map(({ properties }) => {
      const title = mapNotionPropertiesToValue(properties, 'Title')
      const description = mapNotionPropertiesToValue(properties, 'Description')
      return {
        title,
        description,
      }
    })
}
