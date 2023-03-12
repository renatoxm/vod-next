import { IconName } from '@/modules/ui/IconWrapper/IconWrapper';

export type SectionLinkType = {
  href: string;
  label: string;
  icon: IconName;
};

export type SidebarSectionType = {
  name?: string;
  links: SectionLinkType[];
};

export const MOBILE_NAV: SectionLinkType[] = [
  {
    href: `/`,
    label: `Home`,
    icon: `HomeOutlined`,
  },
  {
    href: `/explore`,
    label: `Explore`,
    icon: `ExploreOutlined`,
  },
  {
    href: ``,
    label: ``,
    icon: `AddCircleOutlineOutlined`,
  },
  {
    href: `/subscriptions`,
    label: `Subscriptions`,
    icon: `SubscriptionsOutlined`,
  },
  {
    href: `/library`,
    label: `Library`,
    icon: `VideoLibraryOutlined`,
  },
];

const MAIN_SECTION: SidebarSectionType = {
  links: [
    {
      href: `/`,
      label: `home`,
      icon: `HomeOutlined`,
    },
    {
      href: `/explore`,
      label: `explore`,
      icon: `ExploreOutlined`,
    },
    {
      href: `/subscriptions`,
      label: `subscriptions`,
      icon: `SubscriptionsOutlined`,
    },
  ],
};

const PERSONAL_SECTION: SidebarSectionType = {
  links: [
    {
      href: `/library`,
      label: `library`,
      icon: `VideoLibraryOutlined`,
    },
    {
      href: `/history`,
      label: `history`,
      icon: `HistoryOutlined`,
    },
    // {
    //   label: 'your videos',
    //   icon: SlideshowOutlined
    // },
    {
      href: `/playlist/Demo`,
      label: `playlists`,
      icon: `PlaylistPlayOutlined`,
    },
    {
      href: `/playlist/LL`,
      label: `liked videos`,
      icon: `ThumbUpOutlined`,
    },
  ],
};

export const MORE_FROM_YOUTUBE_SECTION: SidebarSectionType = {
  name: `More from vod.io`,
  links: [
    {
      href: `/gaming`,
      label: `gaming`,
      icon: `SportsEsportsOutlined`,
    },
    {
      href: `/streams`,
      label: `streams`,
      icon: `StreamOutlined`,
    },
    {
      href: `fashionbeauty`,
      label: `fashion & beauty`,
      icon: `SpaOutlined`,
    },
    {
      href: `/learning`,
      label: `learning`,
      icon: `SchoolOutlined`,
    },
    {
      href: `/sports`,
      label: `sports`,
      icon: `SportsBaseballOutlined`,
    },
  ],
};

// const SUPPORT_SECTION: SidebarSectionType = {
//   links: [
//     {
//       href: `/account`,
//       label: `settings`,
//       icon: `SettingsOutlined`,
//     },
//     {
//       href: `/reporthistory`,
//       label: `report history`,
//       icon: `FlagOutlined`,
//     },
//     {
//       href: `/?modal=help`,
//       label: `help`,
//       icon: `HelpOutlined`,
//     },
//     {
//       href: `/?modal=feedback`,
//       label: `send feedback`,
//       icon: `FeedbackOutlined`,
//     },
//   ],
// };

const SIDEBAR_SECTIONS = [
  MAIN_SECTION,
  PERSONAL_SECTION,
  // MORE_FROM_YOUTUBE_SECTION,
  // SUPPORT_SECTION
] as const;

export default SIDEBAR_SECTIONS;
