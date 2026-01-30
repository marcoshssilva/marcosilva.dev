export default function Background(props: Record<string, any>) {
  return <div className={'background'}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/images/headers/Laptop.png"
         className="block fixed bottom-0 left-0 h-auto md:w-[70%] -z-10"
         alt="laptop"
         loading="lazy"
         decoding="async" />

    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/images/headers/me.png"
         className="fixed bottom-0 right-0 h-auto w-[130vh] sm:w-[80vw] sm:translate-x-[8rem] md:w-[60vw] 2xl:w-[40vw] translate-x-[150px] md:translate-x-0 -z-10"
         alt="myself render as carton"
         loading="lazy"
         decoding="async" />
  </div>
}
