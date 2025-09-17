export default function KnowUsLayout({ children }) {
    return (
        <div className="w-screen h-auto flex-1 bg-primary flex flex-col items-center justify-center text-center p-4 relative"
            style={{
                backgroundImage: 'url("/images/mist-forest1.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            {children}
        </div>
    );
}