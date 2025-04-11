"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme  } from "@/app/ThemeProvider";

export default function ScrollProgressSmall() {
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();
  
 
  const width = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"], {
    clamp: true 
  });
  return (
    <div className="h-[0.2px] w-[30rem] lg:w-[90rem] text-center ">


     
      <div className="mx-auto w-full text-center flex flex-col justify-center ">
        
        
        
        <div className={`h-[1px] black-bg rounded-full text-center transition-colors duration-300 ${theme === 'dark' ? 'dark' : 'light'}`}>
         
          <motion.div
            style={{ width }}
            className="h-full bg-[#C438BA] rounded-full"
          />
        </div>

        
      </div>

      
    </div>
  );
}