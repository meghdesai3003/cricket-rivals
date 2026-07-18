import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface CoinContextType {
  coins: number;
  addCoins: (amount: number) => void;
  spendCoins: (amount: number) => void;
}

interface CoinProviderProps {
  children: React.ReactNode;
}

const CoinContext =
  createContext<CoinContextType | null>(null);

export function CoinProvider({
  children,
}: CoinProviderProps) {
  const [coins, setCoins] = useState<number>(() => {
    const saved: string | null = localStorage.getItem("coins");

    return saved ? JSON.parse(saved) : 5000;
  });

  useEffect(() => {
    localStorage.setItem(
      "coins",
      JSON.stringify(coins)
    );
  }, [coins]);

  function addCoins(amount: number) {
    setCoins((prev) => prev + amount);
  }

  function spendCoins(amount: number) {
    setCoins((prev) => Math.max(0, prev - amount));
  }

  return (
    <CoinContext.Provider
      value={{
        coins,
        addCoins,
        spendCoins,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
}

export function useCoins() {
  const context = useContext(CoinContext);

  if (!context) {
    throw new Error(
      "useCoins must be used inside CoinProvider"
    );
  }

  return context;
}