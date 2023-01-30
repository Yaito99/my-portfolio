import { useContext, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { mainContext } from '../contexts/main'


const links = ['Home','About','Projects','Techs','','Contact']

const Navbar = ({rerun}:{rerun?:boolean}) => {
	const { navbarId , setNavbarId , loading} = useContext(mainContext)
	const [ drawer , setDrawer] = useState<Boolean>(false)
	const route = useRouter()
	return (
		<div className={` ${(loading === 0 || loading === 2 || navbarId === 5) ? '-top-16' :'top-0'} w-full flex justify-center items-center bg-transparent fixed z-50 transition-[top] duration-500 `}>
			<nav className="navbar screen-optimizer">
				<div className="flex flex-1 md:gap-1 lg:gap-2 w-8/12">
					<div className={`flex items-center gap-2 ${route.pathname == "/" ? "" : "lg:hidden"}`}>
						<span className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip="Yahya Abo-Dahab">
							<div className="flex-none items-center">
								<Link href={'/'}>
									<a>
										<Image alt="logo" src='/logo-1.png' height={35} width={45} className="nav-logo cursor-pointer" />
									</a>
								</Link>
							</div>
						</span>
					</div>				
					<span onClick={()=>setDrawer(true)} className="ml-auto tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip="Menu">
						<label htmlFor="drawer" className='lg:hidden btn btn-square btn-ghost drawer-button '>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current md:h-12 md:w-12"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
						</label>
					</span>					
				</div>
				<div className="hidden flex-0 lg:flex w-4/12 lg:justify-around">
						{
							links.map((lk,index) =>(
								navbarId === index ? 
								lk &&(
								<div key={index} className='hover:cursor-pointer text-crush uppercase tracking-widest font-bold transition  '>{lk}</div>)
								: lk &&(
								<div onClick={()=>setNavbarId(index)} key={index} className='hover:cursor-pointer text-extraA hover:text-crush uppercase tracking-widest font-medium transition'>{lk}</div>
								)
							))
						}
				</div>
			</nav>
			{/* <nav className={`${drawer ? 'z-[1000]' : '-z-50'} h-[200vh] w-screen lg:hidden fixed overflow-hidden `}>
				<div onClick={()=>setDrawer(false)}  className={`${drawer ? 'opacity-70' : 'opacity-0'} transition-opacity h-full w-full bg-black absolute -z-50`}></div>
				<div className={`${drawer ? '-translate-x-0' : 'translate-x-full'}  h-full w-8/12 transition-transform duration-300 bg-main absolute top-0 right-0 z-50`}>
					<div className='w-full h-20 '>
					<label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
					</div>
					<div className="hidden flex-0 lg:flex w-4/12 lg:justify-around">
						{
							links.map((lk,index) =>(
								navbarId === index ? 
								lk &&(
								<div key={index} className='hover:cursor-pointer text-crush uppercase tracking-widest font-bold transition  '>{lk}</div>)
								: lk &&(
								<div onClick={()=>setNavbarId(index)} key={index} className='hover:cursor-pointer text-extraA hover:text-crush uppercase tracking-widest font-medium transition'>{lk}</div>
								)
							))
						}
				</div>
				</div>

			</nav> */}
		</div>
	)
}




export default Navbar


