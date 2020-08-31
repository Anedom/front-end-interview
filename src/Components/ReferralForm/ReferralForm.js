import React from 'react';
import { Formik, Form, FieldArray } from 'formik'; 
import ReferralCard from '../ReferralCard/ReferralCard';
import './ReferralForm.css';

const ReferralForm = () => {
  const referralFields = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    contactLanguage: "",
    phone: "",
    email: "",
    address: "",
    notes: ""
  }

  const initialValues = {
    referrals: [{...referralFields}]
  }

  return (
    <div className="Content">
      <h3>Referral Patients</h3>
      <h4>You can add up to five patients at a time</h4>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          console.log(values)
        }}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="referrals">
              {({ remove, push }) => (
                <div>
                  {values.referrals.length > 0 &&
                    values.referrals.map((referral, index) => (
                      <ReferralCard 
                        referral={referral}
                        index={index}
                        remove={remove}  
                      />
                    ))
                  }
                  <button 
                    type="button"
                    onClick={(e) => push({...referralFields})}
                    className="Content_button__colorless"
                  >
                    + ADD ANOTHER PATIENT
                  </button>
                </div>
              )}
            </FieldArray>
            <button 
              type="submit"
              className="Content_button"
            >
              SEND REFERRALS
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ReferralForm;
