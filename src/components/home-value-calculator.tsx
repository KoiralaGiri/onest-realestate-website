'use client'

import { useState, useEffect } from 'react'
import { MapPin, Ruler, Wrench } from 'lucide-react'
import { Card } from '../components/ui/card.tsx'
import { Input } from '../components/ui/input.tsx'
import { Slider } from '../components/ui/slider.tsx'
import { cn } from '../lib/utils.ts'

interface ValuationResult {
  estimatedValue: number
  pricePerSqFt: number
  marketTrend: number
  confidenceScore: number
  areaGrowth: string
  valueRange: {
    min: number
    max: number
  }
}

export default function HomeValueCalculator() {
  const [location, setLocation] = useState('')
  const [squareFootage, setSquareFootage] = useState('')
  const [propertyAge, setPropertyAge] = useState(0)
  const [renovationValue, setRenovationValue] = useState('')
  const [valuation, setValuation] = useState<ValuationResult>({
    estimatedValue: 725000,
    pricePerSqFt: 285,
    marketTrend: 5.2,
    confidenceScore: 92,
    areaGrowth: 'High',
    valueRange: {
      min: 695000,
      max: 755000
    }
  })

  // Calculate home value based on inputs
  useEffect(() => {
    if (location && squareFootage) {
      // This is a simplified calculation - in a real app, you'd call an API
      const baseValue = parseInt(squareFootage) * valuation.pricePerSqFt
      const ageAdjustment = 1 - (propertyAge / 200) // Age reduces value up to 50%
      const renovationAdjustment = renovationValue ? parseInt(renovationValue) / baseValue : 0
      
      const estimatedValue = baseValue * ageAdjustment * (1 + renovationAdjustment)
      const range = estimatedValue * 0.04 // 4% range for min/max

      setValuation(prev => ({
        ...prev,
        estimatedValue: Math.round(estimatedValue),
        valueRange: {
          min: Math.round(estimatedValue - range),
          max: Math.round(estimatedValue + range)
        }
      }))
    }
  }, [location, squareFootage, propertyAge, renovationValue])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <div className="max-w-7xl mx-auto p-6 rounded-3xl bg-slate-200">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-[#B88746]">Home Value Calculator</h1>
            <p className="text-muted-foreground mt-2">
              Get an accurate estimate of your home's value based on current market data and property details.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="font-medium">Property Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Enter address or ZIP code"
                  className="pl-10"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="font-medium">Square Footage</label>
              <div className="relative">
                <Ruler className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Enter square feet"
                  className="pl-10"
                  type="number"
                  value={squareFootage}
                  onChange={(e) => setSquareFootage(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="font-medium">Property Age</label>
              <div className="mt-2">
                <Slider
                  value={[propertyAge]}
                  onValueChange={(value) => setPropertyAge(value[0])}
                  max={100}
                  step={1}
                  className="my-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>New Construction</span>
                  <span>100+ years</span>
                </div>
              </div>
            </div>

            <div>
              <label className="font-medium">Recent Renovations Value</label>
              <div className="relative">
                <Wrench className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Enter value of renovations"
                  className="pl-10"
                  type="number"
                  value={renovationValue}
                  onChange={(e) => setRenovationValue(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="p-6 bg-zinc-950 text-white">
            <div className="space-y-4">
              <div>
                <div className="text-sm text-zinc-400">Estimated Value</div>
                <div className="text-4xl font-bold text-[#B88746]">
                  {formatCurrency(valuation.estimatedValue)}
                </div>
                <div className="text-sm text-zinc-400 mt-1">
                  Range: {formatCurrency(valuation.valueRange.min)} – {formatCurrency(valuation.valueRange.max)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900 p-4 rounded-lg">
                  <div className="text-sm text-zinc-400">Price per Sq Ft</div>
                  <div className="text-xl font-semibold">${valuation.pricePerSqFt}</div>
                </div>
                <div className="bg-zinc-900 p-4 rounded-lg">
                  <div className="text-sm text-zinc-400">Market Trend</div>
                  <div className="text-xl font-semibold flex items-center">
                    <span className="text-green-500">↑</span> {valuation.marketTrend}%
                  </div>
                </div>
                <div className="bg-zinc-900 p-4 rounded-lg">
                  <div className="text-sm text-zinc-400">Confidence Score</div>
                  <div className="text-xl font-semibold">{valuation.confidenceScore}%</div>
                </div>
                <div className="bg-zinc-900 p-4 rounded-lg">
                  <div className="text-sm text-zinc-400">Area Growth</div>
                  <div className="text-xl font-semibold">{valuation.areaGrowth}</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-orange-50">
            <h3 className="text-lg font-semibold text-[#B88746] mb-4">Value-Add Opportunities</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-[#B88746] p-1 mt-1">
                  <div className="w-1.5 h-1.5 bg-orange-50 rounded-full" />
                </div>
                <span className="text-sm">Kitchen renovation could add 5-7% to home value</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-[#B88746] p-1 mt-1">
                  <div className="w-1.5 h-1.5 bg-orange-50 rounded-full" />
                </div>
                <span className="text-sm">Energy efficiency upgrades could increase value by 3%</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-[#B88746] p-1 mt-1">
                  <div className="w-1.5 h-1.5 bg-orange-50 rounded-full" />
                </div>
                <span className="text-sm">Landscaping improvements could add 2-4% to curb appeal</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}

