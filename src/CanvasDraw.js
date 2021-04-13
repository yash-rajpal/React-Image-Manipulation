import React, { useRef, useEffect, useState } from "react";
const imageAdd =
  "data:image/jpeg;base64,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";

const CanvasImage = ({ img: imageAdd, setImg, reset }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [drawings, setDrawings] = useState([]);
  const [type, setType] = useState("line");
  const [color, setColor] = useState("black");

  useEffect(() => {
    setColor("black");
    setDrawings([]);
    setIsDrawing(false);
    setType("line");
  }, [reset]);

  useEffect(() => {
    const divRef = document.getElementById("main");
    const divPos = divRef.getBoundingClientRect();
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    contextRef.current = context;
    var img = new Image();
    img.src = imageAdd;

    img.onload = () => {
      context.drawImage(img, 0, 0, img.width, img.height);
      drawings.map((drawing) => {
        const { x1, y1, x2, y2, type, color } = drawing;
        if (type === "line") {
          contextRef.current.beginPath();
          contextRef.current.strokeStyle = color;
          contextRef.current.moveTo(x1 - divPos.x, y1 - divPos.y);
          contextRef.current.lineTo(x2 - divPos.x, y2 - divPos.y);
          contextRef.current.stroke();
        } else if (type === "rect") {
          contextRef.current.beginPath();
          contextRef.current.strokeStyle = color;
          contextRef.current.rect(
            x1 - divPos.x,
            y1 - divPos.y,
            x2 - x1,
            y2 - y1
          );
          contextRef.current.stroke();
        }

        return 0;
      });
      setImg(canvas.toDataURL());
    };
  }, [drawings, imageAdd]);

  const _onMouseDown = (e) => {
    setIsDrawing(true);
    const divRef = document.getElementById("main");
    const divPos = divRef.getBoundingClientRect();
    const { clientX, clientY } = e;

    if (type !== "free") {
      contextRef.current.beginPath();
      contextRef.current.moveTo(clientX, clientY);
      setDrawings((prevState) => [
        ...prevState,
        { x1: clientX, y1: clientY, type: type, color: color }
      ]);
    } else {
      contextRef.current.beginPath();
      contextRef.current.moveTo(clientX - divPos.x, clientY - divPos.y);
    }
  };

  const _onMouseUp = (e) => {
    setIsDrawing(false);
    const { clientX, clientY } = e;
    if (type !== "free") {
      setDrawings((prevState) => [
        ...prevState.slice(0, -1),
        {
          x1: prevState[prevState.length - 1].x1,
          y1: prevState[prevState.length - 1].y1,
          x2: clientX,
          y2: clientY,
          type: type,
          color: color
        }
      ]);
    }
  };

  const _onMouseMove = (e) => {
    if (!isDrawing) return;
    const { clientX, clientY } = e;
    const divRef = document.getElementById("main");
    const divPos = divRef.getBoundingClientRect();
    if (type === "free") {
      contextRef.current.strokeStyle = color;
      contextRef.current.lineTo(clientX - divPos.x, clientY - divPos.y);
      contextRef.current.stroke();
    } else {
      setDrawings((prevState) => [
        ...prevState.slice(0, -1),
        {
          x1: prevState[prevState.length - 1].x1,
          y1: prevState[prevState.length - 1].y1,
          x2: clientX,
          y2: clientY,
          type: type,
          color: color
        }
      ]);
    }
  };

  const handleShapeChange = (e) => {
    setType(e.target.value);
  };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div id="main">
      <canvas
        ref={canvasRef}
        onMouseDown={_onMouseDown}
        onMouseUp={_onMouseUp}
        onMouseMove={_onMouseMove}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 10
        }}
      >
        <div>
          <div style={{ display: "flex", alignContent: "center" }}>
            <input
              type="radio"
              value="line"
              checked={type === "line"}
              onChange={handleShapeChange}
            />
            {"Line"}
          </div>
          <div style={{ display: "flex", alignContent: "center" }}>
            <input
              type="radio"
              value="rect"
              checked={type === "rect"}
              onChange={handleShapeChange}
            />
            {"Rectangle"}
          </div>
          <div style={{ display: "flex", alignContent: "center" }}>
            <input
              type="radio"
              value="free"
              checked={type === "free"}
              onChange={handleShapeChange}
            />
            {"Free Draw"}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", marginLeft: 20 }}>
          <input
            type="radio"
            value="red"
            checked={color === "red"}
            onChange={handleColorChange}
          />
          {"Red"}
          <input
            type="radio"
            value="blue"
            checked={color === "blue"}
            onChange={handleColorChange}
          />
          {"Blue"}
          <input
            type="radio"
            value="green"
            checked={color === "green"}
            onChange={handleColorChange}
          />
          {"Green"}
        </div>
      </div>
    </div>
  );
};

export default CanvasImage;
