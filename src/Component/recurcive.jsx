import React from "react";
import MyComponent from "./MyComponent";
import { useState } from "react";
const options = [
  {
    id: "parent 1",
    value: "parnet 1",
    childrens: [
      {
        id: "child 1",
        value: "child 1",
        childrens: [
          {
            id: "child 9",
            value: "child 9",
          },
          {
            id: "child 10",
            value: "child 10",
          },
        ],
      },
      {
        id: "child 2",
        value: "child 2",
      },
      {
        id: "child 3",
        value: "child 3",
      },
      {
        id: "child 4",
        value: "child 4",
      },
    ],
  },
  {
    id: "parent 2",
    value: "parnet 2",
    childrens: [
      {
        id: "child 5",
        value: "child 5",
      },
      {
        id: "child 6",
        value: "child 6",
      },
      {
        id: "child 7",
        value: "child 7",
      },
      {
        id: "child 8",
        value: "child 8",
      },
    ],
  },
];

function App() {

const [selectedOptions, setSelectedOptions] = useState({});

function forwardSelection(checked, currentNode, selectedOption = {}) {
  const {id, childrens} = currentNode;
  selectedOption[id] = checked;
  if(childrens && childrens.length) {
    childrens.forEach(childOption => {
      forwardSelection(checked, childOption, selectedOption)
    })
  }
  return;
}

function backwardSelection(currentNode ,selectedOption = {}) {
  const {node, parent} = currentNode;
  const allChildrenSelected = node.childrens && node.childrens.every(({id}) => selectedOption[id]);
  selectedOption[node.id] = allChildrenSelected;
  if(parent) {
    backwardSelection(parent, selectedOption);
  }
  return;
}

const handleSelectionChange = (node, parent) => {
  let tmpSelection = Object.assign({}, selectedOptions);
 forwardSelection(!tmpSelection[node.id], node, tmpSelection);
  if(parent) {
    backwardSelection(parent.parent, tmpSelection);
  }
  setSelectedOptions(tmpSelection);
}


const renderOption = (option, index) => {
return <MyComponent parent={undefined} key={`${index}MyComponent`} option={option} selectedOptions={selectedOptions} handleSelectionChange={handleSelectionChange} />
}


return (
<div className="App">
  {
    options.map(renderOption)
  }
</div>
);

}

export default App;
