import { MenuEntry } from '@ricefarm/uikitv2'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Swap',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Vaults',
  //   icon: 'VaultIcon',
  //   href: '/vaults',
  // },
  // {
  //   label: t('Prediction (BETA)'),
  //   icon: 'PredictionsIcon',
  //   href: '/prediction',
  // },
  // {
  //   label: t('Lottery'),
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  //   status: {
  //     text: t('Win').toLocaleUpperCase(),
  //     color: 'success',
  //   },
  // },
  // {
  //   label: t('Collectibles'),
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: t('Team Battle'),
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  // },
  // {
  //   label: t('Teams & Profile'),
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: t('Leaderboard'),
  //       href: '/teams',
  //     },
  //     {
  //       label: t('Task Center'),
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: t('Your Profile'),
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: t('Info'),
  //   icon: 'InfoIcon',
  //   href: 'https://pancakeswap.info',
  // },
  // {
  //   label: t('IFO'),
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: 'Referrals',
  //   icon: 'ReferralIcon',
  //   href: '/referrals',
  // },
  // {
  //   label: 'TechRate Audits',
  //   icon: 'AuditIcon',
  //   items: [
  //     {
  //       label: 'RiceFarm Audit',
  //       href: 'https://teslasafe.fi/pdf/TechRateRiceFarmAudit.pdf',
  //     },
  //     {
  //       label: 'TeslaSafe Audit',
  //       href: 'https://teslasafe.fi/pdf/TeslaSafe_Audit.pdf',
  //     },
  //   ],
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Chart',
        href: 'https://charts.bogged.finance/?token=0xd5d111b9e1e3daf2a8c16cc005988e93c437e242',
      }
    ],
  },
]

export default config
