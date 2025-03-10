import { useState } from "react";

function MyComponent({option, selectedOptions, handleSelectionChange, parent}) {
    const [isExpanded, setISExpanded] = useState(false);

    const toggleExpand = (event) => {
        event.stopPropagation();
        if(option.childrens && option.childrens.length >=1) {
            setISExpanded(!isExpanded);
        }
    }

    const renderChildOption = (childOption, index) => {
        return <MyComponent parent={{node: childOption, parent: parent || {node:option, parent: undefined}}} option={childOption} key={`${option.id}${index}`} selectedOptions={selectedOptions} handleSelectionChange={handleSelectionChange}/>
    }


    const handleOptionClick = (event) => {
        event.stopPropagation();
        handleSelectionChange(option, parent);
    }

    return (<div style={{display: "flex", flexDirection: "column", width: "100%"}} onClick={toggleExpand}>
        
        <div style={{display: "flex", flexDirection: "row", width: "30%", background: "green"}}  onClick={handleOptionClick}>{option.value} {selectedOptions[option.id] ?  "selected" : ""}</div>   
        
        
        {
            isExpanded && option.childrens && option.childrens.length >=1 && option.childrens.map(renderChildOption)
        }
    </div>);
}

export default MyComponent