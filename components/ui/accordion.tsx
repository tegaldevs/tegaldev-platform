"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  className?: string
}

interface AccordionProps {
  children: React.ReactNode
  className?: string
}

const AccordionContext = React.createContext<{
  openItem: string | null
  setOpenItem: (item: string | null) => void
}>({
  openItem: null,
  setOpenItem: () => {},
})

export function Accordion({ children, className }: AccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null)

  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      <div className={cn("space-y-2", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

export function AccordionItem({ title, children, className }: AccordionItemProps) {
  const { openItem, setOpenItem } = React.useContext(AccordionContext)
  const itemId = React.useId()
  const isOpen = openItem === itemId

  const toggleItem = () => {
    setOpenItem(isOpen ? null : itemId)
  }

  return (
    <div className={cn("border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm", className)}>
      <button
        onClick={toggleItem}
        className="flex w-full items-center justify-between p-6 text-left font-medium transition-all hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500/20 cursor-pointer"
      >
        <span className="text-white text-lg font-semibold pr-4">{title}</span>
        <ChevronDown 
          className={cn(
            "h-5 w-5 shrink-0 text-white transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200 ease-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-6 pt-4 text-gray-300 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
} 