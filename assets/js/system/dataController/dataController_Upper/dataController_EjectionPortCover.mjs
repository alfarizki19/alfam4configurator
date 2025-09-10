// === dataController_EjectionPortCover.mjs ===
// Ejection Port Cover UI Controller (Upper Category)

function epc_setText(id, text) { const el = document.getElementById(id); if (el) el.textContent = text; }
function epc_addClass(id, c) { const el = document.getElementById(id); if (el) el.classList.add(c); }
function epc_removeClass(id, c) { const el = document.getElementById(id); if (el) el.classList.remove(c); }

function epc_hideUpperImages() {
	for (let i = 1; i <= 10; i++) {
		const idx = ("" + i).padStart(2, "0");
		const el = document.getElementById("partImgID_ejectionPortCover001001" + idx);
		if (el) el.style.display = "none";
	}
}

function epc_hideProductImages() {
	for (let i = 1; i <= 10; i++) {
		const idx = ("" + i).padStart(2, "0");
		const el = document.getElementById("productImgID_ejectionPortCover001001" + idx);
		if (el) el.style.display = "none";
	}
}

function epc_clearVariantButtons() {
	for (let i = 1; i <= 10; i++) {
		const idx = ("" + i).padStart(2, "0");
		const btn = document.getElementById("buttonItems_ejectionPortCover001001" + idx);
		if (btn) btn.classList.remove("active");
	}
}

export function uiReset_ejectionPortCover001001() {
	const product = window.part.ejectionPortCover["001"].products["001"]; // multiple variants 01..10
	Object.keys(product.variants).forEach(function (k) { product.variants[k].quantity = 0; });

	epc_setText("productName_ejectionPortCover001001", product.productTitle);
	epc_setText("productPricing_ejectionPortCover001001", product.variants["01"].price + " USD");
	epc_removeClass("productHeader_ejectionPortCover001001", "active");
	epc_removeClass("productButtonIcon_ejectionPortCover001001", "active");

	epc_hideProductImages();
	epc_hideUpperImages();

	epc_setText("partName_EjectionPortCover", "-----");
	epc_setText("partPrice_EjectionPortCover", "-----");
	epc_clearVariantButtons();
}

export function uiData_EjectionPortCover() {
	const product = window.part.ejectionPortCover["001"].products["001"]; // Timber Creek
	let selected = null; let variantIdx = null;
	for (const k in product.variants) { if (product.variants[k].quantity === 1) { selected = product.variants[k]; variantIdx = k; } }
	if (!selected) return;

	epc_setText("productPricing_ejectionPortCover001001", selected.price + " USD");
	epc_addClass("productHeader_ejectionPortCover001001", "active");
	epc_addClass("productButtonIcon_ejectionPortCover001001", "active");

	epc_hideProductImages();
	const pImg = document.getElementById("productImgID_" + selected.id);
	if (pImg) pImg.style.display = "flex";

	epc_hideUpperImages();
	const uImg = document.getElementById("partImgID_" + selected.id);
	if (uImg) uImg.style.display = "flex";

	const variantSuffix = (selected.variantTitle && selected.variantTitle.toLowerCase() !== "no variant") ? (" - " + selected.variantTitle) : "";
	epc_setText("productName_ejectionPortCover001001", product.productTitle + variantSuffix);
	epc_setText("partName_EjectionPortCover", product.productTitle + variantSuffix);
	epc_setText("partPrice_EjectionPortCover", selected.price + " USD");

	epc_clearVariantButtons();
	const btn = document.getElementById("buttonItems_ejectionPortCover001001" + variantIdx);
	if (btn) btn.classList.add("active");
}

// Start default -> 01
{
	const btn = document.getElementById("buttonModalStartMenu_StartButton");
	if (btn) {
		btn.addEventListener("click", function () {
			uiReset_ejectionPortCover001001();
			window.part.ejectionPortCover["001"].products["001"].variants["01"].quantity = 1;
			uiData_EjectionPortCover();
		});
	}
}

// Variant listeners 01..10
{
	for (let i = 1; i <= 10; i++) {
		const idx = ("" + i).padStart(2, "0");
		const b = document.getElementById("buttonItems_ejectionPortCover001001" + idx);
		if (!b) continue;
		b.addEventListener("click", function () {
			uiReset_ejectionPortCover001001();
			window.part.ejectionPortCover["001"].products["001"].variants[idx].quantity = 1;
			uiData_EjectionPortCover();
		});
	}
}

export function getSelectedEjectionPortCover() {
	const product = window.part.ejectionPortCover["001"].products["001"];
	for (const k in product.variants) { if (product.variants[k].quantity === 1) return product.variants[k]; }
	return null;
}

export function getEjectionPortCoverTotalPrice() {
	const v = getSelectedEjectionPortCover();
	return v ? v.price : 0;
}


