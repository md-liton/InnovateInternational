'use client'
import { IoIosArrowDown,IoIosArrowBack ,IoIosArrowForward} from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import photo1 from './assets/photo1.png'
import Image from "next/image";
import photo2 from './assets/photo2.png'
import photo3 from './assets/photo3.png'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'
import img7 from './assets/img7.png'
import img8 from './assets/img8.png'
import next from './assets/next.png'
import { IoFilterSharp,IoMenuOutline  } from "react-icons/io5";
import { ImCross } from "react-icons/im";


import {  } from "react-icons/io";
import { useEffect, useState } from "react";




export default function Home() {

  const [divone,setDivone]=useState(true)
  const [divtwo,setDivtwo]=useState(false)
  const [divthree,setDivthree]=useState(false)
  const [divfour,setDivfour]=useState(false)
  const [divfive,setDivfive]=useState(false)
  const [divsix,setDivsix]=useState(false)
  const [divseven,setDivseven]=useState(false)


  const [slideone,setSlideone]=useState(true)
  const [slidetwo,setSlidetwo]=useState(false)
  const [slidethree,setSlidethree]=useState(false)
  const [slidefour,setSlidefour]=useState(false)
  const [count, setCount] = useState(0);

  const [nav,setNav]=useState(false)

  useEffect(()=>{
    let item1 = document.querySelector('.item1')
    let item2 = document.querySelector('.item2')
    let item3 = document.querySelector('.item3')
    let item4 = document.querySelector('.item4')
    const width = window.innerWidth;

    if (width > 768) {

      item1.addEventListener("mouseenter", () => {
        item1.style.width = '350px';
        item1.style.height = '350px';
      });
      
      item1.addEventListener("mouseleave", () => {
        item1.style.width = '300px';
        item1.style.height = '300px';
      });
      item3.addEventListener("mouseenter", () => {
        item3.style.width = '350px';
        item3.style.height = '350px';
      });
      
      item3.addEventListener("mouseleave", () => {
        item3.style.width = '300px';
        item3.style.height = '300px';
      });
  
      item2.addEventListener("mouseenter", () => {
        item2.style.width = '350px';
        item2.style.height = '350px';
      });
      
      item2.addEventListener("mouseleave", () => {
        item2.style.width = '260px';
        item2.style.height = '260px';
      });
      item4.addEventListener("mouseenter", () => {
        item4.style.width = '350px';
        item4.style.height = '350px';
      });
      
      item4.addEventListener("mouseleave", () => {
        item4.style.width = '260px';
        item4.style.height = '260px';
      });
     
    }


  

  
    
   

    
  },[])


  useEffect(()=>{
    let colordiv = document.querySelector('.colordiv')
    let one = document.querySelector('.one')
    let two = document.querySelector('.two')
    let three = document.querySelector('.three')
    let four = document.querySelector('.four')
    let five = document.querySelector('.five')
    let six = document.querySelector('.six')
    let seven = document.querySelector('.seven')



    one.addEventListener('click',function(){
      setDivone(true)
      setDivtwo(false)
      setDivthree(false)
      setDivfour(false)
      setDivfive(false)
      setDivsix(false)
      setDivseven(false)
    })
    two.addEventListener('click',function(){
      setDivone(false)
      setDivtwo(true)
      setDivthree(false)
      setDivfour(false)
      setDivfive(false)
      setDivsix(false)
      setDivseven(false)
    })
    three.addEventListener('click',function(){
      setDivone(false)
      setDivtwo(false)
      setDivthree(true)
      setDivfour(false)
      setDivfive(false)
      setDivsix(false)
      setDivseven(false)
    })
    four.addEventListener('click',function(){
      setDivone(false)
      setDivtwo(false)
      setDivthree(false)
      setDivfour(true)
      setDivfive(false)
      setDivsix(false)
      setDivseven(false)
    })
    five.addEventListener('click',function(){
      setDivone(false)
      setDivtwo(false)
      setDivthree(false)
      setDivfour(false)
      setDivfive(true)
      setDivsix(false)
      setDivseven(false)
    })

    six.addEventListener('click',function(){
      setDivone(false)
      setDivtwo(false)
      setDivthree(false)
      setDivfour(false)
      setDivfive(false)
      setDivsix(true)
      setDivseven(false)
    })
    seven.addEventListener('click',function(){
      setDivone(false)
      setDivtwo(false)
      setDivthree(false)
      setDivfour(false)
      setDivfive(false)
      setDivsix(false)
      setDivseven(true)
    })

    
  },[])

 

  const handleNext =()=>{
    setCount(count + 1)
    if (count == 0) {
      
      setSlideone(false)
      setSlidetwo(true)
    }else if(count==1){
      setSlideone(false)
      setSlidetwo(false)
      setSlidethree(true)
      
    }else if (count==2) {
      setSlideone(false)
      setSlidetwo(false)
      setSlidethree(false)
      setSlidefour(true)
    }else if (count == 3) {
      setCount(count-1)
      
      
      
    }
    
    
    
  }
  const handlePrev =()=>{
    setCount(count-1)
    if (count == 3) {
      setSlideone(false)
      setSlidetwo(false)
      setSlidethree(true)
      setSlidefour(false)
    }else if (count == 2) {
      setSlideone(false)
      setSlidetwo(true)
      setSlidethree(false)
      setSlidefour(false)
    }else if (count == 1) {

      setSlideone(true)
      setSlidetwo(false)
      setSlidethree(false)
      setSlidefour(false)
    }
    
    
    
  }
  


  return (
    <>

    {/* navbar part start */}

  <div className="md:hidden flex justify-between items-center p-[20px] bg-[#363636] ">
    <div>
      <Image
      src={next}
      width={50}
      height={50} 
      />
    </div>
    <div>
    <IoMenuOutline className={`text-[50px] text-white cursor-pointer ${nav ?'hidden' : 'block'}`} onClick={()=>setNav(true)} />
    <ImCross className={`text-[30px] text-white cursor-pointer ${nav ?'block' : 'hidden'}`} onClick={()=>setNav(false)}/>
    </div>
  </div>

    <nav className={`bg-[#363636] border-b-[1px] border-[#000]  navbar ${!nav ? 'hidden' : ''} md:block`}>
      <div className="container">
        <div className="nav_main md:flex justify-between items-center py-[30px] px-[20px] md:px-[0px]">
          <div>
            <ul className="text-[24px] md:flex gap-[50px] text-[#fff]  ">
              <li className="cursor-pointer py-[10px] md:py-[0]">
                <a className="flex gap-[10px] items-center">Home <IoIosArrowDown /></a>
              </li>
              <li className="cursor-pointer py-[10px] md:py-[0]">
                <a className="flex gap-[10px] items-center">Event <IoIosArrowDown /></a>
              </li>
              <li className="cursor-pointer py-[10px] md:py-[0]">
                <a className="flex gap-[10px] items-center">Contact <IoIosArrowDown /></a>
              </li>
              <li className="cursor-pointer py-[10px] md:py-[0]">
                <a className="flex gap-[10px] items-center">Blog <IoIosArrowDown /></a>
              </li>
            </ul>
          </div>
          <div className=" relative mt-[10px] md:mt-[0px]">
            <input className="focus:outline-none py-[10px] pl-[15px] pr-[50px] rounded-full " placeholder="Search"/>
            <FaSearch className="absolute top-[12px] right-[48%] md:right-[15px]  text-[20px] cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>

    {/* navbar part end */}



    {/* banner part start */}

    <section className="md:py-[130px] py-[50px] px-[10px] md:px-[0px] relative overflow-hidden ">
        <div className="bg-banner bg-cover bg-no-repeat bg-center h-[320px] absolute top-0 left-0 w-full z-[-1]"></div>
        <div className="container ">
          <div className="banner_main flex justify-between items-center  transition-all duration-300 group">
            <div className="item1 md:w-[300px] w-[125px] md:h-[300px] h-[125px] bg-[#C02424] cursor-pointer hover:scale-175 duration-200 "></div>
            <div className="item2 md:w-[260px] w-[100px] md:h-[260px] h-[100px] bg-[#146FE8] cursor-pointer hover:scale-175 duration-200"></div>
            <div className=" item3 md:w-[300px] w-[125px] md:h-[300px] h-[125px] bg-[#E76666] cursor-pointer hover:scale-175 duration-200"></div>
            <div className="item4 md:w-[260px] w-[100px] md:h-[260px] h-[100px]  bg-[#A0FCD9] cursor-pointer hover:scale-175 duration-200"></div>
          </div>
        </div>
      </section>

    {/* banner part end */}



    {/* photo part start  */}


    <section className="md:py-[50px] py-[30px]">
      <div className="container">
        <div className="photo_main md:flex items-center">
          <div className="md:w-1/2">
          <div className=" md:flex items-center gap-[50px] ">
          <div>
          <div className="h-[274px] w-[285px]  rounded-[39px] relative mx-auto md:mx-0">
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


          
          <div className="h-[210px] w-[220px]  rounded-[39px] relative md:mt-[50px] md:ml-[50px] my-[20px] md:my-[0px] mx-auto md:mx-l">
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
          <div className="h-[230px] w-[240px]  rounded-[39px] relative mx-auto md:mx-l">
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
          <div className="md:w-1/2 p-[10px] md:p-[0px]">
          <p className="md:text-[24px] py-[10px] md:py-[0px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore e.</p>
          <div className="text-center md:left">
          <button className="md:py-[10px] md:px-[25px] py-[5px] px-[15px] rounded-[15px] text-[#4000FF] border border-[#4000FF] hover:bg-[#4000FF] hover:text-white duration-300 mt-[20px] ">sign up</button>
          </div>
          </div>
        </div>
      </div>
    </section>


    {/* photo part end */}




    {/* Explor part start  */}

    <section className="md:py-[80px] ">
      <div className="container">
        <div className="explor_main md:flex items-center">
          <div className="md:w-1/2">
          <p className="md:text-[24px] md:pl-[30px] p-[15px] md:p-[0px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  qui officia deserunt mollit anim id est laborum.</p>
          <div className="flex justify-center">
          <button className="md:py-[10px] md:px-[25px] py-[5px] px-[15px]  rounded-[15px] text-[#4000FF] border border-[#4000FF] hover:bg-[#4000FF] hover:text-white duration-300 mt-[20px] ">Explore Now</button>
          </div>
          </div>
          <div  className="md:w-1/2 relative  h-[500px]  ">
          <div className="w-[395px] h-[395px] rounded-[20px]  absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-[4] bg-[#1F3B68] py-[30px] px-[45px] text-white">
            <div className="mb-[160px]">
            <h1 className="font-bold text-[36px] italic  ">Lorem ipsum</h1>
            <div className="flex items-center gap-[15px]">
              <div className="w-[20px] h-[20px] rounded-full ">
                <Image
                src={img4}
                width='100%'
                height='100%'
                />
              </div>
              <div>
                <p>Wade Warren</p>
              </div>
            </div>
            </div>
            <div className="bg-[#3F567D] p-[10px] rounded-[15px] border border-[#FFF]">
              <h2 className="text-[20px]">Lawrance Stroll</h2>
              <p className="text-[13px] mt-[10px]">Hegifueshho dhfsui foiehhsio</p>
            </div>
          </div>
          <div className="w-[370px] h-[370px] rounded-[20px]  absolute top-[50%] left-[55%] translate-y-[-50%] translate-x-[-50%] z-[3] bg-[#980FA7]"></div>
          <div className="w-[350px] h-[350px] rounded-[20px]  absolute top-[50%] left-[60%] translate-y-[-50%] translate-x-[-50%] z-[2] bg-[#31096A]"></div>
          </div>
        </div>
      </div>
    </section>

    {/* Explor part end */}


    {/* slider part start */}
    <section className=" overflow-x-hidden pt-[50px] relative" >
      <div className="slider_main">
        <div className="md:h-[150px] h-[100px]"></div>
        <div className=" bg-gradient-to-t from-[#6BE6A8] to-[#3C805D]">
          <div className="container">
          <div className="w-[430px] md:py-[150px] pt-[150px] md:pt-[0px] text-[#000000] mx-auto md:mx-0">
          <h1 className="text-[40px] font-bold">Overveiw</h1>
          <p className="text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          </div>
        </div>
      </div>
      <div className={`absolute top-0 duration-300 ${slideone ? ' md:right-[-15%] right-[-100%]' : 'md:right-[0%] right-[-60%]'} ${slidethree ? ' md:right-[20%] right-[-25%]' : ''} ${slidefour ? ' md:right-[30%] right-[80px]' : ''}`}>
      <div className="flex gap-[50px] ">
        <div className={`${slideone ? 'md:w-[328px] md:h-[426px] w-[250px] h-[300px] ' : 'md:w-[224px] md:h-[304px] w-[150px] h-[200px]'} bg-[#FF9A9A] slide slide1 duration-300`}></div>
        <div className={`${slidetwo ? 'md:w-[328px] md:h-[426px] w-[250px] h-[300px] ' : 'md:w-[224px] md:h-[304px] w-[150px] h-[200px]'} bg-[#CFAAFF] slide  slide2 duration-300 active`}></div>
        <div className={`${slidethree ? 'md:w-[328px] md:h-[426px] w-[250px] h-[300px] ' : 'md:w-[224px] md:h-[304px] w-[150px] h-[200px]'} bg-[#A0FCD9] slide slide3 duration-300`}></div>
        <div className={`${slidefour ? 'md:w-[328px] md:h-[426px] w-[250px] h-[300px] ' : 'md:w-[224px] md:h-[304px] w-[150px] h-[200px]'}  bg-[#FF9A9A] slide slide4 duration-300`}></div>
      </div>
      </div>
      <div className="flex gap-[15px] absolute right-[30px] md:top-[50%] top-[35%]">
        <button className={`h-[25px] w-[25px] rounded-full border-[2px] border-[#000] flex justify-center items-center prev ${count == 0 ? 'z-[-10]' : ''}`} onClick={handlePrev}><IoIosArrowBack /></button>
        <button className={`h-[25px] w-[25px] rounded-full border-[2px] border-[#000] flex justify-center items-center next ${count == 3 ? 'z-[-10]' : ''}`}onClick={handleNext}><IoIosArrowForward /></button>
      </div>
    </section>
    {/* slider part end */}

  {/* collection part start */}
  <section className="bg-collection bg-cover bg-no-repeat bg-center ">
    <div className="container">
      <div className="collection_main md:flex items-center p-[20px] md:p-[0px]">
        <div className="md:w-1/2  flex gap-[30px] py-[20px] px-[60px] md:px-[0px]">
        <div className="">
        <div className={`md:w-[408px] md:h-[408px] w-[200px] h-[200px] rounded-[30px] ${divone ? 'bg-[#2E4E3E]' : ''} ${divtwo?'bg-[#26DBDB]':''} ${divthree?'bg-[#B126DB]':'' } ${divfour?'bg-[#26DBDB]':''} ${divfive?'bg-[#2E4E3E]':''} ${divsix?'bg-[#26DBDB]':''} ${divseven?'bg-[#B126DB]':''} colordiv`}></div>
        <div className="flex justify-between mt-[30px]">
          <div className={`md:w-[120px] md:h-[120px] w-[60px] h-[60px] rounded-[15px] bg-[#2E4E3E] cursor-pointer five ${divfive ? 'outline outline-[#000] outline-4': ''} `}></div>
          <div className={`md:w-[120px] md:h-[120px] w-[60px] h-[60px] rounded-[15px] bg-[#26DBDB] cursor-pointer six ${divsix ? 'outline outline-[#000] outline-4': ''}`}></div>
          <div className={`md:w-[120px] md:h-[120px] w-[60px] h-[60px] rounded-[15px] bg-[#B126DB] cursor-pointer seven ${divseven ? 'outline outline-[#000] outline-4': ''}`}></div>
        </div>
        </div>
        <div className="flex flex-col md:gap-[25px] gap-[15px]">
        <div className={`md:w-[120px] md:h-[120px] w-[60px] h-[60px] rounded-[15px] bg-[#2E4E3E] ${divone ? 'outline outline-[#000] outline-4': ''} cursor-pointer one`}></div>
          <div className={`md:w-[120px] md:h-[120px] w-[60px] h-[60px] rounded-[15px] bg-[#26DBDB] cursor-pointer two ${divtwo ? 'outline outline-[#000] outline-4': ''}`}></div>
          <div className={`md:w-[120px] md:h-[120px] w-[60px] h-[60px] rounded-[15px] bg-[#B126DB] cursor-pointer three ${divthree ? 'outline outline-[#000] outline-4': ''}`}></div>
          <div className={`md:w-[120px] md:h-[120px] w-[60px] h-[60px] rounded-[15px] bg-[#26DBDB] cursor-pointer four ${divfour ? 'outline outline-[#000] outline-4': ''}`}></div>

        </div>
        </div>
        <div className="md:w-1/2">
        <div className="w-[430px]  text-[#000000] ">
          <h1 className="text-[40px] font-bold">Collection Featured</h1>
          <p className="text-[20px]">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tet ut labore et dolore magna aliqrit in  vol uptate velit esse cillumsunt in culpa</p>
          </div></div>
      </div>
    </div>
  </section>
  {/* collection part end */}



  {/* Discover part start */}


  <section className="py-[50px]">
    <div className="container">
      <div className="discomer_main p-[20px] md:p-[0px]">


        <div className="discover_header">
          <h1 className="text-[40px] font-bold">DISCOVER MORE</h1>
          <div className="discover_button flex justify-between md:items-center mt-[30px]">
          <div className=" flex gap-[15px] flex-wrap">
            <button className="py-[10px] px-[18px]  rounded-full bg-[#4000FF] text-white">All Categories</button>
            <button className="py-[10px] px-[18px] bg-[#E9E9E9] rounded-full">Art</button>
            <button className="py-[10px] px-[18px] bg-[#E9E9E9] rounded-full">Celebrities</button>
            <button className="py-[10px] px-[18px] bg-[#E9E9E9] rounded-full">Gaming</button>
            <button className="py-[10px] px-[18px] bg-[#E9E9E9] rounded-full">Sport</button>
            <button className="py-[10px] px-[18px] bg-[#E9E9E9] rounded-full">Sport</button>
            <button className="py-[10px] px-[18px] bg-[#E9E9E9] rounded-full">Music</button>
          </div>
          <div>
          <button className="py-[10px] px-[18px] bg-[#E9E9E9] rounded-full flex items-center gap-[5px] text-[#4000FF] text-[10px] md:text-[15px]"><IoFilterSharp /> All Filters</button>
          </div>
          </div>
        </div>




        <div className="discover_items py-[50px]">
          <div className=" md:flex justify-between mb-[40px]">
            <div className="w-[290px]  border boder-[2px] rounded-[20px] p-[15px] hover:text-[#9747FF] duration-300 cursor-pointer mx-auto md:mx-0 my-[20px] md:my-[0px]">
              <div className="w-[260px] h-[210px] rounded-[20px] bg-[#2E4E3E] "></div>
              <div className=" relative mt-[-10px]">
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[10px] z-[4]">
                <Image
                src={img5}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[25px] z-[3]">
                <Image
                src={img6}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[40px] z-[2]">
                <Image
                src={img7}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[55px] z-[1]">
                <Image
                src={img8}
                width='100%'
                height='100%'
                />
                </div>
              </div>
              <div className="py-[30px]">
                <h5 className="text-[20px] font-bold">Art stuff</h5>
                <div className="flex justify-between py-[25px]">
                  <span>598 TK</span>
                  <span>1 of 09</span>
                </div>
                <div className="flex justify-between ">
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                </div>
              </div>
            </div>
            <div className="w-[290px]  border boder-[2px] rounded-[20px] p-[15px] hover:text-[#9747FF] duration-300 cursor-pointer mx-auto md:mx-0 my-[15px] md: my-[0px] my-[20px] md:my-[0px] mx-auto md:mx-0">
              <div className="w-[260px] h-[210px] rounded-[20px] bg-[#B126DB] "></div>
              <div className=" relative mt-[-10px]">
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[10px] z-[4]">
                <Image
                src={img5}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[25px] z-[3]">
                <Image
                src={img6}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[40px] z-[2]">
                <Image
                src={img7}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[55px] z-[1]">
                <Image
                src={img8}
                width='100%'
                height='100%'
                />
                </div>
              </div>
              <div className="py-[30px]">
                <h5 className="text-[20px] font-bold">Art stuff</h5>
                <div className="flex justify-between py-[25px]">
                  <span>598 TK</span>
                  <span>1 of 09</span>
                </div>
                <div className="flex justify-between ">
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                </div>
              </div>
            </div>
            <div className="w-[290px]  border boder-[2px] rounded-[20px] p-[15px] hover:text-[#9747FF] duration-300 cursor-pointer mx-auto md:mx-0 my-[20px] md:my-[0px]">
              <div className="w-[260px] h-[210px] rounded-[20px] bg-[#26DBDB] "></div>
              <div className=" relative mt-[-10px]">
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[10px] z-[4]">
                <Image
                src={img5}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[25px] z-[3]">
                <Image
                src={img6}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[40px] z-[2]">
                <Image
                src={img7}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[55px] z-[1]">
                <Image
                src={img8}
                width='100%'
                height='100%'
                />
                </div>
              </div>
              <div className="py-[30px]">
                <h5 className="text-[20px] font-bold">Art stuff</h5>
                <div className="flex justify-between py-[25px]">
                  <span>598 TK</span>
                  <span>1 of 09</span>
                </div>
                <div className="flex justify-between ">
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                </div>
              </div>
            </div>
            <div className="w-[290px]  border boder-[2px] rounded-[20px] p-[15px] hover:text-[#9747FF] duration-300 cursor-pointer mx-auto md:mx-0 my-[20px] md:my-[0px] mx-auto md:mx-0">
              <div className="w-[260px] h-[210px] rounded-[20px] bg-[#2E4E3E] "></div>
              <div className=" relative mt-[-10px]">
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[10px] z-[4]">
                <Image
                src={img5}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[25px] z-[3]">
                <Image
                src={img6}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[40px] z-[2]">
                <Image
                src={img7}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[55px] z-[1]">
                <Image
                src={img8}
                width='100%'
                height='100%'
                />
                </div>
              </div>
              <div className="py-[30px]">
                <h5 className="text-[20px] font-bold">Art stuff</h5>
                <div className="flex justify-between py-[25px]">
                  <span>598 TK</span>
                  <span>1 of 09</span>
                </div>
                <div className="flex justify-between ">
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex justify-between">
            <div className="w-[290px]  border boder-[2px] rounded-[20px] p-[15px] hover:text-[#9747FF] duration-300 cursor-pointer mx-auto md:mx-0 my-[20px] md:my-[0px]">
              <div className="w-[260px] h-[210px] rounded-[20px] bg-[#2E4E3E] "></div>
              <div className=" relative mt-[-10px]">
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[10px] z-[4]">
                <Image
                src={img5}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[25px] z-[3]">
                <Image
                src={img6}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[40px] z-[2]">
                <Image
                src={img7}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[55px] z-[1]">
                <Image
                src={img8}
                width='100%'
                height='100%'
                />
                </div>
              </div>
              <div className="py-[30px]">
                <h5 className="text-[20px] font-bold">Art stuff</h5>
                <div className="flex justify-between py-[25px]">
                  <span>598 TK</span>
                  <span>1 of 09</span>
                </div>
                <div className="flex justify-between ">
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                </div>
              </div>
            </div>
            <div className="w-[290px]  border boder-[2px] rounded-[20px] p-[15px] hover:text-[#9747FF] duration-300 cursor-pointer mx-auto md:mx-0">
              <div className="w-[260px] h-[210px] rounded-[20px] bg-[#B126DB] "></div>
              <div className=" relative mt-[-10px]">
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[10px] z-[4]">
                <Image
                src={img5}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[25px] z-[3]">
                <Image
                src={img6}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[40px] z-[2]">
                <Image
                src={img7}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[55px] z-[1]">
                <Image
                src={img8}
                width='100%'
                height='100%'
                />
                </div>
              </div>
              <div className="py-[30px]">
                <h5 className="text-[20px] font-bold">Art stuff</h5>
                <div className="flex justify-between py-[25px]">
                  <span>598 TK</span>
                  <span>1 of 09</span>
                </div>
                <div className="flex justify-between ">
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                </div>
              </div>
            </div>
            <div className="w-[290px]  border boder-[2px] rounded-[20px] p-[15px] hover:text-[#9747FF] duration-300 cursor-pointer mx-auto md:mx-0 my-[20px] md:my-[0px]">
              <div className="w-[260px] h-[210px] rounded-[20px] bg-[#26DBDB] "></div>
              <div className=" relative mt-[-10px]">
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[10px] z-[4]">
                <Image
                src={img5}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[25px] z-[3]">
                <Image
                src={img6}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[40px] z-[2]">
                <Image
                src={img7}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[55px] z-[1]">
                <Image
                src={img8}
                width='100%'
                height='100%'
                />
                </div>
              </div>
              <div className="py-[30px]">
                <h5 className="text-[20px] font-bold">Art stuff</h5>
                <div className="flex justify-between py-[25px]">
                  <span>598 TK</span>
                  <span>1 of 09</span>
                </div>
                <div className="flex justify-between ">
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                </div>
              </div>
            </div>
            <div className="w-[290px]  border boder-[2px] rounded-[20px] p-[15px] hover:text-[#9747FF] duration-300 cursor-pointer mx-auto md:mx-0">
              <div className="w-[260px] h-[210px] rounded-[20px] bg-[#2E4E3E] "></div>
              <div className=" relative mt-[-10px]">
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[10px] z-[4]">
                <Image
                src={img5}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[25px] z-[3]">
                <Image
                src={img6}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[40px] z-[2]">
                <Image
                src={img7}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[55px] z-[1]">
                <Image
                src={img8}
                width='100%'
                height='100%'
                />
                </div>
              </div>
              <div className="py-[30px]">
                <h5 className="text-[20px] font-bold">Art stuff</h5>
                <div className="flex justify-between py-[25px]">
                  <span>598 TK</span>
                  <span>1 of 09</span>
                </div>
                <div className="flex justify-between ">
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>




  {/* Discover part end */}






    </>
  );
}



