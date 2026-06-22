---
sidebar_position: 4
---

# Product Catalog & Mock Database Setup

This guide describes how to manage the application's local database. You will learn the layout of the product catalog JSON, how to add new categories, and how to configure static seeds (e.g., default shipping addresses, discount coupons, and payment cards).

---

## 1. Product Catalog Database

Hana Go uses an offline-first catalog architecture. All product records are loaded from a bundled JSON file:

📁 File path: [assets/data/products.json](file:///d:/App_project/hanaGo/assets/data/products.json)

### Product Entry Schema
Each product in the JSON list contains the following attributes:

```json
{
  "id": "avocado",
  "name": "Avocado",
  "price": 15.0,
  "originalPrice": 20.0,
  "inStock": true,
  "assetPath": "assets/icons/catagory/vegetables/avocado.png",
  "icon": "eco_rounded",
  "color": 4283215696,
  "tags": ["Vegetables", "Fresh"],
  "description": "Premium organic Avocado, freshly harvested and packed with healthy fats.",
  "sizeText": "500 gm",
  "categoryLabel": "Vegetables"
}
```

### Attribute Breakdown:
*   `id` *(String)*: Unique identifier used internally for shopping cart item management.
*   `name` *(String)*: Display name shown on cards and detail screens.
*   `price` *(Double)*: Current sale price.
*   `originalPrice` *(Double)*: Regular price. If higher than `price`, the UI automatically displays a discount percentage badge.
*   `inStock` *(Boolean)*: If set to `false`, the product detail screen shows "Out of Stock" and disables the "Add to Cart" button.
*   `assetPath` *(String)*: Local image file path. Make sure your asset folders are declared under the `flutter -> assets` section in `pubspec.yaml`.
*   `icon` *(String)*: Associated Material Icon representation (fallback).
*   `color` *(Integer)*: Hex color representation in decimal integer format (ARGB) used as the background highlight on product item grids.
*   `tags` *(Array of Strings)*: Search tags and filtering qualifiers.
*   `description` *(String)*: Long-form text description.
*   `sizeText` *(String)*: Standard units (e.g., "500 gm", "1 pc", "1 kg").
*   `categoryLabel` *(String)*: Matches the category labels (e.g., `Vegetables`, `Snacks`, `Fruits`, `Diary`, `Pantry`, `Beverages`, `Frozen`, `Household`).

---

## 2. Managing Product Categories

Categories are resolved inside the product loader class:

📁 File path: [lib/data/loaders/product_data_loader.dart](file:///d:/App_project/hanaGo/lib/data/loaders/product_data_loader.dart)

To add a new category:
1. Open [product_data_loader.dart](file:///d:/App_project/hanaGo/lib/data/loaders/product_data_loader.dart) and add a value to the `ProductCategory` enum.
2. Update the category mapping in the `loadProductsByCategory` function to map your new category name.
3. Open `products.json` and add items containing your new category name in `categoryLabel`.

---

## 3. Mock Database Seeds

To speed up development and provide a complete offline client demo, Hana Go loads initial lists for addresses, coupons, and orders from static files:

📁 Folder path: [lib/data/seeds/](file:///d:/App_project/hanaGo/lib/data/seeds/)

### Modifying Default Shipping Addresses
Edit [default_addresses.dart](file:///d:/App_project/hanaGo/lib/data/seeds/default_addresses.dart) to change the default address choices. Perfect for specifying testing locations:
```dart
final defaultAddresses = [
  AddressModel(
    id: 'home',
    title: 'Home Address',
    addressLine: '12/A Green Road, Dhanmondi',
    city: 'Dhaka',
    country: 'Bangladesh',
    zipCode: '1209',
    isDefault: true,
  ),
  ...
];
```

### Modifying Default Promo Coupons
Edit [default_coupons.dart](file:///d:/App_project/hanaGo/lib/data/seeds/default_coupons.dart) to define custom promo codes, descriptions, and active discounts:
```dart
final defaultCoupons = [
  CouponModel(
    code: 'HANAGO20',
    discountPercentage: 20,
    description: 'Get 20% off on your first order. Minimum purchase of $50.',
    expiryDate: DateTime.now().add(const Duration(days: 30)),
  ),
  ...
];
```

### Modifying Payment Cards Wallet
Edit [default_payment_cards.dart](file:///d:/App_project/hanaGo/lib/data/seeds/default_payment_cards.dart) to configure testing debit/credit cards details:
```dart
final defaultPaymentCards = [
  PaymentCardModel(
    id: 'visa_1',
    cardType: 'Visa',
    cardNumber: '**** **** **** 4242',
    cardHolderName: 'John Doe',
    expiryDate: '12/28',
    isDefault: true,
  ),
  ...
];
```
:::tip Real API Integration
When you are ready to connect to a live backend API, swap the storage initialization calls inside the GetX controllers (such as `CheckoutController`, `ProfileController`, and `CartController`) to hit your database endpoint instead of loading from these static seed files.
:::
