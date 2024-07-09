import Image from "next/image"

const Logo = () => {
  return (
    <div className="w-32">
      <Image layout="responsive" width={100} height={27.28} src="/assets/logo/logo.png" />
    </div>
  )
}

export default Logo