window.onload = function() {
    showHideContent('encabezado', 'datos', 0, 'show', 4);
    // showHideContent(0, 'show', 4);
};

// function showHideContent(elem, action, total) {
//     var headerDiv;
//     var dataDiv;
//     var h4;
//
//     var headerId = 'encabezado';
//     var dataId = 'datos';
//
//     var classNameHead = 'accordion-header';
//     var classNameSelectedHead = 'selected-head';
//     var classNameData = 'accordion-container';
//     var classNameSelectedData = 'show-container';
//     var classNameExpanded = 'expanded';
//     var classNameCollapsed = 'img-name-section';
//
//
//     var accordionContainers =
//
//
//
//     for(var i=0; i<total; i++) {
//         headerDiv = document.getElementById(headerId + i);
//         dataDiv = document.getElementById(dataId + i);
//         h4 = document.getElementById("actionIcon" + i);
//
//         if(i === index) {
//
//             if(action === 'show') {
//                 // dataDiv.style.display = "block";
//
//                 headerDiv.setAttribute("onclick", "showHideContent(" + index + ", 'hide', " + total + ")");
//                 headerDiv.className = classNameHead + ' ' + classNameSelectedHead;
//                 dataDiv.className = classNameData + ' ' + classNameSelectedData;
//                 h4.className = classNameCollapsed + ' ' + classNameExpanded;
//             } else {
//                 // dataDiv.style.display = "none";
//
//                 headerDiv.setAttribute("onclick", "showHideContent("+index+", 'show', "+total+")");
//                 headerDiv.className = classNameHead;
//                 dataDiv.className = classNameData;
//                 h4.className =  classNameCollapsed;
//             }
//         } else {
//             // dataDiv.style.display = "none";
//
//             headerDiv.setAttribute("onclick", "showHideContent("+ i +", 'show', "+total+")");
//             headerDiv.className = classNameHead;
//             dataDiv.className = classNameData;
//             h4.className =  classNameCollapsed;
//         }
//     }
// }

function showHideContent(headerId, dataId, index, action, total) {
    var headerDiv;
    var dataDiv;
    var h4;
    var classNameHead = 'accordion-header';
    var classNameSelectedHead = 'selected-head';
    var classNameData = 'accordion-container';
    var classNameSelectedData = 'show-container';
    var classNameExpanded = 'expanded';
    var classNameCollapsed = 'img-name-section';

    for(var i=0; i<total; i++) {
        headerDiv = document.getElementById(headerId + i);
        dataDiv = document.getElementById(dataId + i);
        h4 = document.getElementById("actionIcon" + i);

        if(i === index) {

            if(action === 'show') {
                // dataDiv.style.display = "block";

                headerDiv.setAttribute("onclick", "showHideContent('" + headerId + "', '" + dataId + "', " + index + ", 'hide', " + total + ")");
                headerDiv.className = classNameHead + ' ' + classNameSelectedHead;
                dataDiv.className = classNameData + ' ' + classNameSelectedData;
                h4.className = classNameCollapsed + ' ' + classNameExpanded;
            } else {
                // dataDiv.style.display = "none";

                headerDiv.setAttribute("onclick", "showHideContent('"+headerId+"', '"+dataId+"', "+index+", 'show', "+total+")");
                headerDiv.className = classNameHead;
                dataDiv.className = classNameData;
                h4.className =  classNameCollapsed;
            }
        } else {
            // dataDiv.style.display = "none";

            headerDiv.setAttribute("onclick", "showHideContent('"+headerId+"', '"+dataId+"', "+ i +", 'show', "+total+")");
            headerDiv.className = classNameHead;
            dataDiv.className = classNameData;
            h4.className =  classNameCollapsed;
        }
    }
}
