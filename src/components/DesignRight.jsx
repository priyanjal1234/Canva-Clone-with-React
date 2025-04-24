import React, { useContext, useEffect, useRef, useState } from "react";
import { Stage, Layer, Rect, Transformer, Circle, Line } from "react-konva";
import { ElementDataContext } from "../context/ElementContext";
import { Bold, ChevronDown, Italic, Palette, Underline } from "lucide-react";

const DesignRight = () => {
  let { currentElement, setcurrentElement, showTextToolbar } =
    useContext(ElementDataContext);
  const [shapes, setshapes] = useState([]);
  const shapeRefs = useRef({});
  const trRef = useRef(null);

  const fontSizes = ['12', '14', '16', '18', '20', '24', '28', '32', '36', '48'];
  const fontColors = ['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

  useEffect(() => {
    if (currentElement === "Rectangle") {
      const newRect = {
        id: `rect-${shapes.length + 1}`,
        x: 50,
        y: 40,
        width: 100,
        height: 80,
        stroke: "purple",
        strokeWidth: 2,
        isSelected: false,
        type: "Rectangle",
      };
      const updatedShapes = shapes.map((s) => {
        return { ...s, isSelected: false };
      });
      updatedShapes.push(newRect);
      setshapes(updatedShapes);
    }

    if (currentElement === "Circle") {
      const newCircle = {
        id: `circle-${shapes.length + 1}`,
        x: 150,
        y: 100,
        radius: 50,
        stroke: "blue",
        strokeWidth: 2,
        isSelected: false,
        type: "Circle",
      };
      const updated = shapes.map((s) => {
        return { ...s, isSelected: false };
      });
      updated.push(newCircle);
      setshapes(updated);
    }

    if (currentElement === "Triangle") {
      const newTriangle = {
        id: `triangle-${shapes.length + 1}`,
        x: 250,
        y: 150,
        points: [0, 100, 50, 0, 100, 100],
        stroke: "green",
        strokeWidth: 2,
        closed: true,
        isSelected: false,
        type: "Triangle",
      };
      const updated = shapes.map((s) => {
        return { ...s, isSelected: false };
      });
      updated.push(newTriangle);
      setshapes(updated);
    }
  }, [currentElement]);

  useEffect(() => {
    const selectedShape = shapes.find((s) => s.isSelected);
    if (trRef.current && selectedShape) {
      const node = shapeRefs.current[selectedShape.id];
      if (node) {
        trRef.current.nodes([node]);
        trRef.current.getLayer().batchDraw();
      }
    } else {
      trRef.current?.nodes([]);
      trRef.current?.getLayer()?.batchDraw();
    }
  }, [shapes]);

  function handleSelect(id) {
    setshapes(
      shapes.map((s) => ({
        ...s,
        isSelected: s.id === id,
      }))
    );
  }

  return (
    <div className="flex-1 flex flex-col gap-5 items-center justify-center bg-gray-100 p-8">
      {showTextToolbar && (
        <div className="h-10 flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
          {/* Font Size Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 p-2 hover:bg-gray-100 rounded">
              <span className="text-sm">16</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 w-24 hidden group-hover:block z-10">
              {fontSizes.map((size) => (
                <button
                  key={size}
                  className="w-full px-4 py-1 text-left hover:bg-gray-100 text-sm"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Text Style Buttons */}
          <button className="p-2 hover:bg-gray-100 rounded">
            <Bold className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <Italic className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <Underline className="w-4 h-4" />
          </button>

          {/* Color Picker */}
          <div className="relative group">
            <button className="p-2 hover:bg-gray-100 rounded">
              <Palette className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 p-2 hidden group-hover:block z-10">
              <div className="grid grid-cols-4 gap-1">
                {fontColors.map((color) => (
                  <button
                    key={color}
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-[800px] h-[600px] bg-white rounded-lg shadow-2xl">
        <Stage
          onMouseDown={(e) => {
            if (e.target === e.target.getStage()) {
              setshapes(
                shapes.map((s) => ({
                  ...s,
                  isSelected: false,
                }))
              );
            }
          }}
          width={800}
          height={600}
        >
          <Layer>
            {shapes.map((shape, index) => {
              if (shape.type === "Circle") {
                return (
                  <Circle
                    key={shape.id}
                    {...shape}
                    draggable
                    ref={(el) => {
                      if (el) shapeRefs.current[shape.id] = el;
                    }}
                    onClick={() => handleSelect(shape.id)}
                    onTap={() => handleSelect(shape.id)}
                    onTransformEnd={() => {
                      const node = shapeRefs.current[shape.id];

                      const scaleX = node.scaleX();
                      const scaleY = node.scaleY();

                      const scale = (scaleX + scaleY) / 2;

                      const updatedShapes = shapes.map((s) => {
                        if (s.id === shape.id) {
                          return {
                            ...s,
                            x: node.x(),
                            y: node.y(),
                            radius: Math.max(5, s.radius * scale),
                            scaleX: 1,
                            scaleY: 1,
                          };
                        }
                        return s;
                      });

                      node.scaleX(1);
                      node.scaleY(1);

                      setshapes(updatedShapes);
                    }}
                  />
                );
              } else if (shape.type === "Triangle") {
                return (
                  <Line
                    key={shape.id}
                    {...shape}
                    draggable
                    ref={(el) => (shapeRefs.current[shape.id] = el)}
                    onClick={() => handleSelect(shape.id)}
                    onTap={() => handleSelect(shape.id)}
                    onTransformEnd={() => {
                      const node = shapeRefs.current[shape.id];
                      const updated = shapes.map((s) =>
                        s.id === shape.id
                          ? {
                              ...s,
                              x: node.x(),
                              y: node.y(),
                              scaleX: 1,
                              scaleY: 1,
                            }
                          : s
                      );
                      setshapes(updated);
                    }}
                  />
                );
              } else if (shape.type === "Rectangle") {
                return (
                  <Rect
                    key={shape.id}
                    {...shape}
                    draggable
                    ref={(el) => {
                      if (el) shapeRefs.current[shape.id] = el;
                    }}
                    onClick={() => handleSelect(shape.id)}
                    onTap={() => handleSelect(shape.id)}
                    onTransformEnd={(e) => {
                      const node = shapeRefs.current[shape.id];

                      const scaleX = node.scaleX();
                      const scaleY = node.scaleY();

                      const updatedShapes = shapes.map((s) => {
                        if (s.id === shape.id) {
                          return {
                            ...s,
                            x: node.x(),
                            y: node.y(),
                            width: Math.max(5, node.width() * scaleX),
                            height: Math.max(5, node.height() * scaleY),
                            scaleX: 1,
                            scaleY: 1,
                          };
                        }
                        return s;
                      });

                      node.scaleX(1);
                      node.scaleY(1);

                      setshapes(updatedShapes);
                    }}
                  />
                );
              }
            })}
            <Transformer ref={trRef} />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default DesignRight;
