"use client";
import { cn, color, pressable, text } from "@coinbase/onchainkit/theme";
import { useEffect, useState } from "react";
import { useAccount, useChainId, useSignTypedData } from "wagmi";
import { Address, Hex } from "viem";
import { useQuery } from "@tanstack/react-query";
import { SpendPermission } from "../lib/types";
import { spendPermissionManagerAddress } from "@/lib/abi/SpendPermissionManager";

export type Subscription = {
  chainId: number;
  token: Address;
  start?: Date;
  end?: Date;
  period: number; // seconds,
  price: bigint;
  spender: Address | undefined;
};

const MAX_UINT48 = 281474976710655; // 2 ** 48 - 1

export default function Subscribe({
  chainId,
  token,
  start,
  end,
  period,
  price,
  spender,
}: Subscription) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [signature, setSignature] = useState<Hex>();
  const [transactions, setTransactions] = useState<Hex[]>([]);
  const [spendPermission, setSpendPermission] = useState<SpendPermission>();

  const { signTypedDataAsync } = useSignTypedData();
  const account = useAccount();

  const chain_id = useChainId();

  useEffect(() => {
    if (account?.address && !spendPermission) {
      setSpendPermission({
        account: account.address!,
        spender: "0x776F2Bb62d8B5f4e9acE945E4aAE417f584406C4",
        token,
        allowance: price,
        period: 86400,
        start: Math.floor(start?.valueOf() ?? Date.now() / 1000),
        end: !!end ? Math.floor(end.valueOf() / 1000) : MAX_UINT48,
      });
    }
  }, [account?.address]);

  const { data, error, isLoading } = useQuery({
    queryKey: ["collectSubscription"],
    queryFn: handleCollectSubscription,
    refetchInterval: 5000, // 5 seconds
    refetchOnWindowFocus: false,
    enabled: !!signature,
  });

  useEffect(() => {
    if (!data) return;
    console.log("new data", data);
    if (transactions.length > 9) {
      setTransactions([data?.transactionUrl, ...transactions.slice(0, 10)]);
    } else {
      setTransactions([data?.transactionUrl, ...transactions]);
    }
  }, [data]);

  async function handleCollectSubscription() {
    console.log("query");
    console.log({ spendPermission, signature });
    const replacer = (key: string, value: any) => {
      if (typeof value === "bigint") {
        return value.toString();
      }
      return value;
    };
    const response = await fetch("/collect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          spendPermission,
          signature,
          dummyData: Math.ceil(Math.random() * 100),
        },
        replacer
      ),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log({ response });
    const data = await response.json();
    return data;
  }

  async function handleSubmit() {
    setIsDisabled(true);
    try {
      const signature = await signTypedDataAsync({
        domain: {
          name: "Spend Permission Manager",
          version: "1",
          chainId: chainId,
          verifyingContract: spendPermissionManagerAddress,
        },
        types: {
          SpendPermission: [
            { name: "account", type: "address" },
            { name: "spender", type: "address" },
            { name: "token", type: "address" },
            { name: "allowance", type: "uint160" },
            { name: "period", type: "uint48" },
            { name: "start", type: "uint48" },
            { name: "end", type: "uint48" },
          ],
        },
        primaryType: "SpendPermission",
        message: spendPermission,
      });
      setSignature(signature);
    } catch (e) {
      console.log("catch", e);
    }
    setIsDisabled(false);
  }
  return (
    <div>
      {!signature ? (
        <div className="flex w-[450px]">
          <button
            className={cn(
              pressable.primary,
              "w-full rounded-xl",
              "px-4 py-3 font-medium text-base text-white leading-6",
              isDisabled && pressable.disabled,
              text.headline
            )}
            onClick={handleSubmit}
            type="button"
            disabled={isDisabled}
            data-testid="ockTransactionButton_Button"
          >
            <span
              className={cn(
                text.headline,
                color.inverse,
                "flex justify-center"
              )}
            >
              Subscribe
            </span>
          </button>
        </div>
      ) : (
        // <div className="flex w-[450px]">
        //   <button
        //     className={cn(
        //       pressable.primary,
        //       "w-full rounded-xl",
        //       "px-4 py-3 font-medium text-base text-white leading-6",
        //       isDisabled && pressable.disabled,
        //       text.headline
        //     )}
        //     onClick={handleCollectSubscription}
        //     type="button"
        //     disabled={isDisabled}
        //     data-testid="collectSubscriptionButton_Button"
        //   >
        //     <span
        //       className={cn(
        //         text.headline,
        //         color.inverse,
        //         "flex justify-center"
        //       )}
        //     >
        //       Collect Subscription
        //     </span>
        //   </button>
        // </div>
        <div className="h-80 space-y-4 relative">
          <div className="text-lg font-bold">Subscription Payments</div>
          <div className="flex flex-col">
            {transactions.map((transactionUrl, i) => (
              <a
                key={i}
                className="hover:underline"
                target="_blank"
                href={transactionUrl}
              >
                View transaction
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
