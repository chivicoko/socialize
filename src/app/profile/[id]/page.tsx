import Feed from "@/components/Feed"
import LeftMenu from "@/components/LeftMenu"
import RightMenu from "@/components/RightMenu"
import Image from "next/image"

const Profile = () => {
  return (
    <div className='flex gap-6'>
      
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>

      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">

          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full h-64 rounded-md">
              <Image 
              src="https://images.pexels.com/photos/15521503/pexels-photo-15521503/free-photo-of-central-london-street-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
              alt="friend request image"
              fill
              className='object-cover rounded-md'
              sizes="100%"
              />
              <Image 
              src="https://images.pexels.com/photos/27702855/pexels-photo-27702855/free-photo-of-amigo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
              alt="friend request image"
              width={128}
              height={128}
              className='object-cover w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white'
              sizes="100%"
              />
            </div>
            <h1 className="text-2xl mt-20 mb-4 font-medium text-center">Okoye, Victor Chibuzo</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">144</span>
                <span className="text-sm"> Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">3.2k</span>
                <span className="text-sm"> Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1k</span>
                <span className="text-sm"> Following</span>
              </div>
            </div>
          </div>

          <Feed/>
        </div>
      </div>

      <div className="hidden lg:block w-[30%]">
        <RightMenu userId='test'/>
      </div>

    </div>
  )
}

export default Profile;