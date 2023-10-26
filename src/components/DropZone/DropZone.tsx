import React, {useCallback} from "react";

type props = {
  onDrop: (files: File) => void;
  fileType: string;
  style: React.CSSProperties;
}

const DropZone: React.FC<props> = ({onDrop, fileType, style}) => {
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = Array.from(e.dataTransfer.files)[0];
    if (file.type !== fileType) {
      alert('Invalid file type');
      return;
    }
    onDrop(file);
  }, [onDrop, fileType]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver} style={style}>
      {fileType}
    </div>
  );
}

export default DropZone;
