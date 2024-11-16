import React, { useState } from 'react'
import { motion } from 'framer-motion';
export default function Chips({name,label}) {

  const [icon,setIcon]=useState(label)
  return (
    <motion.div 
    initial={{ x: 0 }}
      whileHover={{
        x: 10, // Amount of slide on hover
        transition: {
          type: "spring",
          stiffness: 300, // Controls the "bounciness" of the elastic effect
          damping: 20, // Controls how quickly the animation settles
        },
      }}
    className='flex justify-between px-8 py-3 items-center cursor-pointer'>
            <div className='flex items-center gap-3 font-semibold'>
            {svgs[name]}
              {icon}
            </div>
            
    </motion.div>
  )
}

const svgs={
    
  google:<svg width="15px" height="15px" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></g></svg>,
  "For Job Seekers":<svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><path id="search-a" d="M11.71 0.57C9.47 1.29 8 3.05 7.3 5.86 6.25 10.08 4.95 10.62 0.72 9.12 2.24 11.93 5.32 13.05 7.3 13.05c1.98 0 7.11-2.76 6.52-7.99-.51-1.53-1.22-3.03-2.11-4.48z"></path><path id="search-c" d="M14.18 12.77l5.53 5.54c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0l-5.53-5.54c-1.34 1.04-3.03 1.67-4.84 1.67C3.55 15.84 0 12.29 0 7.92S3.55 0 7.92 0s7.92 3.55 7.92 7.92c0 1.83-.62 3.51-1.66 4.85zM7.92 13.86c3.28 0 5.94-2.66 5.94-5.94S11.2 1.98 7.92 1.98C4.64 1.98 1.98 4.64 1.98 7.92s2.66 5.94 5.94 5.94z"></path></defs><g fill="none" fillRule="evenodd" transform="translate(2 2)"><g transform="translate(1 2)"><mask id="search-b" fill="#fff"><use xlinkHref="#search-a"></use></mask><use fill="#D8D8D8" xlinkHref="#search-a"></use><g fill="#FFA0A0" mask="url(#search-b)"><rect width="24" height="24" transform="translate(-3 -4)"></rect></g></g><mask id="search-d" fill="#fff"><use xlinkHref="#search-c"></use></mask><use fill="#000" fillRule="nonzero" xlinkHref="#search-c"></use><g fill="#7600FF" mask="url(#search-d)"><rect width="24" height="24" transform="translate(-2 -2)"></rect></g></g></g></svg>,
  "For Recruiters":<svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><path id="flag-a" d="M11.72 0h3.55l-3.9 5 3.9 6H12l-4-6 3.72-5zM0 0h3v11H0V0z"></path><path id="flag-c" d="M1 0h16c.89 0 1.34 1.08.7 1.71l-3.47 4.44 3.54 5.2c.55.65.09 1.65-.85 1.65H2v7c0 .55-.45 1-1 1s-1-.45-1-1V1C0 .45.45 0 1 0zm1 2v9h12.85l-2.75-4.27c-.34-.4-.31-1.02.08-1.35l2.4-2.35H2z"></path></defs><g fill="none" fillRule="evenodd" transform="translate(3 2)"><g transform="translate(1 1)"><mask id="flag-b" fill="#fff"><use xlinkHref="#flag-a"></use></mask><use fill="#D8D8D8" xlinkHref="#flag-a"></use><g fill="#FFA0A0" mask="url(#flag-b)"><rect width="24" height="24" transform="translate(-4 -3)"></rect></g></g><mask id="flag-d" fill="#fff"><use xlinkHref="#flag-c"></use></mask><use fill="#000" fillRule="nonzero" xlinkHref="#flag-c"></use><g fill="#7600FF" mask="url(#flag-d)"><rect width="24" height="24" transform="translate(-3 -2)"></rect></g></g></g></svg>,
  "For Mentors":<svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><polygon id="thunder-a" points="2.977 8.161 8.269 9.241 .218 18.519 1.882 19.604 12.128 8.161 5.893 6.809 8.821 .998 7.387 .185"></polygon><path id="thunder-c" d="M10.2577032,5.88540233 L13.3683613,6.4682972 C14.894984,6.75436548 15.5271239,8.59550311 14.4981974,9.75899885 L5.15432684,20.3249168 C3.62851509,22.0502834 0.875362777,20.253925 1.83997631,18.1623916 L4.9166534,11.4913543 L2.63023839,11.061225 C1.27422934,10.8061273 0.577759703,9.28698125 1.26946216,8.09308716 L5.3804761,0.997384038 C5.7381351,0.380056504 6.3975623,0 7.11101395,0 L10.1949866,0 C11.7353835,0 12.697534,1.66821829 11.9261411,3.00155082 L10.2577032,5.88540233 Z M10.1949866,2 L7.11101395,2 L3,9.09570312 L7.80692226,10 L3.65612945,19 L13,8.43408203 L7.11101395,7.33056641 L10.1949866,2 Z"></path></defs><g fill="none" fillRule="evenodd" transform="translate(4 2)"><g transform="translate(2)"><mask id="thunder-b" fill="#ffffff"><use xlinkHref="#thunder-a"></use></mask><use fill="#D8D8D8" xlinkHref="#thunder-a"></use><g fill="#FFA0A0" mask="url(#thunder-b)"><rect width="24" height="24" transform="translate(-6 -2)"></rect></g></g><mask id="thunder-d" fill="#ffffff"><use xlinkHref="#thunder-c"></use></mask><use fill="#000000" fillRule="nonzero" xlinkHref="#thunder-c"></use><g fill="#7600FF" mask="url(#thunder-d)"><rect width="24" height="24" transform="translate(-4 -2)"></rect></g></g></g></svg>,
}