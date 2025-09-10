// === dataController_BoltCarrierGroup.mjs ===
// Bolt Carrier Group UI Controller for M4 Rifle Configurator (Upper Category)

// Helpers
function hideAllUpperImages_BCG() {
	const ids = [
		"partImgID_boltCarrierGroup00100101",
		"partImgID_boltCarrierGroup00200101",
		"partImgID_boltCarrierGroup00200201",
	];
	ids.forEach(function (imgId) {
		const el = document.getElementById(imgId);
		if (el) el.style.display = "none";
	});
}

function setText(id, text) {
	const el = document.getElementById(id);
	if (el) el.textContent = text;
}

function addClass(id, className) {
	const el = document.getElementById(id);
	if (el) el.classList.add(className);
}

function removeClass(id, className) {
	const el = document.getElementById(id);
	if (el) el.classList.remove(className);
}

// Reset per product
export function uiReset_boltCarrierGroup001001() {
	// Reset data
	window.part.boltCarrierGroup["001"].products["001"].variants["01"].quantity = 0;

	// Update product header texts
	const product = window.part.boltCarrierGroup["001"].products["001"];
	setText("productName_boltCarrierGroup001001", product.productTitle);
	setText("productPricing_boltCarrierGroup001001", product.variants["01"].price + " USD");

	// Reset header states
	removeClass("productButtonIcon_boltCarrierGroup001001", "active");
	removeClass("productHeader_boltCarrierGroup001001", "active");

	// Hide upper images relevant to BCG
	hideAllUpperImages_BCG();

	// Clear part menu
	setText("partName_BoltCarrierGroup", "-----");
	setText("partPrice_BoltCarrierGroup", "-----");
}

export function uiReset_boltCarrierGroup002001() {
	window.part.boltCarrierGroup["002"].products["001"].variants["01"].quantity = 0;
	const product = window.part.boltCarrierGroup["002"].products["001"];
	setText("productName_boltCarrierGroup002001", product.productTitle);
	setText("productPricing_boltCarrierGroup002001", product.variants["01"].price + " USD");
	removeClass("productButtonIcon_boltCarrierGroup002001", "active");
	removeClass("productHeader_boltCarrierGroup002001", "active");
	hideAllUpperImages_BCG();
	setText("partName_BoltCarrierGroup", "-----");
	setText("partPrice_BoltCarrierGroup", "-----");
}

export function uiReset_boltCarrierGroup002002() {
	window.part.boltCarrierGroup["002"].products["002"].variants["01"].quantity = 0;
	const product = window.part.boltCarrierGroup["002"].products["002"];
	setText("productName_boltCarrierGroup002002", product.productTitle);
	setText("productPricing_boltCarrierGroup002002", product.variants["01"].price + " USD");
	removeClass("productButtonIcon_boltCarrierGroup002002", "active");
	removeClass("productHeader_boltCarrierGroup002002", "active");
	hideAllUpperImages_BCG();
	setText("partName_BoltCarrierGroup", "-----");
	setText("partPrice_BoltCarrierGroup", "-----");
}

export function uiData_BoltCarrierGroup() {
	let selectedVariant = null;
	let selectedBrandKey = null;
	let selectedProductKey = null;
	let selectedProductId = null; // e.g., "001001"

	// Map inventory
	const v001001 = window.part.boltCarrierGroup["001"].products["001"].variants["01"];
	if (v001001.quantity === 1) {
		selectedVariant = v001001;
		selectedBrandKey = "001";
		selectedProductKey = "001";
		selectedProductId = "001001";
	}
	const v002001 = window.part.boltCarrierGroup["002"].products["001"].variants["01"];
	if (v002001.quantity === 1) {
		selectedVariant = v002001;
		selectedBrandKey = "002";
		selectedProductKey = "001";
		selectedProductId = "002001";
	}
	const v002002 = window.part.boltCarrierGroup["002"].products["002"].variants["01"];
	if (v002002.quantity === 1) {
		selectedVariant = v002002;
		selectedBrandKey = "002";
		selectedProductKey = "002";
		selectedProductId = "002002";
	}

	if (!selectedVariant) return;

	const product = window.part.boltCarrierGroup[selectedBrandKey].products[selectedProductKey];

	// Items menu updates
	setText("productPricing_boltCarrierGroup" + selectedProductId, selectedVariant.price + " USD");
	addClass("productHeader_boltCarrierGroup" + selectedProductId, "active");
	addClass("productButtonIcon_boltCarrierGroup" + selectedProductId, "active");

	// Product image
	const productImg = document.getElementById("productImgID_" + selectedVariant.id);
	if (productImg) productImg.style.display = "flex";

	// Upper menu images
	hideAllUpperImages_BCG();
	const upperImg = document.getElementById("partImgID_" + selectedVariant.id);
	if (upperImg) upperImg.style.display = "flex";

	// Upper menu texts
	setText("partName_BoltCarrierGroup", product.productTitle);
	setText("partPrice_BoltCarrierGroup", selectedVariant.price + " USD");
}

// Start button -> default first item
{
	const btnStart = document.getElementById("buttonModalStartMenu_StartButton");
	if (btnStart) {
		btnStart.addEventListener("click", function () {
			uiReset_boltCarrierGroup001001();
			uiReset_boltCarrierGroup002001();
			uiReset_boltCarrierGroup002002();
			window.part.boltCarrierGroup["001"].products["001"].variants["01"].quantity = 1;
			uiData_BoltCarrierGroup();
		});
	}
}

// Item selection buttons
{
	const b1 = document.getElementById("buttonItems_boltCarrierGroup00100101");
	if (b1) b1.addEventListener("click", function () {
		uiReset_boltCarrierGroup001001();
		uiReset_boltCarrierGroup002001();
		uiReset_boltCarrierGroup002002();
		window.part.boltCarrierGroup["001"].products["001"].variants["01"].quantity = 1;
		uiData_BoltCarrierGroup();
	});

	const b2 = document.getElementById("buttonItems_boltCarrierGroup00200101");
	if (b2) b2.addEventListener("click", function () {
		uiReset_boltCarrierGroup001001();
		uiReset_boltCarrierGroup002001();
		uiReset_boltCarrierGroup002002();
		window.part.boltCarrierGroup["002"].products["001"].variants["01"].quantity = 1;
		uiData_BoltCarrierGroup();
	});

	const b3 = document.getElementById("buttonItems_boltCarrierGroup00200201");
	if (b3) b3.addEventListener("click", function () {
		uiReset_boltCarrierGroup001001();
		uiReset_boltCarrierGroup002001();
		uiReset_boltCarrierGroup002002();
		window.part.boltCarrierGroup["002"].products["002"].variants["01"].quantity = 1;
		uiData_BoltCarrierGroup();
	});
}

export function getSelectedBoltCarrierGroup() {
	const entries = [
		["001", "001", "01"],
		["002", "001", "01"],
		["002", "002", "01"],
	];
	for (const [brandKey, productKey, variantKey] of entries) {
		const v = window.part.boltCarrierGroup[brandKey].products[productKey].variants[variantKey];
		if (v.quantity === 1) return v;
	}
	return null;
}

export function getBoltCarrierGroupTotalPrice() {
	const v = getSelectedBoltCarrierGroup();
	return v ? v.price : 0;
}


