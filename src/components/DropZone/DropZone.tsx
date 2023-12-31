import React, {ReactNode, useCallback} from "react";

type props = {
  onDrop: (files: File) => void;
  fileType?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const DropZone: React.FC<props> = ({onDrop, fileType, style, children, className}) => {
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = Array.from(e.dataTransfer.files)[0];
    if (fileType === undefined) {
      return;
    }
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
    <div className={className} onDrop={handleDrop} onDragOver={handleDragOver} style={style}>
      {children}
    </div>
  );
}

export default DropZone;
