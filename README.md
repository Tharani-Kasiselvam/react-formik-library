# Library Mangement System using Formik

***Introduction:***   
- An Admin Page is designed to load 2 sections **Book & Author**.   
- Each Book and Author data are loaded into a Cards with an Edit and Delete button.   
- We have and Form section on the same page to Add/Edit Books/Authors.   
- An additonal ADD Button is available to add New Books or Authors.   
- **ContextAPI** provider wrapped the App component to pass the state variable across its children components.     
- Toast from *React-Toastify* is used to pop-up messages on screen using the ToastContainer.   
- using React Router DOM Provider, configured routing to load the Admin page.   

***Functionality:***
- Formik validations performed for each field.   
- Book and Author are configured with 2 Formik and *onSubmit* handles the submission of all values.     
&emsp; a. **resetForm()** - After adding/editing Book/Author the form will be rest.   
&emsp; b. **getFieldProps()** - used to handle the *value*, *onChange*, *onBlur* etc.Enabled validation for on touch of respective field validation.   
- A Flag is maintained onSubmit, either to Add or Edit the selected contents.   
- Delete link, will remove the selected entry from the entire list.

**Author : Tharani K**
