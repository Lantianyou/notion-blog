import {
  mapNotionDatabaseToPreviewList,
  QueryDatabaseResponse,
} from '../lib/notion/mapNotionPropertiesToValue'
import { notionClient } from '@/lib/notion/notionClient'

type Writing = {
  title: string
  description: string
}

export const database_id = process.env.BLOG_INDEX_ID

export default function Writings({
  podcastTable,
}: {
  podcastTable: Writing[]
}) {
  return (
    <ul className="flex bg-teal-50">
      {podcastTable.map(({ description, title }) => {
        return (
          <li key={title} className="text-3xl font-bold underline">
            {' '}
            {title} - {description}
          </li>
        )
      })}
    </ul>
  )
}

export async function getStaticProps() {
  try {
    const response = await notionClient.databases.query({
      database_id,
    })
    const podcastTable: Writing[] = mapNotionDatabaseToPreviewList(
      response as QueryDatabaseResponse
    )
    return {
      props: {
        podcastTable,
      },
    }
  } catch (error) {
    console.error(error)
  }
}
