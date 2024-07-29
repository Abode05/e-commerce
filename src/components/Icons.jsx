/* eslint-disable react/prop-types */
import { icons } from 'lucide-react'

const Icons = ({ name, color, size }) => {
  const LucideIcon = icons[name]

  return <LucideIcon color={color} size={size} />
}

export default Icons
