import Name from "../components/home/name";
import Bio from "../components/home/bio";
import Image from "../components/home/images";

export default function Home() {
  return (
    <div>
      <Name myname="Scott" />
      <Bio bio="I am a future software developer" />
      <Image src="/pic.PNG" alt="profile pic" />
    </div>
  )
} 
