import { Bytes, concat } from "@ethersproject/bytes";
import { keccak256 } from "@ethersproject/keccak256";
import { toUtf8Bytes } from "@ethersproject/strings";

export const messagePrefix = "\x19Ethereum Signed Message:\n";

export function hashMessage(message: Bytes | string): string {
  if (typeof message === "string") {
    message = toUtf8Bytes(message);
  }
  console.log("hashMessage has been updated");
  return keccak256(
    concat([
      // toUtf8Bytes(messagePrefix),
      // toUtf8Bytes(String(message.length)),
      message,
    ])
  );
}
