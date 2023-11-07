import md5Encrypt from 'md5';
import JSEncrypt from 'jsencrypt';
import { PUBLIC_KEY, SALT } from '@/constants/encrypt';

class EncryptOptions {
  publicKey?: string;
  salt?: string;
  method?: 'rsa' | 'RSA' | 'md5' | 'MD5' | 'MIX' | 'mix';
}
/**
 * RSA加密
 * @param {String} original the original and un-encrypted string 未加密的字符串
 * @param {String} publicKey the rsa encrypt method need a public key 公钥字符串
 * @returns {String | false} encrypted string 加密完成的字符串
 */
export function rsa(original: string, publicKey?: string): string | false {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey ?? PUBLIC_KEY);
  return encryptor.encrypt(original);
}

/**
 * MD5
 * @param original the original and un-encrypted string 未加密的字符串
 * @param salt the salt value 盐值
 * @returns {string} encrypted string 已加密的字符串
 */
export function md5(original: string, salt?: string) {
  return md5Encrypt((salt ?? SALT) + original);
}

/**
 * RSA and MD5 mixed to encrypt the original string 
 * 使用RSA和MD5混合加密
 * @param original the original and un-encrypted string 原始字符串
 * @param salt the salt value of MD5 MD5加密时所需要提供的盐值
 * @param publicKey 
 * @returns 
 */

// function encrypt(original: string, salt?: string, publicKey?: string): string | false {
//   return rsa(md5(original, salt ?? SALT), publicKey ?? PUBLIC_KEY);
// }

export default function encrypt(original: string, options?: EncryptOptions): string | false {
  const { salt = SALT, publicKey = PUBLIC_KEY, method = 'MD5' } = options ?? {};
  if (method === 'MD5' || method === "md5") {
    return md5(original, salt);
  } else if (method === 'RSA' || method === 'rsa') {
    return rsa(original, publicKey);
  } else if (method === 'MIX' || method === 'mix') {
    return rsa(md5(original, salt), publicKey);
  }
  return false;
}