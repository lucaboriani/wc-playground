<template>
    <div ref="app" class="flex grow pr-2 h-96">
    </div>
</template>
<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import {initTrail, start, stop, destroy} from './mouseTrail'
import IntersectionHandler from '../../../scripts/observer/IntersectionHandler'

const app = ref(null)

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

onMounted(()=>{
    console.log(app.value)
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.01
    }

    IntersectionHandler.init(options)
    
    IntersectionHandler.observe(app.value, handleAppIntersection)
    initTrail(app.value) 
    document.addEventListener("visibilitychange", handleVisibilityChange);
})

onUnmounted(()=>{
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    IntersectionHandler.unobserve(app.current)
    destroy()
})

</script>