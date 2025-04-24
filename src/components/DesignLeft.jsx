import React, { useContext, useState } from "react";
import {
  Shapes,
  Type,
  Image,
  PenTool as Tool,
  ChevronDown,
  Square,
  Circle,
  Triangle,
  Plus,
  Minus,
  RotateCw,
  Trash2,
  Heading1,
  Heading2,
} from "lucide-react";
import { ElementDataContext } from "../context/ElementContext";

const DesignLeft = () => {
  const [activeTab, setActiveTab] = useState("elements");
  let { currentElement, setcurrentElement,setshowTextToolbar } = useContext(ElementDataContext);


  const sidebarElements = [
    { id: "elements", icon: <Shapes className="w-5 h-5" />, label: "Elements" },
    { id: "text", icon: <Type className="w-5 h-5" />, label: "Text" },
    { id: "upload", icon: <Image className="w-5 h-5" />, label: "Upload" },
    { id: "tools", icon: <Tool className="w-5 h-5" />, label: "Tools" },
  ];

  const tabElements = [
    { icon: <Square className="w-5 h-5" />, label: "Rectangle" },
    { icon: <Circle className="w-5 h-5" />, label: "Circle" },
    { icon: <Triangle className="w-5 h-5" />, label: "Triangle" },
  ];

  if(activeTab === "elements") {
    setshowTextToolbar(false)
  } 

  const textElements = [
    {
      icon: <Heading1 className="w-5 h-5" />,
      label: "Add heading",
      preview: "Click to add heading",
    },
    {
      icon: <Heading2 className="w-5 h-5" />,
      label: "Add subheading",
      preview: "Click to add subheading",
    },
  ];

  return (
    <div className="w-[16%] h-screen border px-3 py-2 border-r-2 border-gray-200 shadow-xl">
      <input type="file" className="hidden" />
      <button className="w-full h-[40px] bg-purple-600 text-white rounded-lg">
        File
      </button>

      <div className="mt-6">
        {sidebarElements.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full px-4 py-3 flex items-center space-x-3 hover:text-purple-600 transition-colors ${
              activeTab === tab.id ? " text-purple-600" : "text-gray-700"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="p-4">
        {activeTab === "elements" && (
          <div className="space-y-2">
            {tabElements.map((element, index) => (
              <div
                onClick={() => {
                  setcurrentElement(element.label)
                  
                }}
                key={index}
                className={`p-3 ${
                  currentElement === element.label && "text-purple-600"
                } flex items-center space-x-3 hover:text-purple-600 rounded-lg cursor-pointer  transition-colors`}
              >
                {element.icon}
                <span>{element.label}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "text" && (
          <div className="space-y-3">
            {textElements.map((element, index) => (
              <div
                onClick={() => {
                  setcurrentElement(element.label)
                  setshowTextToolbar(activeTab === "text")
                }}
                key={index}
                className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3 mb-2">
                  {element.icon}
                  <span className="font-medium">{element.label}</span>
                </div>
                <p className="text-sm text-gray-500 pl-8">{element.preview}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DesignLeft;
