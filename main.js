
const proxy = {skew: 0},
skewSetter = gsap.quickSetter(".boxImage","skewY","deg"),
clamp = gsap.utils.clamp(-20,20);

// skewSetter(-5.369)

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    onUpdate:(self) =>{
        let skew = clamp(self.getVelocity() / 300);

        // console.log(skew) 
        
        if(Math.abs(skew) > Math.abs(proxy.skew)){
            proxy.skew = skew;
            
            
            gsap.to(proxy, 
            {skew: 0,
            duration: .8,
            overwrite: true,
            ease: "power3",
            onUpdate: () => {
                skewSetter(proxy.skew);
            }
            })

        }
    },
})
// skewSetter(20)

// gsap.set(".boxImage",{transformOrigin: "left center",});