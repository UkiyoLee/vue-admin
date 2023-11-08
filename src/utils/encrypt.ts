import { PUBLIC_KEY, SALT } from "@/constants/encrypt";
import JSEncrypt from "jsencrypt";
import MD5Encrypt from "md5";

type EncryptType = "MD5" | "md5" | "RSA" | "rsa" | "MIX" | "mix";

interface EncryptOptions {
  publicKey?: string;
  salt?: string;
  mode?: string;
}

export function rsa(original: string, publicKey?: string) {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey ?? PUBLIC_KEY);
  return encryptor.encrypt(original);
}

export function md5(original: string, salt?: string) {
  return MD5Encrypt(`${salt ?? SALT}${original}`);
}

export function encrypt(original: string): string | false;
export function encrypt(original: string, options: EncryptOptions): string | false;

export function encrypt(original: string, options?: EncryptOptions): string | false {
  const { publicKey, salt, mode } = options ?? { mode: "MD5" };
  switch (mode?.toLocaleUpperCase()) {
    case "MD5":
      return md5(original, salt ?? SALT);
    case "RSA":
      return rsa(original, publicKey ?? PUBLIC_KEY);
    case "MIX":
      return rsa(md5(original, salt ?? SALT), publicKey ?? PUBLIC_KEY);
    default:
      return false;
  }
}