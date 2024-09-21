export const validateForm =(data)=>{

const errors = {};

        if (!data.productName.trim()) {
            errors.productName = 'Product Name is required';
        } else if (data.productName.length > 40) {
            errors.username = 'productName must be at least 40 characters long';
        }

        if (!data.description.trim()) {
            errors.description = 'description is required';
        }

        if (!data.quantity) {
            errors.quantity = 'quantity is required';
        } else if (data.quantity < 0) {
            errors.quantity = 'quantity must be at greater thgan 0';
        }

        if (!data.expiryDate) {
            errors.expiryDate = 'expiryDate is required';
        }
        
        if (!data.manufacturer) {
            errors.manufacturer = 'manufacturer is required';
        }
        
        return errors;
    };
