import React from "react";
import { Truck, CreditCard, LockKeyhole } from "lucide-react";

const TopInfoBar = () => {
  return (
    <div className="w-full h-[25px] bg-black text-white flex items-center justify-between px-4 text-xs">
      <div className="flex items-center gap-4">
        <Truck
          className="cursor-pointer hover:text-red-500 transition-colors"
          size={20}
              />
              <span>
                  Frete grátis acima de R$ 99,00  
                </span>
        <CreditCard
          className="cursor-pointer hover:text-blue-500 transition-colors"
          size={20}
              />
              <span>Pagamento em até 12x </span> 
        <LockKeyhole
          className="cursor-pointer hover:text-green-500 transition-colors"
          size={20}
        />
        <span>Pagamento Seguro</span>
      </div>
    </div>
  );
};

export default TopInfoBar;
