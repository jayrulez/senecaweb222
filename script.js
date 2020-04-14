/** Add any JavaScript you need to this file. */
var UrlHelper = (function() {
  var queryParams = new URLSearchParams(window.location.search);

  return {
    getParam: function(paramName) {
      return queryParams.has(paramName) ? queryParams.get(paramName) : null;
    }
  };
})();

var NodeFactory = (function() {
  var ImgObject = {
    src: '',
    alt: '',
    title: '',
    width: null,
    height: null
  };

  return {
    createNode: function(nodeType, cssClass, cssId) {
      var node = document.createElement(nodeType);
      if (cssClass) node.setAttribute('class', cssClass);
      if (cssId) node.setAttribute('id', cssId);

      return node;
    },
    createTextNode: function(text) {
      var node = document.createTextNode(text);

      return node;
    },
    createImg: function(imgProps, cssClass, cssId) {
      var img = document.createElement('img');

      if (imgProps.hasOwnProperty('src')) {
        img.src = imgProps.src;
      } else {
        img.src = '';
      }

      if (imgProps.hasOwnProperty('alt')) img.alt = imgProps.alt;
      else img.alt = '';

      if (imgProps.hasOwnProperty('title')) img.title = imgProps.title;
      else img.title = '';

      if (imgProps.hasOwnProperty('width')) img.width = imgProps.width;
      if (imgProps.hasOwnProperty('height')) img.height = imgProps.height;

      if (cssClass) img.setAttribute('class', cssClass);
      if (cssId) img.setAttribute('id', cssId);

      return img;
    },
    createAnchor: function(url, text, cssClass, cssId) {
      var anchor = document.createElement('a');
      anchor.setAttribute('href', url);
      if (cssClass) anchor.setAttribute('class', cssClass);
      if (cssId) anchor.setAttribute('id', cssId);
      if (text) anchor.appendChild(document.createTextNode(text));
      return anchor;
    }
  };
})();

var StateManager = (function() {
  var stateStore = window.localStorage;

  return {
    setState: function(key, value) {
      stateStore.setItem(key, JSON.stringify(value));
    },
    getState: function(key) {
      return stateStore.getItem(key);
    }
  };
})();

var Users = (function() {
  var users = [
    {
      id: '1000',
      username: 'user1@email.com',
      password: 'password',
      name: 'User 1'
    }
  ];

  return {
    findByUsername: function(username) {
      var results = users.filter(function(u) {
        return u.username.toUpperCase() == username.toUpperCase();
      });
      if (results.length > 0) {
        return results[0];
      } else {
        return { id: -1 };
      }
    }
  };
})();

var UserManager = (function() {
  let stateKey = 'user';

  return {
    getCurrentUser: function() {
      var currentUser = StateManager.getState(stateKey);

      return currentUser;
    },
    authenticate: function(username, password) {
      username = username.trim();
      password = password.trim();

      var user = Users.findByUsername(username);

      return user.id > 0 && user.password == password;
    }
  };
})();

var Categories = (function() {
  var categories = [
    {
      id: 1,
      name: 'Kicks',
      desc: 'Description of category 1'
    },
    {
      id: 2,
      name: 'Tees',
      desc: 'Description of category 2'
    },
    {
      id: 3,
      name: 'Caps',
      desc: 'Description of category 3'
    },
    {
      id: 4,
      name: 'Watches',
      desc: 'Watches'
    },
    {
      id: 5,
      name: 'Sunglasses',
      desc: 'Sunglasses'
    }
  ];

  return {
    findAll: function() {
      return categories;
    },
    findById: function(id) {
      var data = {};

      var found = categories.filter(function(c) {
        return c.id == id;
      });

      if (found.length > 0) {
        data = found[0];
      } else {
        data.id = -1;
      }

      return data;
    }
  };
})();

var Products = (function() {
  var products = [
    {
      id: 1,
      category_id: 1,
      name: 'AV Training Sneakers',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Kicks/1/2.jpg'
        },
        {
          src: 'images/products/Kicks/1/3.jpg'
        },
        {
          src: 'images/products/Kicks/1/4.jpg'
        }
      ]
    },
    {
      id: 2,
      category_id: 1,
      name: 'Red Mike 13',
      desc: 'Description of product 1',
      price: 50.5,
      images: [
        {
          src: 'images/products/Kicks/2/1.jpg'
        },
        {
          src: 'images/products/Kicks/2/2.jpg'
        },
        {
          src: 'images/products/Kicks/2/3.jpg'
        },
        {
          src: 'images/products/Kicks/2/4.jpg'
        }
      ]
    },
    {
      id: 3,
      category_id: 1,
      name: 'Mila 5 Sneakers',
      desc: 'Description of product 1',
      price: 13.5,
      images: [
        {
          src: 'images/products/Kicks/3/1.jpg'
        },
        {
          src: 'images/products/Kicks/3/2.jpg'
        },
        {
          src: 'images/products/Kicks/3/3.jpg'
        }
      ]
    },
    {
      id: 4,
      category_id: 1,
      name: 'Colt Runners',
      desc: 'Description of product 1',
      price: 17.28,
      images: [
        {
          src: 'images/products/Kicks/4/1.jpg'
        },
        {
          src: 'images/products/Kicks/4/2.jpg'
        }
      ]
    },
    {
      id: 5,
      category_id: 1,
      name: 'Air Jordan 6',
      desc: 'Description of product 1',
      price: 100.0,
      images: [
        {
          src: 'images/products/Kicks/5/1.jpg'
        },
        {
          src: 'images/products/Kicks/5/2.jpg'
        },
        {
          src: 'images/products/Kicks/5/3.jpg'
        }
      ]
    },
    {
      id: 6,
      category_id: 1,
      name: 'Nike FlyWire',
      desc: 'Description of product 1',
      price: 75.25,
      images: [
        {
          src: 'images/products/Kicks/6/1.jpg'
        },
        {
          src: 'images/products/Kicks/6/2.jpg'
        },
        {
          src: 'images/products/Kicks/6/3.jpg'
        }
      ]
    },
    {
      id: 7,
      category_id: 1,
      name: 'Converse 17',
      desc: 'Description of product 1',
      price: 33.99,
      images: [
        {
          src: 'images/products/Kicks/7/1.jpg'
        },
        {
          src: 'images/products/Kicks/7/2.jpg'
        },
        {
          src: 'images/products/Kicks/7/3.jpg'
        }
      ]
    },
    {
      id: 8,
      category_id: 1,
      name: 'Ferrel Running Shoes',
      desc: 'Description of product 1',
      price: 37.25,
      images: [
        {
          src: 'images/products/Kicks/8/1.jpg'
        },
        {
          src: 'images/products/Kicks/8/2.jpg'
        },
        {
          src: 'images/products/Kicks/8/3.jpg'
        }
      ]
    },
    {
      id: 9,
      category_id: 2,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Tees/9/1.jpg'
        }
      ]
    },
    {
      id: 10,
      category_id: 2,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Tees/1/1.jpg'
        }
      ]
    },
    {
      id: 11,
      category_id: 2,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Tees/2/1.jpg'
        }
      ]
    },
    {
      id: 12,
      category_id: 2,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Tees/3/1.jpg'
        }
      ]
    },
    {
      id: 13,
      category_id: 2,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Tees/4/1.jpg'
        }
      ]
    },
    {
      id: 14,
      category_id: 2,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Tees/5/1.jpg'
        }
      ]
    },
    {
      id: 15,
      category_id: 2,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Tees/6/1.jpg'
        }
      ]
    },
    {
      id: 16,
      category_id: 2,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Tees/7/1.jpg'
        }
      ]
    },
    {
      id: 17,
      category_id: 2,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Tees/8/1.jpg'
        }
      ]
    },
    {
      id: 18,
      category_id: 2,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Tees/9/1.jpg'
        }
      ]
    },
    {
      id: 19,
      category_id: 2,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Tees/10/1.jpg'
        }
      ]
    },
    {
      id: 20,
      category_id: 2,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Tees/11/1.jpg'
        }
      ]
    },
    {
      id: 21,
      category_id: 2,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Tees/12/1.jpg'
        }
      ]
    },
    {
      id: 22,
      category_id: 2,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Tees/13/1.jpg'
        }
      ]
    },
    {
      id: 23,
      category_id: 2,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Tees/14/1.jpg'
        }
      ]
    },
    {
      id: 24,
      category_id: 2,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Tees/15/1.jpg'
        }
      ]
    },
    {
      id: 25,
      category_id: 2,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Tees/16/1.jpg'
        }
      ]
    },
    {
      id: 26,
      category_id: 2,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Tees/17/1.jpg'
        }
      ]
    },
    {
      id: 27,
      category_id: 3,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Caps/1/1.jpg'
        }
      ]
    },
    {
      id: 28,
      category_id: 3,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Caps/2/1.jpg'
        }
      ]
    },
    {
      id: 29,
      category_id: 3,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Caps/3/1.jpg'
        }
      ]
    },
    {
      id: 30,
      category_id: 3,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Caps/4/1.jpg'
        }
      ]
    },
    {
      id: 31,
      category_id: 3,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Caps/5/1.jpg'
        }
      ]
    },
    {
      id: 32,
      category_id: 3,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Caps/6/1.jpg'
        }
      ]
    },
    {
      id: 33,
      category_id: 3,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Caps/7/1.jpg'
        }
      ]
    },
    {
      id: 34,
      category_id: 3,
      name: 'Product 1',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Caps/8/1.jpg'
        }
      ]
    },
    {
      id: 35,
      category_id: 4,
      name: 'Abraham Colinski 6',
      desc: 'Description of product 1',
      price: 599.99,
      images: [
        {
          src: 'images/products/Watches/1/1.jpg'
        },
        {
          src: 'images/products/Watches/1/2.jpg'
        }
      ]
    },
    {
      id: 36,
      category_id: 4,
      name: 'Meitou X',
      desc: 'Description of product 1',
      price: 635.0,
      images: [
        {
          src: 'images/products/Watches/2/1.jpg'
        },
        {
          src: 'images/products/Watches/2/1.jpg'
        }
      ]
    },
    {
      id: 37,
      category_id: 4,
      name: 'Mike Larry 3rd',
      desc: 'Description of product 1',
      price: 999.99,
      images: [
        {
          src: 'images/products/Watches/3/1.jpg'
        },
        {
          src: 'images/products/Watches/3/2.jpg'
        },
        {
          src: 'images/products/Watches/3/3.jpg'
        },
        {
          src: 'images/products/Watches/3/4.jpg'
        },
        {
          src: 'images/products/Watches/3/5.jpg'
        },
        {
          src: 'images/products/Watches/3/6.jpg'
        },
        {
          src: 'images/products/Watches/3/7.jpg'
        }
      ]
    },
    {
      id: 38,
      category_id: 4,
      name: 'Alisson Cole 7',
      desc: 'Description of product 1',
      price: 585.5,
      images: [
        {
          src: 'images/products/Watches/4/1.jpg'
        },
        {
          src: 'images/products/Watches/4/2.jpg'
        }
      ]
    },
    {
      id: 39,
      category_id: 4,
      name: "Nerdette's",
      desc: 'Description of product 1',
      price: 333.33,
      images: [
        {
          src: 'images/products/Watches/5/1.jpg'
        },
        {
          src: 'images/products/Watches/5/2.jpg'
        }
      ]
    },
    {
      id: 40,
      category_id: 4,
      name: 'Tony Hellsman',
      desc: 'Description of product 1',
      price: 540.0,
      images: [
        {
          src: 'images/products/Watches/6/1.jpg'
        },
        {
          src: 'images/products/Watches/6/2.jpg'
        }
      ]
    },
    {
      id: 41,
      category_id: 4,
      name: 'Jake Seacole',
      desc: 'Description of product 1',
      price: 1300.0,
      images: [
        {
          src: 'images/products/Watches/7/1.jpg'
        },
        {
          src: 'images/products/Watches/7/2.jpg'
        },
        {
          src: 'images/products/Watches/7/3.jpg'
        }
      ]
    },
    {
      id: 42,
      category_id: 4,
      name: 'Martin II',
      desc: 'Description of product 1',
      price: 500.0,
      images: [
        {
          src: 'images/products/Watches/8/1.jpg'
        },
        {
          src: 'images/products/Watches/8/2.jpg'
        }
      ]
    },
    {
      id: 43,
      category_id: 4,
      name: 'Martin I',
      desc: 'Description of product 1',
      price: 335.5,
      images: [
        {
          src: 'images/products/Watches/9/1.jpg'
        }
      ]
    },
    {
      id: 44,
      category_id: 5,
      name: 'Day Walker 16',
      desc: 'Description of product 1',
      price: 25.5,
      images: [
        {
          src: 'images/products/Sunglasses/1/1.jpg'
        },
        {
          src: 'images/products/Sunglasses/1/2.jpg'
        },
        {
          src: 'images/products/Sunglasses/1/3.jpg'
        }
      ]
    },
    {
      id: 45,
      category_id: 5,
      name: 'Mina Love',
      desc: 'Description of product 1',
      price: 3.35,
      images: [
        {
          src: 'images/products/Sunglasses/2/1.jpg'
        },
        {
          src: 'images/products/Sunglasses/2/2.jpg'
        },
        {
          src: 'images/products/Sunglasses/2/3.jpg'
        }
      ]
    },
    {
      id: 46,
      category_id: 5,
      name: 'Alysson Pink',
      desc: 'Description of product 1',
      price: 8.5,
      images: [
        {
          src: 'images/products/Sunglasses/3/1.jpg'
        },
        {
          src: 'images/products/Sunglasses/3/2.jpg'
        },
        {
          src: 'images/products/Sunglasses/3/3.jpg'
        },
        {
          src: 'images/products/Sunglasses/3/4.jpg'
        },
        {
          src: 'images/products/Sunglasses/3/5.jpg'
        }
      ]
    },
    {
      id: 47,
      category_id: 5,
      name: 'Yemmy',
      desc: 'Description of product 1',
      price: 12.25,
      images: [
        {
          src: 'images/products/Sunglasses/4/1.jpg'
        },
        {
          src: 'images/products/Sunglasses/4/2.jpg'
        },
        {
          src: 'images/products/Sunglasses/4/3.jpg'
        },
        {
          src: 'images/products/Sunglasses/4/4.jpg'
        }
      ]
    },
    {
      id: 48,
      category_id: 5,
      name: 'Charon Ambrose Lights',
      desc: 'Description of product 1',
      price: 13.35,
      images: [
        {
          src: 'images/products/Sunglasses/5/1.jpg'
        },
        {
          src: 'images/products/Sunglasses/5/2.jpg'
        },
        {
          src: 'images/products/Sunglasses/5/3.jpg'
        },
        {
          src: 'images/products/Sunglasses/5/4.jpg'
        }
      ]
    },
    {
      id: 49,
      category_id: 5,
      name: 'Mike Lee 16',
      desc: 'Description of product 1',
      price: 6.3,
      images: [
        {
          src: 'images/products/Sunglasses/6/1.jpg'
        },
        {
          src: 'images/products/Sunglasses/6/2.jpg'
        },
        {
          src: 'images/products/Sunglasses/6/3.jpg'
        },
        {
          src: 'images/products/Sunglasses/6/4.jpg'
        }
      ]
    }
  ];

  return {
    find: function(filterFunction) {
      if (typeof filterFunction != 'function') {
        return products;
      } else {
        return products.filter(filterFunction);
      }
    },
    findAll: function() {
      return products;
    },
    findById: function(productId) {
      var data = {};

      var product = products.filter(function(p) {
        return p.id == productId;
      });

      if (product.length > 0) {
        data = product[0];
      } else {
        data.id = -1;
      }

      return data;
    },
    findByCategoryId: function(categoryId) {
      return products.filter(function(p) {
        return p.category_id == categoryId;
      });
    }
  };
})();

var CartItem = function(productId, quantity) {
  var product = Products.findById(productId);

  if (product.id != -1) product.quantity = quantity;

  return product;
};

var CartManager = (function() {
  let stateKey = 'cart';

  var cartItems = StateManager.getState(stateKey);

  if (cartItems) {
    cartItems = JSON.parse(cartItems);
  }

  if (!Array.isArray(cartItems)) {
    StateManager.setState(stateKey, []);
  }

  return {
    addItem: function(item) {
      var items = JSON.parse(StateManager.getState(stateKey));
      item.quantity = 1;
      items.push(item);
      StateManager.setState(stateKey, items);
    },
    removeItem: function(itemId) {
      var items = JSON.parse(StateManager.getState(stateKey));

      items = items.filter(function(item) {
        return item.id != itemId;
      });

      StateManager.setState(stateKey, items);
    },
    getItems: function() {
      return JSON.parse(StateManager.getState(stateKey));
    },
    hasItem: function(itemId) {
      var items = JSON.parse(StateManager.getState(stateKey));

      items = items.filter(function(item) {
        return item.id == itemId;
      });

      return items.length > 0;
    },
    updateItem: function(itemId, quantity) {
      if (quantity < 1) {
        quantity = 1;
      }

      var items = JSON.parse(StateManager.getState(stateKey));

      items.forEach(function(item) {
        if (item.id == itemId) {
          item.quantity = quantity;
        }
      });

      StateManager.setState(stateKey, items);
    },
    empty: function() {
      StateManager.setState(stateKey, []);
    }
  };
})();

function openShoppingCartModal() {
  var items = CartManager.getItems();

  var cartItemsContainer = NodeFactory.createNode('div', 'container');

  if (items.length > 0) {
    var subtotal = 0;

    items.forEach(function(item, index) {
      var cartItemContainer = NodeFactory.createNode(
        'div',
        'cart-item-container row ' + (index % 2 == 0 ? 'even' : 'odd')
      );

      var contentCol = NodeFactory.createNode('div', 'col-lg-9 col-md-10 col-sm-10');

      var imageCol = NodeFactory.createNode('div', 'col-lg-3 col-md-3 col-sm-3');

      var imageProps = item.images[0];
      imageProps.height = '45';
      var productImg = NodeFactory.createImg(imageProps);

      imageCol.appendChild(productImg);

      var dataCol = NodeFactory.createNode('div', 'col-lg-9 col-md-9 col-sm-9');

      dataCol.appendChild(NodeFactory.createTextNode(item.name));

      var removeLink = NodeFactory.createAnchor('#', '');
      removeLink.onclick = function(e) {
        e.preventDefault();

        CartManager.removeItem(item.id);
        updateShoppingCart();
        openShoppingCartModal();
      };
      var removeIcon = NodeFactory.createNode('i', 'fas fa-times');
      removeLink.appendChild(removeIcon);
      removeLink.title = 'Remove from cart';

      var quantityInput = document.createElement('input');
      quantityInput.type = 'number';
      quantityInput.classList.add('cart-product-quantity-input');
      quantityInput.size = '3';
      quantityInput.id = 'cart-product-quantity-input-' + item.id;
      quantityInput.value = item.quantity;
      quantityInput.onchange = function() {};

      var updateLink = NodeFactory.createAnchor('#', 'Update');
      updateLink.title = 'Update quantity';

      updateLink.onclick = function(e) {
        e.preventDefault();

        var inputNode = document.querySelector('#cart-product-quantity-input-' + item.id);
        if (inputNode && !isNaN(inputNode.value) && inputNode.value > 0) {
          CartManager.updateItem(item.id, inputNode.value);
          updateShoppingCart();
          openShoppingCartModal();
        }
      };

      var quantityUpdateDiv = NodeFactory.createNode('div');
      quantityUpdateDiv.appendChild(NodeFactory.createTextNode('Qty: '));
      quantityUpdateDiv.appendChild(quantityInput);
      quantityUpdateDiv.appendChild(NodeFactory.createTextNode(' '));
      quantityUpdateDiv.appendChild(updateLink);
      quantityUpdateDiv.appendChild(NodeFactory.createTextNode(' | '));
      quantityUpdateDiv.appendChild(removeLink);

      dataCol.appendChild(quantityUpdateDiv);

      var contentRow = NodeFactory.createNode('div', 'row');
      contentRow.appendChild(imageCol);
      contentRow.appendChild(dataCol);
      contentCol.appendChild(contentRow);

      var priceCol = NodeFactory.createNode('div', 'col-lg-3 col-md-2 col-sm-2 price-col');
      var priceSpan = NodeFactory.createNode('span', 'cart-product-price');
      priceSpan.appendChild(NodeFactory.createTextNode('$' + item.price.toFixed(2)));
      priceCol.appendChild(priceSpan);

      cartItemContainer.appendChild(contentCol);
      cartItemContainer.appendChild(priceCol);

      cartItemsContainer.appendChild(cartItemContainer);

      subtotal += item.price * item.quantity;
    });

    var subtotalRow = NodeFactory.createNode('div', 'row');
    var subtotalCol = NodeFactory.createNode('div', 'col-lg-12 subtotal');
    subtotalCol.appendChild(NodeFactory.createTextNode('Subtotal $' + subtotal.toFixed(2)));

    subtotalRow.appendChild(subtotalCol);

    cartItemsContainer.appendChild(subtotalRow);
  } else {
    cartItemsContainer.appendChild(NodeFactory.createTextNode('Cart is empty.'));
  }
  var modalBody = document.querySelector('#cart-view-modal .modal-body');
  modalBody.innerHTML = '';
  modalBody.appendChild(cartItemsContainer);

  var emptyCartButton = NodeFactory.createAnchor('#', '', 'btn btn-secondary');
  var emptyCartButtonIcon = NodeFactory.createNode('i', 'fas fa-eraser');
  emptyCartButton.appendChild(emptyCartButtonIcon);
  emptyCartButton.appendChild(NodeFactory.createTextNode(' Empty Cart'));
  if (items.length > 0) {
    emptyCartButton.onclick = function(e) {
      e.preventDefault();
      CartManager.empty();
      $('#cart-view-modal').modal('hide');
      updateShoppingCart();
    };
  } else {
    emptyCartButton.disabled = true;
  }

  var checkoutButton = NodeFactory.createAnchor('#', '', 'btn btn-primary');
  var checkoutButtonIcon = NodeFactory.createNode('i', 'fas fa-credit-card');
  checkoutButton.appendChild(checkoutButtonIcon);
  checkoutButton.appendChild(NodeFactory.createTextNode(' Checkout'));
  checkoutButton.onclick = function(e) {
    e.preventDefault();
  };

  var footer = document.querySelector('#cart-view-modal .modal-footer');
  footer.innerHTML = '';
  if (items.length > 0) {
    footer.appendChild(emptyCartButton);
    footer.appendChild(checkoutButton);
  }
  $('#cart-view-modal').modal('show');
}

function updateShoppingCart() {
  showHeaderCartInfo();
}

function showHeaderCartInfo() {
  var itemsCountBadge = NodeFactory.createNode('span', 'badge badge-info');
  itemsCountBadge.appendChild(NodeFactory.createTextNode(CartManager.getItems().length));

  var cartLink = NodeFactory.createAnchor('#');
  var icon = NodeFactory.createNode('i', 'fas fa-shopping-cart');

  cartLink.appendChild(icon);
  cartLink.appendChild(NodeFactory.createTextNode(' Cart '));
  cartLink.appendChild(itemsCountBadge);
  cartLink.onclick = function(e) {
    e.preventDefault();
    openShoppingCartModal();
  };

  var infoContainer = document.querySelector('#header-cart-info');
  infoContainer.innerHTML = '';

  infoContainer.appendChild(cartLink);
}

function showHeaderAuthInfo() {}
