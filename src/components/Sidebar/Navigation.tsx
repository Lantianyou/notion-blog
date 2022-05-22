import { useRouter } from 'next/router'
import {
  ExternalLinkIcon,
  GitHubIcon,
  HomeIcon,
  TwitterIcon,
  WritingIcon,
} from '../Icon'

import { NavigationLink } from './NavigationLink'

export function SidebarNavigation() {
  const router = useRouter()
  const sections = [
    {
      label: null,
      items: [
        {
          href: '/',
          label: 'Home',
          icon: HomeIcon,
          trailingAccessory: null,
          isActive: router.asPath === '/',
          trailingAction: null,
          isExternal: false,
        },

        {
          href: '/writing',
          label: 'Writing',
          icon: WritingIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/writing') >= 0,
          trailingAction: null,
          isExternal: false,
        },

        {
          href: '/podcast',
          label: 'Podcast',
          icon: WritingIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/podcast') >= 0,
          trailingAction: null,
          isExternal: false,
        },

        {
          href: '/newsletter',
          label: 'Newsletter',
          icon: WritingIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/newsletter') >= 0,
          trailingAction: null,
          isExternal: false,
        },
      ],
    },
    {
      label: 'Online',
      items: [
        {
          href: 'https://twitter.com/dtlantianyou',
          label: 'Twitter',
          icon: TwitterIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },
        {
          href: 'https://github.com/Lantianyou',
          label: 'GitHub',
          icon: GitHubIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },
      ],
    },
  ]

  return (
    <div className="flex-1 px-3 py-3 space-y-1">
      {sections.map((section, i) => {
        return (
          <ul key={i} className="space-y-1">
            {section.label && (
              <h4
                key={i}
                className="px-2 pt-5 pb-2 text-xs font-semibold text-gray-1000 text-opacity-40 dark:text-white"
              >
                {section.label}
              </h4>
            )}
            {section.items.map((item, j) => (
              <NavigationLink key={j} link={item} />
            ))}
          </ul>
        )
      })}
    </div>
  )
}
