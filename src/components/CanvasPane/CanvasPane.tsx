import React, { useState, useRef } from "react";
import {
  FabricJSCanvas,
  useFabricJSEditor,
} from "../../hooks/useFabricJSEditor";
import "./CanvasPane.css";

const CanvasPane = () => {
  const { selectedObjects, editor, onReady } = useFabricJSEditor({
    defaultStrokeColor: "red",
  });
  const [text, setText] = useState("");
  const [strokeColor, setStrokeColor] = useState("");
  const [fillColor, setFillColor] = useState("");

  const onAddCircle = () => {
    editor?.addCircle();
  };
  const onAddRectangle = () => {
    editor?.addRectangle();
  };
  const onAddText = () => {
    if (selectedObjects?.length) {
      return editor?.updateText(text);
    }
    editor?.addText(text);
  };
  const onSetStrokeColor = () => {
    editor?.setStrokeColor(strokeColor);
  };
  const onSetFillColor = () => {
    editor?.setFillColor(fillColor);
  };
  const onDeleteAll = () => {
    editor?.deleteAll();
  };
  const onDeleteSelected = () => {
    editor?.deleteSelected();
  };
  const onZoomIn = () => {
    editor?.zoomIn();
  };
  const onZoomOut = () => {
    editor?.zoomOut();
  };
  return (
    <>
      {editor ? (
        <div>
          <button onClick={onZoomIn}>Zoom In</button>
          <button onClick={onZoomOut}>Zoom Out</button>
          <button onClick={onAddCircle}>Add circle</button>
          <button onClick={onAddRectangle}>Add Rectangle</button>
          <button onClick={onDeleteSelected}>Delete Selected</button>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={onAddText}>Add Text</button>
          <input
            type="text"
            value={strokeColor || editor.strokeColor}
            onChange={(e) => setStrokeColor(e.target.value)}
          />
          <button onClick={onSetStrokeColor}>Set Stroke Color</button>
          <input
            type="text"
            value={fillColor || editor.fillColor}
            onChange={(e) => setFillColor(e.target.value)}
          />
          <button onClick={onSetFillColor}>Set Fill Color</button>
        </div>
      ) : (
        <>Loading...</>
      )}
      <FabricJSCanvas className="synapse-canvas" onReady={onReady} />
    </>
  );
};

export default CanvasPane;
