import React from "react";


interface EditorLineType {
  item: any;
  itemEqualsValue: any;
  input: any;
}

const EditorLine: React.FC<EditorLineType> = ({item, itemEqualsValue, input }) => {
  return item === itemEqualsValue ? input : item;
}


export default EditorLine;