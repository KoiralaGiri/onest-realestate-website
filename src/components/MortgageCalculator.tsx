import React, { useState, useEffect } from 'react';
import { Card } from "./ui/card.tsx";
import { Input } from "./ui/input.tsx";
import { Label } from "./ui/label.js";
import { Building2, DollarSign, Percent, CalendarClock } from 'lucide-react';
import '../styles/MortgageCalculator.css'

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMortgage = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = (interestRate / 100) / 12;
    const numberOfPayments = loanTerm * 12;

    const payment = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setMonthlyPayment(isNaN(payment) ? 0 : payment);
  };

  useEffect(() => {
    calculateMortgage();
  }, [homePrice, downPayment, interestRate, loanTerm]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold  text-[#b68319] mb-4">Mortgage Calculator</h1>
      <p className=" text-[#c9a760] mb-8 ">
        Calculate your estimated monthly mortgage payment based on your home value and loan details.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="relative">
            <Label className="text-lg font-medium mb-2  text-[#c9a760]">Home Price</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 h-5 w-5  text-[#b68319]" />
              <Input
                type="number"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="pl-10 h-12  text-[#c9a760]"
              />
            </div>
          </div>

          <div className="relative">
            <Label className="text-lg font-medium mb-2  text-[#b68319]">Down Payment</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 h-5 w-5  text-[#b68319]" />
              <Input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="pl-10 h-12  text-[#c9a760]"
              />
            </div>
          </div>

          <div className="relative">
            <Label className="text-lg font-medium mb-2  text-[#b68319]">Interest Rate (%)</Label>
            <div className="relative">
              <Percent className="absolute left-3 top-3 h-5 w-5  text-[#b68319]" />
              <Input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="pl-10 h-12  text-[#c9a760]"
                step="0.1"
              />
            </div>
          </div>

          <div className="relative">
            <Label className="text-lg font-medium mb-2  text-[#b68319]">Loan Term (years)</Label>
            <div className="relative">
              <CalendarClock className="absolute left-3 top-3 h-5 w-5  text-[#b68319]" />
              <Input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="pl-10 h-12  text-[#b68319]"
              />
            </div>
          </div>
        </div>

        <Card className="bg-gray-900 text-[#b68319] p-6 rounded-lg">
          <div className="space-y-6">
            <div>
              <h2 className="text-[#b68319] text-lg">Estimated Payment</h2>
              <div className="text-5xl font-bold text-[ text-[#b68319] mt-2">
                {formatCurrency(monthlyPayment)}
                <span className="text-lg text-[#b68319] ml-2">/mo</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-[#b68319]">Loan Amount</h3>
                <p className="text-2xl font-semibold mt-1  text-[#b68319]">
                  {formatCurrency(homePrice - downPayment)}
                </p>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-[#b68319]">Down Payment</h3>
                <p className="text-2xl font-semibold mt-1  text-[#b68319]">
                  {((downPayment / homePrice) * 100).toFixed(1)}%
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-[#b68319]">Total Cost</h3>
              <p className="text-2xl font-semibold mt-1 text-[#b68319]">
                {formatCurrency(monthlyPayment * loanTerm * 12)}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MortgageCalculator;