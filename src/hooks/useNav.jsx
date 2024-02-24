function useNav(navRef, bgRef) {
    console.log()
    navRef.current.classList.toggle("-translate-y-[100%]")
    bgRef.current.classList.toggle("-translate-y-[100%]")
    navRef.current.classList.toggle("opacity-0")
    navRef.current.classList.toggle("pointer-events-none")
}

export default useNav