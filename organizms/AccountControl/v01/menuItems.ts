import React from 'react';
import { BaseIconProps } from '../../../atoms/interfaces';

import {
  AccountCircle,
  People,
  PieChart,
  Bookmark,
  Settings
} from '../../../atoms/icons';


interface MenuItem {
  title: string,
  Icon: React.JSXElementConstructor<BaseIconProps>,
  path: string,
}


const menuItems: MenuItem[] = [
  {
    title: 'Профіль',
    Icon: AccountCircle,
    path: '/profile'
  },
  {
    title: 'Друзі',
    Icon: People,
    path: '/friends'
  },
  {
    title: 'Статистика',
    Icon: PieChart,
    path: '/statistics'
  },
  {
    title: 'Закладки',
    Icon: Bookmark,
    path: '/bookmarks'
  },
  {
    title: 'Налаштування',
    Icon: Settings,
    path: '/settings',
  }
];

export default menuItems;