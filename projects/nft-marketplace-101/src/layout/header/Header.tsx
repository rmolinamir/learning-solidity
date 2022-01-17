import { Popover } from '@headlessui/react'
import Navbar from './Navbar'
import MobilePanel from './MobilePanel'

export default function Header() {
  return (
    <Popover className="sticky top-0  lg:z-50 z-40 w-full flex-none transition-colors duration-500 border-b border-base-content/20 backdrop-blur bg-neutral-content/80">

      <Navbar />

      <MobilePanel />

    </Popover>
  )
}
