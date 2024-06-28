1-Setup Environment:

Ensure React Native development environment is set up.
Install necessary dependencies (react-native-keychain, etc.).
Implement Login:

2-Create a login form with validation using Formik and Yup.
Use react-native-keychain for secure token storage.
Dispatch actions to handle login success/failure.
Redux Integration:

3-Set up Redux with Redux Toolkit.
Create slices for authentication, cart, payment, etc.
Implement reducers and actions using createSlice.
Navigation:

4-Use React Navigation for tab-based navigation (@react-navigation/bottom-tabs).
Create tabs for Home, Profile, etc., and handle navigation between screens.
Cart Functionality:

4-Implement adding products to the cart with quantity management.
Ensure uniqueness of products in the cart.
Profile and Logout:

5-Implement profile screen and logout functionality.
Use react-native-root-toast for toast messages.
Unit Testing:

6-Set up Jest for testing React Native components.
Write unit tests for components, reducers, and async actions.
Mocked Payment Integration:

7-Implement mocked payment flow using encrypted data with CryptoJS.
Handle async payment process with createAsyncThunk.


Hint : you have to run the json server for all json files

ex : npx json-server products.json // navigate to the root of db folder
