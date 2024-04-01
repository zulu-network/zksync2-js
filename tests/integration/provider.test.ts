import { expect } from "chai";
import { Provider, types, utils, Wallet } from "../../src";
import { ethers } from "ethers";
import { TOKENS } from "../const";

describe("Provider", () => {
    const ADDRESS = "0x36615Cf349d7F6344891B1e7CA7C72883F5dc049";
    const PRIVATE_KEY = "0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110";
    const RECEIVER = "0xa61464658AfeAf65CccaaFD3a512b69A83B77618";

    const provider = Provider.getDefaultProvider();
    const wallet = new Wallet(PRIVATE_KEY, provider);

    let tx = null;

    // command: mocha -r ts-node/register --bail tests/integration/provider.test.ts
    describe("#getL1BatchDetails()", () => {
        it("should return L1 batch details", async () => {
            const l1BatchNumber = await provider.getL1BatchNumber();
            const result = await provider.getL1BatchDetails(l1BatchNumber);
            expect(result).not.to.be.null;
        });
    });

    // describe("#getL1BatchDetailsWithOffchainVerification()", () => {
    //     it("should return L1 batch details with offchain verification", async () => {
    //         const l1BatchNumber = await provider.getL1BatchNumber();
    //         const result = await provider.getL1BatchDetailsWithOffchainVerification(l1BatchNumber);
    //         console.log(result);
    //         expect(result).not.to.be.null;
    //     });
    // });
});
