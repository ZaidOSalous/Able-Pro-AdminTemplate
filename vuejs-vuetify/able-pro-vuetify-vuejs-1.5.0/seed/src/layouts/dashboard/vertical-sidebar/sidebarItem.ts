export interface menu {
  id?: string;
  header?: string;
  title?: string;
  icon?: string;
  to?: string;
  divider?: boolean;
  getURL?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Starterkit' },
  {
    id: 'sample',
    title: 'Sample Page',
    icon: 'custom-sample',
    to: '/starter'
  },
  { header: 'Others' },
  {
    title: 'Menu levels',
    icon: 'custom-level-1',
    to: '#',
    children: [
      {
        id: 'level1',
        title: 'Level 1',
        disabled: true,
        to: '/level1'
      },
      {
        title: 'Level 1',
        to: '',
        children: [
          {
            id: 'level2',
            title: 'Level 2',
            disabled: true,
            to: '/level2'
          },
          {
            title: 'Level 2',
            to: '/2.2level',
            children: [
              {
                id: 'level3',
                title: 'Level 3',
                disabled: true,
                to: '/level3'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'subcaption',
    title: 'Sub Caption Levels',
    icon: 'custom-level',
    subCaption: 'Caption Collapse',
    to: ''
  },
  {
    id: 'disabledmenu',
    title: 'Disabled Menu',
    icon: 'custom-disabled',
    disabled: true,
    to: '/disabled'
  },
  {
    id: 'documentation',
    title: 'Documentation',
    icon: 'custom-support',
    to: 'https://phoenixcoded.gitbook.io/able-pro',
    type: 'external',
    chip: 'gitbook',
    chipColor: 'info',
    chipVariant: 'flat'
  },
  {
    id: 'roadmap',
    title: 'Road Map',
    icon: 'custom-roadmap',
    to: 'https://phoenixcoded.gitbook.io/able-pro/v/vue/roadmap',
    type: 'external'
  }
];

export default sidebarItem;
