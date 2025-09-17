import CouncilSection from "./Council-section";

const RCConfig = {
    heading: "Lower House Council/Regional Co-ordinators",
    members:
        [
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
        ]
}

const WebOpsConfig = {
    heading: "WebOps",
    members:
        [
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
        ]
}

export default function LHCSection() {
    return (
        <div className="w-full min-h-screen lg:min-h-fit max-w-7xl flex flex-col justify-start lg:justify-center items-center p-4 sm:p-6 lg:p-8 mt-6 sm:mt-8 lg:mt-10 mx-auto mb-6 sm:mb-8 lg:mb-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[35px] font-bold mb-6 sm:mb-8 lg:mb-10 text-neutral-dark text-center leading-tight">
                Lower House Council
            </h1>
            
            <div className="w-full space-y-6 sm:space-y-8 lg:space-y-10">
                <CouncilSection {...RCConfig} />
                <CouncilSection {...WebOpsConfig} />
            </div>
        </div>
    );
}

