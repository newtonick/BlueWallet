import * as bitcoin from 'bitcoinjs-lib';

// Network configuration - Bitcoin Testnet3
export const NETWORK = bitcoin.networks.testnet;

// Helper to determine if we're on testnet
export const IS_TESTNET = NETWORK === bitcoin.networks.testnet;

// BIP44 coin type: 0' for mainnet, 1' for testnet
export const COIN_TYPE = IS_TESTNET ? 1 : 0;

// Address prefixes for validation
export const BECH32_PREFIX = IS_TESTNET ? 'tb1' : 'bc1';

// Extended key version bytes (SLIP-132)
// Testnet: tpub/tprv for legacy, vpub/vprv for native segwit, upub/uprv for wrapped segwit
// Mainnet: xpub/xprv for legacy, zpub/zprv for native segwit, ypub/yprv for wrapped segwit
export const XPUB_VERSION = IS_TESTNET ? '043587cf' : '0488b21e'; // tpub vs xpub
export const XPRV_VERSION = IS_TESTNET ? '04358394' : '0488ade4'; // tprv vs xprv
export const ZPUB_VERSION = IS_TESTNET ? '045f1cf6' : '04b24746'; // vpub vs zpub
export const ZPRV_VERSION = IS_TESTNET ? '045f18bc' : '04b2430c'; // vprv vs zprv
export const YPUB_VERSION = IS_TESTNET ? '044a5262' : '049d7cb2'; // upub vs ypub
export const YPRV_VERSION = IS_TESTNET ? '044a4e28' : '049d7878'; // uprv vs yprv

// Derivation path helper
export function getDerivationPath(purpose: number, account: number = 0): string {
  return `m/${purpose}'/${COIN_TYPE}'/${account}'`;
}
