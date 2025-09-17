// export default function Home() {
//   return <>
//     <h1>Saranda Website</h1>
//     <p>Comming Soon</p>
//   </>;
// }

"use client";

export default function HeroSection() {
    return (
        <div
            className="min-h-screen w-screen relative overflow-hidden"
            style={{
                backgroundImage: 'url("/images/lush-forest-back.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            
            <div
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                    backgroundImage: 'url("/images/lush-forest-front.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />
        </div>
    );
}
