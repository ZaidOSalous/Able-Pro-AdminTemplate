// project-imports
import { handlerCustomerDialog } from 'api/customer';
import { NavActionType } from 'config';

// assets
import { Add, Link1, KyberNetwork, Messages2, Calendar1, Kanban, Profile2User, Bill, UserSquare, ShoppingBag, People, Setting2, Task } from 'iconsax-reactjs';

// icons
const icons = {
  applications: KyberNetwork,
  chat: Messages2,
  calendar: Calendar1,
  kanban: Kanban,
  monday: Task,
  customer: Profile2User,
  invoice: Bill,
  profile: UserSquare,
  ecommerce: ShoppingBag,
  users: People,
  settings: Setting2,
  add: Add,
  link: Link1
};

// ==============================|| MENU ITEMS - APPLICATIONS ||============================== //

const applications = {
  id: 'group-applications',
  title: 'applications',
  icon: icons.applications,
  type: 'group',
  children: [
    {
      id: 'chat',
      title: 'chat',
      type: 'item',
      url: '/apps/chat',
      icon: icons.chat,
      breadcrumbs: false
    },
    {
      id: 'calendar',
      title: 'calendar',
      type: 'item',
      url: '/apps/calendar',
      icon: icons.calendar,
      actions: [
        {
          type: NavActionType.LINK,
          label: 'Full Calendar',
          icon: icons.link,
          url: 'https://fullcalendar.io/docs/react',
          target: true
        }
      ]
    },
    {
      id: 'kanban',
      title: 'kanban',
      type: 'item',
      icon: icons.kanban,
      url: '/apps/kanban/board',
      link: '/apps/kanban/:tab',
      breadcrumbs: false
    },
    {
      id: 'monday',
      title: 'Monday Dashboard',
      type: 'collapse',
      icon: icons.monday,
      children: [
        {
          id: 'monday-dashboard',
          title: 'Projects',
          type: 'item',
          url: '/apps/monday'
        },
        {
          id: 'monday-project-details',
          title: 'Project Details',
          type: 'item',
          url: '/apps/monday/project/1'
        }
      ]
    },
    {
      id: 'customer',
      title: 'customer',
      type: 'collapse',
      icon: icons.customer,
      children: [
        {
          id: 'customer-list',
          title: 'list',
          type: 'item',
          url: '/apps/customer/customer-list',
          actions: [
            {
              type: NavActionType.FUNCTION,
              label: 'Add Customer',
              function: () => handlerCustomerDialog(true),
              icon: icons.add
            }
          ]
        },
        {
          id: 'customer-card',
          title: 'cards',
          type: 'item',
          url: '/apps/customer/customer-card'
        }
      ]
    },
    {
      id: 'invoice',
      title: 'invoice',
      url: '/apps/invoice/dashboard',
      type: 'collapse',
      icon: icons.invoice,
      breadcrumbs: false,
      children: [
        {
          id: 'create',
          title: 'create',
          type: 'item',
          url: '/apps/invoice/create',
          breadcrumbs: false
        },
        {
          id: 'details',
          title: 'details',
          type: 'item',
          url: '/apps/invoice/details/1',
          link: '/apps/invoice/details/:id',
          breadcrumbs: false
        },
        {
          id: 'list',
          title: 'list',
          type: 'item',
          url: '/apps/invoice/list',
          breadcrumbs: false
        },
        {
          id: 'edit',
          title: 'edit',
          type: 'item',
          url: '/apps/invoice/edit/1',
          link: '/apps/invoice/edit/:id',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'profile',
      title: 'profile',
      type: 'collapse',
      icon: icons.profile,
      children: [
        {
          id: 'user-profile',
          title: 'user-profile',
          type: 'item',
          link: '/apps/profiles/user/:tab',
          url: '/apps/profiles/user/personal',
          breadcrumbs: false
        },
        {
          id: 'account-profile',
          title: 'account-profile',
          type: 'item',
          url: '/apps/profiles/account/basic',
          link: '/apps/profiles/account/:tab',
          breadcrumbs: false
        }
      ]
    },

    {
      id: 'e-commerce',
      title: 'e-commerce',
      type: 'collapse',
      icon: icons.ecommerce,
      children: [
        {
          id: 'products',
          title: 'products',
          type: 'item',
          url: '/apps/e-commerce/products'
        },
        {
          id: 'product-details',
          title: 'product-details',
          type: 'item',
          link: '/apps/e-commerce/product-details/:id',
          url: '/apps/e-commerce/product-details/1',
          breadcrumbs: false
        },
        {
          id: 'product-list',
          title: 'product-list',
          type: 'item',
          url: '/apps/e-commerce/product-list',
          breadcrumbs: false
        },
        {
          id: 'add-new-product',
          title: 'add-new-product',
          type: 'item',
          url: '/apps/e-commerce/add-new-product'
        },
        {
          id: 'checkout',
          title: 'checkout',
          type: 'item',
          url: '/apps/e-commerce/checkout'
        }
      ]
    },
    {
      id: 'users',
      title: 'User Management',
      type: 'collapse',
      icon: icons.users,
      children: [
        {
          id: 'users-list',
          title: 'Users List',
          type: 'item',
          url: '/apps/users/list',
          breadcrumbs: false
        },
        {
          id: 'users-add',
          title: 'Add User',
          type: 'item',
          url: '/apps/users/add',
          breadcrumbs: false
        },
        {
          id: 'users-roles',
          title: 'Roles & Permissions',
          type: 'item',
          url: '/apps/users/roles',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: '/apps/settings',
      icon: icons.settings,
      breadcrumbs: false
    }
  ]
};

export default applications;
