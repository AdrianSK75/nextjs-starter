import { ItemList } from "../components/items"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <div className="flex flex-col text-center space-y-5">
      <h1>Hello World!</h1>
      <ItemList />
    </div>
  )
}





