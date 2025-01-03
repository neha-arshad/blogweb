import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import About from "./About/page";
import Contact from "./Contact/page";

export default function Home() {
  return (
    <>
      <main>
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
            <h1 className="text-3xl leading-snug font-poppins text-gray-800 dark:text-gray-200 md:text-4xl">
              The <br /> <span className="font-semibold"> Future Of Tech</span>
              <br className="hidden lg:block" />
              <span className="font-semibold underline decoration-primary"></span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Technology is reshaping the way we live, work, and connect with
              the world.
              <br className="hidden lg:block" />
              Stay ahead of the curve as we explore the trends, challenges, and
              opportunities defining the next era of technology.
            </p>
            <Link href={"/Blog"}>
              <Button
                className="mx-1 text-xs mt-5 text-black bg-gradient-to-r from-blue-100 to-purple-200 hover:from-purple-500 hover:to-blue-500"
                variant="outline"
              >
                Explore Blog
              </Button>
            </Link>
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <Image
              width={500}
              height={500}
              src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
              alt="Tailwind CSS components"
              className="w-full h-full max-w-md mx-auto"
            />
          </div>
        </section>

        <section className="py-12 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <About />
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-roboto uppercase text-gray-800">
                Blogs
              </h2>
              <p className="mt-4 text-base text-gray-500">
                Check out our most popular blog posts
              </p>
            </div>
            <div className="flex flex-wrap justify-center">
              {/* Blog 1 */}
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                  <Image
                    src="/Nextjs.png"
                    alt="Blog 1"
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Blog 1
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      A brief description of the blog post goes here. It should
                      be engaging and informative.
                    </p>
                    <Link href={"/Blog"}>
                      <Button
                        className="mx-1 text-xs mt-5 text-black bg-gradient-to-r from-blue-100 to-purple-200 hover:from-purple-500 hover:to-blue-500"
                        variant="outline"
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Blog 2 */}
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                  <Image
                    src="/python.webp"
                    alt="Blog 2"
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Blog 2
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      A brief description of the blog post goes here. It should
                      be engaging and informative.
                    </p>
                    <Link href={"/Blog"}>
                      <Button
                        className="mx-1 text-xs mt-5 text-black bg-gradient-to-r from-blue-100 to-purple-200 hover:from-purple-500 hover:to-blue-500"
                        variant="outline"
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Blog 3 */}
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                  <Image
                    src="/agenticai.webp"
                    alt="Blog 3"
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Blog 3
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      A brief description of the blog post goes here. It should
                      be engaging and informative.
                    </p>
                    <Link href={"/Blog"}>
                      <Button
                        className="mx-1 text-xs mt-5 text-black bg-gradient-to-r from-blue-100 to-purple-200 hover:from-purple-500 hover:to-blue-500"
                        variant="outline"
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
}
