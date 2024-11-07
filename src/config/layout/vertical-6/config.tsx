import { NavItem } from './types';
import AppsIcon from '@mui/icons-material/Apps';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EventNoteIcon from '@mui/icons-material/EventNote';
// import FolderIcon from '@mui/icons-material/FileFolder';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptIcon from '@mui/icons-material/Receipt';

export const LAYOUT_CONFIG = {
  sidebar: {
    width: {
      xs: '100%',
      sm: 240,
      md: 280,
      lg: 300
    },
    collapsedWidth: {
      xs: 0,
      sm: 70,
      md: 80
    }
  },
  header: {
    height: {
      xs: 56,
      sm: 64,
      md: 70
    }
  },
  content: {
    padding: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    }
  }
};
interface NavConfig {
  overview: NavItem[];
  management: NavItem[];
}

export const navConfig: NavConfig = {
  overview: [
    {
      title: 'App',
      path: '/app',
      icon: <AppsIcon />,
    },
    {
      title: 'Ecommerce',
      path: '/ecommerce',
      icon: <ShoppingCartIcon />,
    },
    {
      title: 'Analytics',
      path: '/analytics',
      icon: <BarChartIcon />,
    },
    {
      title: 'Banking',
      path: '/banking',
      icon: <AccountBalanceIcon />,
    },
    {
      title: 'Booking',
      path: '/booking',
      icon: <EventNoteIcon />,
    },
    {
      title: 'File',
      path: '/file',
      icon: <SchoolIcon />,
    },
    {
      title: 'Course',
      path: '/course',
      icon: <SchoolIcon />,
    },
  ],
  management: [
    {
      title: 'User',
      path: '/user',
      icon: <PersonIcon />,
    },
    {
      title: 'Product',
      path: '/product',
      icon: <ShoppingCartIcon />,
      children: [
        {
          title: 'List',
          path: '/product/list',
        },
        {
          title: 'Details',
          path: '/product/details',
        },
        {
          title: 'Create',
          path: '/product/create',
        },
        {
          title: 'Edit',
          path: '/product/edit',
        },
      ],
    },
    {
      title: 'Order',
      path: '/order',
      icon: <ReceiptIcon />,
    },
    {
      title: 'Invoice',
      path: '/invoice',
      icon: <ReceiptIcon />,
    },
  ],
}; 