import * as bitcoin from 'bitcoinjs-lib';
import { NETWORK } from '../blue_modules/network';

/**
 * Combines two PSBTs and returns the combined PSBT.
 * @param {string} psbtBase64 - The base64 string of the first PSBT.
 * @param {string} newPSBTBase64 - The base64 string of the new PSBT to combine.
 * @returns {bitcoin.Psbt} - The combined PSBT.
 */
interface CombinePSBTsParams {
  psbtBase64: string;
  newPSBTBase64: string;
}

export const combinePSBTs = ({ psbtBase64, newPSBTBase64 }: CombinePSBTsParams): bitcoin.Psbt => {
  if (psbtBase64 === newPSBTBase64) {
    return bitcoin.Psbt.fromBase64(psbtBase64, { network: NETWORK });
  }
  try {
    const psbt = bitcoin.Psbt.fromBase64(psbtBase64, { network: NETWORK });
    const newPsbt = bitcoin.Psbt.fromBase64(newPSBTBase64, { network: NETWORK });
    psbt.combine(newPsbt);
    return psbt;
  } catch (err) {
    console.error('Error combining PSBTs:', err);
    throw err;
  }
};
