import styles from './Checkout.module.css';
import React, { useState } from "react";

import axios from 'axios';

import { Path } from "../../Components/Path/Path";

export const Checkout: React.FC = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    zipCode: '',
    country: 'Brazil', // Default to Brazil for Brazilian ZIP code
    streetAddress: '',
    city: '',
    province: '',
    addonAddress: '',
    email: '',
    additionalInfo: ''
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (name === 'zipCode' && value.length === 8) {
      fetchAddress(value);
    }
  };

  const fetchAddress = async (zipCode: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
      const { logradouro, localidade, uf, bairro } = response.data;
      setFormData(prevState => ({
        ...prevState,
        streetAddress: logradouro,
        city: localidade,
        province: uf,
        addonAddress: bairro
      }));
    } catch (error) {
      console.error('Error fetching address', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-api-endpoint.com/checkout', formData);
      console.log(response.data);

    } catch (error) {
      console.error('Error submitting form', error);
 
    }
  };

  return (
    <div className={styles.checkoutPage}>
      <Path title='Checkout'>
        <p>Home</p>
        <img
          src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/dashicons_arrow-down-alt2.svg"
          alt="Arrow"
        />
        <p>Checkout</p>
      </Path>
      <div className={styles.checkout}>
        <div className={styles.billingDetails}>
          <h2>Billing Details</h2>
          <form onSubmit={handleSubmit} className={styles.inputs}>
            <div className={styles.smallInputs}>  
              <div className={styles.inputWrapper}>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <label>Company Name (Optional)</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>ZIP code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Country / Region</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Street address</label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Town / City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Province</label>
              <input
                type="text"
                name="province"
                value={formData.province}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Add-on address</label>
              <input
                type="text"
                name="addonAddress"
                value={formData.addonAddress}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Email address</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.adicionalInformation}>
              <input
                type="text"
                name="additionalInfo"
                placeholder='Additional Information'
                value={formData.additionalInfo}
                onChange={handleChange}
              />
            </div>
            
          </form>
        </div>
        <div className={styles.placeOrder}></div>
      </div>
    </div>
  );
};
