var selectedProduct = null;

function selectProduct(index, element) {
  document.getElementById('left-column-items').innerHTML = '';

  selectedProduct = productsContent[index];
  const items = selectedProduct.items;
  let menuItems = '';

  if (items && items.length) {
    for (let i of items) {
      menuItems += `<div class='item' onclick='selectProductItem(${items.indexOf(i)})'>${i.linkText}</div>`;
    }
  }

  const headerLabel = selectedProduct && selectedProduct.label ? selectedProduct.label : '';

  document.getElementById('left-column-header').innerHTML = headerLabel;
  document.getElementById('left-column-items').innerHTML = menuItems;

  if (!element.classList.contains('active-button')) {
    clearButtonSelection();
    element.classList.add('active-button');
    selectProductItem(0);
    toggleSection2();
  } else {
    element.classList.remove('active-button');
    selectedProduct = null;
    toggleSection2();
  }
}

function selectProductItem(itemIndex) {
  itemIndicatorUpdate(itemIndex);
  const selectedItem = selectedProduct.items[itemIndex];
  console.log('selected item: ', selectedItem);
  document.getElementById('product-header-label').innerHTML = selectedItem.headerLabel;
  document.getElementById('product-header-text').innerHTML = selectedItem.headerText;

  let features = selectedItem && selectedItem.features && selectedItem.features.length ? '<ul>' : '';
  for (let item of selectedItem.features) {
    features += `<li>${item.featureText}</li>`;
  }

  if (features !== '') {
    features += '</ul>'
  }

  document.getElementById('product-content-features-items').innerHTML = features;

  if (features === '') {
    document.getElementById('product-content-features').classList.add('hidden');
  } else {
    document.getElementById('product-content-features').classList.remove('hidden');
  }

  document.getElementById('product-content-text').innerHTML = selectedItem.contentText;
}

function clearButtonSelection() {
  const buttonsList = document.getElementsByClassName('button');
  for (const button of buttonsList) {
    button.classList.remove('active-button');
  }
}

function toggleSection2() {
  const section2 = document.getElementById('section2');
  if (selectedProduct !== undefined && selectedProduct !== null) {
    section2.classList.remove('hidden');
  } else {
    section2.classList.add('hidden');
  }
}

function itemIndicatorUpdate(itemIndex) {
  const items = document.getElementsByClassName('item');
  for (let item of items) {
    item.classList.remove('selected');
  }
  items[itemIndex].classList.add('selected');
}