import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

import MyTextInput from './MyTextInput'

function MyForm(props) {

  const formStates = ['asyncValidating', 'dirty', 'pristine', 'valid', 'invalid', 'submitting',
    'submitSucceeded', 'submitFailed'];

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <Text>Email</Text>
      <Field
        name={'email'}
        component={MyTextInput}
      />
      <Text>The form is:</Text>
      {
        formStates.filter((state) => props[state]).map((state) => {
          return <Text key={state}> - { state }</Text>
        })
      }
      <TouchableOpacity onPress={props.handleSubmit}>
        <Text>Submit!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default reduxForm({ form: 'signIn' })(MyForm);
