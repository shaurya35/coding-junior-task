import Image from "next/image";

import Menu from "@/components/ui/Menu";
import Heart from "@/components/ui/Heart";
import ShoppingCart from "@/components/ui/ShoppingCart";
import Bell from "@/components/ui/Bell";

import Left from "@/components/ui/Left";
import Up from "@/components/ui/Up";
import Down from "@/components/ui/Down";

import Play from "@/components/ui/Play";
import Share from "@/components/ui/Share";
import Dots from "@/components/ui/Dots";

import File from "@/components/ui/File";
import Folder from "@/components/ui/Folder";
import SmartPhone from "@/components/ui/SmartPhone";

import Star from "@/components/ui/Star";

import blender4 from "../../public/blender4.jpg";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center bg-black-custom h-16 text-white-custom">
        <div className="flex flex-row ">
          <div className="h-16 flex justify-center items-center pl-3">
            <Menu />
          </div>
          <div className="h-16 text-xl font-medium pt-4 pl-2">Quantum</div>
        </div>
        <div className="flex flex-row ">
          <div className="pr-3">
            <Heart />
          </div>
          <div className="pr-3">
            <ShoppingCart />
          </div>
          <div className="pr-7">
            <Bell />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/6  bg-black-custom text-gray-400 h-[100vh]">
          <div className="flex pt-5 pl-2">
            <div>
              <Left />
            </div>
            <div className="text-sm">Back to courses</div>
          </div>
          <div className="pl-5 py-5">
            <div className="text-xs">Course</div>
            <div className="text-base font-medium text-white-custom">
              Blender 3D Fundamentals
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center pl-5 pr-6 text-sm text-white-custom">
              <div>Course introduction</div>
              <div>
                <Up />
              </div>
            </div>
            <div className="flex pl-5 pr-6 pt-3 text-sm text-blue-400">
              <div className="border rounded-full border-blue-400 w-5 h-5 flex items-center justify-center">
                1
              </div>
              <div className="pl-3">Introduction</div>
            </div>
            <div className="flex pl-5 pr-6 pt-3 text-sm text-white-custom">
              <div className="border rounded-full border-gray-400 w-5 h-5 flex items-center justify-center">
                2
              </div>
              <div className="pl-3">Downloading Blender</div>
            </div>
            <div className="flex pl-5 pr-6 pt-3 text-sm text-white-custom">
              <div className="border rounded-full border-gray-400 w-5 h-5 flex items-center justify-center">
                3
              </div>
              <div className="pl-3">Settings and Preferences</div>
            </div>
            <div className="flex pl-5 pr-6 pt-3 text-sm text-white-custom">
              <div className="border rounded-full border-gray-400 w-5 h-5 flex items-center justify-center">
                4
              </div>
              <div className="pl-3">Blender Interface</div>
            </div>
            <div className="flex justify-between items-center pl-5 pr-6 pt-5 text-sm">
              <div>Basics of Blender 3D</div>
              <div>
                <Down />
              </div>
            </div>
            <div className="flex justify-between items-center pl-5 pr-6 pt-5 text-sm">
              <div>Mesh Modelling</div>
              <div>
                <Down />
              </div>
            </div>
            <div className="flex justify-between items-center pl-5 pr-6 pt-5 text-sm">
              <div>Mesh Editing Operations</div>
              <div>
                <Down />
              </div>
            </div>
            <div className="flex justify-between items-center pl-5 pr-6 pt-5 text-sm">
              <div>Most Common Modifiers</div>
              <div>
                <Down />
              </div>
            </div>
            <div className="flex justify-between items-center pl-5 pr-6 pt-5 text-sm">
              <div>Orthographic References</div>
              <div>
                <Down />
              </div>
            </div>
            <div className="flex justify-between items-center pl-5 pr-6 pt-5 text-sm">
              <div>Sculpting</div>
              <div>
                <Down />
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 bg-black-custom ">
          <div className="bg-white-custom h-full border-l border-t rounded-tl-[50px] border-black-custom flex ">
            <div className="w-4/6 flex flex-col">
              <div className="pt-6 relative pl-6">
                <Image
                  src={blender4}
                  alt="Panel Image"
                  className="w-[900px] h-[300px] border border-white-custom rounded-[40px]"
                  layout="intrinsic"
                />
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none pr-20">
                  <div className="bg-blue-300 w-10 h-10 rounded-full flex justify-center items-center">
                    <Play />
                  </div>
                </div>
              </div>

              <div className="flex justify-start items-center pt-4">
                <div className="pl-8 ">
                  <div className="bg-black-custom w-10 h-10 rounded-full flex justify-center items-center text-white-custom">
                    <Play />
                  </div>
                </div>
                <div className="pl-3">
                  <div className="text-base font-medium">Ryan Curtis</div>
                  <div className="text-sm text-gray-500">Publisher</div>
                </div>
                <div className="flex pl-4 justify-center items-center">
                  <div>
                    <Heart />
                  </div>
                  <div className="font-medium pl-1">982</div>
                </div>
                <div className="flex pl-4">
                  <div>
                    <Share />
                  </div>
                  <div className="font-medium pl-1">share</div>
                </div>
                <div className="flex pl-4">
                  <div>
                    <Dots />
                  </div>
                </div>
              </div>
              <div className="pl-8 pt-5">
                <div className="text-base font-medium">Description</div>
                <div className="text-gray-500 w-[57rem] text-sm">
                  Welcome to the exciting world of 3D! In this comprehensive
                  course, we will dive into the fundamentals of Blender,
                  equipping you with the essential knowledge and skills to
                  create stunning 3D projects. Whether you’re completely new to
                  Blender or looking to enhance your skills, this course has
                  something for everyone! This course is designed for beginners
                  to intermediate users, so you don’t need any prior experience
                  with Blender to get started. We’ll start off by covering the
                  basics of Blender, including how to navigate the interface,
                  manipulate objects, and customize your workspace. Then, we’ll
                  move on to more advanced topics, such as modeling, texturing,
                  lighting, and rendering. By the end of this course, you’ll
                  have a solid foundation in Blender and be able to create your
                  own 3D projects from scratch. So, what are you waiting for?
                  Enroll now and start creating amazing 3D art with Blender!
                </div>
              </div>
            </div>
            <div className="w-2/6">
              <div className="m-7 bg-white-custom2 rounded-xl w-[22rem] h-[18rem] shadow-lg">
                <div className="text-sm text-gray-500 pt-3 pl-3">
                  Full Course
                </div>
                <div className="text-2xl font-medium pt-1 pl-3 ">$15.99</div>
                <div className="font-medium pl-3 pt-3">Course includes:</div>
                <div className="flex text-gray-500 pl-3 pt-1">
                  <div className="flex justify-center items-center">
                    <Play />
                  </div>
                  <div className="pl-1">56 hours on-demand video</div>
                </div>
                <div className="flex text-gray-500 pl-3 pt-1">
                  <div className="flex justify-center items-center">
                    <File />
                  </div>
                  <div className="pl-1">6 Articles</div>
                </div>
                <div className="flex text-gray-500 pl-3 pt-1">
                  <div className="flex justify-center items-center">
                    <Folder />
                  </div>
                  <div className="pl-1">8 Download resources</div>
                </div>
                <div className="flex text-gray-500 pl-3 pt-1">
                  <div className="flex justify-center items-center">
                    <SmartPhone />
                  </div>
                  <div className="pl-1">Mobile Version</div>
                </div>
                <div className="bg-blue-600 text-white-custom h-10 rounded-lg w-32 flex items-center justify-center  ml-3 mt-4">
                  Add to cart
                </div>
              </div>
              <div className="m-7 bg-white-custom2 rounded-xl w-[22rem] h-[6rem] shadow-lg">
                <div className="text-sm text-gray-500 pt-3 pl-3">Rating</div>
                <div className="text-2xl font-medium pl-3 pt-4 flex justify-start items-start ">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <div className="text-lg text-gray-500 flex justify-center items-start pl-3 font-medium text-">2,492</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
