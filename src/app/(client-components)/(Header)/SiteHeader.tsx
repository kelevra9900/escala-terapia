'use client'

import React,{useEffect,useRef,useState} from 'react'

import {PathName} from '@/routers/types'
import Header from './Header'
import {usePathname} from 'next/navigation'
import {useThemeMode} from '@/utils/useThemeMode'

export type SiteHeaders = 'Header 1' | 'Header 2' | 'Header 3'
export type ThemeDir = 'ltr' | 'rtl'

let OPTIONS = {
	root: null,
	rootMargin: '0px',
	threshold: 1.0,
}
let OBSERVER: IntersectionObserver | null = null

const PAGES_HIDE_HEADER_BORDER: PathName[] = [
	'/',
	'/',
	'/',
	'/',
]

const SiteHeader = () => {
	const anchorRef = useRef<HTMLDivElement>(null)
	const [isTopOfPage,setIsTopOfPage] = useState(true)

	useEffect(() => {
		setIsTopOfPage(window.pageYOffset < 5)
	},[])
	//
	useThemeMode()
	//
	const pathname = usePathname()

	const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			setIsTopOfPage(entry.isIntersecting)
		})
	}

	useEffect(() => {
		// disconnect the observer
		// observer for show the LINE bellow header
		if (!PAGES_HIDE_HEADER_BORDER.includes(pathname as PathName)) {
			OBSERVER && OBSERVER.disconnect()
			OBSERVER = null
			return
		}
		if (!OBSERVER) {
			OBSERVER = new IntersectionObserver(intersectionCallback,OPTIONS)
			anchorRef.current && OBSERVER.observe(anchorRef.current)
		}
	},[pathname])



	return (
		<>
			<Header />
			<div ref={anchorRef} className="invisible absolute h-1"></div>
		</>
	)
}

export default SiteHeader
