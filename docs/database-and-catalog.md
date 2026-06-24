---
sidebar_position: 4
title: Product Catalog and Database Setup
description: How to manage the product catalog, add categories, and configure default seed data in Hana Go.
---

# Product Catalog and Database Setup

This guide explains how to manage the app's local database. You will learn the product catalog JSON format, how to add categories, and how to configure default seed data like addresses, coupons, and payment cards.

---

## 1. Product Catalog Database

Hana Go uses an offline-first catalog. All product records are loaded from a bundled JSON file:

`assets/data/products.json`

### Product Entry Format

Each product in the JSON list contains these fields:

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

### Field Guide

- **id** (String): Unique identifier used for cart management.
- **name** (String): Display name shown on cards and detail screens.
- **price** (Double): Current sale price.
- **originalPrice** (Double): Regular price. If higher than `price`, a discount badge appears.
- **inStock** (Boolean): If `false`, the product shows "Out of Stock" and disables "Add to Cart".
- **assetPath** (String): Local image path. Make sure asset folders are declared in `pubspec.yaml` under `flutter -> assets`.
- **icon** (String): Fallback Material Icon name.
- **color** (Integer): Background color in decimal ARGB format for product grids.
- **tags** (Array of Strings): Search and filter tags.
- **description** (String): Long-form text description.
- **sizeText** (String): Unit size (for example, "500 gm", "1 pc", "1 kg").
- **categoryLabel** (String): Category name (for example, `Vegetables`, `Snacks`, `Fruits`, `Dairy`, `Pantry`, `Beverages`, `Frozen`, `Household`).

---

## 2. Managing Product Categories

Categories are defined in the product loader class:

`lib/data/loaders/product_data_loader.dart`

To add a new category:
1. Open `lib/data/loaders/product_data_loader.dart` and add a value to the `ProductCategory` enum.
2. Update the category mapping in the `loadProductsByCategory` function.
3. Open `products.json` and add items with your new category name in `categoryLabel`.

---

## 3. Default Seed Data

To speed up development, Hana Go loads default lists for addresses, coupons, and orders from static files:

`lib/data/seeds/`

### Default Shipping Addresses

Edit `lib/data/seeds/default_addresses.dart` to set default addresses:

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

### Default Promo Coupons

Edit `lib/data/seeds/default_coupons.dart` to set custom promo codes and discounts:

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

### Default Payment Cards

Edit `lib/data/seeds/default_payment_cards.dart` to set test payment card details:

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

:::tip Connecting to a Live API

When you are ready to connect to a live backend, swap the storage calls in the GetX controllers (such as `CheckoutController`, `ProfileController`, and `CartController`) to use your API instead of these static seed files.

:::
