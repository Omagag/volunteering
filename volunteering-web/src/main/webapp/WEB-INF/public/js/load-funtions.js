function showHideContent(parent, child, number, action, total) {
    if(action == 'show') {
        for(var i=0; i<total; i=i+1) {
            var objectParent = document.getElementById(parent + i);
            var objectChild = document.getElementById(child + i);

            if(i == number) {
                objectChild.style.display = "block";

                addAndRemoveCSSClass(objectParent, "accordion-header selected-head");
                objectParent.setAttribute("onclick", "showHideContent('"+parent+"', '"+child+"', "+number+", 'hide', "+total+")")
            } else {
                objectChild.style.display = "none";

                addAndRemoveCSSClass(objectParent, "accordion-header");
                objectParent.setAttribute("onclick", "showHideContent('"+parent+"', '"+child+"', "+i+", 'show', "+total+")")
            }
        }
    } else {
        for(var i=0; i<total; i=i+1) {
            var objectParent = document.getElementById(parent + i);
            var objectChild = document.getElementById(child + i);

            if(i == number) {
                objectChild.style.display = "none";

                addAndRemoveCSSClass(objectParent, "accordion-header");
                objectParent.setAttribute("onclick", "showHideContent('"+parent+"', '"+child+"', "+number+", 'show', "+total+")")
            } else {
                objectChild.style.display = "none";

                addAndRemoveCSSClass(objectParent, "accordion-header");
                objectParent.setAttribute("onclick", "showHideContent('"+parent+"', '"+child+"', "+i+", 'show', "+total+")")
            }
        }
    }
}

function addAndRemoveCSSClass(element, clazz) {
    var objectClass = "";
    var classSet = "";

    if (element != null) {
        objectClass = element.className;

        if (objectClass != null && objectClass != undefined) {
            classSet = objectClass.includes(" ") ? objectClass.split(" ") : objectClass;

            if (classSet != null && classSet != undefined && classSet.length > 0) {
                if (classSet.constructor === Array) {
                    for (var c = 0; c < classSet.length; c = c + 1) {
                        element.classList.remove(classSet[c]);
                    }
                } else {
                    element.classList.remove(classSet);
                }
            }

            if (clazz != null) {
                classSet = clazz.includes(" ") ? clazz.split(" ") : clazz;

                if (classSet != null && classSet != undefined && classSet.length > 0) {
                    if (classSet.constructor === Array) {
                        for (var c = 0; c < classSet.length; c = c + 1) {
                            element.classList.add(classSet[c]);
                        }
                    } else {
                        element.classList.add(classSet);
                    }
                }
            }
        }
    }
}
// function mostrarOcultarController($scope) {
//     $scope.menuState = {}
//     $scope.menuState.show = false;
//     $scope.cambiarMenu = function() {
//         $scope.menuState.show = !$scope.menuState.show;
//     };
// }
//
// function desplegarMenuController($scope) {
//     $scope.menuState = {}
//     $scope.menuState.show = true;
//     $scope.desplegaMenu = function() {
//         $scope.menuState.show = !$scope.menuState.show;
//     };
//
// }
//
//
//
//
// var app = angular.module('myApp', []);
// app.controlador('personCtrl', function($scope) {
//     $scope.myVar = false;
//     $scope.toggle = function() {
//         $scope.myVar = !$scope.myVar;
//     };
// })



