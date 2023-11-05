import md5encrypt from 'md5';
import JSEncrypt from 'jsencrypt';
import { PUBLIC_KEY, SALT } from '@/constants/encrypt';

export function rsa(original: string, publicKey?: string) {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey ?? PUBLIC_KEY);
  return encryptor.encrypt(original);
}

export function md5(original: string, salt?: string) {
  return md5encrypt((salt ?? SALT) + original);
}

export default function encrypt(original: string, salt?: string, publicKey?: string) {
  return rsa(md5(original, salt ?? SALT), publicKey ?? PUBLIC_KEY);
}