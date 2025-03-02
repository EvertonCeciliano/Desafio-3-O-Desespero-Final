import { CaretRight, EnvelopeSimple, Phone, MapPin } from '@phosphor-icons/react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { saveContact } from '../../store/actions/contactActions';
import { ContactFormData } from '../../types/contact';
import * as S from './styles';

type FormData = ContactFormData;

export function Contact() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch(saveContact(data));
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error('Error sending message');
    }
  };

  return (
    <S.Container>
      <S.PathContainer>
        <p>Home</p>
        <CaretRight size={16} weight="bold" />
        <p>Contact</p>
      </S.PathContainer>

      <S.ContactGrid>
        <S.InfoCard>
          <S.Title>Contact Us</S.Title>
          <S.Description>
            Do you have any questions or suggestions? We will be happy to help!
          </S.Description>

          <S.ContactInfo>
            <S.InfoItem>
              <EnvelopeSimple size={24} weight="bold" />
              <div>
                <S.InfoLabel>Email</S.InfoLabel>
                <S.InfoText>contact@example.com</S.InfoText>
              </div>
            </S.InfoItem>

            <S.InfoItem>
              <Phone size={24} weight="bold" />
              <div>
                <S.InfoLabel>Phone</S.InfoLabel>
                <S.InfoText>(11) 99999-9999</S.InfoText>
              </div>
            </S.InfoItem>

            <S.InfoItem>
              <MapPin size={24} weight="bold" />
              <div>
                <S.InfoLabel>Address</S.InfoLabel>
                <S.InfoText>Example Street, 123 - São Paulo, SP</S.InfoText>
              </div>
            </S.InfoItem>
          </S.ContactInfo>
        </S.InfoCard>

        <S.FormCard>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.FormGroup>
              <S.Label>Name</S.Label>
              <S.Input
                {...register('name', { required: 'Name is required' })}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>}
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>Email</S.Label>
              <S.Input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email',
                  },
                })}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>Subject</S.Label>
              <S.Input
                {...register('subject', { required: 'Subject is required' })}
                className={errors.subject ? 'error' : ''}
              />
              {errors.subject && <S.ErrorMessage>{errors.subject.message}</S.ErrorMessage>}
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>Message</S.Label>
              <S.TextArea
                {...register('message', { required: 'Message is required' })}
                className={errors.message ? 'error' : ''}
                rows={5}
              />
              {errors.message && <S.ErrorMessage>{errors.message.message}</S.ErrorMessage>}
            </S.FormGroup>

            <S.SubmitButton type="submit">
              Send Message
            </S.SubmitButton>
          </form>
        </S.FormCard>
      </S.ContactGrid>
    </S.Container>
  );
}
