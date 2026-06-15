# MAST5112-POE- 

# Chef Menu App

This is a React Native Expo app for the Portfolio of Evidence (PoE) assignment.

## Features

- Add menu items with dish name, description, course, and price.
- Predefined course selection: `Starters`, `Mains`, `Dessert`.
- Home screen displays the full menu.
- Home screen shows total menu count.
- Home screen shows average price per course.
- Separate Manage Menu screen to remove items.
- Separate Filter screen to display items by selected course.

## Running the app

1. Install dependencies:

```bash
npm install
```

2. Start Expo:

```bash
npm start
```

3. To open on Android emulator:

```bash
npm run android
```

## Notes

- The app is built with Expo SDK 56.
- Use `expo start --android --clear` if Metro cache issues appear.



# Changelog

## POE CHEF Menu App

### Completed features

- Added a separate Add Item screen for entering menu item details.
- Implemented predefined course selection (`Starters`, `Mains`, `Dessert`).
- Stored all menu items in an array inside `App.tsx` state.
- Displayed the complete menu on the Home screen.
- Displayed the total number of menu items on the Home screen.
- Displayed the average price for each course on the Home screen.
- Added a Manage Menu screen to remove menu items from the list.
- Added a Filter screen to show only items for a selected course.
- Refactored code into multiple files:
  - `App.tsx`
  - `HomeScreen.tsx`
  - `AddItemScreen.tsx`
  - `ManageMenuScreen.tsx`
  - `FilterScreen.tsx`
  - `MenuItemCard.tsx`
  - `calculations.ts`
  - `MenuItem.ts`

### Compatibility updates

- Updated dependencies to Expo SDK 56 compatible versions using `npx expo install --check`.
- Verified installed package versions:
  - `expo@56.0.11`
  - `react@19.2.3`
  - `react-native@0.85.3`
  - `react-native-screens@4.25.2`
  - `typescript@6.0.3` 

### Notes

- The app uses `expo start` as the main start command.
- The Home screen shows the full menu, summary statistics, and navigation buttons.
- The Add Item screen captures dish name, description, course, and price.
- The Manage Menu screen allows the chef to remove items from the menu.
- The Filter screen lets guests filter by course.
