type props = {
    children: string
}

export default function HardItem({children}: props) {
  return (
    <li className="bg-blue-950 px-3 py-1 font-medium rounded-lg w-fit">{children}</li>
  )
}
