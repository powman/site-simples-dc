import tokens from './tokens'
import farms from './farms'
import { Ifo, Token } from './types'

// const riceBnbLpToken: Token = {
//   symbol: farms[2].lpSymbol,
//   address: farms[2].lpAddresses,
//   decimals: 18,
// }

// const teslaSafeBnbLpToken: Token = {
//   symbol: farms[3].lpSymbol,
//   address: farms[3].lpAddresses,
//   decimals: 18,
// }

const ifos: Ifo[] = [
  // live: 0x122F037584Db76c327884EEC8aa9b654FEbBF99e
  // testnet: 0x99f1db68A1C35eCA772E35F04A47fb5edffe532E
  // testnet: 0xF311B402c96B93eBB4aDa3660743f7A1EfC2B528
  // {
  //   id: 'paz',
  //   address: '0x122F037584Db76c327884EEC8aa9b654FEbBF99e',
  //   isActive: true,
  //   name: 'Pazzive (PAZ)',
  //   poolBasic: {
  //     saleAmount: '120 Billion PAZ',
  //     raiseAmount: '$200,000',
  //     cakeToBurn: '$100,000',
  //     distributionRatio: 0.4,
  //     tokenOfferingPrice: 0.000001666666667,
  //   },
  //   poolUnlimited: {
  //     saleAmount: '180 Billion PAZ',
  //     raiseAmount: '$300,000',
  //     cakeToBurn: '$150,000',
  //     distributionRatio: 0.6,
  //     tokenOfferingPrice: 0.000001666666667,
  //   },
  //   currency: teslaSafeBnbLpToken,
  //   currency2: riceBnbLpToken,
  //   token: tokens.pazzive,
  //   releaseBlockNumber: 11996300,
  //   campaignId: '511100000',
  //   articleUrl: 'https://paz.fuzion.team',
  //   tokenOfferingPrice: 0.000001666666667,
  //   tokenListingPrice: 0.000003333333333,
  //   version: 2,
  // },
  // /**
  //  * live: 0x50A1255A52B027C93ae5ED5042175BDdC16a320F
  //  * testnet 0xebCd54d2208980fB82034Ddec17776C407016AC7 starts in 1 year
  //  * testnet 0xA428922D60071C0344ba0EDd62b0F5ca5726Ceb0 started will never end
  //  * testnet 0x3d6ADb7ba5a23a28e56b5912b28883Fcf064B207 started and ends tomorrow
  //  * testnet 0xEecAfce12Ee1D5FCF02BAa399Fd84f341d167BF1 ends tomorrow we can test
  //  * testnet 0x579b525E876Bf1b1586B179E3028DcAee0546924 will test ending today
  //  * testnet 0x6F04bb871A69ACD1A33563073Fc782959e237A55 end soon
  //  * 27.6695590579
  //  */
  // {
  //   id: 'epic',
  //   address: '0x50A1255A52B027C93ae5ED5042175BDdC16a320F',
  //   isActive: false,
  //   name: 'EpicBuy (EPIC)',
  //   poolBasic: {
  //     saleAmount: '120 Trillion EPIC',
  //     raiseAmount: '$400,000',
  //     cakeToBurn: '$200,000',
  //     distributionRatio: 0.4,
  //     tokenOfferingPrice: 0.0000000033,
  //   },
  //   poolUnlimited: {
  //     saleAmount: '180 Trillion EPIC',
  //     raiseAmount: '$600,000',
  //     cakeToBurn: '$300,000',
  //     distributionRatio: 0.6,
  //     tokenOfferingPrice: 0.000000003333333,
  //   },
  //   currency: teslaSafeBnbLpToken,
  //   currency2: riceBnbLpToken,
  //   token: tokens.epic,
  //   releaseBlockNumber: 9505378,
  //   campaignId: '511100000',
  //   articleUrl: 'https://epicbuy.fi',
  //   tokenOfferingPrice: 0.000000003333333,
  //   tokenListingPrice: 0.00000001,
  //   version: 2,
  // },
  // /**
  //  * live: 0x01D9918ac9015bd0477dDF83319E06E7bC117528
  //  * test: 0x79c06d6151c19dbc3B99A522cd8da37a5479AB66
  //  */
  // {
  //   id: 'rice',
  //   address: '0x01D9918ac9015bd0477dDF83319E06E7bC117528',
  //   isActive: false,
  //   name: 'RiceFarm Token (RICE)',
  //   poolUnlimited: {
  //     saleAmount: '10,000,000 RICE',
  //     raiseAmount: '$5,000,000',
  //     cakeToBurn: '$2,500,000',
  //     distributionRatio: 1,
  //   },
  //   currency: teslaSafeBnbLpToken,
  //   token: tokens.bcai,
  //   releaseBlockNumber: 8243000,
  //   campaignId: null,
  //   articleUrl: 'https://docs.ricefarm.fi/',
  //   tokenOfferingPrice: 0.5,
  //   version: 1,
  // },
  // {
  //   id: 'rice',
  //   address: '0xab25eCD6949C38cAF055B6e1aa628619259A7A4E',
  //   isActive: false,
  //   name: 'RiceFarm Token (RICE)',
  //   subTitle: 'The next evolution of AMM on Binance Smart Chain.',
  //   description:
  //     'Rice is the native token for RiceFarm. As the governance token for RiceFarm, RICE allows holders to vote on governance issues, earn staking rewards, and build the Boba Ecosystem.',
  //   launchDate: 'June. 2',
  //   launchTime: '5PM SGT',
  //   saleAmount: '10,000,000 RICE',
  //   raiseAmount: '$5,000,000',
  //   cakeToBurn: '$500,000',
  //   projectSiteUrl: 'https://ricefarm.fi/',
  //   currency: teslaSafeBnbLpToken,
  //   token: tokens.bcai,
  //   releaseBlockNumber: 9256543,
  //   campaignId: 'none',
  //   articleUrl: 'https://docs.ricefarm.fi/',
  //   version: 0,
  // },
  // {
  //   id: 'rice',
  //   address: '0x130D651C38D39B087d334CD32BC84beC1a2D966B',
  //   isActive: false,
  //   name: 'RiceFarm Token (RICE)',
  //   subTitle: 'The next evolution of AMM on Binance Smart Chain.',
  //   description:
  //     'Rice is the native token for RiceFarm. As the governance token for RiceFarm, RICE allows holders to vote on governance issues, earn staking rewards, and build the Boba Ecosystem.',
  //   launchDate: 'June. 2',
  //   launchTime: '5PM SGT',
  //   saleAmount: '10,000,000 RICE',
  //   raiseAmount: '$5,000,000',
  //   cakeToBurn: '$500,000',
  //   projectSiteUrl: 'https://ricefarm.fi/',
  //   currency: teslaSafeBnbLpToken,
  //   token: tokens.bcai,
  //   releaseBlockNumber: 9256543,
  //   campaignId: 'none',
  //   articleUrl: 'https://docs.ricefarm.fi/',
  //   isV1: true,
  // },
  // {
  //   id: 'rice-ended',
  //   address: '0x37Be29Bd21cf264918Dc0c81AD78c60F58EF8f96',
  //   isActive: true,
  //   name: 'RiceFarm (RICE)',
  //   poolBasic: {
  //     saleAmount: '1,000,000 RICE',
  //     raiseAmount: '$0',
  //     cakeToBurn: '$0',
  //     distributionRatio: 0.3,
  //   },
  //   poolUnlimited: {
  //     saleAmount: '7,000,000 RICE',
  //     raiseAmount: '$1,750,000',
  //     cakeToBurn: '$0',
  //     distributionRatio: 0.7,
  //   },
  //   currency: teslaSafeBnbLpToken,
  //   token: tokens.bcai,
  //   releaseBlockNumber: 6581111,
  //   campaignId: '',
  //   articleUrl: '',
  //   tokenOfferingPrice: 0.25,
  //   isV1: true,
  // },
  // {
  //   id: 'horizon',
  //   address: '0x6137B571f7F1E44839ae10310a08be86D1A4D03B',
  //   isActive: true,
  //   name: 'Horizon Protocol (HZN)',
  //   poolBasic: {
  //     saleAmount: '3,000,000 HZN',
  //     raiseAmount: '$750,000',
  //     cakeToBurn: '$375,000',
  //     distributionRatio: 0.3,
  //   },
  //   poolUnlimited: {
  //     saleAmount: '7,000,000 HZN',
  //     raiseAmount: '$1,750,000',
  //     cakeToBurn: '$875,000',
  //     distributionRatio: 0.7,
  //   },
  //   currency: cakeBnbLpToken,
  //   token: tokens.hzn,
  //   releaseBlockNumber: 6581111,
  //   campaignId: '511090000',
  //   articleUrl: 'https://pancakeswap.medium.com/horizon-protocol-hzn-ifo-to-be-hosted-on-pancakeswap-51f79601c9d8',
  //   tokenOfferingPrice: 0.25,
  //   isV1: false,
  // },
  // {
  //   id: 'belt',
  //   address: '0xc9FBedC033a1c479a6AD451ffE463025E92a1d38',
  //   isActive: false,
  //   name: 'Belt (BELT)',
  //   subTitle: 'AMM protocol incorporating multi-strategy yield optimization',
  //   description:
  //     'Belt.fi is a protocol that allows users to retain the stability of their asset positions and get maximum yields with minimal risk, including automated vault compounding and yield optimization strategies. BELT is the governance and incentivization token of Belt Finance. BELT will be distributed to all types of pools.',
  //   launchDate: 'Mar. 10',
  //   launchTime: '5PM SGT',
  //   saleAmount: '150,000 BELT',
  //   raiseAmount: '$3,000,000',
  //   cakeToBurn: '$1,500,000',
  //   projectSiteUrl: 'https://beta.belt.fi/',
  //   currency: cakeBnbLpToken,
  //   token: tokens.belt,
  //   releaseBlockNumber: 5493919,
  //   campaignId: '511080000',
  //   articleUrl: 'https://pancakeswap.medium.com/belt-fi-belt-ifo-to-be-hosted-on-pancakeswap-353585117e32',
  //   isV1: true,
  // },
  // {
  //   id: 'watch',
  //   address: '0x55344b55C71Ad8834C397E6e08dF5195cF84fe6d',
  //   isActive: false,
  //   name: 'Yieldwatch (WATCH)',
  //   subTitle: 'A smart yield farming dashboard on BSC',
  //   description:
  //     'Yieldwatch is a smart yield farming dashboard on Binance Smart Chain that lets you monitor your liquidity pools, yield farming and token staking performance with fast and casual UI. The $WATCH token is a membership token, which is required to access advanced PRO features.',
  //   launchDate: 'Mar. 4',
  //   launchTime: '5PM SGT',
  //   saleAmount: '8,000,000 WATCH',
  //   raiseAmount: '$800,000',
  //   cakeToBurn: '$400,000',
  //   projectSiteUrl: 'https://yieldwatch.net/',
  //   currency: cakeBnbLpToken,
  //   token: tokens.watch,
  //   releaseBlockNumber: 5294924,
  //   campaignId: '511070000',
  //   articleUrl: 'https://pancakeswap.medium.com/yieldwatch-watch-ifo-to-be-hosted-on-pancakeswap-d24301f17241',
  //   isV1: true,
  // },
  // {
  //   id: 'berry',
  //   address: '0x5d028cE3435B2bB9AceBfaC599EEbA1ccD63d7dd',
  //   isActive: false,
  //   name: 'Berry (BRY)',
  //   subTitle: 'A decentralized oracle network on BSC',
  //   description:
  //     'Berry Data is a transparent community-veriﬁed price oracle on BSC. Berry Data provides a trustless and decentralized alternative for off-chain data. As the governance token for Berry Data, BRY allows holders to pay for Berry Data feeds, vote on governance issues, validate data through staking, and build the Berry ecosystem.',
  //   launchDate: 'Feb. 16',
  //   launchTime: '5PM SGT',
  //   saleAmount: '2,000,000 BRY',
  //   raiseAmount: '$1,000,000',
  //   cakeToBurn: '$500,000',
  //   projectSiteUrl: 'https://berrydata.co/',
  //   currency: cakeBnbLpToken,
  //   token: tokens.bry,
  //   releaseBlockNumber: 4750968,
  //   campaignId: '511060000',
  //   articleUrl: 'https://pancakeswap.medium.com/berry-bry-ifo-to-be-hosted-on-pancakeswap-b4f9095e9cdb',
  //   isV1: true,
  // },
  // {
  //   id: 'soteria',
  //   address: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
  //   isActive: false,
  //   name: 'Soteria (wSOTE)',
  //   subTitle: 'A blockchain based mutual to share the risk of DeFi on Binance Smart Chain',
  //   description:
  //     'Soteria allows users to buy insurance cover to greatly diminish or reduce the financial risk of hacks. It replaces the idea of a traditional insurance company, because it is wholly owned by the members. The model encourages engagement as members receive economic incentives for participating in Risk Assessment, Claims Assessment and Governance.',
  //   launchDate: 'Jan. 21',
  //   launchTime: '4PM SGT',
  //   saleAmount: '1,500,000 wSOTE',
  //   raiseAmount: '$525,000',
  //   cakeToBurn: '$262,500',
  //   projectSiteUrl: 'https://soteria.finance/#/',
  //   currency: cakeBnbLpToken,
  //   token: tokens.wsote,
  //   releaseBlockNumber: 4086064,
  //   campaignId: '511050000',
  //   articleUrl: 'https://pancakeswap.medium.com/soteria-sota-ifo-to-be-hosted-on-pancakeswap-64b727c272ae',
  //   isV1: true,
  // },
  // {
  //   id: 'helmet',
  //   address: '0xa32509d760ee47Eb2Be96D338b5d69B5FBa4eFEB',
  //   isActive: false,
  //   name: 'Helmet.insure (Helmet)',
  //   subTitle: 'Crypto-assets insurance trading platform',
  //   description:
  //     'Helmet is a peer-to-peer insurance protocol written with options trading logic, which allows anyone to create any insurance policy easily in the market. Helmet aims to enable DeFi users to be protected against the risk of price fluctuations by providing price-shield insurance for BSC assets. They provide suppliers with a range of insurance types to sell, giving a variety of hedging strategies to the market.',
  //   launchDate: 'Jan. 13',
  //   launchTime: '5PM SGT',
  //   saleAmount: '10,000,000 Helmet',
  //   raiseAmount: '$1,000,000',
  //   cakeToBurn: '$500,000',
  //   projectSiteUrl: 'https://www.helmet.insure/',
  //   currency: cakeBnbLpToken,
  //   token: tokens.helmet,
  //   releaseBlockNumber: 3771926,
  //   campaignId: '511040000',
  //   articleUrl: 'https://pancakeswap.medium.com/1-000-000-helmet-helmet-ifo-to-be-hosted-on-pancakeswap-3379a2a89a67',
  //   isV1: true,
  // },
  // {
  //   id: 'tenet',
  //   address: '0xB922aA19A2603A07C6C9ED6c236618C9bac51f06',
  //   isActive: false,
  //   name: 'Tenet (TEN)',
  //   subTitle: 'Cross-chain Automated Market Maker',
  //   description:
  //     'Tenet is a cross-chain Automated Market Maker (AMM) connector that provides a decentralized Liquidity Tap for various tokens. The Liquidity Tap is the powerhouse of the Liquidity Pool, employing a dynamic algorithm to give the Liquidity Provider fairer, more efficient, and richer incentives. Tenet aims to build a cross-chain and cross-platform toolkit protocol that allows the demand side to customize the parameters of the liquidity tap, allowing them to reach out to more liquidity participants effectively and with relative ease.',
  //   launchDate: 'Jan. 5',
  //   launchTime: '3PM SGT',
  //   saleAmount: '1,000,000 TEN',
  //   raiseAmount: '$1,000,000',
  //   cakeToBurn: '$500,000',
  //   projectSiteUrl: 'https://www.tenet.farm/',
  //   currency: cakeBnbLpToken,
  //   token: tokens.ten,
  //   releaseBlockNumber: 3483883,
  //   campaignId: '511030000',
  //   articleUrl: 'https://pancakeswap.medium.com/tenet-ten-ifo-to-be-hosted-on-pancakeswap-b7e1eb4cb272',
  //   isV1: true,
  // },
  // {
  //   id: 'ditto',
  //   address: '0x570c9eB19553526Fb35895a531928E19C7D20788',
  //   isActive: false,
  //   name: 'Ditto (DITTO)',
  //   subTitle: 'Next-gen elastic supply token',
  //   description:
  //     'Ditto is the first elastic supply token on the Binance Smart Chain. Its goal is to maintain a stable price of $1, where its supply will adapt to changes in demand. All supply changes will apply equally to every wallet holding Ditto, and holders should always have the same % of the total supply',
  //   launchDate: 'Dec. 23',
  //   launchTime: '3PM SGT',
  //   saleAmount: '700,000 DITTO',
  //   raiseAmount: '$630,000',
  //   cakeToBurn: '$315,000',
  //   projectSiteUrl: 'https://ditto.money/',
  //   currency: cakeBnbLpToken,
  //   token: tokens.ditto,
  //   releaseBlockNumber: 3279767,
  //   campaignId: '511020000',
  //   articleUrl: 'https://pancakeswap.medium.com/ditto-money-ditto-ifo-to-be-hosted-on-pancakeswap-342da3059a66',
  //   isV1: true,
  // },
  // {
  //   id: 'blink',
  //   address: '0x44a9Cc8463EC00937242b660BF65B10365d99baD',
  //   isActive: false,
  //   name: 'BLINk (BLK)',
  //   subTitle: 'Online games on BSC',
  //   description:
  //     'BLINk enables BNB holders to enjoy gaming experiences that WINk users on Tron have been enjoying for over two years.',
  //   launchDate: 'Nov. 20',
  //   launchTime: '9PM SGT',
  //   saleAmount: '100,000,000 BLINK',
  //   raiseAmount: '$1,000,000',
  //   cakeToBurn: '$500,000',
  //   projectSiteUrl: 'https://blink.wink.org',
  //   currency: cakeBnbLpToken,
  //   token: tokens.blink,
  //   releaseBlockNumber: 3279767,
  //   campaignId: '511010000',
  //   articleUrl: 'https://medium.com/pancakeswap/1-000-000-ifo-blink-joins-pancakeswap-15841800bdd8',
  //   isV1: true,
  // },
]

export default ifos
