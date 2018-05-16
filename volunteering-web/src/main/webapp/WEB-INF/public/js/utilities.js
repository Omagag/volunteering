/* +++++ UTILERIAS +++++ */
function sucedePorPorcentajeDel(porcentaje) {
	var random = Math.round(Math.random() * 100);
	return random <= porcentaje ? 1 : 0;
}
function booleanRandom() {
	return Math.random() >= 0.5
}
function obtenerStringAleatorio(nombresArray) {
	return nombresArray[random(nombresArray.length)];
}
function random(x) {
	var random = Math.random() * x;
	return Math.floor(random);
}
function randomBetween(x, y) {
	var random = Math.random() * (y - x + 1) + x;
	return Math.floor(random);
}
function crearOpciones(idSelect, opciones) {
	var select = document.getElementById(idSelect);
	for (var i = 0; i < opciones.length; i++) {
		var opcion = "<option value='" + opciones[i] + "'>";
		opcion += opciones[i];
		opcion += "</option>";
		select.innerHTML += opcion;
	}

}
function getValueSelect(idSelect) {
	var select = document.getElementById(idSelect);
	var value = select.options[select.selectedIndex].value;
	return value;
}
function setValueSelect(idSelect, value) {
	var select = document.getElementById(idSelect);
	select.value = value;
}
function getValueInput(idInput) {
	var value = document.getElementById(idInput).value;
	return value;
}
function setValueInput(idInput, value) {
	document.getElementById(idInput).value = value;
}
function getValueCheckbox(idInput) {
	var value = document.getElementById(idInput).checked;
	return value;
}
function setValueCheckbox(idInput, checked) {
	document.getElementById(idInput).checked = checked;
}

/* Create HTML */
/*function crearTdHtml(type, text, className, htmlElement) {
	var td = document.createElement(type);
	td.textContent = text;
	if (className) {
		td.className = className;
	}
	if (htmlElement) {
		td.appendChild(htmlElement);
	}

	return td;
}*/
function crearTdHtml(type, text, className, htmlElements) {
	var td = document.createElement(type);
	td.textContent = text;
	if (className) {
		td.className = className;
	}
	if (htmlElements && htmlElements.length > 0) {
		htmlElements.forEach((htmlElement) => {
			td.appendChild(htmlElement);
		});
	}

	return td;
}
/*function crearFieldFormHtml(labelText, inputType, inputName) {
	var p = document.createElement("p");
	
	if (inputType != "hidden") {
		var label = document.createElement("label");
		label.for = inputName;
		label.textContent = labelText;
		p.appendChild(label);
	}
	var input = document.createElement("input");
	input.type = inputType;
	input.id = inputName;
	input.name = inputName;
	p.appendChild(input);

	return p;
}*/
function crearInputFormHtml(options) {
	var elem = document.createElement(options.elemType);
	
	if (options.elemClassName && options.elemClassName != "") {
		elem.className = options.elemClassName;
	}

	if (options.inputType != "hidden") {
		var label = document.createElement("label");
		label.for = options.inputName;
		label.textContent = options.labelText;
		elem.appendChild(label);
	}
	var input = document.createElement("input");
	input.type = options.inputType;
	input.id = options.inputName;
	input.name = options.inputName;

	if (options.inputClassName && options.inputClassName != "") {
		input.className = options.inputClassName;
	}

	if (options.minLength >= 0) {
		input.minLength = options.minLength;
	}
	if (options.maxLength >= 0) {
		input.maxLength = options.maxLength;
	}

	if (options.min && options.min != "") {
		input.min = options.min;
	}
	if (options.max && options.max != "") {
		input.max = options.max;
	}

	elem.appendChild(input);

	return elem;
}
function crearFieldFormHtml(elemType, elemClassName, labelText, inputType, inputName, inputClassName) {
	var elem = document.createElement(elemType);
	
	if (elemClassName && elemClassName != "") {
		elem.className = elemClassName;
	}

	if (inputType != "hidden") {
		var label = document.createElement("label");
		label.for = inputName;
		label.textContent = labelText;
		elem.appendChild(label);
	}
	var input = document.createElement("input");
	input.type = inputType;
	input.id = inputName;
	input.name = inputName;

	if (inputClassName && inputClassName != "") {
		input.className = inputClassName;
	}

	elem.appendChild(input);

	return elem;
}
function crearSelectFormHtml(options) {
//function crearSelectFormHtml(elemType, elemClassName, labelText, inputName, inputClassName, options) {
	var elem = document.createElement(options.elemType);
	
	if (options.elemClassName && options.elemClassName != "") {
		elem.className = options.elemClassName;
	}

	var label = document.createElement("label");
	label.for = options.inputName;
	label.textContent = options.labelText;
	elem.appendChild(label);
	
	var select = document.createElement("select");
	select.id = options.inputName;
	select.name = options.inputName;

	if (options.inputClassName && options.inputClassName != "") {
		select.className = options.inputClassName;
	}

	options.options.forEach((option)=>{
		select.appendChild(craeteOption(option, option));
	});

	elem.appendChild(select);

	return elem;
}
function craeteOption(textContent, value) {
	var option = document.createElement("option");
	option.textContent = textContent;
	option.value = value

	return option;
}

function crearCheckboxFormHtml(elemType, elemClassName, labelText, inputName) {
	var elem = document.createElement(elemType);

	if (elemClassName && elemClassName != "") {
		elem.className = elemClassName;
	}

	var label = document.createElement("label");
	label.for = inputName;
	var input = document.createElement("input");
	input.type = "checkbox";
	input.id = inputName;
	input.name = inputName;
	//label.textContent = labelText;
	label.appendChild(input, null);
	var textNode = document.createTextNode(labelText);
	label.appendChild(textNode);
	
	elem.appendChild(label);

	return elem;
}
function crearButtonHtml(textContent, type, id, className, action, hidden) {
	var button = document.createElement("button");
	if (id && id != "") {
		button.id = id;
	}
	if (className && className != "") {
		button.className = className;
	}
	button.type = type;
	button.textContent = textContent;
	button.onclick = action;
	if (hidden) {
		button.style.display = "none";
	}

	return button;
}
function createModalButton(textContent, type, id, className, idModal, forOpen, action) {
	var button = document.createElement("button");
	button.textContent = textContent;
	button.type = type;
	if (id && id != "") {
		button.id = id;
	}
	button.className = className;
	if (forOpen) {
		button.setAttribute("data-toggle", "modal");
		button.setAttribute("data-target", "#" + idModal);
	} else {
		button.setAttribute("data-dismiss", "modal");
	}

	button.onclick = action;

	return button
}
function createTHead(columnsNames, theadClass, rowClass) {
	var thead = document.createElement("thead");
	thead.className = theadClass;
	thead.appendChild(createTRow("th", rowClass, columnsNames));

	return thead;
}
function createTRow(type, className, valuesColumns) {
	var tr = document.createElement("tr");
	tr.className = className;

	valuesColumns.forEach((obj) => {
		tr.appendChild(crearTdHtml(type, obj.value, obj.className, obj.htmlElements));
	});

	return tr;
}

function createSimpleLi(text, className, action) {
	var li = document.createElement("li");
	if (className && className != "") {
		li.className = className;
	}
	var a = document.createElement("a");
	a.textContent = text;
	a.onclick = action;
	li.appendChild(a);

	return li;
}
function removeChildrenElement(element) {
	while (element.firstChild) {
	    element.removeChild(element.firstChild);
	}
}

/*function createModalForm(modalId, formId) {
	var section = document.createElement("section");
	//section.className = "row";
	section.className = "modal fade";
	//section.role = "dialog";
	section.setAttribute("role", "dialog");
	section.id = modalId;

	var modalDiv = document.createElement("div");
	modalDiv.className = "modal-dialog";

	var modalContentDiv = document.createElement("div");
	modalContentDiv.className = "modal-content";
	
	var divForm = document.createElement("div");
	divForm.className = "modal-body";
	
	var form = document.createElement("form");
	//form.className = "form-inline";
	var fieldset = document.createElement("fieldset");
	var legend = document.createElement("legend");
	legend.textContent = "Nuevo Usuario";
	fieldset.appendChild(legend);
	
	//var fieldClassName = "col-xs-2";
	var fieldClassName = "form-group";
	fieldset.appendChild(crearFieldFormHtml("div", "", "", "hidden", formId, ""));
	fieldset.appendChild(crearFieldFormHtml("div", fieldClassName, "Nombre", "text", this.FORM_NAME, "form-control"));
	fieldset.appendChild(crearFieldFormHtml("div", fieldClassName, "Apellidos", "text", this.FORM_LAST_NAME, "form-control"));
	fieldset.appendChild(crearFieldFormHtml("div", fieldClassName, "Correo electrónico", "text", this.FORM_EMAIL, "form-control"));
	fieldset.appendChild(crearFieldFormHtml("div", fieldClassName, "Usuario", "text", this.FORM_USERNAME, "form-control"));
	fieldset.appendChild(crearFieldFormHtml("div", fieldClassName, "Contraseña", "text", this.FORM_PASSWORD, "form-control"));
	
	fieldset.appendChild(createModalButton("Agregar", "button", this.FORM_BTN_ADD, "btn btn-success", modalId, false, ()=>this.retrieveFormDataForAdd()));
	fieldset.appendChild(createModalButton("Actualizar", "button", this.FORM_BTN_UPDATE, "btn btn-success", modalId, false, ()=>this.retrieveFormDataForUpdate()));
	fieldset.appendChild(createModalButton("Cancelar", "button", "", "btn btn-danger", modalId, false, ()=>this.clearForm()));

	form.appendChild(fieldset);
	
	divForm.appendChild(form);
	
	modalContentDiv.appendChild(divForm);

	modalDiv.appendChild(modalContentDiv);

	section.appendChild(modalDiv);
	
	return section;
}*/
