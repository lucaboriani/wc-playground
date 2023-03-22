import { useEffect, useRef } from "react";
import { initWarp, start, stop } from "./warpApp";
import IntersectionHandler from '../../../scripts/observer/IntersectionHandler'
const PixiStarWarp = () => {
    const app = useRef(null);
    const handleAppIntersection = (entry) => {
        const { isIntersecting } = entry
        if(isIntersecting){
            start()
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
        document.addEventListener("visibilitychange", () => {
			if (document.visibilityState === "visible") {
				const isVisible = (app.current.getBoundingClientRect().top + window.innerHeight) > 0 
				if(isVisible){
					start()
				}
			} else {
				stop()
			}
		});
    }, [])
  
  
    return (
        <div ref={app} className="flex grow pr-2">
        </div>
    )
}
export default PixiStarWarp

