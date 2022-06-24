import { ethers } from "hardhat"

export const getSelector = (signature: string) => {
  return ethers.utils
    .keccak256(ethers.utils.toUtf8Bytes(signature))
    .slice(0, 10)
}
