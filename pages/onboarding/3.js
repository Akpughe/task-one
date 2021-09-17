import React, { useContext, useState } from 'react';
import { AuthContext } from '../../utils/authContext';
import Navbar from '../../components/Navbar';
import { Input, Form, Button } from 'semantic-ui-react';
import styles from '../../styles/Home.module.css';
import istyles from '../../styles/Input.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';
import Verify from '../../components/Verify';
const verify = () => {
  const { user } = useContext(AuthContext);
//   console.log(user);
  return (
    <>
      <Navbar />
      <div className={styles.landing}></div>
      <div style={{ marginLeft: '200px', marginTop: '50px', color: 'white' }}>
        <h2 style={{ fontSize: '30px', fontWeight: '200' }}>
          Create your profile
        </h2>
        <p>Let's your account secure</p>
      </div>
      <div className={istyles.bg}>
       <Verify/>
      </div>
    </>
  );
};

export default verify;
