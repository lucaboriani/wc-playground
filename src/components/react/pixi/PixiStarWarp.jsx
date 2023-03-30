import { useEffect, useRef } from "react";
import { initWarp, start, stop, destroy } from "./warpApp";
import IntersectionHandler from '../../../scripts/observer/IntersectionHandler'
const PixiStarWarp = () => {
    const app = useRef(null);
    const handleAppIntersection = (entry) => {
        console.log('handleAppIntersection')
        const { isIntersecting } = entry
        if(isIntersecting){
            start()
        } else {
            stop()
        }
    }
    const handleVisibilityChange = () => {
        console.log('handleVisibilityChange')
        if (document.visibilityState === "visible") {
            const rect = app.current.getBoundingClientRect()
            const isVisible = (rect.top + window.innerHeight) > 0 
            if(isVisible){
                start()
            }
        } else {
            stop()
        }
    }

    useEffect(() => {
        const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.01
		}

		IntersectionHandler.init(options) 
		IntersectionHandler.observe(app.current, handleAppIntersection)
        initWarp(app.current)
        document.addEventListener("visibilitychange", handleVisibilityChange);
        
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            IntersectionHandler.unobserve(app.current)
            destroy()
        }
    }, [])
  
  
    return (
        <div ref={app} className="flex grow pr-2">
        </div>
    )
}
export default PixiStarWarp

