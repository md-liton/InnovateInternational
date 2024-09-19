import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import photo1 from './assets/photo1.png'
import Image from "next/image";
import photo2 from './assets/photo2.png'
import photo3 from './assets/photo3.png'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'



export default function Home() {

  return (
    <>

    {/* navbar part start */}

    <nav className="bg-[#363636] border-b-[1px] border-[#000]">
      <div className="container">
        <div className="nav_main flex justify-between items-center py-[30px]">
          <div>
            <ul className="text-[24px] flex gap-[50px] text-[#fff]">
              <li className="cursor-pointer">
                <a className="flex gap-[10px] items-center">Home <IoIosArrowDown /></a>
              </li>
              <li className="cursor-pointer">
                <a className="flex gap-[10px] items-center">Event <IoIosArrowDown /></a>
              </li>
              <li className="cursor-pointer">
                <a className="flex gap-[10px] items-center">Contact <IoIosArrowDown /></a>
              </li>
              <li className="cursor-pointer">
                <a className="flex gap-[10px] items-center">Blog <IoIosArrowDown /></a>
              </li>
            </ul>
          </div>
          <div className=" relative">
            <input className="focus:outline-none py-[10px] pl-[15px] pr-[50px] rounded-full" placeholder="Search"/>
            <FaSearch className="absolute top-[12px] right-[15px] text-[20px] cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>

    {/* navbar part end */}



    {/* banner part start */}

    <section className="py-[130px] relative">
        <div className="bg-banner bg-cover bg-no-repeat bg-center h-[320px] absolute top-0 left-0 w-full z-[-1]"></div>
        <div className="container group">
          <div className="banner_main flex justify-between items-center  transition-all duration-300 group">
            <div className="item1 w-[300px] h-[300px] bg-[#C02424] cursor-pointer hover:scale-175 duration-200"></div>
            <div className="w-[260px] h-[260px] bg-[#146FE8] cursor-pointer hover:scale-175 duration-200"></div>
            <div className="w-[300px] h-[300px] bg-[#E76666] cursor-pointer hover:scale-175 duration-200"></div>
            <div className="w-[260px] h-[260px] bg-[#A0FCD9] cursor-pointer hover:scale-175 duration-200"></div>
          </div>
        </div>
      </section>

    {/* banner part end */}



    {/* photo part start  */}


    <section className="py-[50px]">
      <div className="container">
        <div className="photo_main flex items-center">
          <div className="w-1/2">
          <div className=" flex items-center gap-[50px]">
          <div>
          <div className="h-[274px] w-[285px]  rounded-[39px] relative">
            <Image 
            src={photo1}
            width='100%'
            height='100%'
             alt="img"/>
          <div className="h-[50px] w-[50px] rounded-full outline outline-1 outline-white  absolute bottom-[-20px] right-[-3px]">
            <Image
            src={img1} 
            width='100%'
            height='100%'
            />
          </div>
          </div>


          
          <div className="h-[210px] w-[220px]  rounded-[39px] relative mt-[50px] ml-[50px]">
            <Image 
            src={photo3}
            width='100%'
            height='100%'
             alt="img"/>
          <div className="h-[50px] w-[50px] rounded-full outline outline-1 outline-white  absolute bottom-[-20px] right-[-3px]">
            <Image
            src={img3} 
            width='100%'
            height='100%'
            />
          </div>
          </div>
          </div>
          <div>
          <div className="h-[230px] w-[240px]  rounded-[39px] relative">
            <Image 
            src={photo2}
            width='100%'
            height='100%'
             alt="img"/>
          <div className="h-[50px] w-[50px] rounded-full outline outline-1 outline-white  absolute bottom-[-20px] right-[-3px]">
            <Image
            src={img2} 
            width='100%'
            height='100%'
            />
          </div>
          </div>
          
          
          </div>


          </div>
          </div>
          <div className="w-1/2">
          <p className="text-[24px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore e.</p>
          <button className="py-[10px] px-[25px] rounded-[15px] text-[#4000FF] border border-[#4000FF] hover:bg-[#4000FF] hover:text-white duration-300 mt-[20px] ">sign up</button>
          </div>
        </div>
      </div>
    </section>


    {/* photo part end */}




    </>
  );
}



