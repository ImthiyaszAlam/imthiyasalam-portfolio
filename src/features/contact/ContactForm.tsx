import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = (data: FormData) => {
    // TODO: handle API call
    alert(JSON.stringify(data));
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="name"
        rules={{ required: 'Name is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'Email is required',
          pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={value}
            onChangeText={onChange}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="message"
        rules={{ required: 'Message is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Message"
            value={value}
            onChangeText={onChange}
            multiline
            numberOfLines={4}
          />
        )}
      />
      {errors.message && <Text style={styles.error}>{errors.message.message}</Text>}

      <View style={styles.buttonContainer}>
        <Button title={isSubmitting ? '' : 'Send'} onPress={handleSubmit(onSubmit)} disabled={isSubmitting} />
        {isSubmitting && <ActivityIndicator style={styles.loading} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
    marginVertical: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },
  textarea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  error: {
    color: '#FF4081',
    fontSize: 12,
    marginBottom: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  loading: {
    marginLeft: 8,
  },
});
