// components/Contact.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { saveContact } from '../../ContactStore/ContactSlice';
import styles from './Contact.module.css';
import { Path } from '../../Components/Path/Path';
import { Commitment } from '../../Components/Commitment/Commitment';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    switch (name) {
      case 'name':
        if (value.length < 3 || /\d/.test(value)) {
          setNameError('Name must be at least 3 characters long and cannot contain numbers.');
        } else {
          setNameError('');
        }
        break;
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value)) {
          setEmailError('Please enter a valid email address.');
        } else {
          setEmailError('');
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error('Name and email are required.');
      return;
    }

    if (nameError || emailError) {
      toast.error('Please correct the errors in the form.');
      return;
    }

    dispatch(saveContact(formData));
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    toast.success('Contato salvo com sucesso!');
  };

  return (
    <>
      <Path title='Contact'>
        <p>Home</p>
        <img
          src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/dashicons_arrow-down-alt2.svg"
          alt="Arrow"
        />
        <p>Contact</p>
      </Path>

      <div className={styles.contact}>
        <div className={styles.title}>
          <h2>Get In Touch With Us</h2>
          <p>
            For More Information About Our Product & Services. Please Feel Free To Drop Us An
            Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>
        <div className={styles.contactSection}>
          <div className={styles.contacts}>
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <img
                  src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/address.svg"
                  alt="Address Icon"
                  className={styles.icon}
                />
                <div>
                  <h4>Address</h4>
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <img
                  src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/phone.svg"
                  alt="Phone Icon"
                  className={styles.icon}
                />
                <div>
                  <h4>Phone</h4>
                  <p>
                    Mobile: +(84) 546-6789
                    <br />
                    Hotline: +(84) 456-6789
                  </p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <img
                  src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/clock.svg"
                  alt="Working Time Icon"
                  className={styles.icon}
                />
                <div>
                  <h4>Working Time</h4>
                  <p>
                    Monday-Friday: 9:00 - 22:00
                    <br />
                    Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.inputSection}>
              <div className={styles.inputWrapper}>
                <label>Your name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Abc"
                  value={formData.name}
                  onChange={handleChange}
                  className={nameError || !formData.name.trim() ? styles.invalid : ''}
                />
                {nameError && <span className={styles.error}>{nameError}</span>}
              </div>
              <div className={styles.inputWrapper}>
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="abc@def.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={emailError || !formData.email.trim() ? styles.invalid : ''}
                />
                {emailError && <span className={styles.error}>{emailError}</span>}
              </div>
              <div className={styles.inputWrapper}>
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="This is optional"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Hi! I'd like to ask about..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Commitment />
    </>
  );
};
