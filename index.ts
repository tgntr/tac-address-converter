import { ethToTac } from "./address-converter";

// replace with the address you want to convert
const ETH_ADDRESS = '0x1234567890abcdef1234567890abcdef12345678';
function main() {
    console.log(ethToTac(ETH_ADDRESS))
}

main();