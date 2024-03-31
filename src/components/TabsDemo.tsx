import Image from "next/image";
import { Tabs } from "./ui/tabs";

interface TabProps {
  title: string;
  value: string;
  content: JSX.Element;
  image: string;
}

export function TabsDemo() {
  const tabs: TabProps[] = [
    {
      title: "Innovation",
      value: "Innovation",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="flex items-center justify-between">
          <p className="mr-4">Product Tab</p>
          <button className="px-6 py-3 bg-white text-gray-700 rounded-md shadow-md hover:bg-purple-100 hover:text-blue-800 transition duration-300 ">Get Now</button>
        </div>
        <p className="pt-10 pb-10">Discover innovative solutions to complex problems and unlock new possibilities for your business.</p>
          <DummyContent image="/courses/blues.jpg" />
      </div>
      ),
      image: "/innovation.jpg",
    },
    {
      title: "Strategy",
      value: "Strategy",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="flex items-center justify-between">
          <p className="mr-4">Product Tab</p>
          <button className="px-6 py-3 bg-white text-gray-700 rounded-md shadow-md hover:bg-purple-100 hover:text-blue-800 transition duration-300 ">Get Now</button>
        </div>
        <p className="pt-10 pb-10">Discover innovative solutions to complex problems and unlock new possibilities for your business.</p>
          <DummyContent image="/courses/blues.jpg" />
      </div>
      ),
      image: "/strategy.jpg",
    },
    {
      title: "Training",
      value: "Training",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="flex items-center justify-between">
          <p className="mr-4">Product Tab</p>
          <button className="px-6 py-3 bg-white text-gray-700 rounded-md shadow-md hover:bg-purple-100 hover:text-blue-800 transition duration-300 ">Get Now</button>
        </div>
        <p className="pt-10 pb-10">Discover innovative solutions to complex problems and unlock new possibilities for your business.</p>
          <DummyContent image="/courses/blues.jpg" />
      </div>
      ),
      image: "/strategy.jpg",
    },
    {
      title: "Quality",
      value: "Quality",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="flex items-center justify-between">
          <p className="mr-4">Product Tab</p>
          <button className="px-6 py-3 bg-white text-gray-700 rounded-md shadow-md hover:bg-purple-100 hover:text-blue-800 transition duration-300 ">Get Now</button>
        </div>
        <p className="pt-10 pb-10">Discover innovative solutions to complex problems and unlock new possibilities for your business.</p>
          <DummyContent image="/courses/blues.jpg" />
      </div>
      ),
      image: "/strategy.jpg",
    },
    {
      title: "Marketing",
      value: "Marketing",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="flex items-center justify-between">
          <p className="mr-4">Product Tab</p>
          <button className="px-6 py-3 bg-white text-gray-700 rounded-md shadow-md hover:bg-purple-100 hover:text-blue-800 transition duration-300 ">Get Now</button>
        </div>
        <p className="pt-10 pb-10">Discover innovative solutions to complex problems and unlock new possibilities for your business.</p>
          <DummyContent image="/courses/blues.jpg" />
      </div>
      ),
      image: "/strategy.jpg",
    },
    // Add similar objects for other tabs
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 ">
      <h1 className='mt-2 mb-2 text-3xl tracking-tight leading-8 font-extrabold text-white sm:text-4xl '>Products And Services </h1>
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({ image }: { image: string }) => {
  return (
    <Image
      src={image}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover h-48 w-100 rounded-xl mx-auto"
    />
  );
};
